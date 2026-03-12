---
title: "Integrate Referral Mobile iOS SDK into Loyalty Management Mobile iOS SDK"
domain: referral-marketing
topic: integrate-referral-mobile-ios-sdk-into-loyalty-management-mobile-ios-sdk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.032Z
estimatedTokens: 271
keywords: [Integrate, Referral, Mobile, iOS, SDK, Loyalty, Management, Import, adding, external, dependency]
---

# Integrate Referral Mobile iOS SDK into Loyalty Management Mobile iOS SDK

> Import the Referral Mobile iOS SDK into the existing Loyalty Management Mobile iOS SDK
    by adding it as an external dependency.

# Integrate Referral Mobile iOS SDK into Loyalty Management Mobile iOS SDK

Import the Referral Mobile iOS SDK into the existing Loyalty Management Mobile iOS SDK by adding it as an external dependency.

| Available in: all editions that have Referral Marketing enabled |
| --- |


1.  Open the LoyaltyMobileSDK-iOS project in Xcode.
2.  Go to **File** | **Swift Packages** | **Add Package Dependency**.
3.  Enter the repository URL: https://github.com/salesforce-misc/ReferralMobileSDK-iOS, or if you’ve cloned the repository, click **Add Local**, and then select the local ReferralMobileSDK-iOS folder.
4.  Select a version, and click **Add Package** and on the confirmation window, click **Add Package**.
5.  To import the ReferralMobileSDK-iOS module into your Swift file, open the swift file where you want to use ReferralMobileSDK-iOS, and to the first line of code, add:

    import ReferralMobileSDK


You can now use the classes, structures, and protocols in the ReferralMobileSDK-iOS module to extend, and manage the referral program feature in the MyNTORewards sample app.
