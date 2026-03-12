---
title: "Clone and Import Referral Mobile SDK for iOS"
domain: referral-marketing
topic: clone-and-import-referral-mobile-sdk-for-ios
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.022Z
estimatedTokens: 406
keywords: [Clone, Import, Referral, Mobile, SDK, iOS, GitHub, repository, copy, code, base, revision, history, local, computer]
---

# Clone and Import Referral Mobile SDK for iOS

> Clone the Referral Mobile iOS SDK GitHub repository to copy the code base and revision
  history to your local computer. After you clone the repository, import the Referral Mobile iOS SDK
  in an Xcode project.

# Clone and Import Referral Mobile SDK for iOS

Clone the Referral Mobile iOS SDK GitHub repository to copy the code base and revision history to your local computer. After you clone the repository, import the Referral Mobile iOS SDK in an Xcode project.

| Available in: all editions that have Referral Marketing enabled |
| --- |


1.  Go to the [Referral Mobile SDK iOS repository](https://github.com/salesforce-misc/ReferralMobileSDK-iOS).
2.  To copy the repository URL to your clipboard, click **Code**, and then click ![Copy To Clip](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Freferral_marketing%2Freferral_marketing_sdk%2Fimages%2Fcopytoclipboard_icon.png&folder=referral_marketing).
3.  Open Terminal, and go to the directory where you want to clone the repository.
4.  Enter git clone https://github.com/salesforce-misc/ReferralMobileSDK-iOS.
5.  Press Enter and wait for the repository to clone.
6.  Open the project where you want to import ReferralMobileSDK-iOS in Xcode.
7.  Go to **File** | **Swift Packages** | **Add Package Dependency**.
8.  Click **Add Local**, and then select the local ReferralMobileSDK-iOS folder.
9.  Select a version, and click **Add Package** and on the confirmation window, click **Add Package**.
10.  To import the ReferralMobileSDK-iOS module into your Swift file, open the swift file where you want to use ReferralMobileSDK-iOS, and to the first line of code, add:

     import ReferralMobileSDK


You can now use the classes, structures, and protocols in the ReferralMobileSDK-iOS module to manage and customize the referral program feature in your mobile application.
