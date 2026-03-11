import path from "node:path";
import fs from "fs-extra";
import pkg from "graphology";
const { DirectedGraph } = pkg;
import { createChildLogger } from "../utils/logger.js";
import type { TaggedDocument } from "../processors/tagger.js";

const log = createChildLogger("generator:graph-builder");

export class GraphBuilder {
  private graph = new DirectedGraph();
  private readonly knowledgeDir: string;
  private readonly processedDir: string;

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

    // 2. Process each domain
    for (const domain of domains) {
      const manifestPath = path.join(
        this.processedDir,
        domain,
        "manifest.json",
      );
      if (!(await fs.pathExists(manifestPath))) continue;

      const manifest: TaggedDocument[] = await fs.readJson(manifestPath);
      this.buildDomain(domain, manifest);
      documentCount += manifest.length;
    }

    // 3. Export graph to JSON
    await fs.ensureDir(this.knowledgeDir);
    const outputPath = path.join(this.knowledgeDir, "graph.json");

    // graphology has a built-in export method
    const exportedGraph = this.graph.export();
    await fs.writeJson(outputPath, exportedGraph, { spaces: 2 });

    log.info(
      {
        nodes: this.graph.order,
        edges: this.graph.size,
        domainsProcessed: domains.length,
        documentsProcessed: documentCount,
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

    for (const doc of documents) {
      const docNodeId = `doc:${domainId}:${doc.topic}`;

      // Create Document node
      this.addNodeIfNotExists(docNodeId, {
        type: "document",
        label: doc.title,
        docType: doc.metadata.docType,
        url: doc.metadata.sourceUrl,
      });

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

      // Map Keywords
      for (const keyword of doc.metadata.keywords || []) {
        // Normalize keyword for node ID
        const normalizedKw = keyword.toLowerCase().trim();
        if (!normalizedKw || normalizedKw.length < 2) continue;

        const kwNodeId = `keyword:${normalizedKw}`;
        this.addNodeIfNotExists(kwNodeId, {
          type: "keyword",
          label: keyword,
        });

        this.addEdgeIfNotExists(docNodeId, kwNodeId, "tagged_with");
      }
    }
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
