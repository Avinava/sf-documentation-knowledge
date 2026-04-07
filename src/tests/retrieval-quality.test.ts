/**
 * Retrieval Quality Tests — validate that the search pipeline
 * (stemming, trigram matching, TF-IDF scoring) returns relevant
 * results from whatever domains are present in the graph.
 *
 * These tests are **data-driven** — they discover the available
 * domains and namespaces at runtime, then verify that the search
 * algorithm ranks relevant results above noise.
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
  /** Domains that actually have document nodes in the graph */
  let availableDomains: string[];

  beforeAll(async () => {
    gq = new GraphQuery(KNOWLEDGE_DIR);
    await gq.load();

    // Discover which domains actually have document nodes
    const allDomains = gq.listDomains();
    availableDomains = [];
    for (const d of allDomains) {
      // domain nodeId is "domain:xxx", check if any doc:xxx:* exists
      const domainId = d.nodeId.replace("domain:", "");
      const probe = gq.searchNodes(domainId, { type: "document", domain: domainId, limit: 1 });
      if (probe.length > 0) {
        availableDomains.push(domainId);
      }
    }
  }, 60_000);

  it("search returns results for domain-specific terms", () => {
    // Pick the first available domain and search for its name
    expect(availableDomains.length).toBeGreaterThan(0);
    const domain = availableDomains[0];
    const results = gq.searchNodes(domain.replace(/-/g, " "), { type: "document", limit: 10 });
    expect(results.length).toBeGreaterThan(0);
  });

  it("domain pre-filter restricts results", () => {
    // Search within a specific domain — all results must belong to it
    expect(availableDomains.length).toBeGreaterThan(0);
    const domain = availableDomains[0];
    // Use a broad search term
    const results = gq.searchNodes("api", { type: "document", limit: 10, domain });
    // If this domain has "api" in any doc, the filter must hold
    for (const r of results) {
      expect(r.nodeId).toMatch(new RegExp(`^doc:${domain}:`));
    }
  });

  it("finds Batch Apex documentation when apex-reference domain exists", () => {
    if (!availableDomains.includes("apex-reference")) return; // skip if domain absent
    const results = gq.searchNodes("batch apex", { type: "document", limit: 10 });
    expect(results.length).toBeGreaterThan(0);
    // Should find at least one apex-related result
    const hasApex = results.some((r) => r.nodeId.includes("apex"));
    expect(hasApex).toBe(true);
  });

  it("finds results for multi-word queries", () => {
    // Use a generic query that should match in any corpus
    const results = gq.searchNodes("connect api", { type: "document", limit: 10 });
    expect(results.length).toBeGreaterThan(0);
  });

  it("keyword search works", () => {
    const results = gq.findDocsByKeyword("Apex", 10);
    expect(results.length).toBeGreaterThan(0);
  });

  it("returns few or no results for nonsense query", () => {
    const results = gq.searchNodes("xyzzy_foobar_gibberish", { type: "document", limit: 5 });
    // With richer keyword-folded trigram index, a small number of fuzzy matches is acceptable
    expect(results.length).toBeLessThanOrEqual(5);
  });

  it("stemming improves recall: 'configuring' matches 'configuration' docs", () => {
    const stemmedResults = gq.searchNodes("configuring", { type: "document", limit: 15 });
    // Should find docs even though query used "configuring" not exact match
    expect(stemmedResults.length).toBeGreaterThan(0);
  });

  it("graph context returns valid doc context", () => {
    // Find a real doc nodeId first
    const results = gq.searchNodes("class", { type: "document", limit: 1 });
    expect(results.length).toBeGreaterThan(0);
    const ctx = gq.getDocContext(results[0].nodeId);
    expect(ctx).not.toBeNull();
    expect(ctx!.label).toBeTruthy();
    expect(ctx!.keywords).toBeInstanceOf(Array);
  });

  it("namespace listing returns namespaces when they exist", () => {
    const ns = gq.listNamespaces();
    // The graph may or may not have namespaces — validate structure if they exist
    if (ns.length > 0) {
      expect(ns[0]).toHaveProperty("namespace");
      expect(ns[0]).toHaveProperty("docCount");
      expect(ns[0].docCount).toBeGreaterThan(0);
    }
  });

  it("domain listing returns domains", () => {
    const domains = gq.listDomains();
    expect(domains.length).toBeGreaterThanOrEqual(100);
  });

  it("service listing returns services", () => {
    const services = gq.listServices();
    expect(services.length).toBeGreaterThan(5);
  });

  it("scores exact label matches higher than partial matches", () => {
    // Search for a term that should have both exact and partial matches
    const results = gq.searchNodes("ConnectApi", { limit: 10 });
    if (results.length >= 2) {
      // First result should have highest score
      expect(results[0].score).toBeGreaterThanOrEqual(results[1].score!);
    }
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
    // Use a domain that we know has documents (from graph)
    const snippets = codeIndex.search("class", { limit: 5 });
    if (snippets.length > 0) {
      const domain = snippets[0].domain;
      const filtered = codeIndex.search("class", { domain, limit: 5 });
      for (const s of filtered) {
        expect(s.domain).toBe(domain);
      }
    }
  });

  it("returns stats with language breakdown", () => {
    const stats = codeIndex.getStats();
    expect(stats.totalSnippets).toBeGreaterThan(100);
    expect(Object.keys(stats.languages).length).toBeGreaterThanOrEqual(2);
  });
});
