---
title: "Customize Colors with the"
domain: service-sdk-ios
topic: customize-colors-with-the
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:32.813Z
estimatedTokens: 1140
keywords: [Customize, Colors, defining, branding, token, throughout]
---

# Customize Colors with the

> Customize the colors by defining the branding token colors used throughout the interface.

# Customize Colors with the

Customize the colors by defining the branding token colors used throughout the interface.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

To customize colors, create an SCAppearanceConfiguration instance, specify values for each token you want to change, and store the instance in the [appearanceConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html#/c:objc\(cs\)SCServiceCloud\(py\)appearanceConfiguration) property of the [ServiceCloud](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html) [sharedInstance](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html#/c:objc\(cs\)SCServiceCloud\(cm\)sharedInstance).

In Swift:

```

```

In Objective-C:

```

```

To support dark mode in iOS 13 and later, [specify adaptive colors](https://github.com/forcedotcom/ServiceSDK-iOS/wiki/Handling-Dark-Mode-for-iOS-13-with-the-Service-SDK) for each branding token. The following branding tokens are available for customization.

| Token Name / Swift Value / Objective-C Value | Default | Dark Mode Default | Description / Sample Uses |
| --- | --- | --- | --- |
| Navigation Bar BackgroundnavbarBackgroundSCSAppearanceColorTokenNavbarBackground | #FAFAFA | #1A2129 | Background color for the navigation bar. |
| Navigation Bar InvertednavbarInvertedSCSAppearanceColorTokenNavbarInverted | #010101 | #C6CBCF | Navigation bar text and icon color. |
| Brand PrimarybrandPrimarySCSAppearanceColorTokenBrandPrimary | #007F7F | #00B4B4 |  |
| Brand SecondarybrandSecondarySCSAppearanceColorTokenBrandSecondary | #2872CC | #0070D2 | Used throughout the UI for button colors.Chat: Agent text bubbles. |
| Primary Brand InvertedbrandPrimaryInvertedSCSAppearanceColorTokenBrandPrimaryInverted | #FBFBFB | #FBFBFB |  |
| Secondary Brand InvertedbrandSecondaryInvertedSCSAppearanceColorTokenBrandSecondaryInverted | #FCFCFC | #F7F7F7 | Text on areas where a brand color is used for the background. |
| Contrast PrimarycontrastPrimarySCSAppearanceColorTokenContrastPrimary | #000000 | #E2E4E6 | Primary body text color. |
| Contrast SecondarycontrastSecondarySCSAppearanceColorTokenContrastSecondary | #6D6D6D | #898D92 |  |
| Contrast TertiarycontrastTertiarySCSAppearanceColorTokenContrastTertiary | #BABABA | #A0A6AD |  |
| Contrast QuaternarycontrastQuaternarySCSAppearanceColorTokenContrastQuaternary | #F1F1F1 | #09121B | Chat: Background color. |
| Contrast InvertedcontrastInvertedSCSAppearanceColorTokenContrastInverted | #FFFFFF | #323232 | Page background, navigation bar, table cell background. |
| Feedback PrimaryfeedbackPrimarySCSAppearanceColorTokenFeedbackPrimary | #E74C3C | #E0A7A9 | Text color for error messages. |
| Feedback SecondaryfeedbackSecondarySCSAppearanceColorTokenFeedbackSecondary | #2ECC71 | #9ACDB7 |  |
| Feedback TertiaryfeedbackTertiarySCSAppearanceColorTokenFeedbackTertiary | #F5A623 | #FADBAE |  |
| OverlayoverlaySCSAppearanceColorTokenOverlay | Contrast Primary(at 40% alpha) | #323232 |  |

These screenshots illustrate how the branding tokens affect the UI.

Chat UI Branding:

![Chat color branding](/docs/resources/img/en-us/noversion?doc_id=images%2Fbranding-chat-ios.png&folder=service_sdk_ios)

## Example

The following code sample changes three of the branding tokens.

In Swift:

```

```

In Objective-C:

```

```

For an example of how to specify adaptive colors that work with the dark mode feature that was introduced in iOS 13, see [Handling Dark Mode for iOS 13 with the Service SDK](https://github.com/forcedotcom/ServiceSDK-iOS/wiki/Handling-Dark-Mode-for-iOS-13-with-the-Service-SDK).

## Code Examples

```
// Create appearance configuration instance
let appearance = SCAppearanceConfiguration()
        
// Customize color tokens
appearance.setColor(COLOR_VALUE, forName: TOKEN_NAME)
        
// Add other customizations here...
        
// Save configuration instance
ServiceCloud.shared().appearanceConfiguration = appearance
```

```
// Create appearance configuration instance
SCAppearanceConfiguration *appearance = [SCAppearanceConfiguration new];

// Customize color tokens
[appearance setColor:COLOR_VALUE forName:TOKEN_NAME];

// Add other customizations here...

// Save configuration instance
[SCServiceCloud sharedInstance].appearanceConfiguration = appearance;
```

```
// Create appearance configuration instance
let appearance = SCAppearanceConfiguration()
   
// Customize color tokens
appearance.setColor(
       UIColor(red: 80/255, green: 227/255, blue: 194/255, alpha: 1.0), 
       forName: .brandPrimary)
appearance.setColor(
       UIColor(red: 74/255, green: 144/255, blue: 226/255, alpha: 1.0), 
       forName: .brandSecondary)
appearance.setColor(
       UIColor(red: 252/255, green: 252/255, blue: 252/255, alpha: 1.0), 
       forName: .brandSecondaryInverted)
   
// Save configuration instance
ServiceCloud.shared().appearanceConfiguration = appearance
```

```
// Create appearance configuration instance
SCAppearanceConfiguration *appearance = [SCAppearanceConfiguration new];
    
// Customize color tokens
[appearance setColor:[UIColor colorWithRed: 80/255 
                                     green: 227/255 
                                      blue: 194/255 
                                     alpha: 1.0]
             forName:SCSAppearanceColorTokenBrandPrimary];
[appearance setColor:[UIColor colorWithRed: 74/255 
                                     green: 144/255 
                                      blue: 226/255 
                                     alpha: 1.0]
             forName:SCSAppearanceColorTokenBrandSecondary];
[appearance setColor:[UIColor colorWithRed: 252/255 
                                     green: 252/255 
                                      blue: 252/255 
                                     alpha: 1.0]
             forName:SCSAppearanceColorTokenBrandSecondaryInverted];
    
// Save configuration instance
[SCServiceCloud sharedInstance].appearanceConfiguration = appearance;
```
