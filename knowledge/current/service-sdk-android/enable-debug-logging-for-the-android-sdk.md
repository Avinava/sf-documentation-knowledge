---
title: "Enable Debug Logging for the Android SDK"
domain: service-sdk-android
topic: enable-debug-logging-for-the-android-sdk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:32.607Z
estimatedTokens: 294
keywords: [Enable, Debug, Logging, Android, SDK, logs, disabled, add, sink, specify, log, level]
---

# Enable Debug Logging for the Android SDK

> SDK logs are disabled by default. To enable logging, you add a sink and then specify a
    log level.

# Enable Debug Logging for the Android SDK

SDK logs are disabled by default. To enable logging, you add a sink and then specify a log level.

Call [addSink](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/service/common/utilities/logging/ServiceLogging.html#addSink\(com.salesforce.android.service.common.utilities.logging.ServiceLoggingSink\)) to direct the debug logs to the specified sink. LOG\_CAT\_SINK directs all log messages to the Android logcat using the standard Log.<level> calls. Set the log level with [setLogLevel](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/service/common/utilities/logging/ServiceLogging.html#setLogLevel\(int\)). For example:

```

```

To direct the logs somewhere other than logcat, implement your own [ServiceLoggingSink](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/service/common/utilities/logging/ServiceLoggingSink.html).

To learn more about Android logging, see [Write and View Logs](https://developer.android.com/studio/debug/am-logcat.html).

## Code Examples

```
ServiceLogging.addSink(ServiceLogging.LOG_CAT_SINK);
ServiceLogging.setLogLevel(ServiceLogging.LEVEL_TRACE);
```
