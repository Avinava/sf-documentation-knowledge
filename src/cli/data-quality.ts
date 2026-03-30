#!/usr/bin/env node
/**
 * CLI: data-quality — Audit knowledge files for quality issues.
 *
 * Usage:
 *   npm run quality          # Run full audit
 *   npm run quality -- -d apex-guide   # Audit a specific domain
 */
import { Command } from "commander";
import fs from "fs-extra";
import path from "node:path";
import { createChildLogger } from "../utils/logger.js";

const log = createChildLogger("cli:data-quality");
const program = new Command();

interface AuditResult {
  domain: string;
  totalFiles: number;
  issues: AuditIssue[];
}

interface AuditIssue {
  file: string;
  type:
    | "stub-file"
    | "duplicate-title"
    | "broken-xref"
    | "missing-frontmatter"
    | "token-heavy"
    | "duplicate-heading"
    | "weak-keywords";
  detail: string;
}

const KNOWLEDGE_DIR = path.resolve(
  process.env.SF_KNOWLEDGE_DIR || "knowledge/current",
);

async function auditDomain(domainId: string): Promise<AuditResult> {
  const domainPath = path.join(KNOWLEDGE_DIR, domainId);
  const result: AuditResult = { domain: domainId, totalFiles: 0, issues: [] };

  if (!(await fs.pathExists(domainPath))) {
    log.warn({ domainId }, "Domain directory not found");
    return result;
  }

  const files = (await fs.readdir(domainPath)).filter(
    (f) => f.endsWith(".md") && f !== "_index.md",
  );
  result.totalFiles = files.length;

  // Track titles for duplicate detection
  const titleMap = new Map<string, string[]>();

  for (const file of files) {
    const filePath = path.join(domainPath, file);
    let content: string;
    try {
      content = await fs.readFile(filePath, "utf-8");
    } catch {
      continue;
    }

    const lines = content.split("\n");

    // Check 1: Missing or malformed frontmatter
    if (!content.startsWith("---")) {
      result.issues.push({
        file,
        type: "missing-frontmatter",
        detail: "File does not start with YAML frontmatter",
      });
    }

    // Check 2: Stub files (very little content after frontmatter)
    const fmEnd = content.indexOf("---", 4);
    if (fmEnd > 0) {
      const body = content.slice(fmEnd + 3).trim();
      if (body.length < 100) {
        result.issues.push({
          file,
          type: "stub-file",
          detail: `Only ${body.length} chars of content after frontmatter`,
        });
      }
    }

    // Check 3: Duplicate H1 heading (title repeated as H1 and blockquote)
    const h1Lines = lines.filter((l) => l.startsWith("# "));
    if (h1Lines.length > 1) {
      const titles = h1Lines.map((l) => l.replace(/^#+\s*/, "").trim());
      const unique = new Set(titles);
      if (unique.size < titles.length) {
        result.issues.push({
          file,
          type: "duplicate-heading",
          detail: `H1 heading "${titles[0]}" appears ${titles.length} times`,
        });
      }
    }

    // Check 4: Broken cross-references (raw atlas URIs)
    const atlasRefs = content.match(
      /atlas\.en-us\.\w+\.meta\/\w+\/[\w.-]+\.htm/g,
    );
    if (atlasRefs && atlasRefs.length > 0) {
      result.issues.push({
        file,
        type: "broken-xref",
        detail: `${atlasRefs.length} raw atlas URI(s) — not resolvable by agents`,
      });
    }

    // Check 5: Token-heavy files (estimated > 8000 tokens)
    const fmMatch = content.match(/estimatedTokens:\s*(\d+)/);
    if (fmMatch) {
      const tokens = parseInt(fmMatch[1], 10);
      if (tokens > 8000) {
        result.issues.push({
          file,
          type: "token-heavy",
          detail: `~${tokens} tokens — may overwhelm agent context`,
        });
      }
    }

    // Check 6: Weak keywords (just first few words of title)
    const kwMatch = content.match(/keywords:\s*\[([^\]]*)\]/);
    if (kwMatch) {
      const keywords = kwMatch[1]
        .split(",")
        .map((k) => k.trim().replace(/"/g, ""));
      if (
        keywords.length <= 3 ||
        keywords.every((k) => k.length < 5)
      ) {
        result.issues.push({
          file,
          type: "weak-keywords",
          detail: `Only ${keywords.length} keywords: [${keywords.join(", ")}]`,
        });
      }
    }

    // Track titles for duplicate detection across files
    const titleMatch = content.match(/title:\s*"?([^"\n]+)"?/);
    if (titleMatch) {
      const title = titleMatch[1].trim();
      if (!titleMap.has(title)) titleMap.set(title, []);
      titleMap.get(title)!.push(file);
    }
  }

  // Check cross-domain title duplicates
  for (const [title, fileList] of titleMap) {
    if (fileList.length > 1) {
      result.issues.push({
        file: fileList.join(", "),
        type: "duplicate-title",
        detail: `Title "${title}" appears in ${fileList.length} files`,
      });
    }
  }

  return result;
}

program
  .name("data-quality")
  .description("Audit knowledge files for quality issues")
  .option("-d, --domain <id>", "Audit a specific domain")
  .option("-j, --json", "Output as JSON")
  .action(async (options) => {
    const domains: string[] = [];

    if (options.domain) {
      domains.push(options.domain);
    } else {
      const entries = await fs.readdir(KNOWLEDGE_DIR);
      for (const entry of entries) {
        const stat = await fs.stat(path.join(KNOWLEDGE_DIR, entry));
        if (stat.isDirectory()) domains.push(entry);
      }
    }

    log.info({ domainCount: domains.length }, "Starting quality audit");

    const results: AuditResult[] = [];
    for (const domain of domains) {
      results.push(await auditDomain(domain));
    }

    if (options.json) {
      console.log(JSON.stringify(results, null, 2));
      return;
    }

    // Summary report
    const totalFiles = results.reduce((s, r) => s + r.totalFiles, 0);
    const totalIssues = results.reduce((s, r) => s + r.issues.length, 0);

    // Group by issue type
    const byType = new Map<string, number>();
    for (const r of results) {
      for (const issue of r.issues) {
        byType.set(issue.type, (byType.get(issue.type) || 0) + 1);
      }
    }

    console.log("\n╔═══════════════════════════════════════╗");
    console.log("║    Knowledge Data Quality Report      ║");
    console.log("╚═══════════════════════════════════════╝\n");
    console.log(`📁 Domains audited: ${results.length}`);
    console.log(`📄 Files audited:   ${totalFiles}`);
    console.log(`⚠️  Total issues:    ${totalIssues}\n`);

    console.log("--- Issues by Type ---\n");
    for (const [type, count] of [...byType.entries()].sort(
      (a, b) => b[1] - a[1],
    )) {
      const icon =
        type === "broken-xref"
          ? "🔗"
          : type === "stub-file"
            ? "📋"
            : type === "duplicate-heading"
              ? "🔄"
              : type === "token-heavy"
                ? "📏"
                : type === "weak-keywords"
                  ? "🏷️"
                  : type === "duplicate-title"
                    ? "👯"
                    : "❓";
      console.log(`  ${icon} ${type}: ${count}`);
    }

    // Top offenders (domains with most issues)
    const topDomains = results
      .filter((r) => r.issues.length > 0)
      .sort((a, b) => b.issues.length - a.issues.length)
      .slice(0, 10);

    if (topDomains.length > 0) {
      console.log("\n--- Top 10 Domains by Issue Count ---\n");
      for (const r of topDomains) {
        console.log(`  ${r.domain}: ${r.issues.length} issues (${r.totalFiles} files)`);
      }
    }

    // Detailed issues for specific domain audit
    if (options.domain) {
      const r = results[0];
      if (r.issues.length > 0) {
        console.log(`\n--- Detailed Issues for ${r.domain} ---\n`);
        for (const issue of r.issues.slice(0, 50)) {
          console.log(`  [${issue.type}] ${issue.file}: ${issue.detail}`);
        }
        if (r.issues.length > 50) {
          console.log(`  ... and ${r.issues.length - 50} more issues`);
        }
      }
    }
  });

program.parse();
