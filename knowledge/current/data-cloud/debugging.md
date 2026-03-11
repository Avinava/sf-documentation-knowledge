---
title: "Debugging"
domain: data-cloud
topic: debugging
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.151Z
keywords: [Debugging, Logging, Level, Methods]
---

# Debugging

# Debugging

When configured, the Salesforce Interaction SDK can output messages to the browser console for debugging purposes. By default, the logger is configured with a log level of none. The logger used by the Web SDK wraps the standard browser console.log function and can be accessed at SalesforceInteractions.log.

## Logging Level

Logging levels can be set to control the amount of debug output.

| Level | Description |
| --- | --- |
| trace | Used for finer-grained informational messages than debug. Value: 5 |
| debug | Used for informational messages at a fine-grained level useful for debugging. Value: 4 |
| info | Used for informational messages at a course-grained level. Value: 3 |
| warn | Used for potential issues with the Web SDK that can affect functionality. Value: 2 |
| error | Used for error events that can indicate the Web SDK isn’t functioning properly. Value: 1 |
| none | Indicates disabling logging. Value: 0 |

The table orders the log levels from highest, trace, to lowest, none. A log level outputs any message at that same log level or lower.

## Debugging Methods

```

```

Returns the numeric value of the current logging level used in the Web SDK.

```

```

```

```

Set the logging level used in the Web SDK.

```

```

```

```

Prints out a message at the info level.

```

```

```

```

Prints out a message at the debug level.

```

```

```

```

Prints out a message at the error level.

```

```

```

```

Prints out a message at the trace level.

```

```

```

```

Prints out a message at the warn level.

```

```