---
title: "SDK Customizations with the for iOS for iOS"
domain: service-sdk-ios
topic: sdk-customizations-with-the-for-ios-for-ios
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:28.263Z
estimatedTokens: 1091
keywords: [SDK, Customizations, iOS, Once, you’ve, played, around, features, how, customize, Service, Chat, user, fits, look, feel, app, instructions, localizing, strings, languages]
---

> Once you’ve played around with some
      of the SDK features, use this section to learn how to customize the Service Chat SDK
      user interface so that it fits the look and feel of your app. This section also contains
      instructions for localizing strings in all supported languages.

# SDK Customizations with the for iOS for iOS

Once you’ve played around with some of the SDK features, use this section to learn how to customize the Service Chat SDK user interface so that it fits the look and feel of your app. This section also contains instructions for localizing strings in all supported languages.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Many UI customizations are handled with the [SCAppearanceConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html) object. You can configure the colors, fonts, and images to your interface with an [SCAppearanceConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html) instance. It contains the methods [setColor](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html#/c:objc\(cs\)SCAppearanceConfiguration\(im\)setColor:forName:), [setFontDescriptor](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html#/c:objc\(cs\)SCAppearanceConfiguration\(im\)setFontDescriptor:fontFileName:forWeight:), and [setImage](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html#/c:objc\(cs\)SCAppearanceConfiguration\(im\)setImage:compatibleWithTraitCollection:forName:). To use this object, create an SCAppearanceConfiguration instance, specify values for each token you want to change, and store the instance in the [appearanceConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html#/c:objc\(cs\)SCServiceCloud\(py\)appearanceConfiguration) property of the [ServiceCloud](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html) [sharedInstance](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html#/c:objc\(cs\)SCServiceCloud\(cm\)sharedInstance).

There are other ways to customize the interface. When using Service Cloud features, various action buttons are available to the user. You can control the visibility of these buttons and even create new action buttons. You can also customize the strings used in the UI for any of the supported languages. String customization is performed using a standard [localization mechanism](https://developer.apple.com/internationalization/) provided to Apple developers.

-   **[Customize Colors with the](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/customize_colors.htm)**
    Customize the colors by defining the branding token colors used throughout the interface.
-   **[Customize and Localize Strings with the](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/localization.htm)**
    You can change the text used throughout the user interface. To customize text, create string resource values in a Localizable.strings file in the Localization bundle for the languages you want to update. Create string tokens that match the tokens you intend to override.
-   **[Customize Fonts with the](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/customize_fonts.htm)**
    There are three customizable font settings used throughout the UI: SCFontWeightLight, SCFontWeightRegular, SCFontWeightBold.
-   **[Customize Images with the](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/customize_images.htm)**
    You can specify custom images used throughout the UI.

## Related Topics

- Customize Colors with the (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/customize_colors.htm)
- Customize and Localize Strings with the (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/localization.htm)
- Customize Fonts with the (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/customize_fonts.htm)
- Customize Images with the (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/customize_images.htm)
