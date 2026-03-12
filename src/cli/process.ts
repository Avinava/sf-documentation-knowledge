#!/usr/bin/env node
/**
 * CLI: process — Process raw collected data into tagged documents.
 *
 * Usage:
 *   npm run process -- --domain cli-commands
 *   npm run process                    # Process all collected domains
 */
import { Command } from "commander";
import fs from "fs-extra";
import path from "node:path";
import { getDomainById, getCollectableDomains, type DomainConfig } from "../config/domains.js";
import { fetchDocIndex, deliverableToId } from "../collectors/index-fetcher.js";
import { processAtlasContent } from "../processors/html-to-markdown.js";
import { tagDocument } from "../processors/tagger.js";
import type { TaggedDocument } from "../processors/tagger.js";
import { createChildLogger } from "../utils/logger.js";

const log = createChildLogger("cli:process");
const program = new Command();

program
  .name("process")
  .description("Process raw collected documentation into tagged Markdown")
  .option("-d, --domain <id>", "Process a specific domain")
  .option("-i, --input <dir>", "Input directory for raw data", "data/raw")
  .option(
    "-o, --output <dir>",
    "Output directory for processed data",
    "data/processed",
  )
  .option(
    "--discover",
    "Auto-discover and process ALL deliverables from the SF index API",
  )
  .action(async (options) => {
    let domains: DomainConfig[] = [];

    if (options.domain) {
      const domain = getDomainById(options.domain);
      if (domain) domains.push(domain);
    } else if (options.discover) {
      log.info("Discovering deliverables from index API for processing...");
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
      log.info({ count: domains.length }, "Total domains to process");
    } else {
      domains = getCollectableDomains();
    }

    if (domains.length === 0) {
      console.error("No domains found to process");
      process.exit(1);
    }

    for (const domain of domains) {
      if (!domain) continue;

      const rawDir = path.join(options.input, domain.id);
      if (!(await fs.pathExists(rawDir))) {
        log.warn(
          { domain: domain.id, rawDir },
          "No raw data found — run collect first",
        );
        continue;
      }

      const outputDir = path.join(options.output, domain.id);
      await fs.ensureDir(outputDir);

      const files = (await fs.readdir(rawDir)).filter(
        (f: string) => f.endsWith(".json") && f !== "_metadata.json",
      );

      log.info(
        { domain: domain.id, fileCount: files.length },
        "Processing raw files",
      );

      const allDocs: TaggedDocument[] = [];

      for (const file of files) {
        try {
          const rawData = await fs.readJson(path.join(rawDir, file));
          const parsed = processAtlasContent(rawData);

          for (const doc of parsed) {
            const tagged = tagDocument(doc, domain);
            allDocs.push(tagged);
          }
        } catch (err) {
          log.warn({ file, err }, "Failed to process file");
        }
      }

      // Write all tagged documents as a manifest
      await fs.writeJson(path.join(outputDir, "manifest.json"), allDocs, {
        spaces: 2,
      });
      log.info(
        { domain: domain.id, documentCount: allDocs.length },
        "Processing complete",
      );
    }
  });

program.parse();
