#!/usr/bin/env node
/**
 * MCP Server for SF Documentation Knowledge.
 *
 * Exposes 5 tools for AI agents to search, read, and navigate
 * Salesforce documentation via the Model Context Protocol.
 *
 * Usage:
 *   node dist/mcp/server.js          # stdio transport (for Claude Desktop)
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs-extra";
import path from "node:path";
import { GraphQuery } from "../utils/graph-query.js";
import { CodeIndex } from "./code-index.js";

const KNOWLEDGE_DIR = path.resolve(
  process.env.SF_KNOWLEDGE_DIR || "knowledge/current",
);

// Shared graph query instance — loaded once on startup
const gq = new GraphQuery(KNOWLEDGE_DIR);
const codeIndex = new CodeIndex(KNOWLEDGE_DIR);

const server = new McpServer({
  name: "sf-documentation-knowledge",
  version: "1.1.0",
});

// ─── Helper: build next-action suggestions ──────────────────────
function suggestNext(toolUsed: string, context: Record<string, string> = {}): string {
  const suggestions: Record<string, string> = {
    sf_search: context.domain
      ? `💡 Next: sf_read_topic("${context.domain}", "_index") to see all topics, or sf_code_examples("${context.query || '...'}") for code snippets.`
      : `💡 Next: sf_read_topic(domain, topic) to read a result, or sf_code_examples("${context.query || '...'}") for code.`,
    sf_read_topic: `💡 Next: sf_graph_query("context", nodeId) for related docs, or sf_code_examples("${context.topic || '...'}") for more code.`,
    sf_graph_query: `💡 Next: sf_read_topic to read a doc, or sf_code_examples to find code snippets.`,
    sf_list_domains: `💡 Next: sf_read_topic(domain, "_index") to explore a domain's topics.`,
    sf_apex_lookup: `💡 Next: sf_code_examples("${context.className || '...'}") for usage examples, or sf_graph_query("related", nodeId) for related classes.`,
    sf_code_examples: `💡 Next: sf_read_topic(domain, topic) to read the full page, or sf_apex_lookup(className) for class docs.`,
    sf_object_reference: `💡 Next: sf_search("${context.object || '...'} trigger") for related automation docs.`,
    sf_explain_error: `💡 Next: sf_code_examples("${context.error || '...'}") for handling patterns, or sf_apex_lookup(className) for class reference.`,
  };
  return suggestions[toolUsed] || '';
}

// ─── Tool 1: sf_search ──────────────────────────────────────────
server.tool(
  "sf_search",
  "Search across all 121 Salesforce documentation domains for a topic. Returns matching documents with titles, domains, and descriptions.",
  {
    query: z.string().describe("Search query (e.g. 'SOQL queries', 'Platform Events', 'ConnectApi')"),
    domain: z.string().optional().describe("Optional domain filter (e.g. 'apex-reference', 'rest-api')"),
    docType: z.string().optional().describe("Optional docType filter (e.g. 'api-reference', 'developer-guide', 'concept')"),
    limit: z.number().optional().default(15).describe("Max results to return (default 15)"),
  },
  async ({ query, domain, docType, limit }) => {
    const results = gq.searchNodes(query, { type: "document", limit: limit || 15 });

    let filtered = results;
    if (domain) {
      filtered = filtered.filter((r) => r.nodeId.startsWith(`doc:${domain}:`));
    }
    if (docType) {
      filtered = filtered.filter((r) => r.docType === docType);
    }

    if (filtered.length === 0) {
      // Fallback: try keyword-based search
      const kwResults = gq.findDocsByKeyword(query, limit || 15);
      if (domain) {
        filtered = kwResults.filter((r) => r.nodeId.startsWith(`doc:${domain}:`));
      } else {
        filtered = kwResults;
      }
    }

    const text = filtered
      .map((r) => {
        const parts = r.nodeId.split(":");
        const d = parts[1];
        const topic = parts.slice(2).join(":");
        return `- **${r.label}** (${d}/${topic}) [${r.docType || "doc"}]`;
      })
      .join("\n");

    return {
      content: [
        {
          type: "text" as const,
          text: filtered.length > 0
            ? `Found ${filtered.length} results for "${query}":\n\n${text}\n\n${suggestNext('sf_search', { query, domain: domain || '' })}`
            : `No results found for "${query}". Try broader terms or check available domains with sf_list_domains.`,
        },
      ],
    };
  },
);

// ─── Tool 2: sf_read_topic ──────────────────────────────────────
server.tool(
  "sf_read_topic",
  "Read a specific Salesforce documentation topic file. Use sf_search first to find the domain and topic ID.",
  {
    domain: z.string().describe("Domain ID (e.g. 'apex-reference', 'rest-api', 'metadata-api')"),
    topic: z.string().describe("Topic ID (e.g. 'apex_methods_system_string', 'intro_rest_resources')"),
  },
  async ({ domain, topic }) => {
    const filePath = path.join(KNOWLEDGE_DIR, domain, `${topic}.md`);

    if (!(await fs.pathExists(filePath))) {
      // Try reading the _index if topic is "_index"
      if (topic === "_index") {
        const indexPath = path.join(KNOWLEDGE_DIR, domain, "_index.md");
        if (await fs.pathExists(indexPath)) {
          const content = await fs.readFile(indexPath, "utf-8");
          return { content: [{ type: "text" as const, text: content }] };
        }
      }
      return {
        content: [
          {
            type: "text" as const,
            text: `Topic not found: ${domain}/${topic}. Use sf_search to find available topics, or read the domain index with sf_read_topic(domain, "_index").`,
          },
        ],
      };
    }

    const content = await fs.readFile(filePath, "utf-8");
    return { content: [{ type: "text" as const, text: `${content}\n\n${suggestNext('sf_read_topic', { topic })}` }] };
  },
);

// ─── Tool 3: sf_graph_query ─────────────────────────────────────
server.tool(
  "sf_graph_query",
  "Navigate the Salesforce Knowledge Graph. Find related docs, explore namespaces, discover service categories, or get full context for a document.",
  {
    action: z.enum(["related", "namespace", "service", "context", "search"]).describe(
      "Action: 'related' (find cross-referenced docs), 'namespace' (list docs in an Apex namespace), 'service' (list domains in a service category), 'context' (get full doc context), 'search' (keyword search)",
    ),
    nodeId: z.string().optional().describe("Document node ID for 'related' or 'context' (e.g. 'doc:apex-reference:apex_methods_system_string')"),
    keyword: z.string().optional().describe("Keyword for 'search' action"),
    namespace: z.string().optional().describe("Namespace name for 'namespace' action (e.g. 'System', 'ConnectApi')"),
    service: z.string().optional().describe("Service category for 'service' action (e.g. 'analytics', 'commerce', 'industries')"),
  },
  async ({ action, nodeId, keyword, namespace, service }) => {
    let text = "";

    switch (action) {
      case "related": {
        if (!nodeId) {
          text = "Error: nodeId is required for 'related' action.";
          break;
        }
        const related = gq.findRelated(nodeId);
        text = related.length > 0
          ? `${related.length} related documents:\n\n` +
            related.map((r) => `- **${r.label}** (${r.nodeId}) [${r.docType || "doc"}]`).join("\n")
          : "No cross-references found for this document.";
        break;
      }

      case "namespace": {
        if (!namespace) {
          // List all namespaces
          const nsList = gq.listNamespaces();
          text = `${nsList.length} Apex namespaces:\n\n` +
            nsList.map((ns) => `- **${ns.namespace}** (${ns.docCount} docs)`).join("\n");
        } else {
          const docs = gq.findByNamespace(namespace);
          text = docs.length > 0
            ? `${docs.length} docs in ${namespace} namespace:\n\n` +
              docs.map((r) => `- **${r.label}** (${r.nodeId})`).join("\n")
            : `Namespace "${namespace}" not found. Use action='namespace' without a namespace param to list all.`;
        }
        break;
      }

      case "service": {
        if (!service) {
          // List all services
          const svcList = gq.listServices();
          text = `${svcList.length} service categories:\n\n` +
            svcList.map((s) => `- **${s.service}** (${s.domainCount} domains)`).join("\n");
        } else {
          const domains = gq.findByService(service);
          text = domains.length > 0
            ? `${domains.length} domains in "${service}" service:\n\n` +
              domains.map((r) => `- ${r.label}`).join("\n")
            : `Service "${service}" not found. Use action='service' without a service param to list all.`;
        }
        break;
      }

      case "context": {
        if (!nodeId) {
          text = "Error: nodeId is required for 'context' action.";
          break;
        }
        const ctx = gq.getDocContext(nodeId);
        if (!ctx) {
          text = `Document not found: ${nodeId}`;
          break;
        }
        text = [
          `## ${ctx.label}`,
          `- **Domain**: ${ctx.domain}`,
          `- **Type**: ${ctx.docType}`,
          ctx.namespace ? `- **Namespace**: ${ctx.namespace}` : "",
          `- **Keywords**: ${ctx.keywords.join(", ")}`,
          `- **References out**: ${ctx.references.length} docs`,
          `- **Referenced by**: ${ctx.referencedBy.length} docs`,
          "",
          ctx.references.length > 0
            ? "### References:\n" +
              ctx.references.slice(0, 15).map((r) => `- ${r.label} (${r.nodeId})`).join("\n")
            : "",
          ctx.referencedBy.length > 0
            ? "### Referenced By:\n" +
              ctx.referencedBy.slice(0, 15).map((r) => `- ${r.label} (${r.nodeId})`).join("\n")
            : "",
        ]
          .filter(Boolean)
          .join("\n");
        break;
      }

      case "search": {
        if (!keyword) {
          text = "Error: keyword is required for 'search' action.";
          break;
        }
        const docs = gq.findDocsByKeyword(keyword, 20);
        text = docs.length > 0
          ? `${docs.length} docs tagged with "${keyword}":\n\n` +
            docs.map((r) => `- **${r.label}** (${r.nodeId}) [${r.docType || "doc"}]`).join("\n")
          : `No docs found with keyword "${keyword}".`;
        break;
      }
    }

    return { content: [{ type: "text" as const, text }] };
  },
);

// ─── Tool 4: sf_list_domains ────────────────────────────────────
server.tool(
  "sf_list_domains",
  "List all available Salesforce documentation domains, optionally filtered by service category.",
  {
    service: z.string().optional().describe("Optional service category filter (e.g. 'analytics', 'commerce', 'industries', 'platform')"),
  },
  async ({ service }) => {
    let domains = gq.listDomains();

    if (service) {
      const serviceDomains = gq.findByService(service);
      const serviceDomainLabels = new Set(serviceDomains.map((d) => d.label));
      domains = domains.filter((d) => serviceDomainLabels.has(d.label));
    }

    const text = `${domains.length} documentation domains${service ? ` in "${service}"` : ""}:\n\n` +
      domains.map((d) => `- ${d.label}`).join("\n") +
      "\n\nUse sf_read_topic(domain, '_index') to see the routing table for a domain.";

    return { content: [{ type: "text" as const, text }] };
  },
);

// ─── Tool 5: sf_apex_lookup ─────────────────────────────────────
server.tool(
  "sf_apex_lookup",
  "Look up an Apex class or method by name. Searches the apex-reference domain specifically for class documentation, methods, and signatures.",
  {
    className: z.string().describe("Class name to look up (e.g. 'String', 'Database', 'List', 'ConnectApi.FeedItem')"),
    namespace: z.string().optional().describe("Optional Apex namespace filter (e.g. 'System', 'ConnectApi', 'Database')"),
  },
  async ({ className, namespace }) => {
    // Search by class name in the graph
    const results = gq.searchNodes(className, { type: "document", limit: 20 });

    // Filter to apex-related domains
    let apexResults = results.filter(
      (r) =>
        r.nodeId.startsWith("doc:apex-reference:") ||
        r.nodeId.startsWith("doc:apex-guide:"),
    );

    // If namespace provided, further filter
    if (namespace) {
      const nsDocs = gq.findByNamespace(namespace);
      const nsDocIds = new Set(nsDocs.map((d) => d.nodeId));
      apexResults = apexResults.filter((r) => nsDocIds.has(r.nodeId));
    }

    if (apexResults.length === 0) {
      // Fallback: try keyword search
      const kwResults = gq.findDocsByKeyword(className, 10);
      apexResults = kwResults.filter(
        (r) =>
          r.nodeId.startsWith("doc:apex-reference:") ||
          r.nodeId.startsWith("doc:apex-guide:"),
      );
    }

    if (apexResults.length === 0) {
      return {
        content: [
          {
            type: "text" as const,
            text: `No Apex documentation found for "${className}". Try a broader search with sf_search.`,
          },
        ],
      };
    }

    // For the top result, get full context
    const topResult = apexResults[0];
    const topicParts = topResult.nodeId.split(":");
    const domain = topicParts[1];
    const topic = topicParts.slice(2).join(":");

    // Read the actual file content for the best match
    const filePath = path.join(KNOWLEDGE_DIR, domain, `${topic}.md`);
    let fileContent = "";
    if (await fs.pathExists(filePath)) {
      fileContent = await fs.readFile(filePath, "utf-8");
    }

    const otherResults = apexResults.slice(1, 10);
    const otherText = otherResults.length > 0
      ? "\n\n### Other matches:\n" +
        otherResults.map((r) => `- **${r.label}** (${r.nodeId})`).join("\n")
      : "";

    return {
      content: [
        {
          type: "text" as const,
          text: fileContent
            ? `${fileContent}${otherText}\n\n${suggestNext('sf_apex_lookup', { className })}`
            : `Found: **${topResult.label}** (${topResult.nodeId})${otherText}\n\n${suggestNext('sf_apex_lookup', { className })}`,
        },
      ],
    };
  },
);

// ─── Tool 6: sf_code_examples ───────────────────────────────────
server.tool(
  "sf_code_examples",
  "Find working code examples from Salesforce documentation. Returns code snippets with language, source file, and surrounding context. Great for learning patterns and copy-paste solutions.",
  {
    topic: z.string().describe("Topic to find code for (e.g. 'batch apex', 'REST callout', 'SOQL aggregate')"),
    language: z.string().optional().describe("Optional language filter (e.g. 'apex', 'javascript', 'soql', 'json')"),
    domain: z.string().optional().describe("Optional domain filter (e.g. 'apex-guide', 'lwc')"),
    limit: z.number().optional().default(5).describe("Max snippets to return (default 5)"),
  },
  async ({ topic, language, domain, limit }) => {
    const snippets = codeIndex.search(topic, { language, domain, limit: limit || 5 });

    if (snippets.length === 0) {
      return {
        content: [{
          type: "text" as const,
          text: `No code examples found for "${topic}". Try broader terms or remove the language filter.\n\n💡 Next: sf_search("${topic}") to find documentation pages that may contain code.`,
        }],
      };
    }

    const fence = '```';
    const text = snippets.map((s, i) => {
      return [
        `### Example ${i + 1}: ${s.heading || s.docTitle}`,
        s.context ? `> ${s.context}` : '',
        `${fence}${s.language}`,
        s.code,
        fence,
        `*Source: ${s.domain}/${s.topic}*`,
      ].filter(Boolean).join('\n');
    }).join('\n\n');

    return {
      content: [{
        type: "text" as const,
        text: `Found ${snippets.length} code examples for "${topic}":\n\n${text}\n\n${suggestNext('sf_code_examples', { topic })}`,
      }],
    };
  },
);

// ─── Tool 7: sf_object_reference ────────────────────────────────
server.tool(
  "sf_object_reference",
  "Look up a Salesforce standard object or field. Searches the Field Reference Guide (4,800+ pages) and Object Reference (1,700+ pages) for object details, field types, and relationships.",
  {
    object: z.string().describe("Object name (e.g. 'Account', 'Contact', 'Opportunity', 'Case')"),
    field: z.string().optional().describe("Optional specific field (e.g. 'Industry', 'OwnerId', 'StageName')"),
  },
  async ({ object, field }) => {
    const searchQuery = field ? `${object} ${field}` : object;
    const results = gq.searchNodes(searchQuery, { type: 'document', limit: 20 });

    // Filter to field reference and object reference domains
    const refResults = results.filter(r =>
      r.nodeId.startsWith('doc:sfFieldRef:') ||
      r.nodeId.startsWith('doc:object-reference:'),
    );

    if (refResults.length === 0) {
      // Fallback: try keyword search
      const kwResults = gq.findDocsByKeyword(object.toLowerCase(), 10);
      const kwFiltered = kwResults.filter(r =>
        r.nodeId.startsWith('doc:sfFieldRef:') ||
        r.nodeId.startsWith('doc:object-reference:'),
      );

      if (kwFiltered.length === 0) {
        return {
          content: [{
            type: "text" as const,
            text: `No object/field reference found for "${searchQuery}". Try sf_search("${object}") for broader results.`,
          }],
        };
      }

      // Read the top keyword result
      const top = kwFiltered[0];
      const parts = top.nodeId.split(':');
      const filePath = path.join(KNOWLEDGE_DIR, parts[1], `${parts.slice(2).join(':')}.md`);
      if (await fs.pathExists(filePath)) {
        const content = await fs.readFile(filePath, 'utf-8');
        return { content: [{ type: "text" as const, text: `${content}\n\n${suggestNext('sf_object_reference', { object })}` }] };
      }
    }

    // Read the top result
    const topResult = refResults[0];
    const topParts = topResult.nodeId.split(':');
    const topDomain = topParts[1];
    const topTopic = topParts.slice(2).join(':');
    const filePath = path.join(KNOWLEDGE_DIR, topDomain, `${topTopic}.md`);

    let fileContent = '';
    if (await fs.pathExists(filePath)) {
      fileContent = await fs.readFile(filePath, 'utf-8');
    }

    const otherResults = refResults.slice(1, 8);
    const otherText = otherResults.length > 0
      ? '\n\n### See also:\n' + otherResults.map(r => `- **${r.label}** (${r.nodeId})`).join('\n')
      : '';

    return {
      content: [{
        type: "text" as const,
        text: fileContent
          ? `${fileContent}${otherText}\n\n${suggestNext('sf_object_reference', { object })}`
          : `Found: **${topResult.label}** (${topResult.nodeId})${otherText}\n\n${suggestNext('sf_object_reference', { object })}`,
      }],
    };
  },
);

// ─── Tool 8: sf_explain_error ───────────────────────────────────
server.tool(
  "sf_explain_error",
  "Explain a Salesforce error message or exception. Searches documentation for the error, provides explanation, common causes, and resolution steps.",
  {
    error: z.string().describe("Error message or exception (e.g. 'UNABLE_TO_LOCK_ROW', 'System.LimitException', 'FIELD_CUSTOM_VALIDATION_EXCEPTION')"),
  },
  async ({ error }) => {
    // Search across all domains with priority on error-relevant ones
    // Split error codes on underscores/dots for better matching
    const errorWords = error.replace(/[._]/g, ' ').toLowerCase();
    
    // Try multiple search strategies
    let results = gq.searchNodes(errorWords, { type: 'document', limit: 20 });
    
    // If no results, try the original error string
    if (results.length === 0) {
      results = gq.searchNodes(error, { type: 'document', limit: 20 });
    }

    // Prioritize apex, api, and guide domains
    const priorityDomains = ['apex-guide', 'apex-reference', 'api', 'api-asynch', 'api-streaming'];
    const sorted = results.sort((a, b) => {
      const aPriority = priorityDomains.some(d => a.nodeId.startsWith(`doc:${d}:`)) ? 1 : 0;
      const bPriority = priorityDomains.some(d => b.nodeId.startsWith(`doc:${d}:`)) ? 1 : 0;
      return bPriority - aPriority;
    });

    // Also try keyword search with individual parts of the error
    const errorParts = error.toLowerCase().replace(/[^a-z]/gi, ' ').split(/\s+/).filter(w => w.length >= 4);
    const kwResults: typeof results = [];
    for (const part of errorParts.slice(0, 3)) {
      const kw = gq.findDocsByKeyword(part, 3);
      kwResults.push(...kw);
    }

    // Merge and deduplicate
    const allResults = [...sorted];
    for (const r of kwResults) {
      if (!allResults.some(a => a.nodeId === r.nodeId)) {
        allResults.push(r);
      }
    }

    if (allResults.length === 0) {
      return {
        content: [{
          type: "text" as const,
          text: `No documentation found for error "${error}". Try:\n- sf_search("${error}") for broader results\n- sf_apex_lookup(className) if this is an Apex exception`,
        }],
      };
    }

    // Read the top result to provide detailed explanation
    const topResult = allResults[0];
    const topParts = topResult.nodeId.split(':');
    const topDomain = topParts[1];
    const topTopic = topParts.slice(2).join(':');
    const filePath = path.join(KNOWLEDGE_DIR, topDomain, `${topTopic}.md`);

    let explanation = '';
    if (await fs.pathExists(filePath)) {
      const content = await fs.readFile(filePath, 'utf-8');
      // Try to extract a relevant section (up to 2000 chars around the error mention)
      const errorLower = error.toLowerCase();
      const contentLower = content.toLowerCase();
      const idx = contentLower.indexOf(errorLower);
      if (idx >= 0) {
        const start = Math.max(0, content.lastIndexOf('\n#', idx) + 1);
        const end = Math.min(content.length, idx + 2000);
        explanation = content.slice(start, end).trim();
      } else {
        // Return first 2000 chars if exact error not found in text
        explanation = content.slice(0, 2000).trim();
      }
    }

    const relatedDocs = allResults.slice(1, 6).map(r => `- **${r.label}** (${r.nodeId})`).join('\n');

    const text = [
      `## Error: ${error}`,
      '',
      explanation || `Found in: **${topResult.label}** (${topResult.nodeId})`,
      '',
      relatedDocs ? `### Related Documentation:\n${relatedDocs}` : '',
      '',
      suggestNext('sf_explain_error', { error }),
    ].filter(Boolean).join('\n');

    return { content: [{ type: "text" as const, text }] };
  },
);

// ─── MCP Prompts ────────────────────────────────────────────────
server.prompt(
  "explore_api",
  "Explore a Salesforce API — discover endpoints, methods, and usage patterns",
  { api: z.string().describe("API to explore (e.g. 'REST API', 'Tooling API', 'Metadata API', 'Bulk API')") },
  ({ api }) => ({
    messages: [
      {
        role: "user" as const,
        content: {
          type: "text" as const,
          text: `I want to understand the Salesforce ${api}. Please:

1. Use sf_search to find documentation about "${api}"
2. Use sf_read_topic to read the overview/introduction
3. Use sf_graph_query with action="related" to find connected documentation
4. Summarize:
   - What the API does and when to use it
   - Key endpoints/methods with examples
   - Authentication requirements
   - Rate limits and best practices
   - Links to the most important reference topics`,
        },
      },
    ],
  }),
);

server.prompt(
  "debug_apex",
  "Debug an Apex issue — look up classes, methods, and known patterns",
  { topic: z.string().describe("Apex class, method, or error to debug (e.g. 'System.QueryException', 'DML limits', 'trigger recursion')") },
  ({ topic }) => ({
    messages: [
      {
        role: "user" as const,
        content: {
          type: "text" as const,
          text: `I'm debugging an Apex issue related to "${topic}". Please:

1. Use sf_apex_lookup to find the relevant class documentation
2. Use sf_search to find related guides in apex-guide domain
3. Use sf_graph_query with action="context" to understand the full context
4. Provide:
   - Class/method signatures and descriptions
   - Common gotchas and error patterns
   - Code examples from the documentation
   - Links to related classes and methods`,
        },
      },
    ],
  }),
);

server.prompt(
  "compare_services",
  "Compare Salesforce products by exploring their documentation domains",
  { services: z.string().describe("Service categories to compare (e.g. 'analytics vs commerce', 'platform vs industries')") },
  ({ services }) => ({
    messages: [
      {
        role: "user" as const,
        content: {
          type: "text" as const,
          text: `Compare these Salesforce service areas: ${services}. Please:

1. Use sf_graph_query with action="service" to list domains in each category
2. For each category, use sf_list_domains to see the documentation available
3. Use sf_read_topic to read the overview of 2-3 key domains in each
4. Provide a comparison:
   - Number of documentation domains and total pages
   - Key products and features in each
   - API coverage and integration patterns
   - Which to use for what scenarios`,
        },
      },
    ],
  }),
);

// ─── MCP Resources (free context for agents) ───────────────────
server.resource(
  "overview",
  "sf://overview",
  { description: "Overview of the SF Documentation Knowledge system — stats, available tools, and how to use them" },
  async () => {
    const stats = gq.getStats();
    const cStats = codeIndex.getStats();
    return {
      contents: [{
        uri: "sf://overview",
        mimeType: "text/plain",
        text: [
          `# Salesforce Documentation Knowledge`,
          ``,
          `## Stats`,
          `- ${stats.nodes.toLocaleString()} graph nodes`,
          `- ${stats.edges.toLocaleString()} graph edges`,
          `- ${cStats.totalSnippets.toLocaleString()} code snippets`,
          `- 121 documentation domains`,
          `- 33,000+ curated markdown files`,
          ``,
          `## Tools (9)`,
          `| Tool | Description |`,
          `|---|---|`,
          `| sf_search | Search docs by topic |`,
          `| sf_read_topic | Read a specific doc page |`,
          `| sf_graph_query | Navigate the knowledge graph |`,
          `| sf_list_domains | List all domains |`,
          `| sf_apex_lookup | Look up Apex class/method |`,
          `| sf_code_examples | Find code snippets |`,
          `| sf_object_reference | Look up objects/fields |`,
          `| sf_explain_error | Decode error messages |`,
          `| sf_limits | Governor limits lookup |`,
          ``,
          `## Quick Start`,
          `1. sf_search("your topic") to find docs`,
          `2. sf_read_topic(domain, topic) to read one`,
          `3. sf_code_examples("your topic") for code`,
        ].join('\n'),
      }],
    };
  },
);

server.resource(
  "domains",
  "sf://domains",
  { description: "All 121 Salesforce documentation domains with descriptions" },
  async () => {
    const domains = gq.listDomains();
    const text = domains.map(d => `- ${d.label}`).join('\n');
    return {
      contents: [{
        uri: "sf://domains",
        mimeType: "text/plain",
        text: `# Salesforce Documentation Domains (${domains.length})\n\n${text}\n\nUse sf_read_topic(domain, "_index") to explore a domain.`,
      }],
    };
  },
);

server.resource(
  "namespaces",
  "sf://namespaces",
  { description: "All Apex namespaces with document counts" },
  async () => {
    const ns = gq.listNamespaces();
    const text = ns.map(n => `- **${n.namespace}** (${n.docCount} docs)`).join('\n');
    return {
      contents: [{
        uri: "sf://namespaces",
        mimeType: "text/plain",
        text: `# Apex Namespaces (${ns.length})\n\n${text}\n\nUse sf_graph_query(action="namespace", namespace="Name") to explore.`,
      }],
    };
  },
);

server.resource(
  "services",
  "sf://services",
  { description: "Salesforce service categories with domain counts" },
  async () => {
    const services = gq.listServices();
    const text = services.map(s => `- **${s.service}** (${s.domainCount} domains)`).join('\n');
    return {
      contents: [{
        uri: "sf://services",
        mimeType: "text/plain",
        text: `# Service Categories (${services.length})\n\n${text}\n\nUse sf_graph_query(action="service", service="name") to explore.`,
      }],
    };
  },
);

// ─── Tool 9: sf_limits ──────────────────────────────────────────
const GOVERNOR_LIMITS: Record<string, Record<string, string | number>> = {
  soql: {
    "Synchronous SOQL queries": 100,
    "Async SOQL queries (batch/future)": 200,
    "SOQL query rows returned": 50000,
    "SOQL query rows (async)": 50000,
    "Subqueries per query": 20,
    "Aggregate queries": 300,
    "SOQL query locator rows": 10000000,
    "docs": "apex-guide/apex_gov_limits",
  },
  sosl: {
    "SOSL searches": 20,
    "SOSL search rows returned": 2000,
    "docs": "apex-guide/apex_gov_limits",
  },
  dml: {
    "DML statements": 150,
    "DML rows processed": 10000,
    "docs": "apex-guide/apex_gov_limits",
  },
  callout: {
    "HTTP callouts": 100,
    "Callout timeout (ms)": 120000,
    "Max callout response size (MB)": 12,
    "Max callout request size (MB)": 12,
    "docs": "apex-guide/apex_gov_limits",
  },
  cpu: {
    "CPU time (synchronous, ms)": 10000,
    "CPU time (async, ms)": 60000,
    "docs": "apex-guide/apex_gov_limits",
  },
  heap: {
    "Heap size (synchronous, MB)": 6,
    "Heap size (async, MB)": 12,
    "docs": "apex-guide/apex_gov_limits",
  },
  batch: {
    "Batch Apex jobs queued/active": 5,
    "Batch Apex start executions/24hrs": 250000,
    "Batch scope size (default)": 200,
    "Batch scope size (max)": 2000,
    "docs": "apex-guide/apex_batch",
  },
  future: {
    "@future calls per transaction": 50,
    "@future calls per 24hrs (per license)": 250000,
    "docs": "apex-guide/apex_classes_annotation",
  },
  queueable: {
    "Queueable jobs added per transaction": 50,
    "Queueable chain depth": 5,
    "docs": "apex-guide/apex_queueing_jobs",
  },
  email: {
    "Single emails per transaction": 10,
    "Email invocations per transaction": 10,
    "Mass email recipients/day": 5000,
    "docs": "apex-guide/apex_gov_limits",
  },
  api: {
    "API requests per 24hrs (Enterprise)": 100000,
    "API requests per 24hrs (Unlimited)": 500000,
    "API request timeout (ms)": 120000,
    "Composite sub-requests": 25,
    "Composite Batch sub-requests": 25,
    "docs": "api/limits",
  },
  "platform-events": {
    "Published per transaction": 150,
    "Published per hour (standard channel)": 100000,
    "Subscribers max": 2000,
    "docs": "platform-events/platform_events_publish_apex",
  },
  triggers: {
    "Trigger recursion depth": 16,
    "Max code statements": 200000,
    "SOQL queries in triggers": 100,
    "DML statements in triggers": 150,
    "docs": "apex-guide/apex_triggers",
  },
  flow: {
    "Flow interviews per transaction": 2000,
    "Flow elements per transaction": 100000,
    "Scheduled flow runs per 24hrs": 250000,
    "docs": "flow/flow_concepts_limits",
  },
  deployment: {
    "Max metadata components per deploy": 10000,
    "Max deploy size (MB)": 39,
    "Apex test timeout (min)": 60,
    "docs": "api_meta/meta_deploy",
  },
};

server.tool(
  "sf_limits",
  "Look up Salesforce governor limits and platform constraints. Returns exact numbers for SOQL, DML, callout, CPU, heap, batch, API limits and more.",
  {
    feature: z.string().describe("Feature area (e.g. 'soql', 'dml', 'callout', 'cpu', 'heap', 'batch', 'future', 'queueable', 'api', 'platform-events', 'triggers', 'flow', 'email', 'deployment')"),
  },
  async ({ feature }) => {
    const key = feature.toLowerCase().replace(/\s+/g, '-');

    // Exact match
    let limits = GOVERNOR_LIMITS[key];

    // Fuzzy match
    if (!limits) {
      const match = Object.keys(GOVERNOR_LIMITS).find(k =>
        k.includes(key) || key.includes(k),
      );
      if (match) limits = GOVERNOR_LIMITS[match];
    }

    if (!limits) {
      const allCategories = Object.keys(GOVERNOR_LIMITS).join(', ');
      return {
        content: [{
          type: "text" as const,
          text: `No limits found for "${feature}". Available categories: ${allCategories}\n\n💡 Next: sf_search("governor limits") for full documentation.`,
        }],
      };
    }

    const docRef = limits['docs'] as string;
    const entries = Object.entries(limits).filter(([k]) => k !== 'docs');
    const table = entries.map(([name, value]) => `| ${name} | **${typeof value === 'number' ? value.toLocaleString() : value}** |`).join('\n');

    const text = [
      `## Governor Limits: ${feature}`,
      '',
      '| Limit | Value |',
      '|---|---|',
      table,
      '',
      docRef ? `*Source: ${docRef}*` : '',
      '',
      `💡 Next: sf_read_topic("${docRef?.split('/')[0] || 'apex-guide'}", "${docRef?.split('/')[1] || 'apex_gov_limits'}") for full documentation.`,
    ].filter(Boolean).join('\n');

    return { content: [{ type: "text" as const, text }] };
  },
);

// ─── Prompt 4: sf_write_apex ────────────────────────────────────
server.prompt(
  "write_apex",
  "Write production-ready Apex code — gathers limits, patterns, and examples before coding",
  { task: z.string().describe("What to build (e.g. 'batch job to update Account ratings', 'trigger to validate Opportunities', 'REST callout to external API')") },
  ({ task }) => ({
    messages: [
      {
        role: "user" as const,
        content: {
          type: "text" as const,
          text: `Write production-ready Apex code for: "${task}". Before writing code, gather context:

1. Use sf_limits to check relevant governor limits
2. Use sf_code_examples to find similar patterns in the docs
3. Use sf_apex_lookup to get class/method signatures you'll need
4. Use sf_explain_error to understand common errors in this area

Then write the code that:
- Respects all governor limits
- Follows documented best practices
- Includes error handling
- Has test class with assertions
- Comments explaining key design decisions`,
        },
      },
    ],
  }),
);

// ─── Start the server ───────────────────────────────────────────
async function main() {
  // Pre-load graph and code index in parallel
  await Promise.all([gq.load(), codeIndex.load()]);

  const transport = new StdioServerTransport();
  await server.connect(transport);

  // Log to stderr (stdout is for MCP protocol)
  const { nodes, edges } = gq.getStats();
  const { totalSnippets } = codeIndex.getStats();
  console.error(
    `@sfdxy/sf-documentation-knowledge MCP Server v1.2.0 (${nodes.toLocaleString()} nodes, ${edges.toLocaleString()} edges, ${totalSnippets.toLocaleString()} code snippets, 9 tools + 4 prompts + 4 resources)`,
  );
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
