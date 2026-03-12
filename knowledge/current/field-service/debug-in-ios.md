---
title: "Debug in iOS"
domain: field-service
topic: debug-in-ios
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:57.007Z
estimatedTokens: 333
keywords: [Debug, iOS, Connect, Safari, Web, Inspector, desktop, WebView, Field, Service, mobile, app, where, LWC, running., Note]
---

# Debug in iOS

> Connect Safari Web Inspector on your desktop to the WebView in the Field Service mobile
    app where your LWC is running.

# Debug in iOS

Connect Safari Web Inspector on your desktop to the WebView in the Field Service mobile app where your LWC is running.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

Debugging in iOS currently only works with Big Sur or later, and requires using the Safari Technology Preview browser.

1.  Launch Safari on your desktop.
2.  Select **Safari** | **Preferences**.
3.  Select **Advanced**.
4.  Enable **Show Develop menu in menu bar**. Close the Preferences panel.
5.  Select **Develop** | **Simulator - device - version**, where the Simulator is the one that you’ve opened with the Field Service app for testing your new Lightning web component.

A window appears that shows the Safari Web Inspector developer tools connected to your simulator. You can use these tools and standard web development techniques to refine and improve your component.

![Safari Web Inspector connected to the Field Service mobile app on iOS, running our sample LWC](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Fqs_debugging_safari_web_inspector.png&folder=field_service_dev)

See [Apple Web Development Tools](https://developer.apple.com/safari/tools/ "HTML (New Window)") for additional information about the Web Inspector and how to use it.
