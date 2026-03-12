---
title: "Debug Lightning Web Components"
domain: mobile-offline
topic: debug-lightning-web-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.478Z
estimatedTokens: 586
keywords: [Debug, Lightning, Web, Components, best, way, develop, anything, built, HTML, CSS, JavaScript, built-in, debugging, tools]
---

# Debug Lightning Web Components

> The best way to develop and debug your Lightning web components is the same way you
  develop and debug anything built with HTML, CSS, and JavaScript: with the built-in
  debugging tools in your web browser.

# Debug Lightning Web Components

The best way to develop and debug your Lightning web components is the same way you develop and debug *anything* built with HTML, CSS, and JavaScript: with the built-in debugging tools in your web browser.

-   For debugging on Android, use [Chrome DevTools (Google)](https://developer.chrome.com/docs/devtools/)
-   For debugging on iOS, use [Safari Web Inspector (Apple)](https://developer.apple.com/safari/tools/)

Desktop users use Salesforce in a standard web browser. For developers, this makes using the development tools built into those browsers the best way to experience the component code the same way their users do. It also makes it straightforward to use, examine, and debug code while it’s under development. It all happens in the same tool, a standard web browser.

In contrast, mobile users don’t use Salesforce in a browser, desktop or mobile. Instead, they use Salesforce, including the custom components you build, from within a Salesforce mobile app. Your LWCs run inside a web view, which is embedded in the mobile app. Web views don’t have debugging tools built into them, so the process of debugging them is different.

The solution to this challenge is remote debugging. Remote debugging lets you use the exact same development and debugging tools you’re used to—Chrome DevTools or Safari Web Inspector running on your development system—and connect them to the web view running inside a separate mobile app. Remote debugging works whether you’re running your code in the app on a virtual device, or a physical device. While that all might sound complicated, it’s actually simple once you understand the procedure.

-   **[Enable Debugging for LWC Developers](atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_debug_enable.htm)**
    Enable debugging settings for each LWC developer user who needs to use debugging tools while developing their LWCs.
-   **[Debug in Android](atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_debug_android.htm)**
    Follow these steps to attach Chrome DevTools in your browser to the webview of the Test Harness app.
-   **[Debug in iOS](atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_debug_ios.htm)**
    Follow these steps to attach Safari Web Inspector in your browser to the webview of the Test Harness app.

## Related Topics

- Enable Debugging for LWC Developers (atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_debug_enable.htm)
- Debug in Android (atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_debug_android.htm)
- Debug in iOS (atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_debug_ios.htm)
