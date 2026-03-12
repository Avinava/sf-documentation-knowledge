import fs from "fs-extra";
import path from "node:path";
// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
import pkg from "graphology";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DirectedGraph = (pkg as any).DirectedGraph || pkg;
import { createChildLogger } from "./logger.js";

const log = createChildLogger("utils:graph-query");

interface NodeAttributes {
  type: string;
  label: string;
  docType?: string;
  url?: string;
  [key: string]: unknown;
}

export interface GraphSearchResult {
  nodeId: string;
  type: string;
  label: string;
  docType?: string;
  url?: string;
  score?: number;
}

export interface DocContext {
  nodeId: string;
  label: string;
  domain: string;
  docType: string;
  url: string;
  namespace?: string;
  keywords: string[];
  references: GraphSearchResult[];
  referencedBy: GraphSearchResult[];
}

/**
 * GraphQuery provides fast, in-memory traversal of the SF Knowledge Graph.
 * Load once, query many times.
 */
export class GraphQuery {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private graph: any = new DirectedGraph();
  private loaded = false;
  private graphPath: string;

  /** Inverted keyword index: lowercase keyword → Set of doc node IDs */
  private keywordIndex = new Map<string, Set<string>>();
  /** Inverted label index: lowercase word → Set of node IDs */
  private labelIndex = new Map<string, Set<string>>();

  constructor(knowledgeDir = "knowledge/current") {
    this.graphPath = path.join(knowledgeDir, "graph.json");
  }

  /**
   * Load the graph into memory and build lookup indices.
   */
  async load(): Promise<void> {
    if (this.loaded) return;

    if (!(await fs.pathExists(this.graphPath))) {
      throw new Error(`Graph not found at ${this.graphPath}. Run 'npm run generate' first.`);
    }

    const data = await fs.readJson(this.graphPath);
    this.graph.import(data);
    this.buildIndices();
    this.loaded = true;

    log.info(
      { nodes: this.graph.order, edges: this.graph.size },
      "Graph loaded into memory",
    );
  }

  private ensureLoaded() {
    if (!this.loaded) throw new Error("Graph not loaded. Call load() first.");
  }

  private buildIndices() {
    // Build keyword → docs index
    this.graph.forEachEdge((_: any, attrs: any, source: any, target: any) => {
      if (attrs.type === "tagged_with") {
        const targetAttrs = this.graph.getNodeAttributes(target) as NodeAttributes;
        const keyword = targetAttrs.label?.toLowerCase();
        if (keyword) {
          if (!this.keywordIndex.has(keyword)) {
            this.keywordIndex.set(keyword, new Set());
          }
          this.keywordIndex.get(keyword)!.add(source);
        }
      }
    });

    // Build label word → node index
    this.graph.forEachNode((nodeId: any, attrs: any) => {
      const label = (attrs.label as string)?.toLowerCase();
      if (!label) return;
      const words = label.split(/\s+/);
      for (const word of words) {
        if (word.length < 3) continue;
        if (!this.labelIndex.has(word)) {
          this.labelIndex.set(word, new Set());
        }
        this.labelIndex.get(word)!.add(nodeId);
      }
    });
  }

  // ─── Query Methods ─────────────────────────────────────────────

  /**
   * Search across all node labels for a query string.
   * Returns nodes whose labels contain the query terms.
   */
  searchNodes(
    query: string,
    options: { type?: string; limit?: number } = {},
  ): GraphSearchResult[] {
    this.ensureLoaded();
    const { type, limit = 25 } = options;
    const terms = query.toLowerCase().split(/\s+/).filter((t) => t.length >= 3);
    if (terms.length === 0) return [];

    // Find candidate nodes from label index
    const candidates = new Map<string, number>();

    for (const term of terms) {
      for (const [word, nodeIds] of this.labelIndex) {
        // Require meaningful overlap: shorter string must be ≥60% of longer
        const shorter = Math.min(word.length, term.length);
        const longer = Math.max(word.length, term.length);
        if (shorter / longer < 0.6) continue;
        if (word.includes(term) || term.includes(word)) {
          for (const nodeId of nodeIds) {
            candidates.set(nodeId, (candidates.get(nodeId) || 0) + 1);
          }
        }
      }
    }

    // Score and filter
    const results: GraphSearchResult[] = [];
    for (const [nodeId, matchCount] of candidates) {
      const attrs = this.graph.getNodeAttributes(nodeId) as NodeAttributes;
      if (type && attrs.type !== type) continue;

      const label = attrs.label?.toLowerCase() || "";
      // Exact match gets highest score
      let score = matchCount / terms.length;
      if (label === query.toLowerCase()) score = 10;
      else if (label.startsWith(query.toLowerCase())) score += 2;

      results.push({
        nodeId,
        type: attrs.type,
        label: attrs.label,
        docType: attrs.docType,
        url: attrs.url,
        score,
      });
    }

    return results
      .filter((r) => (r.score || 0) >= 0.3) // Filter weak matches
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .slice(0, limit);
  }

  /**
   * Find documents tagged with a specific keyword.
   */
  findDocsByKeyword(keyword: string, limit = 50): GraphSearchResult[] {
    this.ensureLoaded();
    const key = keyword.toLowerCase();
    const docIds = this.keywordIndex.get(key);
    if (!docIds) return [];

    return [...docIds].slice(0, limit).map((nodeId) => {
      const attrs = this.graph.getNodeAttributes(nodeId) as NodeAttributes;
      return {
        nodeId,
        type: attrs.type,
        label: attrs.label,
        docType: attrs.docType,
        url: attrs.url,
      };
    });
  }

  /**
   * Find documents related to a given document via cross-reference edges.
   */
  findRelated(docNodeId: string, depth = 1): GraphSearchResult[] {
    this.ensureLoaded();
    if (!this.graph.hasNode(docNodeId)) return [];

    const visited = new Set<string>([docNodeId]);
    let frontier = [docNodeId];
    const results: GraphSearchResult[] = [];

    for (let d = 0; d < depth; d++) {
      const nextFrontier: string[] = [];
      for (const nodeId of frontier) {
        // Outgoing reference edges
        this.graph.forEachOutEdge(nodeId, (_: any, attrs: any, _src: any, target: any) => {
          if (attrs.type === "references" && !visited.has(target)) {
            visited.add(target);
            nextFrontier.push(target);
            const targetAttrs = this.graph.getNodeAttributes(target) as NodeAttributes;
            results.push({
              nodeId: target,
              type: targetAttrs.type,
              label: targetAttrs.label,
              docType: targetAttrs.docType,
              url: targetAttrs.url,
            });
          }
        });
        // Incoming reference edges
        this.graph.forEachInEdge(nodeId, (_: any, attrs: any, source: any) => {
          if (attrs.type === "references" && !visited.has(source)) {
            visited.add(source);
            nextFrontier.push(source);
            const sourceAttrs = this.graph.getNodeAttributes(source) as NodeAttributes;
            results.push({
              nodeId: source,
              type: sourceAttrs.type,
              label: sourceAttrs.label,
              docType: sourceAttrs.docType,
              url: sourceAttrs.url,
            });
          }
        });
      }
      frontier = nextFrontier;
    }

    return results;
  }

  /**
   * Find all documents in a given Apex namespace.
   */
  findByNamespace(namespace: string): GraphSearchResult[] {
    this.ensureLoaded();
    const nsNodeId = `namespace:${namespace}`;
    if (!this.graph.hasNode(nsNodeId)) return [];

    const results: GraphSearchResult[] = [];
    this.graph.forEachInEdge(nsNodeId, (_: any, attrs: any, source: any) => {
      if (attrs.type === "belongs_to_namespace") {
        const sourceAttrs = this.graph.getNodeAttributes(source) as NodeAttributes;
        results.push({
          nodeId: source,
          type: sourceAttrs.type,
          label: sourceAttrs.label,
          docType: sourceAttrs.docType,
          url: sourceAttrs.url,
        });
      }
    });

    return results;
  }

  /**
   * Find all domains belonging to a service category.
   */
  findByService(service: string): GraphSearchResult[] {
    this.ensureLoaded();
    const serviceNodeId = `service:${service.toLowerCase().replace(/\s+/g, "-")}`;
    if (!this.graph.hasNode(serviceNodeId)) return [];

    const results: GraphSearchResult[] = [];
    this.graph.forEachInEdge(serviceNodeId, (_: any, attrs: any, source: any) => {
      if (attrs.type === "belongs_to_service") {
        const sourceAttrs = this.graph.getNodeAttributes(source) as NodeAttributes;
        results.push({
          nodeId: source,
          type: sourceAttrs.type,
          label: sourceAttrs.label,
        });
      }
    });

    return results;
  }

  /**
   * Find all documents of a specific type.
   */
  findByDocType(docType: string, limit = 50): GraphSearchResult[] {
    this.ensureLoaded();
    const dtNodeId = `doctype:${docType}`;
    if (!this.graph.hasNode(dtNodeId)) return [];

    const results: GraphSearchResult[] = [];
    this.graph.forEachInEdge(dtNodeId, (_: any, attrs: any, source: any) => {
      if (attrs.type === "is_type" && results.length < limit) {
        const sourceAttrs = this.graph.getNodeAttributes(source) as NodeAttributes;
        results.push({
          nodeId: source,
          type: sourceAttrs.type,
          label: sourceAttrs.label,
          docType: sourceAttrs.docType,
          url: sourceAttrs.url,
        });
      }
    });

    return results;
  }

  /**
   * Get full context for a document: domain, namespace, keywords, and related docs.
   */
  getDocContext(docNodeId: string): DocContext | null {
    this.ensureLoaded();
    if (!this.graph.hasNode(docNodeId)) return null;

    const attrs = this.graph.getNodeAttributes(docNodeId) as NodeAttributes;
    let domain = "";
    let namespace: string | undefined;
    const keywords: string[] = [];
    const references: GraphSearchResult[] = [];
    const referencedBy: GraphSearchResult[] = [];

    // Traverse outgoing edges
    this.graph.forEachOutEdge(docNodeId, (_: any, edgeAttrs: any, _src: any, target: any) => {
      const targetAttrs = this.graph.getNodeAttributes(target) as NodeAttributes;
      switch (edgeAttrs.type) {
        case "tagged_with":
          keywords.push(targetAttrs.label);
          break;
        case "belongs_to_namespace":
          namespace = targetAttrs.label;
          break;
        case "references":
          references.push({
            nodeId: target,
            type: targetAttrs.type,
            label: targetAttrs.label,
            docType: targetAttrs.docType,
            url: targetAttrs.url,
          });
          break;
      }
    });

    // Traverse incoming edges
    this.graph.forEachInEdge(docNodeId, (_: any, edgeAttrs: any, source: any) => {
      const sourceAttrs = this.graph.getNodeAttributes(source) as NodeAttributes;
      switch (edgeAttrs.type) {
        case "contains":
          domain = sourceAttrs.label;
          break;
        case "references":
          referencedBy.push({
            nodeId: source,
            type: sourceAttrs.type,
            label: sourceAttrs.label,
            docType: sourceAttrs.docType,
            url: sourceAttrs.url,
          });
          break;
      }
    });

    return {
      nodeId: docNodeId,
      label: attrs.label,
      domain,
      docType: attrs.docType || "",
      url: attrs.url || "",
      namespace,
      keywords,
      references,
      referencedBy,
    };
  }

  /**
   * List all domains in the graph.
   */
  listDomains(): GraphSearchResult[] {
    this.ensureLoaded();
    const results: GraphSearchResult[] = [];

    this.graph.forEachNode((nodeId: any, attrs: any) => {
      if (attrs.type === "domain") {
        results.push({
          nodeId,
          type: "domain",
          label: attrs.label as string,
        });
      }
    });

    return results.sort((a, b) => a.label.localeCompare(b.label));
  }

  /**
   * List all namespaces with their document counts.
   */
  listNamespaces(): Array<{ namespace: string; docCount: number }> {
    this.ensureLoaded();
    const results: Array<{ namespace: string; docCount: number }> = [];

    this.graph.forEachNode((nodeId: any, attrs: any) => {
      if (attrs.type === "namespace") {
        let docCount = 0;
        this.graph.forEachInEdge(nodeId, (_: any, edgeAttrs: any) => {
          if (edgeAttrs.type === "belongs_to_namespace") docCount++;
        });
        results.push({ namespace: attrs.label as string, docCount });
      }
    });

    return results.sort((a, b) => b.docCount - a.docCount);
  }

  /**
   * List all service categories with their domain counts.
   */
  listServices(): Array<{ service: string; domainCount: number }> {
    this.ensureLoaded();
    const results: Array<{ service: string; domainCount: number }> = [];

    this.graph.forEachNode((nodeId: any, attrs: any) => {
      if (attrs.type === "service") {
        let domainCount = 0;
        this.graph.forEachInEdge(nodeId, (_: any, edgeAttrs: any) => {
          if (edgeAttrs.type === "belongs_to_service") domainCount++;
        });
        results.push({ service: attrs.label as string, domainCount });
      }
    });

    return results.sort((a, b) => b.domainCount - a.domainCount);
  }

  /** Get basic graph stats. */
  getStats(): { nodes: number; edges: number } {
    this.ensureLoaded();
    return { nodes: this.graph.order, edges: this.graph.size };
  }
}
