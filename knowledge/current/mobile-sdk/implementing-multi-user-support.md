---
title: "Implementing Multi-User Support"
domain: mobile-sdk
topic: implementing-multi-user-support
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.661Z
estimatedTokens: 1040
keywords: [Implementing, Multi-User, Support, Mobile, SDK, APIs, enabling, native, Android, iOS, hybrid, apps, Push, Notifications, Tasks, SmartStore, Account, Management]
---

> Mobile SDK provides APIs for enabling multi-user support in native Android,
native iOS, and hybrid apps.

# Implementing Multi-User Support

Mobile SDK provides APIs for enabling multi-user support in native Android, native iOS, and hybrid apps.

Although Mobile SDK implements the underlying functionality, multi-user switching isn’t initialized at runtime unless and until your app calls one of the following APIs:

Android native (UserAccountManager class methods)

[public void switchToUser(](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_useracctmgr.htm#android_switch_to_user)[UserAccount](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_useracct.htm "The UserAccount class represents a single user account that is currently authenticated. It encapsulates data that can be used to uniquely identify a user account.") user)

[public void switchToNewUser()](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_useracctmgr.htm#android_switch_to_new_user)

iOS native (SFUserAccountManager class methods)

[\- (void)switchToUser:(SFUserAccount \*)newCurrentUser](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_ios_useracctmgr.htm#ios_switch_user)

[\- (void)switchToNewUser](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_ios_useracctmgr.htm#ios_switch_new_user)

Hybrid (JavaScript method)

[switchToUser](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_hybrid.htm#hybrid_switch_to_user)

To let the user switch to a different account, launch a selection screen from a button, menu, or some other control in your user interface. Mobile SDK provides a standard multi-user switching screen that displays all currently authenticated accounts in a radio button list. You can choose whether to customize this screen or just show the default version. When the user makes a selection, call the Mobile SDK method that launches the multi-user flow.

Before you begin to use the APIs, it’s important that you understand the division of labor between Mobile SDK and your app. The following lists show tasks that Mobile SDK performs versus tasks that your app is required to perform in multi-user contexts. In particular, consider how to manage:

-   [Push Notifications](#push_handle) (if your app supports them)
-   [SmartStore Soups](#smart_store_handle) (if your app uses SmartStore)
-   [Account Management](#acct_mgt_handle)

## Push Notifications Tasks

Mobile SDK (for all accounts):

-   Registers push notifications at login
-   Unregisters push notifications at logout
-   Delivers push notifications

Your app:

-   Differentiates notifications according to the target user account
-   Launches the correct user context to display each notification

## SmartStore Tasks

Mobile SDK (for all accounts):

-   Creates a separate SmartStore database for each authenticated user account
-   Switches to the correct backing database each time a user switch occurs

Your app:

-   Refreshes its cached credentials, such as instances of SmartStore held in memory, after every user switch or logout

## Account Management Tasks

Mobile SDK (for all accounts):

-   Loads the correct account credentials every time a user switch occurs

Your app:

-   Refreshes its cached credentials, such as authenticated REST clients held in memory, after every user switch or logout

-   **[Android Native APIs](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_intro.htm)**
    Native classes in Mobile SDK for Android do most of the work for multi-user support. Your app makes a few simple calls and handles any data cached in memory. You also have the option of customizing the user switching activity.
-   **[iOS Native APIs](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_ios_intro.htm)**
    Native classes in Mobile SDK for iOS do most of the work for multi-user support. Your app makes a few simple calls and handles any data cached in memory. You also have the option of customizing the user switching activity.
-   **[Hybrid APIs](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_hybrid.htm)**
    Hybrid apps can enable multi-user support through Mobile SDK JavaScript APIs. These APIs reside in the SFAccountManagerPlugin Cordova-based module.

## Related Topics

- public void
                switchToUser( (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_useracctmgr.htm)
- UserAccount (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_useracct.htm)
- public void
              switchToNewUser() (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_useracctmgr.htm)
- -
              (void)switchToUser:(SFUserAccount *)newCurrentUser (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_ios_useracctmgr.htm)
- -
              (void)switchToNewUser (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_ios_useracctmgr.htm)
- switchToUser (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_hybrid.htm)
- Android Native APIs (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_android_intro.htm)
- iOS Native APIs (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_ios_intro.htm)
- Hybrid APIs (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/multiuser_hybrid.htm)
