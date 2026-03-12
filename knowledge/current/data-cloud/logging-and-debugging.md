---
title: "Logging and Debugging"
domain: data-cloud
topic: logging-and-debugging
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.160Z
estimatedTokens: 414
keywords: [Logging, Debugging, yet, critical, SDK, feature, mobile, application, developer, select, verbosity, Data, Cloud, Module, Engagement]
---

# Logging and Debugging

> Logging is optional, yet critical, SDK feature that allows the mobile application
    developer to select the verbosity of the Data Cloud Module for the Engagement Mobile SDK’s
    output. By default, logging is disabled and must be enabled using the
      setLogger for iOS or setLogging for Android method on
    the SFMCSdk instance. Define the desired logging level and output destination. Enabling logging
    results in log capture using the native unified logging system.

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

## Code Examples

```
import SFMCSDK

...

// set the logger to show debug messages and higher
SFMCSdk.setLogger(LogLevel.debug)

// example usage
let CATEGORY = LoggerCategory.module

SFMCSdkLogger.shared.d(category: CATEGORY, message: "Logs a debug message.")

SFMCSdkLogger.shared.w(category: CATEGORY, message: "Logs a warning message.")

SFMCSdkLogger.shared.e(category: CATEGORY, message: "Logs an error message.")
```

```
import com.salesforce.marketingcloud.sfmcsdk.SFMCSdk
import com.salesforce.marketingcloud.sfmcsdk.components.logging.LogLevel
import com.salesforce.marketingcloud.sfmcsdk.components.logging.LogListener.AndroidLogger

...

// set the logger to show debug messages and higher
SFMCSdk.setLogging(LogLevel.DEBUG, AndroidLogger())

// example usage
val TAG = "Example Application"
val ERROR = IllegalStateException("Example Failure")

SFMCSdkLogger.d(TAG) { "Logs a debug message." }
SFMCSdkLogger.d(TAG, ERROR) { "Logs a debug message along with the error." }

SFMCSdkLogger.w(TAG) { "Logs a warning message." }
SFMCSdkLogger.w(TAG, ERROR) { "Logs a warning message along with the error." }

SFMCSdkLogger.e(TAG) { "Logs an error message." }
SFMCSdkLogger.e(TAG, ERROR) { "Logs an error message along with the error." }
```

```
SFMCSdk.state()
```

```
SFMCSdk.requestSdk { sdk -> sdk.getSdkState() }
```

```
{
  "modules": {
    "cdp": {
      "compatibility": "1.9.0 - 2.9.9",
      "name": "cdp",
      "pendingOperations": "0",
      "properties": {
        "appId": "YOUR_APP_ID
",
        "consent": "opt_in",
        "endpoint": "YOUR_ENDPOINT",
        "version": "2.0.1"
      },
      "status": "operational",
      "version": "2.0.1"
    },
    "push": {
      "compatibility": "8.0.3 - 8.9.9",
      "name": "push",
      "pendingOperations": "undefined",
      "status": "inactive",
      "version": "unavailable"
    }
  },
  "registrationId": "YOUR_APPLICATION_REGISTRATION_ID",
  "version": "1.0.2"
}
```
