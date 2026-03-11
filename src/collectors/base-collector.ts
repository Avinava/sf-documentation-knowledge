/**
 * BaseCollector — Abstract base class for all documentation collectors.
 *
 * Provides:
 * - HTTP fetching with retry and rate limiting
 * - Output directory management
 * - Collection status tracking
 */
import axios, {
  type AxiosInstance,
  type AxiosError,
  type AxiosRequestConfig,
} from "axios";
import fs from "fs-extra";
import path from "node:path";
import puppeteer from "puppeteer";
import { createChildLogger } from "../utils/logger.js";
import type { DomainConfig } from "../config/domains.js";

export interface CollectionResult {
  domain: string;
  filesCollected: number;
  errors: string[];
  durationMs: number;
  timestamp: string;
}

export abstract class BaseCollector {
  protected readonly domain: DomainConfig;
  protected readonly outputDir: string;
  protected readonly http: AxiosInstance;
  protected readonly log;
  private readonly rateLimitMs: number;
  private readonly retryCount: number;

  private static akamaiCookies: string | null = null;
  private static cookiePromise: Promise<string> | null = null;

  constructor(domain: DomainConfig, baseOutputDir = "data/raw") {
    this.domain = domain;
    this.outputDir = path.join(baseOutputDir, domain.id);
    this.log = createChildLogger(`collector:${domain.id}`);
    this.rateLimitMs = parseInt(
      process.env.COLLECTION_RATE_LIMIT_MS || "500",
      10,
    );
    this.retryCount = parseInt(process.env.COLLECTION_RETRY_COUNT || "3", 10);

    this.http = axios.create({
      timeout: 30_000,
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
        Referer: "https://developer.salesforce.com/docs",
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "sec-ch-ua-platform": '"macOS"',
        "sec-ch-ua":
          '"Not:A-Brand";v="99", "Google Chrome";v="145", "Chromium";v="145"',
        "sec-ch-ua-mobile": "?0",
      },
    });
  }

  /** Run the collector. Subclasses implement the actual collection logic. */
  async run(): Promise<CollectionResult> {
    const start = Date.now();
    const errors: string[] = [];
    let filesCollected = 0;

    this.log.info({ domain: this.domain.id }, "Starting collection");
    await fs.ensureDir(this.outputDir);

    try {
      filesCollected = await this.collect();
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      errors.push(message);
      this.log.error({ err: message }, "Collection failed");
    }

    const result: CollectionResult = {
      domain: this.domain.id,
      filesCollected,
      errors,
      durationMs: Date.now() - start,
      timestamp: new Date().toISOString(),
    };

    this.log.info(
      { filesCollected, durationMs: result.durationMs, errors: errors.length },
      "Collection complete",
    );

    return result;
  }

  /** Subclasses implement this to perform the actual collection. Returns count of files. */
  protected abstract collect(): Promise<number>;

  /** Fetch a URL with retry and rate-limiting */
  protected async fetch<T = unknown>(url: string): Promise<T> {
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= this.retryCount; attempt++) {
      try {
        // Rate-limit between requests
        if (attempt > 1) {
          // Exponential backoff for retries: 500ms, 2000ms, 4500ms...
          await this.sleep(this.rateLimitMs * (attempt * attempt));
        } else {
          await this.sleep(this.rateLimitMs);
        }

        const config: AxiosRequestConfig = {};
        if (BaseCollector.akamaiCookies) {
          config.headers = { Cookie: BaseCollector.akamaiCookies };
        }

        const response = await this.http.get<T>(url, config);

        // Akamai might return a 200 with an HTML challenge page or empty string instead of JSON
        if (
          typeof response.data === "string" &&
          (response.data.trim().startsWith("<") || response.data.trim() === "")
        ) {
          throw new Error(
            "Akamai CDN blocked request (returned HTML or empty instead of JSON)",
          );
        }

        return response.data;
      } catch (err) {
        lastError = err as Error;
        const axiosErr = err as AxiosError;
        const status = axiosErr.response?.status;

        // If we hit a block (403 or our custom error), try to get new cookies
        if (status === 403 || lastError.message.includes("CDN block")) {
          this.log.warn(
            { url, status, err: lastError.message },
            "CDN block detected, attempting Puppeteer bypass...",
          );
          await this.getAkamaiCookies(url);
          continue; // immediately retry the loop with new cookies
        }

        // Don't retry on 4xx errors (except 429 and 403 which Salesforce uses for rate limiting)
        if (
          status &&
          status >= 400 &&
          status < 500 &&
          status !== 429 &&
          status !== 403
        ) {
          throw err;
        }

        this.log.warn(
          {
            url,
            attempt,
            maxAttempts: this.retryCount,
            status,
          },
          "Fetch failed, retrying",
        );
      }
    }

    throw lastError || new Error(`Failed to fetch ${url}`);
  }

  /** Launch a headless browser to solve Akamai challenge and extract cookies */
  private async getAkamaiCookies(targetUrl: string): Promise<string> {
    if (BaseCollector.cookiePromise) {
      return BaseCollector.cookiePromise;
    }

    BaseCollector.cookiePromise = (async () => {
      this.log.info(
        { url: targetUrl },
        "Launching Puppeteer to bypass CDN block and extract cookies...",
      );
      const browser = await puppeteer.launch({ headless: true });
      try {
        const page = await browser.newPage();
        await page.setExtraHTTPHeaders({
          "Accept-Language": "en-US,en;q=0.9",
        });
        await page.setUserAgent(
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
        );

        await page.goto(targetUrl, { waitUntil: "networkidle0" });

        const cookies = await page.cookies();
        const cookieStr = cookies.map((c) => `${c.name}=${c.value}`).join("; ");

        if (cookieStr) {
          BaseCollector.akamaiCookies = cookieStr;
          this.log.info("Successfully extracted Akamai session cookies.");
        } else {
          this.log.warn("Puppeteer finished but no cookies were extracted.");
        }

        return cookieStr;
      } finally {
        await browser.close();
        BaseCollector.cookiePromise = null;
      }
    })();

    return BaseCollector.cookiePromise;
  }

  /** Write a JSON file to the output directory */
  protected async writeJson(filename: string, data: unknown): Promise<string> {
    const filePath = path.join(this.outputDir, filename);
    await fs.writeJson(filePath, data, { spaces: 2 });
    return filePath;
  }

  /** Sleep for a given number of milliseconds */
  protected sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
