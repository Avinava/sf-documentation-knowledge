---
title: "Add the Service SDK Frameworks Manually"
domain: service-sdk-ios
topic: add-the-service-sdk-frameworks-manually
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.992Z
estimatedTokens: 645
keywords: [Add, Service, SDK, Frameworks, Manually, embedding, appropriate]
---

> Add the SDK frameworks by manually embedding the appropriate frameworks.

# Add the Service SDK Frameworks Manually

Add the SDK frameworks by manually embedding the appropriate frameworks.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

#### Note

If you are using Xcode 12.3 or later, you must install the SDK using XCFramework files.

1.  Download the SDK frameworks from the [Service Chat SDK download page](https://github.com/forcedotcom/ServiceSDK-iOS/wiki/Get-the-iOS-SDK).
2.  Embed the relevant Service Chat SDK frameworks into your project.

    You can find the framework files within the Frameworks folder. Specifically, the following frameworks are available for you to use:

    | Framework | Description |
    | --- | --- |
    | ServiceCore | Contains all the common components used by the Service SDK. |
    | ServiceChat | Contains access to the Chat features of the SDK. |

    Add the relevant frameworks to the **Frameworks, Libraries, and Embedded Content** section of the **General** tab for your target app.

    ![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

    #### Important

    Before embedding a framework into your project, be sure to copy the framework file into your project folder (or another location found in the framework search path). If Xcode can’t find the framework, you won’t be able to access its contents in your code.


Once you've added the SDK frameworks, proceed with [the installation instructions](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm "Before you can use the iOS SDK, install the SDK and configure your project.").

## Related Topics

- the installation
                    instructions (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm)
