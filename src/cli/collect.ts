#!/usr/bin/env node
/**
 * CLI: collect — Run collectors for Salesforce documentation.
 *
 * Usage:
 *   npm run collect                    # Collect all P0 domains
 *   npm run collect -- --domain cli-commands  # Collect specific domain
 *   npm run collect -- --all           # Collect all domains
 */
import { Command } from "commander";
import {
  getDomainById,
  getDomainsByPriority,
  getCollectableDomains,
} from "../config/domains.js";
import { AtlasMetaCollector } from "../collectors/atlas-meta.js";
import { createChildLogger } from "../utils/logger.js";
import type { CollectionResult } from "../collectors/base-collector.js";

const log = createChildLogger("cli:collect");
const program = new Command();

program
  .name("collect")
  .description("Collect Salesforce documentation from developer.salesforce.com")
  .option("-d, --domain <id>", "Collect a specific domain by ID")
  .option("-a, --all", "Collect all domains (not just P0)")
  .option("-o, --output <dir>", "Output directory for raw data", "data/raw")
  .action(async (options) => {
    const results: CollectionResult[] = [];

    if (options.domain) {
      // Collect specific domain
      const domain = getDomainById(options.domain);
      if (!domain) {
        console.error(`Unknown domain: ${options.domain}`);
        console.error(
          "Available domains:",
          getCollectableDomains()
            .map((d) => d.id)
            .join(", "),
        );
        process.exit(1);
      }
      const collector = new AtlasMetaCollector(domain, options.output);
      results.push(await collector.run());
    } else {
      // Collect by priority
      const domains = options.all
        ? getCollectableDomains()
        : getDomainsByPriority("P0").filter((d) => d.atlas);

      log.info({ domainCount: domains.length }, "Starting collection");

      for (const domain of domains) {
        try {
          const collector = new AtlasMetaCollector(domain, options.output);
          results.push(await collector.run());
        } catch (err) {
          log.error({ domain: domain.id, err }, "Failed to collect domain");
        }
      }
    }

    // Summary
    console.log("\n--- Collection Summary ---");
    for (const r of results) {
      const status = r.errors.length > 0 ? "⚠️" : "✅";
      console.log(
        `${status} ${r.domain}: ${r.filesCollected} files (${r.durationMs}ms)`,
      );
      if (r.errors.length > 0) {
        r.errors.forEach((e) => console.log(`   ⚠️ ${e}`));
      }
    }
  });

program.parse();
