/**
 * HTML to Markdown converter for Salesforce documentation.
 *
 * Uses Turndown to convert HTML content from the Atlas API into
 * clean, structured Markdown suitable for LLM consumption.
 *
 * KEY DESIGN: Processes each raw page as a SINGLE document (page-level),
 * preserving class-level descriptions, usage notes, code examples,
 * and conceptual guidance. Does NOT fragment pages into one-topic-per-file.
 */
import TurndownService from "turndown";
import { JSDOM } from "jsdom";
import { createChildLogger } from "../utils/logger.js";

const log = createChildLogger("processor:html-to-markdown");

/** Create a configured Turndown instance */
function createTurndown(): TurndownService {
  const td = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "*",
  });

  // Remove script/style tags
  td.remove(["script", "style", "nav", "footer", "header"]);

  // Custom rule for code blocks — preserve language hints
  td.addRule("codeBlock", {
    filter: (node) =>
      node.nodeName === "PRE" && node.querySelector("code") !== null,
    replacement: (_content, node) => {
      const code = (node as HTMLElement).querySelector("code");
      let lang = code?.className?.replace("language-", "") || "";
      const text = code?.textContent || "";

      // Auto-detect Apex code
      if (!lang && looksLikeApex(text)) {
        lang = "apex";
      }

      return `\n\`\`\`${lang}\n${text.trim()}\n\`\`\`\n`;
    },
  });

  // Salesforce-specific: preserve note/important/warning callout boxes
  td.addRule("sfCallout", {
    filter: (node) => {
      const el = node as HTMLElement;
      const cls = el.className || "";
      return (
        el.nodeName === "DIV" &&
        (cls.includes("note") ||
          cls.includes("important") ||
          cls.includes("warning") ||
          cls.includes("tip") ||
          cls.includes("caution"))
      );
    },
    replacement: (content, node) => {
      const el = node as unknown as HTMLElement;
      const cls = el.className || "";
      let prefix = "📝 **Note**";
      if (cls.includes("important")) prefix = "⚠️ **Important**";
      if (cls.includes("warning")) prefix = "🚨 **Warning**";
      if (cls.includes("tip")) prefix = "💡 **Tip**";
      if (cls.includes("caution")) prefix = "⚠️ **Caution**";
      return `\n> ${prefix}: ${content.trim()}\n`;
    },
  });

  // Better table handling — keep as markdown tables
  td.addRule("tableCell", {
    filter: ["th", "td"],
    replacement: (content) => ` ${content.trim().replace(/\|/g, "\\|")} |`,
  });

  td.addRule("tableRow", {
    filter: "tr",
    replacement: (content) => `|${content}\n`,
  });

  td.addRule("table", {
    filter: "table",
    replacement: (_content, node) => {
      try {
        const el = node as unknown as HTMLElement;
        if (!el.querySelectorAll) return _content;

        const rowNodeList = el.querySelectorAll("tr");
        const rows = Array.from(rowNodeList);
        if (rows.length === 0) return _content;

        const lines: string[] = [];
        rows.forEach((row, i) => {
          const cells = Array.from(row.querySelectorAll("th, td"));
          if (cells.length === 0) return;

          const line = cells
            .map(
              (c) =>
                ` ${(c.textContent || "").trim().replace(/\|/g, "\\|").replace(/\n/g, " ")} `,
            )
            .join("|");
          lines.push(`|${line}|`);

          // Add separator after header row
          if (i === 0) {
            const sep = cells.map(() => " --- ").join("|");
            lines.push(`|${sep}|`);
          }
        });

        if (lines.length === 0) return _content;
        return "\n" + lines.join("\n") + "\n";
      } catch (err) {
        log.debug({ err }, "Table processing fallback");
        return _content;
      }
    },
  });

  return td;
}

export interface ParsedDocument {
  /** Document title */
  title: string;
  /** Short description / summary */
  shortDescription: string;
  /** Main content as Markdown */
  content: string;
  /** Original source id */
  sourceId: string;
  /** Sections extracted from the document */
  sections: ParsedSection[];
  /** Code examples extracted from the content */
  codeExamples: string[];
  /** Namespace if detected */
  namespace: string;
  /** Cross-references to other docs pages */
  crossReferences: string[];
}

export interface ParsedSection {
  heading: string;
  content: string;
  level: number;
}

/**
 * Process a raw Atlas API JSON response into structured Markdown.
 *
 * PAGE-LEVEL processing: treats the entire page as a single document,
 * preserving all descriptive content, code examples, and usage guidance.
 */
export function processAtlasContent(rawData: {
  id: string;
  title?: string;
  content: string;
  [key: string]: unknown;
}): ParsedDocument[] {
  const td = createTurndown();

  // Clean the HTML content
  let html = rawData.content;
  html = html.replace(/\\"/g, '"');
  html = html.replace(/\\n/g, "\n");

  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // Extract page-level title from the first heading or raw title
  const pageTitle =
    doc.querySelector("h1, h2, .title, .titlecodeph")?.textContent?.trim() ||
    rawData.title ||
    rawData.id;

  // Extract page-level short description
  const shortDesc = extractShortDescription(doc);

  // Extract namespace from content if present
  const namespace = extractNamespace(doc);

  // Extract code examples before converting to markdown
  const codeExamples = extractCodeExamples(doc);

  // Extract cross-references (links to other doc pages)
  const crossReferences = extractCrossReferences(doc);

  // Convert the ENTIRE page to markdown (not per-topic)
  const fullMarkdown = td.turndown(html);

  // Clean up the markdown — remove excessive whitespace and empty headings
  const cleanedMarkdown = cleanMarkdown(fullMarkdown);

  // Sanitize any example tokens/secrets that would trigger GitHub secret scanning
  const sanitizedMarkdown = sanitizeSecrets(cleanedMarkdown);

  // Extract sections from the final markdown
  const sections = extractSections(cleanedMarkdown);

  const document: ParsedDocument = {
    title: pageTitle,
    shortDescription: shortDesc,
    content: sanitizedMarkdown,
    sourceId: rawData.id,
    sections,
    codeExamples: codeExamples.map(sanitizeSecrets),
    namespace,
    crossReferences,
  };

  log.debug(
    {
      sourceId: rawData.id,
      title: pageTitle,
      sectionCount: sections.length,
      codeExampleCount: codeExamples.length,
      contentLength: cleanedMarkdown.length,
    },
    "Processed page-level content",
  );

  // Return as a single-element array (one document per page)
  return [document];
}

/** Extract the page-level short description */
function extractShortDescription(doc: Document): string {
  // Try multiple Salesforce-specific selectors
  const selectors = [
    "#shortdesc",
    ".shortdesc",
    ".body > .shortdesc",
    'p[class*="shortdesc"]',
  ];

  for (const selector of selectors) {
    const el = doc.querySelector(selector);
    if (el?.textContent?.trim()) {
      return el.textContent.trim();
    }
  }

  // Fallback: first <p> in the body that has meaningful content
  const firstP = doc.querySelector(".body p, .topic p, p");
  if (firstP?.textContent?.trim() && firstP.textContent.trim().length > 20) {
    return firstP.textContent.trim().slice(0, 300);
  }

  return "";
}

/** Extract namespace from Salesforce class documentation */
function extractNamespace(doc: Document): string {
  // Look for .namespace elements first (most reliable)
  const nsEl = doc.querySelector(".namespace");
  if (nsEl?.textContent?.trim()) {
    return nsEl.textContent.trim();
  }

  // Look for codeph elements near "Namespace" text
  const codeEls = doc.querySelectorAll("samp.codeph, code");
  for (const el of Array.from(codeEls)) {
    const text = el.textContent?.trim() || "";
    // Check if this code element is near a "Namespace" heading/label
    const parent = el.parentElement;
    const parentText = parent?.textContent || "";
    if (
      parentText.toLowerCase().includes("namespace") &&
      /^[A-Z][a-zA-Z]+(\.[A-Z][a-zA-Z]+)*$/.test(text)
    ) {
      return text;
    }
  }

  // Fallback: look for "Namespace\n<ProperName>" pattern
  const allText = doc.body?.textContent || "";
  const nsMatch = allText.match(
    /Namespace\s*\n\s*([A-Z][a-zA-Z]+(?:\.[A-Z][a-zA-Z]+)*)\b/,
  );
  if (nsMatch?.[1]) {
    return nsMatch[1];
  }

  return "";
}

/** Extract code examples from the HTML before conversion */
function extractCodeExamples(doc: Document): string[] {
  const examples: string[] = [];

  // Look for <pre> elements with code
  const preElements = doc.querySelectorAll("pre");
  preElements.forEach((pre) => {
    const code = pre.querySelector("code");
    const text = (code || pre).textContent?.trim() || "";
    if (text.length > 10) {
      examples.push(text);
    }
  });

  // Also look for .codeblock elements (Salesforce-specific)
  const codeBlocks = doc.querySelectorAll(".codeblock");
  codeBlocks.forEach((block) => {
    const text = block.textContent?.trim() || "";
    if (text.length > 10 && !examples.includes(text)) {
      examples.push(text);
    }
  });

  return examples;
}

/** Extract cross-references to other documentation pages */
function extractCrossReferences(doc: Document): string[] {
  const refs: string[] = [];
  const links = doc.querySelectorAll("a[href]");

  links.forEach((link) => {
    const href = (link as HTMLAnchorElement).getAttribute("href") || "";
    // Only capture internal SF docs links (relative links or atlas links)
    if (
      href.includes(".htm") &&
      !href.startsWith("http") &&
      !href.startsWith("#")
    ) {
      const title = link.textContent?.trim() || "";
      if (title && title.length > 2) {
        const ref = `${title} (${href.split("#")[0]})`;
        if (!refs.includes(ref)) {
          refs.push(ref);
        }
      }
    }
  });

  return refs.slice(0, 20); // Limit to 20 most relevant
}

/** Clean up markdown — remove excessive whitespace and noise */
function cleanMarkdown(markdown: string): string {
  return (
    markdown
      // Collapse 3+ consecutive newlines into 2
      .replace(/\n{3,}/g, "\n\n")
      // Remove empty headings (just # with no text)
      .replace(/^#{1,6}\s*$/gm, "")
      // Fix double-escaped pipes in tables
      .replace(/\\\\\|/g, "\\|")
      // Trim trailing whitespace on each line
      .replace(/[^\S\n]+$/gm, "")
      .trim()
  );
}

/** Detect if code looks like Apex */
function looksLikeApex(code: string): boolean {
  const apexPatterns = [
    /\bpublic\s+(static\s+)?/,
    /\bprivate\s+(static\s+)?/,
    /\bglobal\s+(static\s+)?/,
    /\bSystem\./,
    /\bDatabase\./,
    /\bList<\w+>/,
    /\bMap<\w+/,
    /\bSchema\./,
    /\bApexPages\./,
    /\bTest\./,
    /\b@isTest/i,
    /\bSObject\b/,
  ];
  return apexPatterns.some((p) => p.test(code));
}

/** Extract section headings and their content from markdown */
function extractSections(markdown: string): ParsedSection[] {
  const sections: ParsedSection[] = [];
  const lines = markdown.split("\n");
  let currentHeading = "";
  let currentLevel = 0;
  let currentContent: string[] = [];

  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);

    if (headingMatch) {
      // Save previous section
      if (currentHeading) {
        sections.push({
          heading: currentHeading,
          level: currentLevel,
          content: currentContent.join("\n").trim(),
        });
      }

      currentHeading = headingMatch[2]!;
      currentLevel = headingMatch[1]!.length;
      currentContent = [];
    } else {
      currentContent.push(line);
    }
  }

  // Save last section
  if (currentHeading) {
    sections.push({
      heading: currentHeading,
      level: currentLevel,
      content: currentContent.join("\n").trim(),
    });
  }

  return sections;
}

/**
 * Sanitize example tokens and secrets from documentation content.
 *
 * Salesforce docs often include example access tokens, JWT assertions,
 * and OAuth tokens that GitHub secret scanning will flag as real secrets.
 * This function redacts them with safe placeholders.
 */
function sanitizeSecrets(text: string): string {
  let result = text;

  // Salesforce access tokens: 00D followed by org ID + ! + token
  // e.g., 00D50000000IehZ!AQcAQH0dMHZfz972Szmpkb58...
  result = result.replace(
    /00D[a-zA-Z0-9]{12,18}![A-Za-z0-9._]{20,}/g,
    "<SALESFORCE_ACCESS_TOKEN>",
  );

  // JWT tokens: eyJ... (header.payload.signature, each part base64)
  // Match base64url dot-separated tokens with 100+ chars total
  result = result.replace(
    /eyJ[A-Za-z0-9_-]{20,}\.eyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}/g,
    "<JWT_TOKEN>",
  );

  // Long base64 strings that look like assertions/tokens (100+ chars of base64)
  // Only match within assertion= or token= contexts to avoid false positives
  result = result.replace(
    /(&assertion=|&subject_token=)[A-Za-z0-9+/=_-]{100,}/g,
    (match) => {
      const prefix = match.startsWith("&assertion=")
        ? "&assertion="
        : "&subject_token=";
      const placeholder =
        prefix === "&assertion="
          ? "<JWT_ASSERTION_TOKEN>"
          : "<SALESFORCE_ACCESS_TOKEN>";
      return `${prefix}${placeholder}`;
    },
  );

  return result;
}
