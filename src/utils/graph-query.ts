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

export interface SearchOptions {
  type?: string;
  limit?: number;
  /** Pre-filter by domain prefix (e.g. "apex-reference") */
  domain?: string;
  /** Pre-filter by docType */
  docType?: string;
}

// ─── Lightweight suffix-stripping stemmer ─────────────────────────
const SUFFIX_RULES: Array<[RegExp, string]> = [
  [/ational$/, "ate"],
  [/tional$/, "tion"],
  [/ization$/, "ize"],
  [/fulness$/, "ful"],
  [/ousness$/, "ous"],
  [/iveness$/, "ive"],
  [/ibilities$/, "ible"],
  [/ically$/, "ic"],
  [/ating$/, "ate"],
  [/ising$/, "ise"],
  [/izing$/, "ize"],
  [/abling$/, "able"],
  [/ement$/, ""],
  [/ment$/, ""],
  [/tion$/, "t"],
  [/sion$/, "s"],
  [/ness$/, ""],
  [/able$/, ""],
  [/ible$/, ""],
  [/ment$/, ""],
  [/ious$/, ""],
  [/eous$/, ""],
  [/ous$/, ""],
  [/ive$/, ""],
  [/ful$/, ""],
  [/ing$/, ""],
  [/ies$/, "y"],
  [/ied$/, "y"],
  [/ion$/, ""],
  [/ers$/, ""],
  [/est$/, ""],
  [/ely$/, ""],
  [/ed$/, ""],
  [/er$/, ""],
  [/ly$/, ""],
  [/es$/, ""],
  [/s$/, ""],
];

/** Simple, dependency-free stemmer optimised for technical documentation. */
export function stem(word: string): string {
  if (word.length < 4) return word;
  const lower = word.toLowerCase();
  for (const [re, replacement] of SUFFIX_RULES) {
    if (re.test(lower)) {
      const stemmed = lower.replace(re, replacement);
      // Only keep stems ≥ 3 chars to avoid over-stripping
      if (stemmed.length >= 3) return stemmed;
    }
  }
  return lower;
}

// ─── Trigram helpers ──────────────────────────────────────────────
function trigrams(word: string): string[] {
  if (word.length < 3) return [word];
  const tris: string[] = [];
  for (let i = 0; i <= word.length - 3; i++) {
    tris.push(word.slice(i, i + 3));
  }
  return tris;
}

/**
 * GraphQuery provides fast, in-memory traversal of the SF Knowledge Graph.
 * Load once, query many times.
 *
 * Indexing strategy (v2):
 *   1. Stemmed label index — stem(word) → Set<nodeId>
 *   2. Trigram index — 3-char substring → Set<stemmed word>  (for fuzzy recall)
 *   3. Keyword index — keyword → Set<nodeId>  (from tagged_with edges)
 *   4. IDF table — stem → log(N / df)  (for TF-IDF scoring)
 *   5. LRU query cache — query key → results
 */
export class GraphQuery {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private graph: any = new DirectedGraph();
  private loaded = false;
  private graphPath: string;

  /** Inverted keyword index: lowercase keyword → Set of doc node IDs */
  private keywordIndex = new Map<string, Set<string>>();
  /** Stemmed label index: stemmed word → Set of node IDs */
  private labelIndex = new Map<string, Set<string>>();
  /** Trigram index: trigram → Set of stemmed words (for fuzzy matching) */
  private trigramIndex = new Map<string, Set<string>>();
  /** IDF table: stemmed word → inverse-document-frequency weight */
  private idfTable = new Map<string, number>();
  /** Total number of document nodes (for IDF calculation) */
  private totalDocs = 0;

  /** LRU query cache: cache key → { results, timestamp } */
  private queryCache = new Map<string, { results: GraphSearchResult[]; ts: number }>();
  private readonly CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
  private readonly CACHE_MAX_SIZE = 200;

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
    // Build keyword → docs index from tagged_with edges
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    // Build stemmed label index + trigram index + IDF table
    // Track document frequency (how many DOCUMENT nodes each stem appears in)
    const docFrequency = new Map<string, number>();
    let docCount = 0;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.graph.forEachNode((nodeId: any, attrs: any) => {
      const label = (attrs.label as string)?.toLowerCase();
      if (!label) return;

      const isDoc = attrs.type === "document";
      if (isDoc) docCount++;

      const words = label.split(/[\s_\-.]+/);
      const seenStems = new Set<string>();

      for (const word of words) {
        if (word.length < 3) continue;
        const stemmed = stem(word);
        seenStems.add(stemmed);

        // Stemmed label index
        if (!this.labelIndex.has(stemmed)) {
          this.labelIndex.set(stemmed, new Set());
        }
        this.labelIndex.get(stemmed)!.add(nodeId);

        // Trigram index: map each trigram to the stemmed word
        for (const tri of trigrams(stemmed)) {
          if (!this.trigramIndex.has(tri)) {
            this.trigramIndex.set(tri, new Set());
          }
          this.trigramIndex.get(tri)!.add(stemmed);
        }
      }

      // Track DF for document nodes only
      if (isDoc) {
        for (const s of seenStems) {
          docFrequency.set(s, (docFrequency.get(s) || 0) + 1);
        }
      }
    });

    // Compute IDF: log(N / df) for each stem
    this.totalDocs = docCount;
    for (const [stemmedWord, df] of docFrequency) {
      this.idfTable.set(stemmedWord, Math.log(docCount / df));
    }

    log.info(
      {
        labelTerms: this.labelIndex.size,
        trigrams: this.trigramIndex.size,
        keywords: this.keywordIndex.size,
        docs: docCount,
      },
      "Search indices built (stemmed + trigram + IDF)",
    );
  }

  // ─── Cache helpers ──────────────────────────────────────────────
  private getCached(key: string): GraphSearchResult[] | null {
    const entry = this.queryCache.get(key);
    if (!entry) return null;
    if (Date.now() - entry.ts > this.CACHE_TTL_MS) {
      this.queryCache.delete(key);
      return null;
    }
    return entry.results;
  }

  private setCache(key: string, results: GraphSearchResult[]) {
    // Evict oldest if at capacity
    if (this.queryCache.size >= this.CACHE_MAX_SIZE) {
      const oldest = this.queryCache.keys().next().value;
      if (oldest !== undefined) this.queryCache.delete(oldest);
    }
    this.queryCache.set(key, { results, ts: Date.now() });
  }

  // ─── Query Methods ─────────────────────────────────────────────

  /**
   * Search across all node labels for a query string.
   *
   * Uses stemming + trigram fuzzy matching + TF-IDF scoring.
   * Supports optional pre-filters for domain and docType.
   */
  searchNodes(
    query: string,
    options: SearchOptions = {},
  ): GraphSearchResult[] {
    this.ensureLoaded();
    const { type, limit = 25, domain, docType } = options;

    // Check cache
    const cacheKey = `search:${query}|${type || ""}|${domain || ""}|${docType || ""}|${limit}`;
    const cached = this.getCached(cacheKey);
    if (cached) return cached;

    // Tokenise and stem the query
    const rawTerms = query.toLowerCase()
      .replace(/[._]/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .split(/\s+/)
      .filter((t) => t.length >= 3);
    if (rawTerms.length === 0) return [];

    const stemmedTerms = rawTerms.map(stem);

    // Collect candidate nodes via stemmed label index
    // For each stemmed term, find exact stem matches + trigram-expanded fuzzy matches
    const candidates = new Map<string, number>();

    for (const st of stemmedTerms) {
      const matchedStems = new Set<string>();

      // Exact stem match
      if (this.labelIndex.has(st)) {
        matchedStems.add(st);
      }

      // Trigram fuzzy expansion: find other stems that share trigrams
      const queryTrigrams = trigrams(st);
      const trigramHits = new Map<string, number>();
      for (const tri of queryTrigrams) {
        const stems = this.trigramIndex.get(tri);
        if (stems) {
          for (const s of stems) {
            trigramHits.set(s, (trigramHits.get(s) || 0) + 1);
          }
        }
      }
      // Accept stems with ≥60% trigram overlap
      const threshold = Math.max(1, Math.floor(queryTrigrams.length * 0.6));
      for (const [s, count] of trigramHits) {
        if (count >= threshold) matchedStems.add(s);
      }

      // Collect node IDs from matched stems
      for (const ms of matchedStems) {
        const nodeIds = this.labelIndex.get(ms);
        if (!nodeIds) continue;
        // Weight by IDF of the matched stem
        const idf = this.idfTable.get(ms) || 1.0;
        for (const nodeId of nodeIds) {
          candidates.set(nodeId, (candidates.get(nodeId) || 0) + idf);
        }
      }
    }

    // Score, filter, and rank
    const results: GraphSearchResult[] = [];
    const queryLower = query.toLowerCase();

    for (const [nodeId, tfidfScore] of candidates) {
      const attrs = this.graph.getNodeAttributes(nodeId) as NodeAttributes;

      // Pre-filter by type
      if (type && attrs.type !== type) continue;

      // Pre-filter by domain (node IDs are doc:<domain>:<topic>)
      if (domain && !nodeId.startsWith(`doc:${domain}:`)) continue;

      // Pre-filter by docType
      if (docType && attrs.docType !== docType) continue;

      const label = attrs.label?.toLowerCase() || "";

      // Compute final score: TF-IDF base + bonuses
      let score = tfidfScore / stemmedTerms.length; // normalize by query length

      // Exact match bonus
      if (label === queryLower) score += 10;
      else if (label.startsWith(queryLower)) score += 3;
      // Contains full query bonus
      else if (label.includes(queryLower)) score += 1.5;

      results.push({
        nodeId,
        type: attrs.type,
        label: attrs.label,
        docType: attrs.docType,
        url: attrs.url,
        score,
      });
    }

    const sorted = results
      .filter((r) => (r.score || 0) >= 0.3)
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .slice(0, limit);

    this.setCache(cacheKey, sorted);
    return sorted;
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.graph.forEachNode((nodeId: any, attrs: any) => {
      if (attrs.type === "namespace") {
        let docCount = 0;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.graph.forEachNode((nodeId: any, attrs: any) => {
      if (attrs.type === "service") {
        let domainCount = 0;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
