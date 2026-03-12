import path from "node:path";
import fs from "fs-extra";
import pkg from "graphology";
const { DirectedGraph } = pkg;
import { createChildLogger } from "../utils/logger.js";
import type { TaggedDocument } from "../processors/tagger.js";

const log = createChildLogger("generator:graph-builder");

/**
 * Words to exclude from keyword graph nodes — these create noise, not signal.
 * Applied on top of tagger.ts filtering as a second pass.
 */
const GRAPH_KEYWORD_BLOCKLIST = new Set([
  "salesforce", "developer", "cloud", "platform", "documentation",
  "record", "records", "item", "items", "user", "users",
  "feature", "features", "tool", "tools", "option", "options",
  "process", "setting", "settings", "action", "actions",
  "result", "results", "number", "version", "org",
]);

export class GraphBuilder {
  private graph = new DirectedGraph();
  private readonly knowledgeDir: string;
  private readonly processedDir: string;
  /** Map from href fragments to doc node IDs, for cross-reference resolution */
  private hrefToDocId = new Map<string, string>();

  constructor(
    knowledgeDir = "knowledge/current",
    processedDir = "data/processed",
  ) {
    this.knowledgeDir = knowledgeDir;
    this.processedDir = processedDir;
  }

  /**
   * Builds the knowledge graph from all processed domain manifests
   * and exports it to a JSON file.
   */
  async build(): Promise<void> {
    log.info("Starting Knowledge Graph build");
    const start = Date.now();

    // 1. Find all domain manifests
    let domains: string[] = [];
    try {
      const items = await fs.readdir(this.processedDir);
      for (const item of items) {
        const stat = await fs.stat(path.join(this.processedDir, item));
        if (stat.isDirectory()) {
          domains.push(item);
        }
      }
    } catch (err) {
      log.warn("No processed data found.");
      return;
    }

    let documentCount = 0;

    // 2. First pass: create all document nodes + build href index
    const allManifests = new Map<string, TaggedDocument[]>();
    for (const domain of domains) {
      const manifestPath = path.join(
        this.processedDir,
        domain,
        "manifest.json",
      );
      if (!(await fs.pathExists(manifestPath))) continue;

      const manifest: TaggedDocument[] = await fs.readJson(manifestPath);
      allManifests.set(domain, manifest);
      this.buildDomain(domain, manifest);
      documentCount += manifest.length;
    }

    // 3. Second pass: resolve cross-references to create doc→doc edges
    let crossRefEdges = 0;
    for (const [domain, manifest] of allManifests) {
      for (const doc of manifest) {
        crossRefEdges += this.buildCrossReferences(domain, doc);
      }
    }

    // 4. Export graph to JSON
    await fs.ensureDir(this.knowledgeDir);
    const outputPath = path.join(this.knowledgeDir, "graph.json");
    const exportedGraph = this.graph.export();
    await fs.writeJson(outputPath, exportedGraph);

    // Count node types for logging
    const nodeTypes: Record<string, number> = {};
    this.graph.forEachNode((_, attrs) => {
      const t = attrs.type as string;
      nodeTypes[t] = (nodeTypes[t] || 0) + 1;
    });

    const edgeTypes: Record<string, number> = {};
    this.graph.forEachEdge((_, attrs) => {
      const t = attrs.type as string;
      edgeTypes[t] = (edgeTypes[t] || 0) + 1;
    });

    log.info(
      {
        nodes: this.graph.order,
        edges: this.graph.size,
        nodeTypes,
        edgeTypes,
        domainsProcessed: domains.length,
        documentsProcessed: documentCount,
        crossRefEdgesCreated: crossRefEdges,
        durationMs: Date.now() - start,
      },
      "Knowledge Graph built successfully",
    );
  }

  private buildDomain(domainId: string, documents: TaggedDocument[]) {
    // Create Domain node
    const domainNodeId = `domain:${domainId}`;
    this.addNodeIfNotExists(domainNodeId, {
      type: "domain",
      label: domainId,
    });

    // Infer and add service category from domain ID patterns
    const service = this.inferServiceCategory(domainId);
    if (service) {
      this.addServiceCategory(domainId, service);
    }

    for (const doc of documents) {
      const docNodeId = `doc:${domainId}:${doc.topic}`;

      // Create Document node
      this.addNodeIfNotExists(docNodeId, {
        type: "document",
        label: doc.title,
        docType: doc.metadata.docType,
        url: doc.metadata.sourceUrl,
      });

      // Build href index for cross-reference resolution
      if (doc.metadata.sourceId) {
        // Map the source ID href to this doc node
        const href = doc.metadata.sourceId.toLowerCase();
        this.hrefToDocId.set(href, docNodeId);
        // Also map without extension
        const hrefNoExt = href.replace(/\.htm$/, "");
        this.hrefToDocId.set(hrefNoExt, docNodeId);
      }

      // Edge: Domain -> Document
      this.addEdgeIfNotExists(domainNodeId, docNodeId, "contains");

      // Map Release
      if (doc.metadata.release) {
        const releaseNodeId = `release:${doc.metadata.release}`;
        this.addNodeIfNotExists(releaseNodeId, {
          type: "release",
          label: doc.metadata.release,
        });
        this.addEdgeIfNotExists(docNodeId, releaseNodeId, "applies_to_release");
      }

      // Map API Version
      if (doc.metadata.apiVersion) {
        const apiNodeId = `api_version:${doc.metadata.apiVersion}`;
        this.addNodeIfNotExists(apiNodeId, {
          type: "api_version",
          label: `v${doc.metadata.apiVersion}`,
        });
        this.addEdgeIfNotExists(docNodeId, apiNodeId, "requires_api");
      }

      // Map Namespace (NEW: namespace hierarchy)
      if (doc.namespace && doc.namespace.length > 1 && doc.namespace.length < 40) {
        // Skip false positives like "The", "True", "Warning", "Tip", "Usage", "Available"
        const nsLower = doc.namespace.toLowerCase();
        const invalidNamespaces = new Set([
          "the", "true", "false", "warning", "tip", "usage", "available",
          "id", "namespace", "context",
        ]);
        if (!invalidNamespaces.has(nsLower)) {
          const nsNodeId = `namespace:${doc.namespace}`;
          this.addNodeIfNotExists(nsNodeId, {
            type: "namespace",
            label: doc.namespace,
          });
          this.addEdgeIfNotExists(docNodeId, nsNodeId, "belongs_to_namespace");
          this.addEdgeIfNotExists(nsNodeId, domainNodeId, "namespace_in_domain");
        }
      }

      // Map DocType (NEW: doctype clustering)
      if (doc.metadata.docType) {
        const dtNodeId = `doctype:${doc.metadata.docType}`;
        this.addNodeIfNotExists(dtNodeId, {
          type: "doctype",
          label: doc.metadata.docType,
        });
        this.addEdgeIfNotExists(docNodeId, dtNodeId, "is_type");
      }

      // Map Keywords (with improved normalization)
      for (const keyword of doc.metadata.keywords || []) {
        const normalized = this.normalizeKeyword(keyword);
        if (!normalized) continue;

        const kwNodeId = `keyword:${normalized}`;
        this.addNodeIfNotExists(kwNodeId, {
          type: "keyword",
          label: keyword,
        });
        this.addEdgeIfNotExists(docNodeId, kwNodeId, "tagged_with");
      }
    }
  }

  /**
   * Resolve cross-references from a document to create doc→doc edges.
   * Cross-references look like: "Exception Class (atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm)"
   */
  private buildCrossReferences(domainId: string, doc: TaggedDocument): number {
    if (!doc.crossReferences || doc.crossReferences.length === 0) return 0;

    const sourceNodeId = `doc:${domainId}:${doc.topic}`;
    if (!this.graph.hasNode(sourceNodeId)) return 0;

    let edgesCreated = 0;

    for (const ref of doc.crossReferences) {
      // Try to extract the href from the cross-reference string
      const hrefMatch = ref.match(/\(([^)]+)\)/);
      if (!hrefMatch) continue;

      const rawHref = hrefMatch[1].toLowerCase();

      // Try to find the target doc by matching href fragments
      let targetNodeId: string | undefined;

      // Try direct lookup
      targetNodeId = this.hrefToDocId.get(rawHref);

      // Try matching just the filename portion
      if (!targetNodeId) {
        const filename = rawHref.split("/").pop()?.replace(/\.htm$/, "");
        if (filename) {
          // Search through our href index
          for (const [href, nodeId] of this.hrefToDocId) {
            if (href.endsWith(filename) || href.endsWith(`/${filename}`)) {
              targetNodeId = nodeId;
              break;
            }
          }
        }
      }

      if (targetNodeId && targetNodeId !== sourceNodeId) {
        this.addEdgeIfNotExists(sourceNodeId, targetNodeId, "references");
        edgesCreated++;
      }
    }

    return edgesCreated;
  }

  /**
   * Normalize a keyword for use as a graph node ID.
   * Returns null if the keyword should be skipped.
   */
  private normalizeKeyword(keyword: string): string | null {
    let normalized = keyword
      .toLowerCase()
      .trim()
      .replace(/[.,:;!?'"]+$/g, "")  // Strip trailing punctuation
      .replace(/^[.,:;!?'"]+/g, ""); // Strip leading punctuation
    
    // Skip invalid keywords
    if (!normalized || normalized.length < 3 || normalized.length > 40) return null;
    if (/^\d+$/.test(normalized)) return null; // Pure numbers
    if (GRAPH_KEYWORD_BLOCKLIST.has(normalized)) return null;
    
    return normalized;
  }

  /**
   * Infer the service category for a domain based on its ID.
   */
  private inferServiceCategory(domainId: string): string | null {
    const id = domainId.toLowerCase();

    // Analytics & BI
    if (id.includes("bi-dev") || id.includes("analytics") || id === "api-analytics" || id.includes("salesforce-reports")) return "analytics";
    // Commerce
    if (id.includes("commerce") || id === "order-management-developer-guide-html") return "commerce";
    // Industries
    if (id.includes("health-cloud") || id.includes("financial-services") || id.includes("life-sciences") || id.includes("insurance") || id.includes("nonprofit") || id.includes("edu-cloud") || id.includes("netzero") || id.includes("automotive") || id.includes("psc-api") || id.includes("media-developer") || id.includes("mfg-api") || id.includes("retail-api") || id.includes("eu-developer") || id.includes("comms-developer") || id.includes("loyalty") || id.includes("esm-developer") || id.includes("public-sector")) return "industries";
    // Service
    if (id.includes("service-cloud") || id.includes("field-service") || id.includes("live-agent") || id.includes("voice") || id.includes("snapins") || id.includes("omni-channel") || id.includes("workforce") || id.includes("service-connector") || id.includes("case-feed") || id.includes("guided-engagement") || id.includes("chat") || id.includes("knowledge-dev")) return "service";
    // Sales
    if (id.includes("cpq") || id.includes("channel-revenue") || id.includes("blng") || id.includes("referral") || id.includes("clm-developer") || id.includes("feedback")) return "sales";
    // Apex
    if (id.includes("apex")) return "apex";
    // API
    if (id === "rest-api" || id === "api" || id === "api-asynch" || id === "api-streaming" || id === "soql-sosl" || id === "api-action" || id === "api-placeorder" || id === "uiapi") return "api";
    // Experience
    if (id.includes("communities") || id.includes("exp-cloud")) return "experience";
    // Specific products
    if (id === "agentforce") return "agentforce";
    if (id === "data-cloud") return "data-cloud";
    if (id === "revenue-cloud") return "revenue-cloud";
    if (id === "omnistudio") return "omnistudio";
    if (id === "lwc" || id === "lightning") return "lwc";
    if (id.includes("cli") || id.includes("sfdx") || id.includes("devops") || id.includes("pkg")) return "cli";
    if (id.includes("workdotcom")) return "work.com";
    // Platform (default for core SF)
    return "platform";
  }

  /**
   * Add service category nodes for domain grouping.
   */
  addServiceCategory(domainId: string, serviceName: string) {
    if (!serviceName || serviceName.length < 2) return;

    const serviceNodeId = `service:${serviceName.toLowerCase().replace(/\s+/g, "-")}`;
    const domainNodeId = `domain:${domainId}`;

    this.addNodeIfNotExists(serviceNodeId, {
      type: "service",
      label: serviceName,
    });

    if (this.graph.hasNode(domainNodeId)) {
      this.addEdgeIfNotExists(domainNodeId, serviceNodeId, "belongs_to_service");
    }
  }

  /**
   * Export the graph to disk. Called after build() + addServiceCategory().
   */
  async exportGraph(): Promise<void> {
    await fs.ensureDir(this.knowledgeDir);
    const outputPath = path.join(this.knowledgeDir, "graph.json");
    const exportedGraph = this.graph.export();
    await fs.writeJson(outputPath, exportedGraph);
  }

  private addNodeIfNotExists(id: string, attributes: Record<string, unknown>) {
    if (!this.graph.hasNode(id)) {
      this.graph.addNode(id, attributes);
    }
  }

  private addEdgeIfNotExists(
    source: string,
    target: string,
    relationship: string,
  ) {
    if (!this.graph.hasEdge(source, target)) {
      this.graph.addEdge(source, target, { type: relationship });
    }
  }
}
