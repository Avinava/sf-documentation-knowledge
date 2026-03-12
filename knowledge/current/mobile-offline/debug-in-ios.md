---
title: "Debug in iOS"
domain: mobile-offline
topic: debug-in-ios
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.487Z
estimatedTokens: 259
keywords: [Debug, iOS, Follow, steps, attach, Safari, Web, Inspector, browser, webview, Test, Harness, app, Connect, desktop, WebView, Service, mobile, LWC, running]
---

# Debug in iOS

> Connect Safari Web Inspector on your desktop to the WebView in the Field Service mobile
    app where your LWC is running.

# Debug in iOS

Connect Safari Web Inspector on your desktop to the WebView in the Field Service mobile app where your LWC is running.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Debugging in iOS currently only works with Big Sur or later, and requires using the Safari Technology Preview browser.

1.  Launch Safari on your desktop.
2.  Select **Safari** | **Preferences**.
3.  Select **Advanced**.
4.  Enable **Show Develop menu in menu bar**. Close the Preferences panel.
5.  Select **Develop** | **Simulator - device - version**, where the Simulator is the one that you’ve opened with the Field Service app for testing your new Lightning web component.

A window appears that shows the Safari Web Inspector developer tools connected to your simulator. You can use these tools and standard web development techniques to refine and improve your component.

![Safari Web Inspector connected to the Field Service mobile app on iOS, running our sample LWC](/docs/resources/img/en-us/260.0?doc_id=images%2Fqs_debugging_safari_web_inspector.png&folder=mobile_offline)

See [Apple Web Development Tools](https://developer.apple.com/safari/tools/ "HTML (New Window)") for additional information about the Web Inspector and how to use it.
