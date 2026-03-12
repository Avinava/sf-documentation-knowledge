/**
 * CodeIndex — In-memory index of code snippets extracted from knowledge files.
 *
 * Scans all markdown files at startup, extracts fenced code blocks with
 * surrounding context (heading, description), and builds a searchable index.
 */
import fs from "fs-extra";
import path from "node:path";
import { createChildLogger } from "../utils/logger.js";

const log = createChildLogger("mcp:code-index");

export interface CodeSnippet {
  /** Source document node ID (e.g. "doc:apex-guide:apex_batch") */
  docId: string;
  /** Source domain */
  domain: string;
  /** Source topic (filename without .md) */
  topic: string;
  /** Programming language (from fence tag) */
  language: string;
  /** The code content */
  code: string;
  /** The heading above this code block */
  heading: string;
  /** 1-2 lines of text context above the code block */
  context: string;
  /** Document title from the first heading */
  docTitle: string;
}

export class CodeIndex {
  private snippets: CodeSnippet[] = [];
  /** keyword → snippet indices */
  private keywordMap = new Map<string, number[]>();
  private loaded = false;

  constructor(private knowledgeDir: string) {}

  async load(): Promise<void> {
    if (this.loaded) return;

    const startTime = Date.now();
    const domainDirs = await fs.readdir(this.knowledgeDir);

    for (const domain of domainDirs) {
      const domainPath = path.join(this.knowledgeDir, domain);
      const stat = await fs.stat(domainPath);
      if (!stat.isDirectory()) continue;

      const files = (await fs.readdir(domainPath)).filter(
        (f) => f.endsWith(".md") && f !== "_index.md",
      );

      for (const file of files) {
        try {
          const content = await fs.readFile(
            path.join(domainPath, file),
            "utf-8",
          );
          const topic = file.replace(/\.md$/, "");
          this.extractSnippets(content, domain, topic);
        } catch {
          // Skip files that can't be read
        }
      }
    }

    // Build keyword index
    for (let i = 0; i < this.snippets.length; i++) {
      const s = this.snippets[i];
      const words = [
        ...s.heading.toLowerCase().split(/\s+/),
        ...s.context.toLowerCase().split(/\s+/),
        ...s.docTitle.toLowerCase().split(/\s+/),
        s.language.toLowerCase(),
        ...s.domain.toLowerCase().split("-"),
      ].filter((w) => w.length >= 3);

      for (const word of new Set(words)) {
        if (!this.keywordMap.has(word)) {
          this.keywordMap.set(word, []);
        }
        this.keywordMap.get(word)!.push(i);
      }
    }

    this.loaded = true;
    log.info(
      {
        snippets: this.snippets.length,
        keywords: this.keywordMap.size,
        ms: Date.now() - startTime,
      },
      "Code index built",
    );
  }

  private extractSnippets(
    content: string,
    domain: string,
    topic: string,
  ): void {
    const lines = content.split("\n");
    const docTitle = this.extractTitle(lines);

    // Find fenced code blocks
    const codeBlockRegex = /^```(\w+)?\s*$/;
    let inBlock = false;
    let blockLang = "";
    let blockLines: string[] = [];
    let blockStartLine = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (!inBlock) {
        const match = line.match(codeBlockRegex);
        if (match) {
          inBlock = true;
          blockLang = match[1] || "text";
          blockLines = [];
          blockStartLine = i;
        }
      } else {
        if (line.startsWith("```")) {
          // End of code block
          inBlock = false;
          const code = blockLines.join("\n").trim();

          // Skip empty or trivially small snippets
          if (code.length < 10) continue;

          // Get surrounding context
          const heading = this.findHeadingAbove(lines, blockStartLine);
          const context = this.findContextAbove(lines, blockStartLine);

          this.snippets.push({
            docId: `doc:${domain}:${topic}`,
            domain,
            topic,
            language: this.normalizeLanguage(blockLang),
            code,
            heading,
            context,
            docTitle,
          });
        } else {
          blockLines.push(line);
        }
      }
    }
  }

  private extractTitle(lines: string[]): string {
    for (const line of lines.slice(0, 20)) {
      if (line.startsWith("# ")) {
        return line.replace(/^#+\s*/, "").trim();
      }
    }
    return "";
  }

  private findHeadingAbove(lines: string[], lineIndex: number): string {
    for (let i = lineIndex - 1; i >= Math.max(0, lineIndex - 15); i--) {
      if (lines[i].startsWith("#")) {
        return lines[i].replace(/^#+\s*/, "").trim();
      }
    }
    return "";
  }

  private findContextAbove(lines: string[], lineIndex: number): string {
    const contextLines: string[] = [];
    for (let i = lineIndex - 1; i >= Math.max(0, lineIndex - 3); i--) {
      const line = lines[i].trim();
      if (line && !line.startsWith("#") && !line.startsWith("```")) {
        contextLines.unshift(line);
      }
    }
    return contextLines.join(" ").slice(0, 200);
  }

  private normalizeLanguage(lang: string): string {
    const map: Record<string, string> = {
      js: "javascript",
      ts: "typescript",
      py: "python",
      java: "java",
      cls: "apex",
      trigger: "apex",
      apxc: "apex",
      soql: "soql",
      sosl: "sosl",
      xml: "xml",
      html: "html",
      css: "css",
      sh: "bash",
      bash: "bash",
      json: "json",
      yaml: "yaml",
      yml: "yaml",
      sql: "sql",
    };
    return map[lang?.toLowerCase()] || lang?.toLowerCase() || "text";
  }

  /**
   * Search for code snippets matching a query.
   */
  search(
    query: string,
    options: { language?: string; domain?: string; limit?: number } = {},
  ): CodeSnippet[] {
    if (!this.loaded) return [];
    const { language, domain, limit = 5 } = options;

    const terms = query
      .toLowerCase()
      .split(/\s+/)
      .filter((t) => t.length >= 3);
    if (terms.length === 0) return [];

    // Score snippets by keyword match count
    const scores = new Map<number, number>();

    for (const term of terms) {
      for (const [keyword, indices] of this.keywordMap) {
        const shorter = Math.min(keyword.length, term.length);
        const longer = Math.max(keyword.length, term.length);
        if (shorter / longer < 0.6) continue;
        if (keyword.includes(term) || term.includes(keyword)) {
          for (const idx of indices) {
            scores.set(idx, (scores.get(idx) || 0) + 1);
          }
        }
      }
    }

    // Filter and sort
    let results = [...scores.entries()]
      .filter(([, score]) => score >= 1)
      .sort((a, b) => b[1] - a[1])
      .map(([idx]) => this.snippets[idx]);

    if (language) {
      results = results.filter(
        (s) => s.language === this.normalizeLanguage(language),
      );
    }
    if (domain) {
      results = results.filter((s) => s.domain === domain);
    }

    return results.slice(0, limit);
  }

  getStats(): { totalSnippets: number; languages: Record<string, number> } {
    const languages: Record<string, number> = {};
    for (const s of this.snippets) {
      languages[s.language] = (languages[s.language] || 0) + 1;
    }
    return { totalSnippets: this.snippets.length, languages };
  }
}
