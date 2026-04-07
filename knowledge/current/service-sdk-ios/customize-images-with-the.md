---
title: "Customize Images with the"
domain: service-sdk-ios
topic: customize-images-with-the
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.830Z
estimatedTokens: 764
keywords: [Customize, Images, specify, custom, throughout]
---

# Customize Images with the

> You can specify custom images used throughout the UI.

# Customize Images with the

You can specify custom images used throughout the UI.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Use the [setImage](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html#/c:objc\(cs\)SCAppearanceConfiguration\(im\)setImage:compatibleWithTraitCollection:forName:) method on the [SCAppearanceConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html) object to **replace a stock image** with your image. Use the enumeration value for the image you intend to replace.

Supported image file formats include: tiff, tif, jpg, jpeg, gif, png, bmp, BMPF, ico, cur.

For specific images, use the SCSAppearanceImageToken enumeration specified by the SDK and add it to the [SCAppearanceConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html) object with the [setImage](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html#/c:objc\(cs\)SCAppearanceConfiguration\(im\)setImage:compatibleWithTraitCollection:forName:) method.

| Image Description | Enum Value |
| --- | --- |
| Close button | close |
| Done button | done |
| Small warning icon used when an error occurs | error |
| Error image used in a view for timeouts, when no agents are available, or for an unknown error | genericError |
| Minimize button (Knowledge and Chat) | minimizeButton |
| No connection | noConnection |
| Send button (Case Publisher and Chat) | send |
| Next field button (Case Publisher and Chat) | submitButtonNextArrow |
| Previous field button (Case Publisher and Chat) | submitButtonPreviousArrow |
| Attachment button when the user can attach a file | attachmentClipIcon |
| Avatar used for the agent (only the inscribed circle is visible in the chat feed) | chatAgentAvatar |
| Avatar used for Einstein bot (only the inscribed circle is visible in the chat feed) | chatBotAvatar |
| Icon used for Einstein bot persistent footer menu | chatBotFooterMenu |
| Icon used in the pre-chat screen | preChatIcon |

In Swift:

```

```

In Objective-C:

```

```

## Code Examples

```
// Create appearance configuration instance
let config = SCAppearanceConfiguration()
     
// Specify images
config.setImage(MY_CUSTOM_IMAGE, 
                compatibleWithTraitCollection: MY_TRAITS, 
                forName: ENUM_VALUE)
     
// Add other customizations here...
     
// Save configuration instance
ServiceCloud.shared().appearanceConfiguration = config
```

```
// Create appearance configuration instance
SCAppearanceConfiguration *config = [SCAppearanceConfiguration new];
     
// Specify images
[config setImage:MY_CUSTOM_IMAGE compatibleWithTraitCollection: MY_TRAITS 
         forName: ENUM_VALUE];
     
// Add other customizations here...
     
// Save configuration instance
[SCServiceCloud sharedInstance].appearanceConfiguration = config;
```
