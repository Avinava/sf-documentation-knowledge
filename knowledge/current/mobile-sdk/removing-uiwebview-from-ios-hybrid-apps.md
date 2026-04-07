---
title: "Removing UIWebView from iOS Hybrid Apps"
domain: mobile-sdk
topic: removing-uiwebview-from-ios-hybrid-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.149Z
estimatedTokens: 548
keywords: [Removing, UIWebView, iOS, Hybrid, Apps, Apple, deprecated, favor, WKWebView, App, Store, recently, announced, timeline, formally, conform, requirements, Mobile, SDK, removed, references, Frequently, Asked, Questions]
---

> In 2018, Apple deprecated UIWebView in favor of
      WKWebView. The App Store recently announced a timeline
    for formally removing apps that still use UIWebView. To
    conform to these requirements, Mobile SDK has removed all
    its references to UIWebView.

# Removing UIWebView from iOS Hybrid Apps

In 2018, Apple deprecated UIWebView in favor of WKWebView. The App Store recently announced a timeline for formally removing apps that still use UIWebView. To conform to these requirements, Mobile SDK has removed all its references to UIWebView.

Mobile SDK phased in the UIWebView replacement over three release cycles. However, when Mobile SDK 8.0 was being developed, Cordova—the underlying technology for Mobile SDK hybrid apps—still referenced UIWebView in its code base. With no means of removing these unused references, Mobile SDK 8.0 couldn’t satisfy the new App Store requirements.

Mobile SDK 8.1 adopts the new Cordova 5.1.1 release, which allows clients to “compile out” its UIWebView code. As a result, Mobile SDK 8.1 is ready for App Store submittals.

## Frequently Asked Questions

What are the App Store deadlines?

-   **April 2020:** App Store stops accepting new iOS apps that contain references to UIWebView.
-   **December 2020:** App Store stops accepting updated iOS apps that contain references to UIWebView.

Which apps are affected?

This change affects Mobile SDK hybrid apps on iOS. It does not affect Mobile SDK hybrid apps on Android, Mobile SDK native apps, or Mobile SDK React Native apps.

What actions do I need to take?

-   To submit **new** hybrid apps to the App Store: Upgrade to Mobile SDK 8.1 by April 2020.

-   To submit **updated** hybrid apps to the App Store: Upgrade to Mobile SDK 8.1 (or later) by December 2020.

-   For **all** hybrid apps:

    -   Update any UIWebView references in custom code to WKWebView.
    -   While updating to 8.1, apply code changes as needed where other APIs have been deprecated, removed, or replaced.


What is UIWebView?

UIWebView is a deprecated iOS user interface control in Apple’s UIKit framework. It loads HTML files and web content into an app view, rendering them as they would appear in a browser window. See [developer.apple.com/documentation/uikit/uiwebview](https://developer.apple.com/documentation/uikit/uiwebview "HTML (New Window)").

## See Also

[Apple Developer News Release](https://developer.apple.com/news/?id=12232019b "HTML (New Window)")
