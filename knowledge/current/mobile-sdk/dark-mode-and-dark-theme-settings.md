---
title: "Dark Mode and Dark Theme Settings"
domain: mobile-sdk
topic: dark-mode-and-dark-theme-settings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.426Z
estimatedTokens: 644
keywords: [Dark, Mode, Theme, Settings, color, schemes, recently, become, popular, user, interfaces, because, they, reduce, eye]
---

# Dark Mode and Dark Theme Settings

> Dark color schemes have recently become popular in user interfaces because they
    can
    reduce eye strain and improve screen readability. iOS and Android now support
      dark mode and dark theme, respectively, in their latest versions. To
    keep in sync with these developments, Mobile SDK 8.0 adds dark options for its native UI
    elements.

# Dark Mode and Dark Theme Settings

Dark color schemes have recently become popular in user interfaces because they can reduce eye strain and improve screen readability. iOS and Android now support dark mode and dark theme, respectively, in their latest versions. To keep in sync with these developments, Mobile SDK 8.0 adds dark options for its native UI elements.

Dark schemes affect the following Mobile SDK dialog boxes:

-   Choose Connection (server picker)
-   Switch User
-   Passcode and Biometric Input

In addition, the MobileSyncExplorer sample app and native template apps now support dark UIs.

Dark settings are managed as follows.

## iOS

In Mobile SDK 8.2 and earlier, dark mode always follows the iOS setting on the mobile device. If your app isn’t yet compatible with dark mode, you can disable the feature statically. To do so, open your app’s Info.plist file and set the UIUserInterfaceStyle key to “Light”. Apple strongly recommends that you use this setting only if you need more time to update your app’s resources to dark mode. See [“Choosing a Specific Interface Style for Your iOS App”](https://developer.apple.com/documentation/appkit/supporting_dark_mode_in_your_interface/choosing_a_specific_interface_style_for_your_ios_app/) at developer.apple.com.

Mobile SDK 8.3 introduces a userInterfaceStyle property on SFSDKWindowManager that lets you change the user interface mode at runtime. This setting applies to all windows that Mobile SDK manages as follows:

-   You can choose dark, light, or unspecified mode. By default, Mobile SDK uses unspecified.
-   If an app specifies the plist UIUserInterfaceStyle entry and also sets the userInterfaceStyle property, the property takes precedence.
-   This property requires base SDK iOS 13 or later.

## Example

These examples use iOS dark theme APIs.

```

```

## Android

Dark theme in Mobile SDK apps is determined as follows:

-   API 29 and higher: Defaults to the OS setting on the mobile device
-   API 28 and earlier: Defaults to off
-   API 23–29: Apps can force dark theme on or off

In the SalesforceSDKManager class, Mobile SDK provides APIs for querying and toggling dark theme. If the dark option doesn’t agree with your app’s existing color scheme, you can revert Mobile SDK resources to the light setting. The Theme enum defines the possible states:

```

```

## Example

These examples use Android dark theme APIs.

To query the theme setting, use this method:

```

```

To force dark theme on or off, use the setTheme() method. This example turns off dark theme:

```

```

## Code Examples

```
// Swift
SFSDKWindowManager.shared().userInterfaceStyle = .dark

// Objective-C
[SFSDKWindowManager sharedManager].userInterfaceStyle = UIUserInterfaceStyleDark;
```

```apex
public enum Theme { 
    LIGHT, 
    DARK, 
    SYSTEM_DEFAULT 
}
```

```apex
public boolean isDarkTheme()
```

```
SalesforceSDKManager.getInstance().setTheme(SalesforceSDKManager.Theme.LIGHT);
```
