---
title: "Logger"
domain: loyalty
topic: logger
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.536Z
estimatedTokens: 192
keywords: [Logger, standardized, way, save, debug, verbose, info, error, log, messages, Message, Add, Trace, code, execution, identify, Informational, Faulty]
---

# Logger

> The
      Logger class provides a standardized way to save debug, verbose,
    info, or error log messages.

# Logger

The Logger class provides a standardized way to save debug, verbose, info, or error log messages.

Use this signature to define the Logger class.

object Logger

## Log a Debug Message

Use the message and tag parameters to log an informational message by using this code.

final Unit d(String tag, String message)

## Log an Error Message

Use the message parameter to log an error message by using this code.

final Unit e(String tag, String message, Throwable throwable)

## Log an Information Message

Use the message parameter to add an information log by using this code.

final Unit i(String tag, String message)

## Add a Verbose Log

Use the message parameter to log a verbose message by using this code.

final Unit v(String tag, String message)

## Code Examples

```apex
public class Logger
```

```apex
public static func info(_ message: String)
```

```apex
public static func debug(_ message: String)
```

```apex
public static func error(_ message: String)
```

```apex
public static func fault(_ message: String)
```
