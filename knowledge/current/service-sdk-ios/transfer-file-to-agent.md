---
title: "Transfer File to Agent"
domain: service-sdk-ios
topic: transfer-file-to-agent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:28.119Z
estimatedTokens: 597
keywords: [Transfer, File, Agent, Give, users, ability, files, chat, they, share, their, issues]
---

> Give users the ability to transfer files during a chat so they can share
    information about their issues.

# Transfer File to Agent

Give users the ability to transfer files during a chat so they can share information about their issues.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

The agent can request that the user transfer a file by clicking the **Attach File** button from the Service Cloud Console.

![Attach file in Service Cloud](/docs/resources/img/en-us/noversion?doc_id=images%2Flive-agent-attach-file.png&folder=service_sdk_ios)

The user sees a **FILE TRANSFER REQUESTED** message in the app and can then send a file using the paperclip button.

![Attach file from app](/docs/resources/img/en-us/noversion?doc_id=images%2Flive-agent-attach-file-app.png&folder=service_sdk_ios)

No coding is necessary in your app to make this behavior work.

See [Transfer Files During a Chat](https://help.salesforce.com/apex/HTViewHelpDoc?id=live_agent_transfer_files.htm&language=en_US) in Salesforce Help for details about setting up this functionality in the Service Cloud Console.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

#### Note

If your app crashes when a user attempts to perform a file transfer, check that you've enabled the device privacy permissions for the camera and the photo library. An app will crash if these permissions are not set in Xcode. See [Install the for iOS for iOS](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm "Before you can use the iOS SDK, install the SDK and configure your project.").

## Related Topics

- Install the for iOS for iOS (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm)
