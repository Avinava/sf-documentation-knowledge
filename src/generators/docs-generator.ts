import fs from "fs-extra";
import path from "node:path";
import { createChildLogger } from "../utils/logger.js";

const log = createChildLogger("generator:docs-generator");

export async function generateReadmeStats(
  knowledgeDir = "knowledge/current",
  readmePath = "README.md",
): Promise<void> {
  log.info("Updating README.md documentation inventory");

  if (!(await fs.pathExists(readmePath))) {
    log.warn("README.md not found");
    return;
  }

  // Scan the actual knowledge directory — not hardcoded domains
  const domainDirs = await fs.readdir(knowledgeDir);
  const rows: string[] = [];
  let totalFiles = 0;
  let totalDomains = 0;

  interface DomainEntry {
    id: string;
    name: string;
    description: string;
    fileCount: number;
  }

  const domains: DomainEntry[] = [];

  for (const dir of domainDirs) {
    const domainPath = path.join(knowledgeDir, dir);
    const stat = await fs.stat(domainPath);
    if (!stat.isDirectory()) continue;

    const indexPath = path.join(domainPath, "_index.md");
    if (!(await fs.pathExists(indexPath))) continue;

    const indexContent = await fs.readFile(indexPath, "utf-8");

    // Parse name from frontmatter
    const nameMatch = indexContent.match(/name:\s*(.+)/);
    const name = nameMatch?.[1]?.trim() || dir;

    // Parse description from blockquote
    const descMatch = indexContent.match(/^>\s*(.+)$/m);
    const description = descMatch?.[1]?.trim().slice(0, 80) || "";

    // Count files
    const files = await fs.readdir(domainPath);
    const fileCount = files.filter(
      (f) => f.endsWith(".md") && f !== "_index.md",
    ).length;

    if (fileCount > 0) {
      totalFiles += fileCount;
      totalDomains++;
      domains.push({ id: dir, name, description, fileCount });
    }
  }

  // Sort by file count desc, show top 30 in README + summary row
  domains.sort((a, b) => b.fileCount - a.fileCount);

  // Build the new markdown table
  rows.push("| Domain | Description | Status | Files |");
  rows.push("|---|---|---|---|");

  const displayDomains = domains.slice(0, 30);
  const remaining = domains.slice(30);

  for (const domain of displayDomains) {
    rows.push(
      `| **${domain.name}** | ${domain.description.replace(/\|/g, "\\|")} | ✅ Available | ${domain.fileCount} |`,
    );
  }

  if (remaining.length > 0) {
    const remainingFiles = remaining.reduce((s, d) => s + d.fileCount, 0);
    rows.push(
      `| *+ ${remaining.length} more domains* | *See [full inventory](docs/inventory.md)* | ✅ Available | *${remainingFiles.toLocaleString()}* |`,
    );
  }

  rows.push("");
  rows.push(
    `*${totalDomains} domains | ${totalFiles.toLocaleString()} knowledge files*`,
  );

  // Read existing README
  let readmeContent = await fs.readFile(readmePath, "utf-8");

  const markerStart = "<!-- INVENTORY:START -->";
  const markerEnd = "<!-- INVENTORY:END -->";

  if (
    readmeContent.includes(markerStart) &&
    readmeContent.includes(markerEnd)
  ) {
    const regex = new RegExp(`${markerStart}[\\s\\S]*?${markerEnd}`);
    readmeContent = readmeContent.replace(
      regex,
      `${markerStart}\n${rows.join("\n")}\n${markerEnd}`,
    );
  } else {
    const docSectionIndex = readmeContent.indexOf("## Documentation");
    if (docSectionIndex !== -1) {
      readmeContent =
        readmeContent.substring(0, docSectionIndex) +
        "## Documentation\n\n" +
        `${markerStart}\n${rows.join("\n")}\n${markerEnd}\n`;
    } else {
      readmeContent += `\n## Documentation\n\n${markerStart}\n${rows.join("\n")}\n${markerEnd}\n`;
    }
  }

  await fs.writeFile(readmePath, readmeContent, "utf-8");
  log.info({ totalFiles, totalDomains }, "README.md updated successfully");
}
