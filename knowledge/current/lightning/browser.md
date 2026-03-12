---
title: "$Browser"
domain: lightning
topic: browser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.937Z
estimatedTokens: 426
keywords: [$Browser, provider, hardware, operating, system, browser, accessing, application]
---

# $Browser

> The $Browser global value
            provider returns information about the hardware and operating system of the browser
            accessing the application.

# $Browser

The $Browser global value provider returns information about the hardware and operating system of the browser accessing the application.

| Attribute | Description |
| --- | --- |
| formFactor | Returns a FormFactor enum value based on the type of hardware the browser is running on.DESKTOP for a desktop clientPHONE for a phone including a mobile phone with a browser and a smartphone |
| isAndroid | Indicates whether the browser is running on an Android device (true) or not (false). |
| isIOS | Due to changes made by Apple, isIOS is deprecated because it no longer distinguishes between iPad and MacOS desktop. |
| isIPad | Due to changes made by Apple, isIPad is deprecated because it no longer distinguishes between iPad and MacOS desktop. |
| isIPhone | Not available in all implementations. Indicates whether the browser is running on an iPhone (true) or not (false). |
| isPhone | Indicates whether the browser is running on a phone including a mobile phone with a browser and a smartphone (true), or not (false). |
| isTablet | Indicates whether the browser is running on a tablet with Android 2.2 or later (true) or not (false).NoteDue to changes made by Apple, isTablet is deprecated for iOS devices because $Browser no longer distinguishes between iPad and MacOS desktop. |
| isWindowsPhone | Indicates whether the browser is running on a Windows phone (true) or not (false). This attribute detects only Windows phones and doesn’t detect tablets or other touch-enabled Windows 8 devices. |

## Example

This example shows usage of the $Browser global value provider.

```

```

Similarly, you can check browser information in a client-side controller using $A.get().

```

```

## Code Examples

```
<aura:component>
    {!$Browser.isTablet}
    {!$Browser.isPhone}
    {!$Browser.isAndroid}
    {!$Browser.formFactor}
</aura:component>
```

```
({
    checkBrowser: function(component) {
        var device = $A.get("$Browser.formFactor");
        alert("You are using a " + device);
    }
})
```
