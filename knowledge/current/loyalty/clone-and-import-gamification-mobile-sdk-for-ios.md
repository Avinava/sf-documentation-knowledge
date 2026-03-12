---
title: "Clone and Import Gamification Mobile SDK for iOS"
domain: loyalty
topic: clone-and-import-gamification-mobile-sdk-for-ios
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.813Z
estimatedTokens: 419
keywords: [Clone, Import, Gamification, Mobile, SDK, iOS, GitHub, repository, copy, code, base, revision, history, local, computer]
---

# Clone and Import Gamification Mobile SDK for iOS

> Clone the Gamification Mobile iOS SDK GitHub repository to copy the code base and
  revision history of the repository to your local computer. After you clone the repository, import
  Gamification Mobile iOS SDK in an Xcode project.

# Clone and Import Gamification Mobile SDK for iOS

Clone the Gamification Mobile iOS SDK GitHub repository to copy the code base and revision history of the repository to your local computer. After you clone the repository, import Gamification Mobile iOS SDK in an Xcode project.

| Available in: all editions that have Loyalty Management enabled |
| --- |


1.  Go to the [Gamification Mobile SDK iOS repository](https://github.com/salesforce-misc/GamificationMobileSDK-iOS).
2.  To copy the repository URL to your clipboard, click **Code**, and then click ![Copy to Clipboard icon on Git Hub](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Floyalty%2Fmobile_sdk%2Fimages%2Fcopytoclipboard_icon.png&folder=loyalty).
3.  Open Terminal, and go to the directory where you want to clone the repository.
4.  Enter git clone https://github.com/loyaltysampleapp/GamificationMobileSDK-iOS.
5.  Press Enter and wait for the repository to clone.
6.  Open the project where you want to import GamificationMobileSDK-iOS in Xcode.
7.  Go to **File** | **Swift Packages** | **Add Package Dependency**.
8.  Click **Add Local**, and then select the local GamificationMobileSDK-iOS folder.
9.  Select a version, and click **Add Package** and on the confirmation window, click **Add Package**.
10.  To import the GamificationMobileSDK-iOS module into your Swift file, open the swift file where you want to use GamificationMobileSDK-iOS, and to the first line of code, add:

     import GamificationMobileSDK-iOS


You can now use the classes, structures, and protocols in the GamificationMobileSDK-iOS module to manage and customize the gamification features in your mobile application.
