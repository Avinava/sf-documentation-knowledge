/**
 * SearchEngine — Orama-powered BM25 hybrid search for the knowledge graph.
 *
 * Replaces the custom TF-IDF + trigram search with Orama's BM25 algorithm,
 * which provides proper term frequency saturation and document length
 * normalization — the gold standard for text retrieval.
 *
 * Designed for future hybrid search: when embeddings are available,
 * the vector[384] field enables BM25 + cosine similarity fusion.
 */
import {
  create,
  insertMultiple,
  search,
  count,
  type AnyOrama,
} from "@orama/orama";
import { createChildLogger } from "./logger.js";

const log = createChildLogger("utils:search-engine");

/** Schema for documents indexed in Orama */
const DOC_SCHEMA = {
  title: "string" as const,
  description: "string" as const,
  keywords: "string" as const, // joined keywords as one searchable string
  domain: "string" as const,
  docType: "string" as const,
  nodeId: "string" as const,
};

/** A document as indexed in the search engine */
export interface IndexedDocument {
  title: string;
  description: string;
  keywords: string;
  domain: string;
  docType: string;
  nodeId: string;
}

export interface SearchResult {
  nodeId: string;
  score: number;
  title: string;
  domain: string;
  docType: string;
}

export interface SearchQuery {
  /** The search query text */
  term: string;
  /** Optional domain filter */
  domain?: string;
  /** Optional docType filter */
  docType?: string;
  /** Max results to return */
  limit?: number;
}

export class SearchEngine {
  private db: AnyOrama | null = null;
  private initialized = false;

  /**
   * Initialize the search engine with documents.
   * Call once after loading the graph. Orama's create/insertMultiple are synchronous.
   */
  init(documents: IndexedDocument[]): void {
    if (this.initialized) return;

    const startTime = Date.now();

    this.db = create({
      schema: DOC_SCHEMA,
    });

    // Batch insert all documents (synchronous in current Orama)
    insertMultiple(this.db, documents);

    this.initialized = true;
    const docCount = count(this.db);

    log.info(
      {
        documents: docCount,
        ms: Date.now() - startTime,
      },
      "Orama search engine initialized (BM25)",
    );
  }

  /**
   * Search for documents using BM25 ranking.
   *
   * Orama's BM25 provides:
   * - Term frequency saturation (diminishing returns for repeated terms)
   * - Document length normalization (short, focused docs rank higher)
   * - Proper handling of multi-word queries
   */
  search(query: SearchQuery): SearchResult[] {
    if (!this.db) throw new Error("Search engine not initialized. Call init() first.");

    const { term, domain, docType, limit = 25 } = query;
    if (!term.trim()) return [];

    // Build Orama filter from options
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: Record<string, any> = {};
    if (domain) where["domain"] = domain;
    if (docType) where["docType"] = docType;

    // Orama search() returns Results | Promise<Results> in its type signature,
    // but it is synchronous when no async components are configured.
    const results = search(this.db, {
      term,
      limit,
      ...(Object.keys(where).length > 0 ? { where } : {}),
      // Boost title matches heavily over body/keyword matches
      properties: ["title", "keywords", "description"],
      boost: {
        title: 3.0,
        keywords: 2.0,
        description: 1.0,
      },
    }) as any;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (results.hits || []).map((hit: any) => ({
      nodeId: hit.document.nodeId as string,
      score: hit.score as number,
      title: hit.document.title as string,
      domain: hit.document.domain as string,
      docType: hit.document.docType as string,
    }));
  }

  /** Get the count of indexed documents */
  getDocCount(): number {
    if (!this.db) return 0;
    return count(this.db);
  }

  /** Check if the engine is ready */
  isReady(): boolean {
    return this.initialized;
  }
}
