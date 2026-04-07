---
title: "Install the for iOS for iOS"
domain: service-sdk-ios
topic: install-the-for-ios-for-ios
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.901Z
estimatedTokens: 883
keywords: [Install, iOS, SDK, configure, project]
---

# Install the for iOS for iOS

> Before you can use the iOS SDK, install the SDK and configure your
            project.

# Install the for iOS for iOS

Before you can use the iOS SDK, install the SDK and configure your project.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

1.  Add the SDK frameworks to your project.

    You can add the frameworks using [Swift Package Manager](https://developer.apple.com/documentation/swift_packages), using [CocoaPods](https://cocoapods.org/), or by downloading and adding the frameworks manually.

    To add the frameworks using Swift Package Manager, add a package dependency to your app using the following public URL: https://github.com/Salesforce-Async-Messaging/Swift-Package-ServiceChat.

    To learn more about package dependencies, see [Adding Package Dependencies to Your App](https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app) in Apple's Developer Documentation.

    ![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

    #### Important

    The Swift Package Manager installation method is only supported for the Service Chat feature. To install the SDK for Knowledge or Case Management, use one of the other installation methods.

    Alternatively, you can [add the frameworks files manually](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_install_sdk_manually.htm "Add the SDK frameworks by manually embedding the appropriate frameworks.") or [install the frameworks using CocoaPods](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_install_sdk_cocoapods.htm "Add the SDK frameworks using CocoaPods, a developer tool that automatically manages dependencies.").

2.  Add descriptions for why the app needs access to the device's camera and photo library.

    Add string values for "Privacy - Camera Usage Description" and "Privacy - Photo Library Usage Description" in your Info.plist file. To learn more about these properties, see [Cocoa Keys](https://developer.apple.com/library/prerelease/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html) in Apple's reference documentation.

    Sample values for these keys:

    ```

    ```


You're now ready to get started using the SDK!

-   **[Add the Service SDK Frameworks with CocoaPods](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_install_sdk_cocoapods.htm)**
    Add the SDK frameworks using CocoaPods, a developer tool that automatically manages dependencies.
-   **[Add the Service SDK Frameworks Manually](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_install_sdk_manually.htm)**
    Add the SDK frameworks by manually embedding the appropriate frameworks.

## Code Examples

```
<key>NSCameraUsageDescription</key>
<string>Used when sending an image to an agent.</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>Used when sending an image to an agent.</string>
```

## Related Topics

- add the
                            frameworks files manually (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_install_sdk_manually.htm)
- install the frameworks using
                        CocoaPods (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_install_sdk_cocoapods.htm)
- Add the Service SDK Frameworks with CocoaPods (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_install_sdk_cocoapods.htm)
- Add the Service SDK Frameworks Manually (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_install_sdk_manually.htm)
