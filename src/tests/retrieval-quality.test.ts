/**
 * Retrieval Quality Tests — validate that known-good queries
 * return expected documents in the top results.
 *
 * These tests load the real graph.json and exercise the full
 * search pipeline (stemming, trigram matching, TF-IDF scoring).
 *
 * Run: npm test
 */
import { describe, it, expect, beforeAll } from "vitest";
import { GraphQuery, stem } from "../utils/graph-query.js";
import { CodeIndex } from "../mcp/code-index.js";

const KNOWLEDGE_DIR = "knowledge/current";

// ─── Unit tests for the stemmer ─────────────────────────────────
describe("stem()", () => {
  it("strips -ing suffix", () => {
    expect(stem("configuring")).toBe("configur");
  });

  it("strips -tion suffix", () => {
    expect(stem("configuration")).toBe("configurat");
  });

  it("strips -ed suffix", () => {
    expect(stem("queried")).toBe("query");
  });

  it("strips -es suffix", () => {
    expect(stem("queries")).toBe("query");
  });

  it("strips -s suffix", () => {
    expect(stem("objects")).toBe("object");
  });

  it("preserves short words", () => {
    expect(stem("api")).toBe("api");
    expect(stem("dml")).toBe("dml");
  });

  it("strips -ment suffix", () => {
    expect(stem("deployment")).toBe("deploy");
  });

  it("strips -able suffix", () => {
    expect(stem("batchable")).toBe("batch");
  });
});

// ─── Integration tests: graph search retrieval quality ──────────
describe("GraphQuery retrieval quality", () => {
  let gq: GraphQuery;

  beforeAll(async () => {
    gq = new GraphQuery(KNOWLEDGE_DIR);
    await gq.load();
  }, 60_000); // 60s timeout for loading 77MB graph

  /**
   * Test helper: asserts that at least one result's nodeId
   * matches the provided pattern.
   */
  function expectResultMatching(
    results: Array<{ nodeId: string }>,
    pattern: RegExp,
    query: string,
  ) {
    const match = results.find((r) => pattern.test(r.nodeId));
    expect(
      match,
      `Expected query "${query}" to return a result matching ${pattern}. Got: ${results.slice(0, 5).map((r) => r.nodeId).join(", ")}`,
    ).toBeDefined();
  }

  it("finds Batch Apex documentation", () => {
    const results = gq.searchNodes("batch apex", { type: "document", limit: 10 });
    expect(results.length).toBeGreaterThan(0);
    expectResultMatching(results, /doc:apex-guide:.*batch/i, "batch apex");
  });

  it("finds SOQL documentation", () => {
    const results = gq.searchNodes("SOQL queries", { type: "document", limit: 10 });
    expect(results.length).toBeGreaterThan(0);
    expectResultMatching(results, /doc:(soql-sosl|apex-guide):/, "SOQL queries");
  });

  it("finds REST API docs", () => {
    const results = gq.searchNodes("REST API sobject describe", { type: "document", limit: 15, domain: "rest-api" });
    expect(results.length).toBeGreaterThan(0);
    // All results must be from rest-api since we pre-filter
    for (const r of results) {
      expect(r.nodeId).toMatch(/^doc:rest-api:/);
    }
  });

  it("finds Platform Events docs", () => {
    const results = gq.searchNodes("platform events publish", { type: "document", limit: 10 });
    expect(results.length).toBeGreaterThan(0);
    expectResultMatching(results, /doc:platform-events:/, "platform events publish");
  });

  it("domain pre-filter works", () => {
    const results = gq.searchNodes("trigger", { type: "document", limit: 10, domain: "apex-guide" });
    expect(results.length).toBeGreaterThan(0);
    // All results must be in the apex-guide domain
    for (const r of results) {
      expect(r.nodeId).toMatch(/^doc:apex-guide:/);
    }
  });

  it("finds LWC documentation", () => {
    const results = gq.searchNodes("lightning web components", { type: "document", limit: 10 });
    expect(results.length).toBeGreaterThan(0);
    expectResultMatching(results, /doc:lwc:/, "lightning web components");
  });

  it("finds Metadata API docs", () => {
    const results = gq.searchNodes("metadata api deploy", { type: "document", limit: 10 });
    expect(results.length).toBeGreaterThan(0);
    expectResultMatching(results, /doc:metadata-api:/, "metadata api deploy");
  });

  it("keyword search works", () => {
    const results = gq.findDocsByKeyword("Apex", 10);
    expect(results.length).toBeGreaterThan(0);
  });

  it("returns empty array for nonsense query", () => {
    const results = gq.searchNodes("xyzzy_foobar_gibberish", { type: "document", limit: 5 });
    expect(results.length).toBe(0);
  });

  it("stemming improves recall: 'configuring' matches 'configuration' docs", () => {
    const stemmedResults = gq.searchNodes("configuring triggers", { type: "document", limit: 15 });
    // Should find trigger-related docs even though query used "configuring" not exact match
    expect(stemmedResults.length).toBeGreaterThan(0);
  });

  it("graph context returns valid doc context", () => {
    // Find a real doc nodeId first
    const results = gq.searchNodes("batch apex", { type: "document", limit: 1 });
    expect(results.length).toBeGreaterThan(0);
    const ctx = gq.getDocContext(results[0].nodeId);
    expect(ctx).not.toBeNull();
    expect(ctx!.label).toBeTruthy();
    expect(ctx!.keywords).toBeInstanceOf(Array);
  });

  it("namespace listing returns Apex namespaces", () => {
    const ns = gq.listNamespaces();
    expect(ns.length).toBeGreaterThan(0);
    const systemNs = ns.find((n) => n.namespace === "System");
    expect(systemNs).toBeDefined();
  });

  it("domain listing returns 100+ domains", () => {
    const domains = gq.listDomains();
    expect(domains.length).toBeGreaterThanOrEqual(100);
  });
});

// ─── CodeIndex retrieval quality ────────────────────────────────
describe("CodeIndex retrieval quality", () => {
  let codeIndex: CodeIndex;

  beforeAll(async () => {
    codeIndex = new CodeIndex(KNOWLEDGE_DIR);
    await codeIndex.load();
  }, 120_000); // 2 min — reads all 33k files

  it("finds Apex code examples", () => {
    const snippets = codeIndex.search("batch apex", { limit: 5 });
    expect(snippets.length).toBeGreaterThan(0);
    expect(snippets[0].code.length).toBeGreaterThan(10);
  });

  it("language filter works", () => {
    const snippets = codeIndex.search("query", { language: "soql", limit: 5 });
    for (const s of snippets) {
      expect(s.language).toBe("soql");
    }
  });

  it("domain filter works", () => {
    const snippets = codeIndex.search("apex", { domain: "apex-guide", limit: 5 });
    for (const s of snippets) {
      expect(s.domain).toBe("apex-guide");
    }
  });

  it("returns stats with language breakdown", () => {
    const stats = codeIndex.getStats();
    expect(stats.totalSnippets).toBeGreaterThan(100);
    expect(Object.keys(stats.languages).length).toBeGreaterThanOrEqual(2);
  });
});
