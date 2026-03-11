import fs from "fs-extra";
import path from "node:path";
import { getCollectableDomains } from "../config/domains.js";
import { createChildLogger } from "../utils/logger.js";

const log = createChildLogger("generator:inventory");

export async function generateInventory(
  knowledgeDir = "knowledge/current",
  outputFile = "docs/inventory.md",
): Promise<void> {
  log.info("Generating repository inventory documentation");

  const domains = getCollectableDomains();

  let totalFiles = 0;
  const rows: string[] = [];

  rows.push("# Salesforce Knowledge Inventory");
  rows.push("");
  rows.push(
    "This document is auto-generated and tracks the domains currently available in the knowledge system.",
  );
  rows.push(`*Last Updated: ${new Date().toISOString()}*`);
  rows.push("");
  rows.push("## Available Domains");
  rows.push("");
  rows.push("| Domain ID | Name | Status | Files | Tags |");
  rows.push("|---|---|---|---|---|");

  // Sort by priority (P0 first) then name
  domains.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority.localeCompare(b.priority);
    return a.name.localeCompare(b.name);
  });

  for (const domain of domains) {
    const domainDir = path.join(knowledgeDir, domain.id);
    let fileCount = 0;
    let status = "Not Collected";
    let link = domain.id;

    try {
      if (await fs.pathExists(domainDir)) {
        const files = await fs.readdir(domainDir);
        fileCount = files.filter(
          (f) => f.endsWith(".md") && f !== "_index.md",
        ).length;
        if (fileCount > 0) {
          status = "✅ Available";
          link = `[${domain.id}](../../${knowledgeDir}/${domain.id}/_index.md)`;
          totalFiles += fileCount;
        }
      }
    } catch (err) {
      // ignore
    }

    const tags = domain.tags.join(", ");
    rows.push(
      `| ${link} | **${domain.name}**<br><sub>${domain.priority}</sub> | ${status} | ${fileCount} | *${tags}* |`,
    );
  }

  rows.push("");
  rows.push("## Summary");
  rows.push("");
  rows.push(`- **Total Domains Tracked**: ${domains.length}`);
  rows.push(`- **Total Knowledge Files**: ${totalFiles}`);

  await fs.ensureDir(path.dirname(outputFile));
  await fs.writeFile(outputFile, rows.join("\n"), "utf-8");

  log.info(
    { totalFiles, domains: domains.length },
    "Inventory documentation generated",
  );
}
