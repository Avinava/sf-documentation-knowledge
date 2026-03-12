---
title: "Import SDK into iOS Swift Projects"
domain: loyalty
topic: import-sdk-into-ios-swift-projects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.681Z
estimatedTokens: 398
keywords: [Import, SDK, iOS, Swift, Projects, clone, mobile, repository, Loyalty, Management, Xcode, automatically, download, manage, external]
---

# Import SDK into iOS Swift Projects

> After you clone the mobile SDK for iOS repository, import Loyalty Management Mobile SDK
  in Xcode to automatically download and manage external dependencies.

# Import SDK into iOS Swift Projects

After you clone the mobile SDK for iOS repository, import Loyalty Management Mobile SDK in Xcode to automatically download and manage external dependencies.

| Available in: all editions that have Loyalty Management enabled |
| --- |


1.  Open your existing app project in Xcode or create an app project.
2.  With your app project open in Xcode, select **File** | **Swift Packages** | **Add Package Dependency**.
3.  Enter the repository URL: https://github.com/salesforce-misc/LoyaltyMobileSDK-iOS
4.  Select a version, and click **Add Package** and on the confirmation window, click **Add Package**.
5.  To import the LoyaltyMobileSDK module into your Swift file, open the swift file where you want to save LoyaltyMobileSDK, and to the first line of code, add import LoyaltyMobileSDK.
6.  Press Enter or return.

You can now use the classes and structures in the LoyaltyMobileSDK module and API references to manage the features in your application.

-   **[Create an App Project in Xcode](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_newxcode_proj.htm)**
    If you don’t have an existing app project in Xcode, create an app project to import the Loyalty Management Mobile SDK for iOS.

-   [← Previous](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_ios_prep.htm "Clone Mobile SDK for iOS GitHub Repository")

#### See Also

-   [Create an App Project in Xcode](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_newxcode_proj.htm "If you don’t have an existing app project in Xcode, create an app project to import the Loyalty Management Mobile SDK for iOS.")

## Related Topics

- Create an App Project in Xcode (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_newxcode_proj.htm)
- ← Previous (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_ios_prep.htm)
