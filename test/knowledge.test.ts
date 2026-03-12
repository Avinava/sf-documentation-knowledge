import { describe, it, expect } from "vitest";
import fs from "fs-extra";
import path from "node:path";

describe("Knowledge Base", () => {
  const knowledgeDir = "knowledge/current";

  it("has graph.json", async () => {
    const exists = await fs.pathExists(path.join(knowledgeDir, "graph.json"));
    expect(exists).toBe(true);
  });

  it("graph.json is valid JSON with nodes and edges", async () => {
    const graph = await fs.readJson(path.join(knowledgeDir, "graph.json"));
    expect(graph.nodes).toBeDefined();
    expect(graph.edges).toBeDefined();
    expect(graph.nodes.length).toBeGreaterThan(1000);
    expect(graph.edges.length).toBeGreaterThan(1000);
  });

  it("has at least 100 domain directories", async () => {
    const dirs = await fs.readdir(knowledgeDir);
    const domainDirs = [];
    for (const d of dirs) {
      const stat = await fs.stat(path.join(knowledgeDir, d));
      if (stat.isDirectory()) domainDirs.push(d);
    }
    expect(domainDirs.length).toBeGreaterThanOrEqual(100);
  });

  it("each domain has an _index.md", async () => {
    const dirs = await fs.readdir(knowledgeDir);
    for (const d of dirs) {
      const dirPath = path.join(knowledgeDir, d);
      const stat = await fs.stat(dirPath);
      if (!stat.isDirectory()) continue;
      const indexExists = await fs.pathExists(path.join(dirPath, "_index.md"));
      expect(indexExists, `${d} missing _index.md`).toBe(true);
    }
  });
});

describe("Graph Query API", () => {
  it("loads and searches the graph", async () => {
    const { GraphQuery } = await import("../src/utils/graph-query.js");
    const gq = new GraphQuery();
    await gq.load();

    const stats = gq.getStats();
    expect(stats.nodes).toBeGreaterThan(1000);
    expect(stats.edges).toBeGreaterThan(1000);

    const results = gq.searchNodes("SOQL");
    expect(results.length).toBeGreaterThan(0);
  });

  it("finds documents by keyword", async () => {
    const { GraphQuery } = await import("../src/utils/graph-query.js");
    const gq = new GraphQuery();
    await gq.load();

    const results = gq.findDocsByKeyword("OAuth");
    expect(results.length).toBeGreaterThan(0);
  });

  it("lists domains", async () => {
    const { GraphQuery } = await import("../src/utils/graph-query.js");
    const gq = new GraphQuery();
    await gq.load();

    const domains = gq.listDomains();
    expect(domains.length).toBeGreaterThanOrEqual(100);
  });

  it("lists namespaces", async () => {
    const { GraphQuery } = await import("../src/utils/graph-query.js");
    const gq = new GraphQuery();
    await gq.load();

    const namespaces = gq.listNamespaces();
    expect(namespaces.length).toBeGreaterThan(10);
    expect(namespaces.find((n) => n.namespace === "System")).toBeDefined();
  });

  it("lists services", async () => {
    const { GraphQuery } = await import("../src/utils/graph-query.js");
    const gq = new GraphQuery();
    await gq.load();

    const services = gq.listServices();
    expect(services.length).toBeGreaterThan(5);
  });
});
