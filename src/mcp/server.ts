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

const KNOWLEDGE_DIR = path.resolve(
  process.env.SF_KNOWLEDGE_DIR || "knowledge/current",
);

// Shared graph query instance — loaded once on startup
const gq = new GraphQuery(KNOWLEDGE_DIR);

const server = new McpServer({
  name: "sf-documentation-knowledge",
  version: "1.0.0",
});

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
            ? `Found ${filtered.length} results for "${query}":\n\n${text}`
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
    return { content: [{ type: "text" as const, text: content }] };
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
            ? `${fileContent}${otherText}`
            : `Found: **${topResult.label}** (${topResult.nodeId})${otherText}`,
        },
      ],
    };
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

// ─── Start the server ───────────────────────────────────────────
async function main() {
  // Pre-load graph
  await gq.load();

  const transport = new StdioServerTransport();
  await server.connect(transport);

  // Log to stderr (stdout is for MCP protocol)
  const { nodes, edges } = gq.getStats();
  console.error(
    `@sfdxy/sf-documentation-knowledge MCP Server v1.0.0 (${nodes.toLocaleString()} nodes, ${edges.toLocaleString()} edges)`,
  );
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
