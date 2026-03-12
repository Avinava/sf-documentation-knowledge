#!/usr/bin/env node
/**
 * CLI: generate — Generate knowledge output artifacts from processed data.
 *
 * Usage:
 *   npm run generate -- --domain cli-commands
 *   npm run generate                    # Generate for all processed domains
 */
import { Command } from "commander";
import fs from "fs-extra";
import path from "node:path";
import { getDomainById, getCollectableDomains, type DomainConfig } from "../config/domains.js";
import { fetchDocIndex, deliverableToId } from "../collectors/index-fetcher.js";
import { generateContextFiles } from "../generators/context-files.js";
import { GraphBuilder } from "../generators/graph-builder.js";
import { generateInventory } from "../generators/inventory.js";
import { generateReadmeStats } from "../generators/docs-generator.js";
import type { TaggedDocument } from "../processors/tagger.js";
import { createChildLogger } from "../utils/logger.js";

const log = createChildLogger("cli:generate");
const program = new Command();

program
  .name("generate")
  .description("Generate knowledge files, skills, and docs from processed data")
  .option("-d, --domain <id>", "Generate for a specific domain")
  .option(
    "-i, --input <dir>",
    "Input directory for processed data",
    "data/processed",
  )
  .option(
    "-o, --output <dir>",
    "Output directory for knowledge files",
    "knowledge/current",
  )
  .option(
    "--discover",
    "Auto-discover and generate ALL deliverables from the SF index API",
  )
  .action(async (options) => {
    let domains: DomainConfig[] = [];

    if (options.domain) {
      const domain = getDomainById(options.domain);
      if (domain) domains.push(domain);
    } else if (options.discover) {
      log.info("Discovering deliverables from index API for generation...");
      const entries = await fetchDocIndex();
      
      const configuredDomains = getCollectableDomains();
      const configuredAtlas = new Set(configuredDomains.map(d => d.atlas));
      
      domains = [...configuredDomains];
      
      for (const entry of entries) {
        const atlasKey = `atlas.en-us.${entry.deliverable}`;
        if (configuredAtlas.has(atlasKey)) continue;
        
        const serviceName = typeof entry.service === "string" 
          ? entry.service 
          : String(entry.service || "");
          
        domains.push({
          id: deliverableToId(entry.deliverable),
          name: entry.title,
          priority: "P2",
          atlas: atlasKey,
          description: entry.shortdesc?.slice(0, 100) || "",
          tags: [serviceName.toLowerCase().replace(/\s+/g, "-")].filter(Boolean),
        });
      }
      log.info({ count: domains.length }, "Total domains to generate");
    } else {
      domains = getCollectableDomains();
    }

    for (const domain of domains) {
      if (!domain) continue;

      const manifestPath = path.join(options.input, domain.id, "manifest.json");
      if (!(await fs.pathExists(manifestPath))) {
        log.warn(
          { domain: domain.id },
          "No processed data found — run process first",
        );
        continue;
      }

      const documents: TaggedDocument[] = await fs.readJson(manifestPath);
      log.info(
        { domain: domain.id, documentCount: documents.length },
        "Generating knowledge files",
      );

      const result = await generateContextFiles(
        domain,
        documents,
        options.output,
      );
      console.log(
        `✅ ${domain.id}: ${result.filesGenerated} files → ${result.outputDir}`,
      );
    }

    // Always rebuild the knowledge graph on generate
    try {
      const graphBuilder = new GraphBuilder(options.output, options.input);
      await graphBuilder.build();

      // Add service categories from domain tags
      for (const domain of domains) {
        if (!domain) continue;
        if (domain.tags && domain.tags.length > 0) {
          graphBuilder.addServiceCategory(domain.id, domain.tags[0]);
        }
      }

      // Re-export with service categories included
      await graphBuilder.exportGraph();
      console.log(`✅ Knowledge graph built → ${options.output}/graph.json`);
    } catch (err) {
      log.error({ err }, "Failed to build knowledge graph");
    }

    // Always update the inventory documentation
    try {
      await generateInventory(options.output, "docs/inventory.md");
      console.log(`✅ Knowledge inventory built → docs/inventory.md`);
    } catch (err) {
      log.error({ err }, "Failed to build inventory documentation");
    }

    // Always update the README documentation table
    try {
      await generateReadmeStats(options.output, "README.md");
      console.log(`✅ README.md documentation table updated`);
    } catch (err) {
      log.error({ err }, "Failed to update README documentation");
    }
  });

program.parse();
