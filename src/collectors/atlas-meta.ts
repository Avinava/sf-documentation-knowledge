/**
 * AtlasMetaCollector — Collects documentation from Salesforce's Atlas Meta API.
 *
 * This is the primary collector, ported from sf-explorer's download.ts.
 * It fetches the documentation tree from developer.salesforce.com and
 * downloads individual pages as JSON.
 *
 * API endpoints:
 *   Meta: https://developer.salesforce.com/docs/get_document/{deliverable}.meta
 *   Content: https://developer.salesforce.com/docs/get_document_content/{deliverable}/{page}/en-us/{version}
 */
import { BaseCollector } from "./base-collector.js";
import type { DomainConfig } from "../config/domains.js";

const LANG = "en-us";
const DOCS_BASE_URL = "https://developer.salesforce.com/docs";

interface TocNode {
  text: string;
  id: string;
  a_attr?: { href: string };
  children?: TocNode[];
}

interface MetaResponse {
  toc: TocNode[] | { children: TocNode[] };
  deliverable: string;
  version: { doc_version: string } | string;
}

interface ContentResponse {
  id: string;
  title: string;
  content: string;
  [key: string]: unknown;
}

import pLimit from "p-limit";

export class AtlasMetaCollector extends BaseCollector {
  private uniquePaths = new Set<string>();
  private collectedCount = 0;

  constructor(domain: DomainConfig, baseOutputDir?: string) {
    super(domain, baseOutputDir);
  }

  protected async collect(): Promise<number> {
    if (!this.domain.atlas) {
      throw new Error(
        `Domain ${this.domain.id} has no atlas deliverable configured`,
      );
    }

    // 1. Fetch the metadata / table of contents
    const metaUrl = `${DOCS_BASE_URL}/get_document/${this.domain.atlas}.meta`;
    this.log.info({ url: metaUrl }, "Fetching documentation metadata");

    const meta = await this.fetch<MetaResponse>(metaUrl);
    await this.writeJson("_metadata.json", meta);

    // Extract version string defensively
    const docVersion =
      typeof meta.version === "object" && meta.version !== null
        ? meta.version.doc_version
        : typeof meta.version === "string"
          ? meta.version
          : "latest";

    this.log.info(
      { deliverable: meta.deliverable, version: docVersion },
      "Metadata fetched",
    );

    const urlsToDownload: string[] = [];

    // 2. Extract all valid URLs from the TOC tree (handles both list and object formats)
    if (meta.toc) {
      const tocNodes = Array.isArray(meta.toc)
        ? meta.toc
        : meta.toc.children || [];
      this.extractUrls(tocNodes, urlsToDownload);
    }

    this.log.info(
      { totalPagesToDownload: urlsToDownload.length },
      "Starting parallel download",
    );

    // 3. Download pages concurrently (limit to 10 at a time to avoid overwhelming the API)
    const limit = pLimit(10);

    const downloadTasks = urlsToDownload.map((href) =>
      limit(async () => {
        try {
          const contentUrl = `${DOCS_BASE_URL}/get_document_content/${meta.deliverable}/${href}/${LANG}/${docVersion}`;
          const content = await this.fetch<ContentResponse>(contentUrl);

          if (content.id) {
            const filename = `${href.replace(/\//g, "_")}.json`;
            await this.writeJson(filename, content);
            this.collectedCount++;

            if (this.collectedCount % 50 === 0) {
              this.log.info(
                { count: this.collectedCount, total: urlsToDownload.length },
                "Progress update",
              );
            }
          }
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          this.log.warn(
            { href, error: msg },
            "Failed to download page, skipping",
          );
        }
      }),
    );

    await Promise.all(downloadTasks);

    this.log.info(
      { pagesCollected: this.collectedCount },
      "All pages downloaded",
    );
    return this.collectedCount;
  }

  /** Recursively walk the table-of-contents tree and extract URLs */
  private extractUrls(nodes: TocNode[], urlsToDownload: string[]): void {
    for (const node of nodes) {
      // If the node has an href, it's a page we should download
      if (node.a_attr?.href) {
        const href = node.a_attr.href.split("#")[0]!;

        // Only download if we haven't seen it and it passes the filter
        if (!this.uniquePaths.has(href)) {
          let shouldDownload = true;
          if (this.domain.pathFilter && !this.domain.pathFilter(href)) {
            shouldDownload = false;
          }

          if (shouldDownload) {
            this.uniquePaths.add(href);
            urlsToDownload.push(href);
          }
        }
      }

      // Always recurse into children
      if (node.children && node.children.length > 0) {
        this.extractUrls(node.children, urlsToDownload);
      }
    }
  }
}
