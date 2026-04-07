/**
 * Structured logger using pino.
 * pino-pretty is a devDependency — only use it when available.
 *
 * IMPORTANT: all output goes to stderr (fd 2) because stdout is
 * reserved for MCP JSON-RPC protocol messages when running as an
 * MCP server via stdio transport.
 */
import pino from "pino";
import { createRequire } from "node:module";

function canResolvePinoPretty(): boolean {
  try {
    const require = createRequire(import.meta.url);
    require.resolve("pino-pretty");
    return true;
  } catch {
    return false;
  }
}

export const logger = pino(
  {
    level: process.env.LOG_LEVEL || "info",
    transport:
      process.env.NODE_ENV !== "production" && canResolvePinoPretty()
        ? { target: "pino-pretty", options: { colorize: true, destination: 2 } }
        : undefined,
  },
  // When no transport is used, write directly to stderr (fd 2)
  pino.destination(2),
);

export function createChildLogger(name: string) {
  return logger.child({ module: name });
}
