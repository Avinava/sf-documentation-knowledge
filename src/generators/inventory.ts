import fs from "fs-extra";
import path from "node:path";
import { createChildLogger } from "../utils/logger.js";

const log = createChildLogger("generator:inventory");

interface DomainSummary {
  id: string;
  name: string;
  description: string;
  fileCount: number;
  documentCount: number;
}

/**
 * Parse frontmatter from an _index.md file to extract domain metadata.
 */
function parseIndexFrontmatter(content: string): {
  name: string;
  description: string;
  documentCount: number;
} {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return { name: "", description: "", documentCount: 0 };

  const fm = fmMatch[1];
  const name = fm.match(/name:\s*(.+)/)?.[1]?.trim() || "";
  const documentCount = parseInt(
    fm.match(/documentCount:\s*(\d+)/)?.[1] || "0",
    10,
  );

  // Read description from the blockquote after the heading
  const descMatch = content.match(/^>\s*(.+)$/m);
  const description = descMatch?.[1]?.trim() || "";

  return { name, description, documentCount };
}

export async function generateInventory(
  knowledgeDir = "knowledge/current",
  outputFile = "docs/inventory.md",
): Promise<void> {
  log.info("Generating repository inventory documentation");

  // Scan the actual knowledge directory — not hardcoded domains
  const domainDirs = await fs.readdir(knowledgeDir);
  const summaries: DomainSummary[] = [];

  for (const dir of domainDirs) {
    const domainPath = path.join(knowledgeDir, dir);
    const stat = await fs.stat(domainPath);
    if (!stat.isDirectory()) continue;

    const indexPath = path.join(domainPath, "_index.md");
    if (!(await fs.pathExists(indexPath))) continue;

    const indexContent = await fs.readFile(indexPath, "utf-8");
    const { name, description, documentCount } =
      parseIndexFrontmatter(indexContent);

    const files = await fs.readdir(domainPath);
    const fileCount = files.filter(
      (f) => f.endsWith(".md") && f !== "_index.md",
    ).length;

    summaries.push({
      id: dir,
      name: name || dir,
      description: description.slice(0, 80),
      fileCount,
      documentCount,
    });
  }

  // Sort by file count desc
  summaries.sort((a, b) => b.fileCount - a.fileCount);

  let totalFiles = 0;
  const rows: string[] = [];

  rows.push("# Salesforce Knowledge Inventory");
  rows.push("");
  rows.push(
    "This document is auto-generated and tracks all domains available in the knowledge system.",
  );
  rows.push(`*Last Updated: ${new Date().toISOString()}*`);
  rows.push("");
  rows.push(`**${summaries.length} Domains** | **${summaries.reduce((s, d) => s + d.fileCount, 0).toLocaleString()} Knowledge Files**`);
  rows.push("");
  rows.push("## Available Domains");
  rows.push("");
  rows.push("| Domain | Name | Files | Description |");
  rows.push("|---|---|---|---|");

  for (const domain of summaries) {
    totalFiles += domain.fileCount;
    const link = `[${domain.id}](../../${knowledgeDir}/${domain.id}/_index.md)`;
    rows.push(
      `| ${link} | **${domain.name}** | ${domain.fileCount} | ${domain.description.replace(/\|/g, "\\|")} |`,
    );
  }

  rows.push("");

  await fs.ensureDir(path.dirname(outputFile));
  await fs.writeFile(outputFile, rows.join("\n"), "utf-8");

  log.info(
    { totalFiles, domains: summaries.length },
    "Inventory documentation generated",
  );
}
