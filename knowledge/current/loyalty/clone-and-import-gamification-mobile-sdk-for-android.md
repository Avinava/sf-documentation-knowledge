---
title: "Clone and Import Gamification Mobile SDK for Android"
domain: loyalty
topic: clone-and-import-gamification-mobile-sdk-for-android
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.784Z
estimatedTokens: 431
keywords: [Clone, Import, Gamification, Mobile, SDK, Android, GitHub, repository, copy, code, base, revision, history, local, computer]
---

# Clone and Import Gamification Mobile SDK for Android

> Clone the GitHub repository to copy the code base and revision history of the repository
  to your local computer. After you clone the mobile SDK for Android repository, import Gamification
  Mobile Android SDK in Android Studio to automatically download and manage external
  dependencies.

# Clone and Import Gamification Mobile SDK for Android

Clone the GitHub repository to copy the code base and revision history of the repository to your local computer. After you clone the mobile SDK for Android repository, import Gamification Mobile Android SDK in Android Studio to automatically download and manage external dependencies.

| Available in: all editions that have Loyalty Management enabled |
| --- |


1.  Go to the [Gamification Mobile SDK Android repository](https://github.com/salesforce-misc/GamificationMobileSDK-Android).
2.  To copy the repository URL to your clipboard, click **Code**, and then click ![Copy to Clipboard icon on Git Hub](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Floyalty%2Fmobile_sdk%2Fimages%2Fcopytoclipboard_icon.png&folder=loyalty).
3.  Open Terminal, and go to the directory where you want to clone the repository.
4.  Enter git clone https://github.com/loyaltysampleapp/GamificationMobileSDK-Android.
5.  Press Enter and wait for the repository to clone.
6.  Unzip the GamificationMobileSDK-Android package that you downloaded.
7.  Open Android Studio.
8.  Go to **File** | **New** | **Import Project**, and then select the GamificationMobileSDK-Android folder.
9.  Click **Open**.
10.  Open the SDK files and ensure that the files include the appropriate SDK packages.

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

     #### Note

     If the sync fails, disconnect the VPN to ensure there’s no blocker when downloading the dependencies, and then resync.


You can now use the classes and interfaces in the GamificationMobileSDK-Android module to manage and customize the gamification features in your application.
