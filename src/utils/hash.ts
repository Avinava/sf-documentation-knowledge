import { createHash } from "node:crypto";

/** Generate a SHA-256 hash of content */
export function contentHash(content: string): string {
  return createHash("sha256").update(content).digest("hex");
}
