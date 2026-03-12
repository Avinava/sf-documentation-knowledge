#!/usr/bin/env node
/**
 * CLI: collect — Run collectors for Salesforce documentation.
 *
 * Usage:
 *   npm run collect                           # Collect all P0 domains
 *   npm run collect -- --domain cli-commands  # Collect specific domain
 *   npm run collect -- --all                  # Collect all configured domains
 *   npm run collect -- --discover             # Discover + collect ALL deliverables from the SF index API
 */
import { Command } from "commander";
import {
  getDomainById,
  getDomainsByPriority,
  getCollectableDomains,
  type DomainConfig,
} from "../config/domains.js";
import { AtlasMetaCollector } from "../collectors/atlas-meta.js";
import {
  fetchDocIndex,
  deliverableToId,
} from "../collectors/index-fetcher.js";
import { createChildLogger } from "../utils/logger.js";
import type { CollectionResult } from "../collectors/base-collector.js";

const log = createChildLogger("cli:collect");
const program = new Command();

program
  .name("collect")
  .description("Collect Salesforce documentation from developer.salesforce.com")
  .option("-d, --domain <id>", "Collect a specific domain by ID")
  .option("-a, --all", "Collect all configured domains (not just P0)")
  .option(
    "--discover",
    "Auto-discover and collect ALL deliverables from the SF index API",
  )
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
    } else if (options.discover) {
      // Auto-discover ALL deliverables from the index API
      const entries = await fetchDocIndex();
      log.info(
        { count: entries.length },
        "Discovered deliverables from SF index API",
      );

      // Build set of already-configured domain IDs for dedup
      const configuredAtlas = new Set(
        getCollectableDomains().map((d) => d.atlas),
      );

      // Collect configured domains first (they may have pathFilters etc.)
      const configuredDomains = getCollectableDomains();
      for (const domain of configuredDomains) {
        try {
          const collector = new AtlasMetaCollector(domain, options.output);
          results.push(await collector.run());
        } catch (err) {
          log.error({ domain: domain.id, err }, "Failed to collect domain");
        }
      }

      // Collect remaining discovered deliverables as dynamic domains
      for (const entry of entries) {
        const atlasKey = `atlas.en-us.${entry.deliverable}`;
        if (configuredAtlas.has(atlasKey)) continue; // Already collected above

        const dynamicDomain: DomainConfig = {
          id: deliverableToId(entry.deliverable),
          name: entry.title,
          priority: "P2",
          atlas: atlasKey,
          description: entry.shortdesc.slice(0, 100),
          tags: [entry.service.toLowerCase().replace(/\s+/g, "-")].filter(
            Boolean,
          ),
        };

        try {
          log.info(
            { id: dynamicDomain.id, name: dynamicDomain.name },
            "Collecting discovered deliverable",
          );
          const collector = new AtlasMetaCollector(
            dynamicDomain,
            options.output,
          );
          results.push(await collector.run());
        } catch (err) {
          log.error(
            { domain: dynamicDomain.id, err },
            "Failed to collect discovered deliverable",
          );
        }
      }
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
    let totalFiles = 0;
    let totalErrors = 0;
    for (const r of results) {
      const status = r.errors.length > 0 ? "⚠️" : "✅";
      console.log(
        `${status} ${r.domain}: ${r.filesCollected} files (${r.durationMs}ms)`,
      );
      if (r.errors.length > 0) {
        r.errors.forEach((e) => console.log(`   ⚠️ ${e}`));
      }
      totalFiles += r.filesCollected;
      totalErrors += r.errors.length;
    }
    console.log(
      `\nTotal: ${results.length} domains, ${totalFiles} files, ${totalErrors} errors`,
    );
  });

program.parse();
