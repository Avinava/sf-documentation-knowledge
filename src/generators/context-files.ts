/**
 * Context File Generator — Produces curated Markdown files for LLM consumption.
 *
 * This is the core of our Context Engineering approach:
 * - Each domain gets an _index.md routing table
 * - Each topic gets a self-contained .md file (2-4K tokens)
 * - Files are structured with frontmatter metadata
 * - Code examples and cross-references are preserved
 * - Index is deduplicated (one row per file)
 */
import fs from "fs-extra";
import path from "node:path";
import { createChildLogger } from "../utils/logger.js";
import type { TaggedDocument } from "../processors/tagger.js";
import type { DomainConfig } from "../config/domains.js";

const log = createChildLogger("generator:context-files");

export interface GenerationResult {
  domain: string;
  filesGenerated: number;
  outputDir: string;
}

/**
 * Generate context files for a domain from tagged documents.
 */
export async function generateContextFiles(
  domain: DomainConfig,
  documents: TaggedDocument[],
  outputBaseDir = "knowledge/current",
): Promise<GenerationResult> {
  const outputDir = path.join(outputBaseDir, domain.id);
  await fs.ensureDir(outputDir);

  let filesGenerated = 0;

  // Deduplicate documents by topic — merge when same topic appears multiple times
  const deduped = deduplicateDocuments(documents);

  // 1. Generate individual topic files
  for (const doc of deduped) {
    const filename = sanitizeFilename(doc.topic) + ".md";
    const filePath = path.join(outputDir, filename);

    const content = formatContextFile(doc);
    await fs.writeFile(filePath, content, "utf-8");
    filesGenerated++;
  }

  // 2. Generate _index.md routing table (deduplicated)
  const indexContent = generateIndex(domain, deduped);
  await fs.writeFile(path.join(outputDir, "_index.md"), indexContent, "utf-8");
  filesGenerated++;

  // 3. Generate SKILL.md for Agent access
  const skillContent = generateSkill(domain);
  const skillDir = path.join("skills", domain.id);
  await fs.ensureDir(skillDir);
  await fs.writeFile(path.join(skillDir, "SKILL.md"), skillContent, "utf-8");
  filesGenerated++;

  log.info(
    {
      domain: domain.id,
      filesGenerated,
      outputDir,
      totalDocs: documents.length,
      dedupedDocs: deduped.length,
    },
    "Context files generated",
  );

  return { domain: domain.id, filesGenerated, outputDir };
}

/**
 * Deduplicate documents with the same topic. Merges content, keywords,
 * code examples, and cross-references from duplicates.
 */
function deduplicateDocuments(documents: TaggedDocument[]): TaggedDocument[] {
  const byTopic = new Map<string, TaggedDocument>();

  for (const doc of documents) {
    const existing = byTopic.get(doc.topic);
    if (!existing) {
      byTopic.set(doc.topic, { ...doc });
    } else {
      // Merge: keep longer content, combine keywords, examples, refs
      if (doc.content.length > existing.content.length) {
        existing.content = doc.content;
        existing.shortDescription =
          doc.shortDescription || existing.shortDescription;
        existing.sectionCount = Math.max(
          existing.sectionCount,
          doc.sectionCount,
        );
      }

      // Merge keywords
      const mergedKeywords = [
        ...new Set([...existing.metadata.keywords, ...doc.metadata.keywords]),
      ].slice(0, 20);
      existing.metadata.keywords = mergedKeywords;

      // Merge code examples
      const mergedExamples = [
        ...new Set([...existing.codeExamples, ...doc.codeExamples]),
      ];
      existing.codeExamples = mergedExamples;

      // Merge cross-references
      const mergedRefs = [
        ...new Set([...existing.crossReferences, ...doc.crossReferences]),
      ].slice(0, 20);
      existing.crossReferences = mergedRefs;

      // Use longer namespace
      if (!existing.namespace && doc.namespace) {
        existing.namespace = doc.namespace;
      }
    }
  }

  return Array.from(byTopic.values());
}

/**
 * Format a single context file with frontmatter metadata and enriched content.
 */
function formatContextFile(doc: TaggedDocument): string {
  const lines: string[] = [];

  // YAML frontmatter
  lines.push("---");
  lines.push(`title: "${doc.title.replace(/"/g, '\\"')}"`);
  lines.push(`domain: ${doc.domain}`);
  lines.push(`topic: ${doc.topic}`);
  lines.push(`apiVersion: ${doc.metadata.apiVersion}`);
  lines.push(`release: ${doc.metadata.release}`);
  lines.push(`docType: ${doc.metadata.docType}`);
  lines.push(`lastCollected: ${doc.metadata.lastCollected}`);
  lines.push(`estimatedTokens: ${doc.metadata.estimatedTokens}`);
  if (doc.namespace) {
    lines.push(`namespace: ${doc.namespace}`);
  }
  if (doc.metadata.keywords.length > 0) {
    lines.push(`keywords: [${doc.metadata.keywords.join(", ")}]`);
  }
  lines.push("---");
  lines.push("");

  // Title
  lines.push(`# ${doc.title}`);
  lines.push("");

  // Short description as blockquote
  if (doc.shortDescription) {
    lines.push(`> ${doc.shortDescription}`);
    lines.push("");
  }

  // Namespace info (for API reference docs)
  if (doc.namespace) {
    lines.push(`**Namespace:** \`${doc.namespace}\``);
    lines.push("");
  }

  // Main content
  lines.push(doc.content);
  lines.push("");

  // Code Examples section (if there are examples not already in content)
  if (doc.codeExamples.length > 0) {
    // Only add examples that aren't already embedded in the main content
    const newExamples = doc.codeExamples.filter(
      (ex) => !doc.content.includes(ex.slice(0, 50)),
    );
    if (newExamples.length > 0) {
      lines.push("## Code Examples");
      lines.push("");
      for (const example of newExamples.slice(0, 5)) {
        const lang = looksLikeApex(example) ? "apex" : "";
        lines.push(`\`\`\`${lang}`);
        lines.push(example);
        lines.push("```");
        lines.push("");
      }
    }
  }

  // Related Topics section (from cross-references)
  if (doc.crossReferences.length > 0) {
    lines.push("## Related Topics");
    lines.push("");
    for (const ref of doc.crossReferences.slice(0, 10)) {
      lines.push(`- ${ref}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

/** Simple Apex detection for code example formatting */
function looksLikeApex(code: string): boolean {
  return /\b(public|private|global|System\.|Database\.|List<|Map<)/.test(code);
}

/**
 * Generate the _index.md routing table for a domain.
 * This is what LLMs read first to decide which files to load.
 * DEDUPLICATED — one row per file.
 */
function generateIndex(
  domain: DomainConfig,
  documents: TaggedDocument[],
): string {
  const lines: string[] = [];

  lines.push("---");
  lines.push(`domain: ${domain.id}`);
  lines.push(`name: ${domain.name}`);
  lines.push(`documentCount: ${documents.length}`);
  lines.push(`lastGenerated: ${new Date().toISOString()}`);
  lines.push("---");
  lines.push("");
  lines.push(`# ${domain.name} — Knowledge Index`);
  lines.push("");
  lines.push(`> ${domain.description}`);
  lines.push("");
  lines.push("## Available Topics");
  lines.push("");
  lines.push("| File | Title | Type | Description |");
  lines.push("|---|---|---|---|");

  // Sort by title for consistency
  const sorted = [...documents].sort((a, b) => a.title.localeCompare(b.title));

  // One row per file (documents are already deduplicated)
  for (const doc of sorted) {
    const filename = sanitizeFilename(doc.topic) + ".md";
    const desc = doc.shortDescription
      ? doc.shortDescription.slice(0, 80).replace(/\|/g, "\\|")
      : doc.metadata.keywords.slice(0, 3).join(", ");
    lines.push(
      `| [${filename}](./${filename}) | ${doc.title} | ${doc.metadata.docType} | ${desc} |`,
    );
  }

  lines.push("");
  lines.push("## How to Use");
  lines.push("");
  lines.push("1. Read this index to find the relevant topic for your question");
  lines.push("2. Load the specific topic file(s) for detailed information");
  lines.push(
    "3. Each file is self-contained — no need to load other files for context",
  );
  lines.push("");
  lines.push(`*Tags: ${domain.tags.join(", ")}*`);

  return lines.join("\n");
}

/** Sanitize a string into a valid filename */
function sanitizeFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

/**
 * Generate a SKILL.md file for the AI Agent to understand how to use this domain.
 */
function generateSkill(domain: DomainConfig): string {
  const lines: string[] = [];
  lines.push("---");
  lines.push(`name: sf-knowledge-${domain.id}`);
  lines.push(
    `description: Apply Salesforce knowledge and best practices for ${domain.name}`,
  );
  lines.push("---");
  lines.push("");
  lines.push(`# Salesforce Knowledge Skill: ${domain.name}`);
  lines.push("");
  lines.push(`> ${domain.description}`);
  lines.push("");
  lines.push(
    `This repository contains curated, accurate knowledge mapping for Salesforce **${domain.name}**.`,
  );
  lines.push("");
  lines.push("## How to Use This Knowledge");
  lines.push("");
  lines.push(
    `1. **Use the \`view_file\` tool** to read the index file at \`knowledge/current/${domain.id}/_index.md\`.`,
  );
  lines.push(
    "2. **Identify relevant topics** from the Markdown table in the index.",
  );
  lines.push(
    `3. **Read the specific topic files** in \`knowledge/current/${domain.id}/\` (e.g. \`knowledge/current/${domain.id}/topic-name.md\`) to get detailed implementation steps, JSON formats, or API references.`,
  );
  lines.push(
    "4. Do not blindly search the web when you can just read the curated, hallucination-free Markdown files provided here.",
  );
  lines.push("");
  lines.push("## Domain Topics & Tags");
  lines.push(domain.tags.map((t) => `- ${t}`).join("\n"));
  lines.push("");
  return lines.join("\n");
}
