/**
 * Structured logger using pino.
 * pino-pretty is a devDependency — only use it when available.
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

export const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport:
    process.env.NODE_ENV !== "production" && canResolvePinoPretty()
      ? { target: "pino-pretty", options: { colorize: true } }
      : undefined,
});

export function createChildLogger(name: string) {
  return logger.child({ module: name });
}
