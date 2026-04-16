import { describe, it, expect, beforeAll, afterEach } from "vitest";
import { GraphQuery } from "../src/utils/graph-query.js";
import { CodeIndex } from "../src/mcp/code-index.js";
import { 
  resolveEffectiveDomains,
  filterResultsByActiveDomains,
  setActiveDomainsForTest
} from "../src/mcp/server.js";

describe("Domain Restriction Unit Tests", () => {
  afterEach(() => {
    setActiveDomainsForTest(null);
  });

  describe("resolveEffectiveDomains", () => {
    it("B1: returns unrestricted if no active domains", () => {
      setActiveDomainsForTest(null);
      const res = resolveEffectiveDomains("some-domain");
      expect(res).toEqual({ 
        domains: undefined, 
        domain: "some-domain", 
        restricted: false 
      });
    });

    it("B2: returns all active domains if no per-call domain given", () => {
      setActiveDomainsForTest(new Set(["a", "b"]));
      const res = resolveEffectiveDomains();
      // order in set -> array depends on insertion order, so sort before compare
      expect(res.domains?.sort()).toEqual(["a", "b"].sort());
      expect(res.domain).toBeUndefined();
      expect(res.restricted).toBe(true);
      expect(res.warning).toBeUndefined();
    });

    it("B3: narrows to per-call domain if it's in the active set", () => {
      setActiveDomainsForTest(new Set(["a", "b", "c"]));
      const res = resolveEffectiveDomains("b");
      expect(res.domains).toBeUndefined();
      expect(res.domain).toBe("b");
      expect(res.restricted).toBe(true);
      expect(res.warning).toBeUndefined();
    });

    it("B4: returns empty domains and a warning if per-call domain is outside active set", () => {
      setActiveDomainsForTest(new Set(["a", "b"]));
      const res = resolveEffectiveDomains("x");
      expect(res.domains).toEqual([]);
      expect(res.domain).toBeUndefined();
      expect(res.restricted).toBe(true);
      expect(res.warning).toContain("Domain \"x\" is not in the active domains");
    });
  });

  describe("filterResultsByActiveDomains", () => {
    it("B5: passes through if no active domains", () => {
      setActiveDomainsForTest(null);
      const results = [{ nodeId: "doc:a:some" }, { nodeId: "doc:b:other" }];
      expect(filterResultsByActiveDomains(results)).toEqual(results);
    });

    it("B6: filters document nodes by active domains", () => {
      setActiveDomainsForTest(new Set(["a", "c"]));
      const results = [
        { nodeId: "doc:a:some" },
        { nodeId: "doc:b:other" },
        { nodeId: "doc:c:thing#section" }
      ];
      const filtered = filterResultsByActiveDomains(results);
      expect(filtered.map(r => r.nodeId)).toEqual(["doc:a:some", "doc:c:thing#section"]);
    });

    it("B7: unconditionally passes non-document nodes", () => {
      setActiveDomainsForTest(new Set(["a"]));
      const results = [
        { nodeId: "doc:a:some" },
        { nodeId: "doc:b:other" },
        { nodeId: "namespace:System" },
        { nodeId: "domain:a" }
      ];
      const filtered = filterResultsByActiveDomains(results);
      expect(filtered.map(r => r.nodeId)).toEqual([
        "doc:a:some", 
        "namespace:System", 
        "domain:a"
      ]);
    });
  });
});

describe("Domain Restriction Integration Tests", () => {
  const gq = new GraphQuery("knowledge/current");
  const codeIndex = new CodeIndex("knowledge/current");

  beforeAll(async () => {
    await gq.load();
    await codeIndex.load();
  }, 120000);

  it("C1: gq.searchNodes restricts results to specified domains", () => {
    const results = gq.searchNodes("SOQL", { domains: ["soql-sosl", "apex-guide"] });
    expect(results.length).toBeGreaterThan(0);
    // Every returned node should be in one of these two domains
    results.forEach(r => {
      const isExpected = r.nodeId.startsWith("doc:soql-sosl:") || r.nodeId.startsWith("doc:apex-guide:");
      expect(isExpected, `Expected node ${r.nodeId} to be in soql-sosl or apex-guide`).toBe(true);
    });
  });

  it("C2: gq.searchNodes returns no results for irrelevant domain", () => {
    // Trying to search for SOQL in a domain that either has none or definitely correctly filters
    const results = gq.searchNodes("SOQL", { domains: ["revenue-cloud"] });
    results.forEach(r => {
      expect(r.nodeId.startsWith("doc:revenue-cloud:")).toBe(true);
    });
    
    // Contrast with unrestricted count
    const unrestrictedResults = gq.searchNodes("SOQL", { limit: 100 });
    expect(results.length).toBeLessThan(unrestrictedResults.length);
  });

  it("C3: gq.searchNodes with empty domains array returns empty results", () => {
    // When SearchOptions.domains = [], the search should logically return 0 results since no domains are allowed.
    const results = gq.searchNodes("SOQL", { domains: [] });
    expect(results.length).toBe(0);
  });

  it("C4: CodeIndex.search restricts to specified domains", () => {
    const snippets = codeIndex.search("batch", { domains: ["apex-guide"] });
    expect(snippets.length).toBeGreaterThan(0);
    snippets.forEach(s => {
      expect(s.domain).toBe("apex-guide");
    });
  });

  it("C5: direct Orama search restricts to domains via where clause", () => {
    const results = gq.searchNodes("SOQL", { domains: ["soql-sosl"], type: "document" });
    expect(results.length).toBeGreaterThan(0);
    results.forEach(r => {
      expect(r.nodeId.startsWith("doc:soql-sosl:")).toBe(true);
    });
  });
});
