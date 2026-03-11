/**
 * HTML to Markdown converter for Salesforce documentation.
 *
 * Uses Turndown to convert HTML content from the Atlas API into
 * clean, structured Markdown suitable for LLM consumption.
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

  // Custom rule for code blocks
  td.addRule("codeBlock", {
    filter: (node) =>
      node.nodeName === "PRE" && node.querySelector("code") !== null,
    replacement: (_content, node) => {
      const code = (node as HTMLElement).querySelector("code");
      const lang = code?.className?.replace("language-", "") || "";
      const text = code?.textContent || "";
      return `\n\`\`\`${lang}\n${text.trim()}\n\`\`\`\n`;
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
        if (!el.querySelectorAll) return _content; // fallback: use turndown's default

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
        // If table processing fails, return the raw content rather than crashing
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
}

export interface ParsedSection {
  heading: string;
  content: string;
  level: number;
}

/**
 * Process a raw Atlas API JSON response into structured Markdown.
 */
export function processAtlasContent(rawData: {
  id: string;
  title?: string;
  content: string;
  [key: string]: unknown;
}): ParsedDocument[] {
  const td = createTurndown();
  const documents: ParsedDocument[] = [];

  // Clean the HTML content
  let html = rawData.content;
  html = html.replace(/\\"/g, '"');
  html = html.replace(/\\n/g, "\n");

  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // Look for .topic elements (Salesforce doc structure)
  const topics = doc.querySelectorAll(".topic");

  if (topics.length > 0) {
    topics.forEach((topic) => {
      const title =
        topic.querySelector(".titlecodeph")?.textContent?.trim() ||
        topic.querySelector("h1, h2, .title")?.textContent?.trim() ||
        rawData.title ||
        rawData.id;

      const shortDesc =
        topic.querySelector("#shortdesc, .shortdesc")?.textContent?.trim() ||
        "";

      // Convert the topic HTML to markdown
      const markdown = td.turndown(topic.innerHTML);

      // Extract sections
      const sections = extractSections(markdown);

      documents.push({
        title,
        shortDescription: shortDesc,
        content: markdown,
        sourceId: rawData.id,
        sections,
      });
    });
  } else {
    // Fallback: treat entire content as one document
    const title =
      doc.querySelector("h1, h2, .title")?.textContent?.trim() ||
      rawData.title ||
      rawData.id;

    const markdown = td.turndown(html);
    const sections = extractSections(markdown);

    documents.push({
      title: title || rawData.id,
      shortDescription: "",
      content: markdown,
      sourceId: rawData.id,
      sections,
    });
  }

  log.debug(
    { sourceId: rawData.id, documentCount: documents.length },
    "Processed content",
  );
  return documents;
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
