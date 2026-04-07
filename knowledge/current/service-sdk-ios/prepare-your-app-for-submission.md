---
title: "Prepare Your App for Submission"
domain: service-sdk-ios
topic: prepare-your-app-for-submission
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:32.881Z
estimatedTokens: 693
keywords: [Prepare, App, Submission, you’re, Swift, Package, Manager, install, SDK, strip, development, resources, unneeded, architectures, Service]
---

# Prepare Your App for Submission

> If you’re not using Swift Package Manager to install the SDK, you need to strip
    development resources (such as unneeded architectures and header resources) from the Service Chat SDK before you can submit your app to the App Store.

# Prepare Your App for Submission

If you’re not using Swift Package Manager to install the SDK, you need to strip development resources (such as unneeded architectures and header resources) from the Service Chat SDK before you can submit your app to the App Store.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Xcode doesn't automatically strip unneeded architectures from dynamic libraries, nor remove some header and utility resources. Apps that don't do this clean up are rejected from the App Store. For example, you might receive the following error from iTunes Connect:

```

```

You can resolve this problem by using the script provided in the ServiceCore framework that automatically strips unneeded architectures from the dynamic libraries and then re-signs them.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

#### Note

This process is not required if you used Swift Package Manager to install your app.

To use this script:

1.  Select Build Phases for your project target.
2.  Create a Run Script phase to run the script.

    Access the prepare-framework script from within the ServiceCore framework in your project directory.

    -   If you installed the XCFramework files manually, use:

        ```

        ```

    -   If you installed the SDK with CocoaPods, use:

        ```

        ```

    -   If you installed the standard framework files with version 224.0.2 or earlier, use:

        ```

        ```


    ![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

    #### Important

    Verify that this script is in the *exact location* that you specify in this build phase.


This build phase must occur **after** the link phase and all embed phases. If you're using CocoaPods, make sure to put this script after the "\[CP\] Embed Pods Frameworks" phase.

## Code Examples

```
ERROR ITMS-90085:
No architectures in the binary. Lipo failed to detect any architectures in the bundle executable.
```

```
$SRCROOT/ServiceCore.xcframework/ios-arm64/ServiceCore.framework/prepare-framework
```

```
$PODS_ROOT/ServiceSDK/Frameworks/ServiceCore.framework/prepare-framework
```

```
$SRCROOT/ServiceCore.framework/prepare-framework
```
