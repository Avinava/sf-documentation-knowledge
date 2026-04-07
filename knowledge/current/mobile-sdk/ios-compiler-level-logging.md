---
title: "iOS Compiler-Level Logging"
domain: mobile-sdk
topic: ios-compiler-level-logging
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:24.842Z
estimatedTokens: 283
keywords: [iOS, Compiler-Level, Logging, Mobile, SDK, 7.0, simplifies, refers, underlying, operating, system, framework]
---

> Mobile SDK 7.0 simplifies iOS logging and refers it to the underlying operating system
  framework.

# iOS Compiler-Level Logging

Mobile SDK 7.0 simplifies iOS logging and refers it to the underlying operating system framework.

To access the logging system, call the os\_log() function. This function gives you access to the Apple unified logging system. If you like, you can also pass a custom component log object and set a log level. See [https://developer.apple.com/documentation/os/logging](https://developer.apple.com/documentation/os/logging) for details.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

The Salesforce Logging Framework on iOS is not currently recommended for external use. If you have legacy code that uses SFSDKLogger, you can continue using it as follows:

1.  In each source file that uses SFSDKLogger, replace

    ```

    ```

    with

    ```

    ```

2.  Using Xcode Refactor, replace all instances of SFSDKLogger with SFLogger.

## Example

You can replace SalesforceLogger calls in the Swift forceios template as follows. These simplistic examples use the default component logger to log debug messages in the Xcode console.

```

```

## Code Examples

```
#import <SalesforceAnalytics/SFSDKLogger.h>
```

```
#import <SalesforceSDKCommon/SFLogger.h>
```

```
RestClient.shared.send(request: request) 
{ [weak self] (result) in
    switch result {
        case .success(let response):
            self?.handleSuccess(response: response, request: request)
        case .failure(let error):
            // SalesforceLogger.d(RootViewController.self, 
            //    message:"Error invoking: \(request) , \(error)")
            os_log("
Error invoking: %@", log: .default, type: .debug, request)
    }
}
```
