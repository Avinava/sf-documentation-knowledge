#!/usr/bin/env node
/**
 * CLI: graph-stats — Print statistics about the knowledge graph.
 *
 * Usage:
 *   npm run graph:stats
 */
import fs from "fs-extra";
import path from "node:path";

interface GraphNode {
  key: string;
  attributes: Record<string, unknown>;
}

interface GraphEdge {
  key: string;
  source: string;
  target: string;
  attributes: Record<string, unknown>;
}

interface GraphExport {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

async function main() {
  const graphPath = path.resolve("knowledge/current/graph.json");

  if (!(await fs.pathExists(graphPath))) {
    console.error("❌ No graph.json found. Run `npm run generate` first.");
    process.exit(1);
  }

  console.log("📊 Loading graph.json...");
  const graph: GraphExport = await fs.readJson(graphPath);

  // Node statistics
  const nodeTypes: Record<string, number> = {};
  for (const node of graph.nodes) {
    const t = (node.attributes.type as string) || "unknown";
    nodeTypes[t] = (nodeTypes[t] || 0) + 1;
  }

  // Edge statistics
  const edgeTypes: Record<string, number> = {};
  for (const edge of graph.edges) {
    const t = (edge.attributes.type as string) || "unknown";
    edgeTypes[t] = (edgeTypes[t] || 0) + 1;
  }

  // Hub analysis — find most-connected nodes
  const inDegree: Record<string, number> = {};
  const outDegree: Record<string, number> = {};
  for (const edge of graph.edges) {
    outDegree[edge.source] = (outDegree[edge.source] || 0) + 1;
    inDegree[edge.target] = (inDegree[edge.target] || 0) + 1;
  }

  // Find top keyword hubs (most tagged-with connections)
  const keywordNodes = graph.nodes.filter(
    (n) => n.attributes.type === "keyword",
  );
  const topKeywords = keywordNodes
    .map((n) => ({ key: n.key, label: n.attributes.label, connections: inDegree[n.key] || 0 }))
    .sort((a, b) => b.connections - a.connections)
    .slice(0, 20);

  // Find top-referenced documents
  const docNodes = graph.nodes.filter((n) => n.attributes.type === "document");
  const refEdges = graph.edges.filter(
    (e) => e.attributes.type === "references",
  );
  const refTargetCounts: Record<string, number> = {};
  for (const e of refEdges) {
    refTargetCounts[e.target] = (refTargetCounts[e.target] || 0) + 1;
  }
  const topReferenced = Object.entries(refTargetCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([nodeId, count]) => {
      const node = graph.nodes.find((n) => n.key === nodeId);
      return { nodeId, label: node?.attributes.label || nodeId, count };
    });

  // Namespace distribution
  const nsNodes = graph.nodes.filter(
    (n) => n.attributes.type === "namespace",
  );
  const nsConnections = nsNodes
    .map((n) => ({
      label: n.attributes.label,
      docs: inDegree[n.key] || 0,
    }))
    .sort((a, b) => (b.docs as number) - (a.docs as number));

  // Print report
  console.log("\n" + "═".repeat(60));
  console.log("  SF DOCUMENTATION KNOWLEDGE GRAPH — STATISTICS");
  console.log("═".repeat(60));

  console.log("\n📦 Node Types:");
  console.log("─".repeat(40));
  const totalNodes = graph.nodes.length;
  for (const [type, count] of Object.entries(nodeTypes).sort(
    (a, b) => b[1] - a[1],
  )) {
    const pct = ((count / totalNodes) * 100).toFixed(1);
    console.log(`  ${type.padEnd(20)} ${String(count).padStart(8)}  (${pct}%)`);
  }
  console.log(`  ${"TOTAL".padEnd(20)} ${String(totalNodes).padStart(8)}`);

  console.log("\n🔗 Edge Types:");
  console.log("─".repeat(40));
  const totalEdges = graph.edges.length;
  for (const [type, count] of Object.entries(edgeTypes).sort(
    (a, b) => b[1] - a[1],
  )) {
    const pct = ((count / totalEdges) * 100).toFixed(1);
    console.log(`  ${type.padEnd(25)} ${String(count).padStart(8)}  (${pct}%)`);
  }
  console.log(`  ${"TOTAL".padEnd(25)} ${String(totalEdges).padStart(8)}`);

  console.log("\n🏷️  Top 20 Keywords (by connections):");
  console.log("─".repeat(40));
  for (const kw of topKeywords) {
    console.log(
      `  ${String(kw.label).padEnd(25)} ${String(kw.connections).padStart(6)} docs`,
    );
  }

  if (topReferenced.length > 0) {
    console.log("\n📄 Top 15 Most-Referenced Documents:");
    console.log("─".repeat(40));
    for (const doc of topReferenced) {
      console.log(
        `  ${String(doc.label).slice(0, 40).padEnd(42)} ${String(doc.count).padStart(5)} refs`,
      );
    }
  }

  if (nsConnections.length > 0) {
    console.log("\n🏗️  Namespaces (by document count):");
    console.log("─".repeat(40));
    for (const ns of nsConnections.slice(0, 20)) {
      console.log(
        `  ${String(ns.label).padEnd(25)} ${String(ns.docs).padStart(6)} docs`,
      );
    }
  }

  // Service categories
  const serviceNodes = graph.nodes.filter(
    (n) => n.attributes.type === "service",
  );
  if (serviceNodes.length > 0) {
    console.log("\n☁️  Service Categories:");
    console.log("─".repeat(40));
    for (const svc of serviceNodes) {
      const connections = inDegree[svc.key] || 0;
      console.log(
        `  ${String(svc.attributes.label).padEnd(25)} ${String(connections).padStart(6)} domains`,
      );
    }
  }

  // Cross-domain density
  const crossDomainRefs = refEdges.filter((e) => {
    const srcDomain = e.source.split(":")[1];
    const tgtDomain = e.target.split(":")[1];
    return srcDomain !== tgtDomain;
  });

  console.log("\n🌐 Cross-Domain Analysis:");
  console.log("─".repeat(40));
  console.log(`  Total reference edges:       ${refEdges.length}`);
  console.log(`  Cross-domain references:     ${crossDomainRefs.length}`);
  console.log(
    `  Within-domain references:    ${refEdges.length - crossDomainRefs.length}`,
  );

  console.log("\n" + "═".repeat(60));
  console.log("  Graph file size: " + (await fs.stat(graphPath)).size.toLocaleString() + " bytes");
  console.log("═".repeat(60) + "\n");
}

main().catch(console.error);
