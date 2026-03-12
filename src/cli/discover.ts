#!/usr/bin/env node
/**
 * CLI: discover — Find all available Salesforce documentation deliverables.
 *
 * Usage:
 *   npm run discover                 # List all available deliverables
 *   npm run discover -- --new        # Show only deliverables not yet configured
 *   npm run discover -- --add-all    # Auto-add all missing deliverables to domains.ts
 */
import { Command } from "commander";
import {
  fetchDocIndex,
  deliverableToId,
  type IndexEntry,
} from "../collectors/index-fetcher.js";
import { getCollectableDomains } from "../config/domains.js";


const program = new Command();

program
  .name("discover")
  .description("Discover available Salesforce documentation deliverables")
  .option("-n, --new", "Show only deliverables not yet configured as domains")
  .option(
    "-j, --json",
    "Output as JSON (useful for piping to other commands)",
  )
  .option(
    "--generate-config",
    "Generate domain config entries for unconfigured deliverables",
  )
  .action(async (options) => {
    const entries = await fetchDocIndex();

    // Build set of already-configured deliverables
    const configured = new Set(
      getCollectableDomains().map((d) => d.atlas?.replace("atlas.en-us.", "")),
    );

    if (options.new) {
      const newEntries = entries.filter(
        (e) => !configured.has(e.deliverable),
      );
      console.log(
        `\n📋 ${newEntries.length} unconfigured deliverables (out of ${entries.length} total):\n`,
      );
      printEntries(newEntries);

      if (options.generateConfig) {
        console.log("\n--- Generated domain configs ---\n");
        for (const entry of newEntries) {
          printDomainConfig(entry);
        }
      }
    } else {
      console.log(
        `\n📚 ${entries.length} total Salesforce documentation deliverables:\n`,
      );

      // Show configured vs unconfigured
      const configuredEntries: IndexEntry[] = [];
      const unconfiguredEntries: IndexEntry[] = [];
      for (const entry of entries) {
        if (configured.has(entry.deliverable)) {
          configuredEntries.push(entry);
        } else {
          unconfiguredEntries.push(entry);
        }
      }

      if (configuredEntries.length > 0) {
        console.log(`✅ Configured (${configuredEntries.length}):`);
        printEntries(configuredEntries);
        console.log();
      }

      if (unconfiguredEntries.length > 0) {
        console.log(`📦 Available to add (${unconfiguredEntries.length}):`);
        printEntries(unconfiguredEntries);
      }
    }

    if (options.json) {
      console.log(JSON.stringify(entries, null, 2));
    }
  });

function printEntries(entries: IndexEntry[]) {
  // Group by service category
  const byService = new Map<string, IndexEntry[]>();
  for (const entry of entries) {
    const svc = entry.service || "Other";
    if (!byService.has(svc)) byService.set(svc, []);
    byService.get(svc)!.push(entry);
  }

  for (const [service, items] of [...byService.entries()].sort()) {
    console.log(`\n  ${service}:`);
    for (const item of items.sort((a, b) => a.title.localeCompare(b.title))) {
      const desc = item.shortdesc
        ? ` — ${item.shortdesc.slice(0, 80)}${item.shortdesc.length > 80 ? "..." : ""}`
        : "";
      console.log(`    ${deliverableToId(item.deliverable).padEnd(50)} ${item.title}${desc}`);
    }
  }
}

function printDomainConfig(entry: IndexEntry) {
  const id = deliverableToId(entry.deliverable);
  const tags = [entry.service.toLowerCase().replace(/\s+/g, "-")].filter(
    Boolean,
  );

  console.log(`  {
    id: "${id}",
    name: "${entry.title}",
    priority: "P2",
    atlas: "atlas.en-us.${entry.deliverable}",
    description: "${entry.shortdesc.slice(0, 100).replace(/"/g, '\\"')}",
    tags: ${JSON.stringify(tags)},
  },`);
}

program.parse();
