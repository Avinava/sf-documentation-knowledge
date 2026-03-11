---
title: "Logging and Debugging"
domain: data-cloud
topic: logging-and-debugging
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.261Z
keywords: [Logging, Debugging, Log, Levels, Example, SDK, State]
---

# Logging and Debugging

# Logging and Debugging

Logging is optional, yet critical, SDK feature that allows the mobile application developer to select the verbosity of the Data Cloud Module for the Engagement Mobile SDK’s output. By default, logging is disabled and must be enabled using the setLogger for iOS or setLogging for Android method on the SFMCSdk instance. Define the desired logging level and output destination. Enabling logging results in log capture using the native unified logging system.

## Log Levels

| Log Level | Description |
| --- | --- |
| Error | This log level provides details about unrecoverable errors associated with inability to complete valuable business use cases. |
| Warn | This log level indicates the SDK integration has a problem or it encountered an unusual situation. Warnings are associated with potentially harmful, but recoverable errors. |
| Debug | This log level provides granular, low-level information about how the SDK processes tasks, events, and error details. Debug logging enables developers to perform diagnostics on their application to troubleshoot issues. |

## Logging Example

**iOS**

```

```

**Android**

```

```

## SDK State Example

The state property on the Data Cloud Module returns operational information containing current configuration settings, session details, event queue size, and consent state. This information is critical for debugging and troubleshooting purposes.

**iOS**

```

```

**Android**

```

```

SDK State is a tool to assist development and troubleshooting. Always inspect the SDK state when debugging to confirm expected configuration.

Example Engagement Mobile SDK State:

```

```