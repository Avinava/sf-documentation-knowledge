---
title: "Clone and Import Referral Mobile SDK for Android"
domain: referral-marketing
topic: clone-and-import-referral-mobile-sdk-for-android
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.998Z
estimatedTokens: 439
keywords: [Clone, Import, Referral, Mobile, SDK, Android, GitHub, repository, copy, code, base, revision, history, local, computer]
---

# Clone and Import Referral Mobile SDK for Android

> Clone the GitHub repository for the Referral Mobile Android SDK to copy the code base
  and revision history of the repository to your local computer. After you clone the repository,
  import the Referral Mobile Android SDK in Android Studio to automatically download and manage
  external dependencies.

# Clone and Import Referral Mobile SDK for Android

Clone the GitHub repository for the Referral Mobile Android SDK to copy the code base and revision history of the repository to your local computer. After you clone the repository, import the Referral Mobile Android SDK in Android Studio to automatically download and manage external dependencies.

| Available in: all editions that have Referral Marketing enabled |
| --- |


1.  Go to the [Referral Mobile SDK Android](https://github.com/loyaltysampleapp/ReferralMobileSDK-Android) repository.
2.  To copy the repository URL to your clipboard, click **Code**, and then click ![Copy to Clipboard icon on Git Hub](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Freferral_marketing%2Freferral_marketing_sdk%2Fimages%2Fcopytoclipboard_icon.png&folder=referral_marketing).
3.  Open Terminal, and go to the directory where you want to clone the repository.
4.  Enter git clone https://github.com/loyaltysampleapp/ReferralMobileSDK-Android.
5.  Press Enter and wait for the repository to clone.
6.  Unzip the ReferralMobileSDK-Android package that you downloaded.
7.  Open Android Studio.
8.  Go to **File** | **New** | **Import Project**, and then select the ReferralMobileSDK-Android folder.
9.  Click **Open**.
10.  Open the SDK files and ensure that the files include the appropriate SDK packages.

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=referral_marketing)

     #### Note

     If the sync fails, disconnect the VPN to ensure there’s no blocker when downloading the dependencies, and then resync.


You can now use the classes and interfaces in the ReferralMobileSDK-Android module to manage and customize the referral program feature in your application.
