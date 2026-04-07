---
title: "Customize Fonts with the"
domain: service-sdk-ios
topic: customize-fonts-with-the
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:32.822Z
estimatedTokens: 923
keywords: [Customize, Fonts, There, three, customizable, font, settings, throughout, SCFontWeightLight, SCFontWeightRegular, SCFontWeightBold]
---

# Customize Fonts with the

> There are three customizable font settings used throughout the UI:
   SCFontWeightLight, SCFontWeightRegular,
   SCFontWeightBold.

# Customize Fonts with the

There are three customizable font settings used throughout the UI: SCFontWeightLight, SCFontWeightRegular, SCFontWeightBold.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

You can customize three font settings used throughout the Service Chat SDK interface:

| Font Setting | Default Value | Samples Uses in the SDK |
| --- | --- | --- |
| SCFontWeightLight | Helvetica Neue - Light | Knowledge article cell summary, Case Management field text, Case Management submit success view, content of error messages |
| SCFontWeightRegular | Helvetica Neue | Navigation bar, Chat text, Knowledge data category cell in detail view, Knowledge "show more" article footer, Knowledge "show more" button cell |
| SCFontWeightBold | Helvetica Neue - Semibold | Knowledge category headers, Knowledge article cell title, Case Management field labels, Case Management submit button, title of error messages |

To configure your app to use different fonts:

1.  Add new fonts to your Xcode project.

    Any new fonts must be added as a resource to your Xcode project. When adding, be sure to select **Copy items if needed**.

2.  Add new fonts to your project target.

    For each new font, add it to your project target under **Target Membership**.

    ![Target Membership for font](/docs/resources/img/en-us/noversion?doc_id=images%2Fios-font-customization-1.png&folder=service_sdk_ios)

3.  Add the font to your app's Info.plist.

    You'll need to add all new fonts into a string array. Each string element of the array must be the name of each font resource file.

    If you're viewing your Info.plist as a **Property List**, add an Array named **Fonts provided by application**.

    If you're viewing your Info.plist as **Source Code**, add an array named UIAppFonts. For example:

    ```

    ```

4.  Customize any of the Service Chat SDK font values using [SCAppearanceConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html).

    To customize the fonts, create an [SCAppearanceConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCAppearanceConfiguration.html) instance, set the font descriptor for each font setting you want to change, and store the SCAppearanceConfiguration instance in the [appearanceConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html#/c:objc\(cs\)SCServiceCloud\(py\)appearanceConfiguration) property of the [ServiceCloud](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html) shared instance.

    Swift Example:

    ```

    ```

    Objective-C Example:

    ```

    ```

    Be sure to use the exact font descriptor attribute name and font file name for your custom font.

## Code Examples

```
<key>UIAppFonts</key>
  <array>
    <string>MyCustomFont1.ttf</string>
    <string>MyCustomFont2.ttf</string>
    <string>MyCustomFont3.ttf</string>
</array>
```

```
// Create appearance configuration instance
let config = SCAppearanceConfiguration()
        
// Customize font
let descriptor = UIFontDescriptor(fontAttributes: 
    [UIFontDescriptor.AttributeName.family : "Proxima Nova"])
config.setFontDescriptor(descriptor, 
                         fontFileName: "ProximaNova-Light.otf", 
                         forWeight: SCFontWeightLight)
        
// Add other customizations here...
        
// Save configuration instance
ServiceCloud.shared().appearanceConfiguration = config
```

```
// Create appearance configuration instance
SCAppearanceConfiguration *config = 
    [SCAppearanceConfiguration new];

// Customize font
UIFontDescriptor *descriptor = 
    [UIFontDescriptor fontDescriptorWithFontAttributes:@{   
     UIFontDescriptorFamilyAttribute: @"Proxima Nova",
       UIFontDescriptorFaceAttribute: @"Light" }];
[config setFontDescriptor:descriptor
                       fontFileName:@"ProximaNova-Light.otf"
                          forWeight:SCFontWeightLight];

// Add other customizations here...

// Save configuration instance
[SCServiceCloud sharedInstance].appearanceConfiguration = config;
```
