---
title: "Android Native APIs"
domain: mobile-sdk
topic: android-native-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.638Z
estimatedTokens: 663
keywords: [Android, Native, APIs, classes, Mobile, SDK, work, multi-user, support, app, few, simple, handles, any, cached, memory, option, customizing, user, switching, activity, Flow]
---

> Native classes in Mobile SDK for Android do most of the work for multi-user support. Your
app makes a few simple calls and handles any data cached in memory.
You also have the option of customizing the user switching activity.

# Android Native APIs

Native classes in Mobile SDK for Android do most of the work for multi-user support. Your app makes a few simple calls and handles any data cached in memory. You also have the option of customizing the user switching activity.

To support user switching, Mobile SDK for Android defines native classes in the com.salesforce.androidsdk.accounts, com.salesforce.androidsdk.ui, and com.salesforce.androidsdk.util packages. Classes in the com.salesforce.androidsdk.accounts package include:

-   UserAccount
-   UserAccountManager

The com.salesforce.androidsdk.ui package contains the AccountSwitcherActivity class. You can extend this class to add advanced customizations to the account switcher activity.

The com.salesforce.androidsdk.util package contains the UserSwitchReceiver abstract class. You must implement this class if your app caches data other than tokens.

The following sections briefly describe these classes. For full API reference documentation, see [https://forcedotcom.github.io/SalesforceMobileSDK-Android/index.html](https://forcedotcom.github.io/SalesforceMobileSDK-Android/index.html "HTML (New Window)").

## Multi-User Flow

For native Android apps, the UserAccountManager.switchToUser() Mobile SDK method launches the multi-user flow. Once your app calls this method, the Mobile SDK core handles the execution flow through all possible paths. The following diagram illustrates this flow.

![switchToUser() flow diagram](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fmulti_user_flow.png&folder=mobile_sdk)

-   **[UserAccount Class](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_useracct.htm)**
    The UserAccount class represents a single user account that is currently authenticated. It encapsulates data that can be used to uniquely identify a user account.
-   **[UserAccountManager Class](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_useracctmgr.htm)**
    The UserAccountManager class provides methods to access authenticated accounts, add new accounts, log out existing accounts, and switch between existing accounts.
-   **[AccountSwitcherActivity Class](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_acctswitcher.htm)**
    Use or extend the AccountSwitcherActivity class to display the user switching interface.
-   **[UserSwitchReceiver Class](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/mutliuser_android_userswitchreceiver.htm)**
    If your native Android app caches data other than tokens, implement the UserSwitchReceiver abstract class to receive notifications of user switching events.

## Related Topics

- UserAccount Class (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_useracct.htm)
- UserAccountManager Class (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_useracctmgr.htm)
- AccountSwitcherActivity Class (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_acctswitcher.htm)
- UserSwitchReceiver Class (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/mutliuser_android_userswitchreceiver.htm)
