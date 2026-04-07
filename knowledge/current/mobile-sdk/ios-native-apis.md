---
title: "iOS Native APIs"
domain: mobile-sdk
topic: ios-native-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.669Z
estimatedTokens: 307
keywords: [iOS, Native, APIs, classes, Mobile, SDK, work, multi-user, support, app, few, simple, handles, any, cached, memory, option, customizing, user, switching, activity]
---

> Native classes in Mobile SDK for iOS do most of the work for multi-user support. Your app
makes a few simple calls and handles any data cached in memory. You
also have the option of customizing the user switching activity.

# iOS Native APIs

Native classes in Mobile SDK for iOS do most of the work for multi-user support. Your app makes a few simple calls and handles any data cached in memory. You also have the option of customizing the user switching activity.

To support user switching, Mobile SDK for iOS defines native classes in the Security folder of the SalesforceSDKCore library. Classes include:

-   SFUserAccount
-   SFUserAccountManager

The following sections briefly describe these classes. For full API reference documentation, see [SalesforceSDKCore Reference](https://forcedotcom.github.io/SalesforceMobileSDK-iOS/Documentation/SalesforceSDKCore/html/index.html "HTML (New Window)").

-   **[SFUserAccount Class](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_ios_useracct.htm)**
    The SFUserAccount class represents a single user account that’s currently authenticated. It encapsulates data that can be used to uniquely identify a user account.
-   **[SFUserAccountManager Class](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_ios_useracctmgr.htm)**
    The SFUserAccountManager class provides methods to access authenticated accounts, add new accounts, log out accounts, and switch between accounts.

## Related Topics

- SFUserAccount Class (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_ios_useracct.htm)
- SFUserAccountManager Class (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_ios_useracctmgr.htm)
