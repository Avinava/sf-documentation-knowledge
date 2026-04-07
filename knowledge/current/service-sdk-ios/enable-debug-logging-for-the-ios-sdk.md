---
title: "Enable Debug Logging for the iOS SDK"
domain: service-sdk-ios
topic: enable-debug-logging-for-the-ios-sdk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:33.052Z
estimatedTokens: 299
keywords: [Enable, Debug, Logging, iOS, SDK, configure, Service, Chat, logs, level, ServiceLogger, shared, instance]
---

# Enable Debug Logging for the iOS SDK

> To configure the Service Chat SDK logs, set the level property on the ServiceLogger shared
  instance.

# Enable Debug Logging for the iOS SDK

To configure the Service Chat SDK logs, set the level property on the ServiceLogger shared instance.

Use the [shared](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceLogger.html#/c:objc\(cs\)SCServiceLogger\(cpy\)sharedLogger) singleton on [ServiceLogger](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceLogger.html) to adjust the [level](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceLogger.html#/c:objc\(cs\)SCServiceLogger\(py\)level).

In Swift:

```

```

In Objective-C:

```

```

The log level is specified using the SCSLoggerLevel enumerated type. It can be one of these values:

-   SCSLoggerLevelDebug (.debug in Swift)
-   SCSLoggerLevelInfo (.info in Swift)
-   SCSLoggerLevelError (.error in Swift)—Default value
-   SCSLoggerLevelFault (.fault in Swift)
-   SCSLoggerLevelOff (.off in Swift)

By default, logs go to the console output. You can have logs go to a file using the [filehandle](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceLogger.html#/c:objc\(cs\)SCServiceLogger\(py\)filehandle) property.

## Code Examples

```
ServiceLogger.shared.level = .debug
```

```
[SCServiceLogger sharedLogger].level = SCSLoggerLevelDebug;
```
