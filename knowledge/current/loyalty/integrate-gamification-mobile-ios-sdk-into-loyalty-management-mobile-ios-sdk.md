---
title: "Integrate Gamification Mobile iOS SDK into Loyalty Management Mobile iOS SDK"
domain: loyalty
topic: integrate-gamification-mobile-ios-sdk-into-loyalty-management-mobile-ios-sdk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.824Z
estimatedTokens: 279
keywords: [Integrate, Gamification, Mobile, iOS, SDK, Loyalty, Management, Import, adding, external, dependency]
---

# Integrate Gamification Mobile iOS SDK into Loyalty Management Mobile iOS SDK

> Import the Gamification Mobile iOS SDK into the existing Loyalty Management Mobile iOS
    SDK by adding it as an external dependency.

# Integrate Gamification Mobile iOS SDK into Loyalty Management Mobile iOS SDK

Import the Gamification Mobile iOS SDK into the existing Loyalty Management Mobile iOS SDK by adding it as an external dependency.

| Available in: all editions that have Loyalty Management enabled |
| --- |


1.  Open the LoyaltyMobileSDK-iOS project in Xcode.
2.  Go to **File** | **Swift Packages** | **Add Package Dependency**.
3.  Enter the repository URL: https://github.com/loyaltysampleapp/GamificationMobileSDK-iOS, or if you’ve cloned the repository, click **Add Local**, and then select the local GamificationMobileSDK-iOS folder.
4.  Select a version, and click **Add Package** and on the confirmation window, click **Add Package**.
5.  To import the GamificationMobileSDK-iOS module into your Swift file, open the swift file where you want to use GamificationMobileSDK-iOS, and to the first line of code, add:

    import GamificationMobileSDK-iOS


You can now use the classes, structures, and protocols in the GamificationMobileSDK-iOS module to extend and manage the gamification features in the MyNTORewards sample app.
