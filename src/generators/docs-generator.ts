import fs from "fs-extra";
import path from "node:path";
import { getCollectableDomains } from "../config/domains.js";
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

  const domains = getCollectableDomains();
  const rows: string[] = [];
  let totalFiles = 0;

  // Build the new markdown table
  rows.push("| Domain | Description | Status | Files |");
  rows.push("|---|---|---|---|");

  domains.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority.localeCompare(b.priority);
    return a.name.localeCompare(b.name);
  });

  for (const domain of domains) {
    const domainDir = path.join(knowledgeDir, domain.id);
    let fileCount = 0;
    let status = "Not Collected";

    try {
      if (await fs.pathExists(domainDir)) {
        const files = await fs.readdir(domainDir);
        fileCount = files.filter(
          (f) => f.endsWith(".md") && f !== "_index.md",
        ).length;
        if (fileCount > 0) {
          status = "✅ Available";
          totalFiles += fileCount;
        }
      }
    } catch (err) {
      // ignore
    }

    // Use HTML breaks to keep the table compact
    rows.push(
      `| **${domain.name}** | ${domain.description} | ${status} | ${fileCount} |`,
    );
  }

  // Read existing README
  let readmeContent = await fs.readFile(readmePath, "utf-8");

  // Replace the table between markers (or under the ## Documentation header)
  const startMarker =
    "## Documentation\\n\\n| Document | Description |\\n|---|---|";
  // We will place a marker to make future replacements easier
  const markerStart = "<!-- INVENTORY:START -->";
  const markerEnd = "<!-- INVENTORY:END -->";

  if (
    readmeContent.includes(markerStart) &&
    readmeContent.includes(markerEnd)
  ) {
    // Replce existing marker block
    const regex = new RegExp(`${markerStart}[\\s\\S]*?${markerEnd}`);
    readmeContent = readmeContent.replace(
      regex,
      `${markerStart}\n${rows.join("\n")}\n${markerEnd}`,
    );
  } else {
    // Append to the end or replace a known section if markers don't exist
    const docSectionIndex = readmeContent.indexOf("## Documentation");
    if (docSectionIndex !== -1) {
      // Just append it after the Documentation header
      readmeContent =
        readmeContent.substring(0, docSectionIndex) +
        "## Documentation\n\n" +
        `${markerStart}\n${rows.join("\n")}\n${markerEnd}\n\n` +
        `*Total Domains: ${domains.length} | Total Knowledge Files: ${totalFiles}*\n`;
    } else {
      readmeContent += `\n## Documentation\n\n${markerStart}\n${rows.join("\n")}\n${markerEnd}\n`;
    }
  }

  await fs.writeFile(readmePath, readmeContent, "utf-8");
  log.info({ totalFiles }, "README.md updated successfully");
}
