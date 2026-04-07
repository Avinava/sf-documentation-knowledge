---
title: "Controlling the Status Bar in iOS 7 Hybrid Apps"
domain: mobile-sdk
topic: controlling-the-status-bar-in-ios-7-hybrid-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.144Z
estimatedTokens: 270
keywords: [Controlling, Status, Bar, iOS, Hybrid, Apps, choose, show, hide, control, whether, overlays, web, view, Cordova, plug-in, configure, settings, shown, Salesforce, Mobile, SDK, 2.3]
---

> In iOS 7 you can choose to show or hide the status bar, and you can control whether it overlays
   the web view. You use the Cordova status bar plug-in to configure these settings. By default, the
   status bar is shown and overlays the web view in Salesforce Mobile SDK 2.3 and later.

# Controlling the Status Bar in iOS 7 Hybrid Apps

In iOS 7 you can choose to show or hide the status bar, and you can control whether it overlays the web view. You use the Cordova status bar plug-in to configure these settings. By default, the status bar is shown and overlays the web view in Salesforce Mobile SDK 2.3 and later.

To hide the status bar, add the following keys to the application plist:

```

```

For an example of a hidden status bar, see the AccountEditor sample app.

To control status bar appearance--overlaying, background color, translucency, and so on--add org.apache.cordova.statusbar to your app:

```

```

You control the appearance either from the config.xml file or from JavaScript. See [https://github.com/apache/cordova-plugin-statusbar](https://github.com/apache/cordova-plugin-statusbar/ "HTML (New Window)") for full instructions. For an example of a status bar that doesn’t overlay the web view, see the ContactExplorer sample app.

#### See Also

-   [Hybrid Sample Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_samples.htm)

## Code Examples

```
<key>UIStatusBarHidden</key>
<true/>
<key>UIViewControllerBasedStatusBarAppearance</key>
<false/>
```

```
cordova plugin add org.apache.cordova.statusbar
```

## Related Topics

- Hybrid Sample Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_samples.htm)
