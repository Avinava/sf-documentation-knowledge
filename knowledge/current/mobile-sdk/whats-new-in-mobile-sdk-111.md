---
title: "What’s New in Mobile SDK
                11.1"
domain: mobile-sdk
topic: whats-new-in-mobile-sdk-111
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-04-07T09:06:30.586Z
estimatedTokens: 1603
keywords: [What’s, New, Mobile, SDK, 11.1, 11.1.0, minor, release, features, modernized, support, iOS, Android, How, Upgrade]
---

# What’s New in Mobile SDK
                11.1

> Mobile SDK 11.1.0 is a minor release that features modernized support for iOS and
                        Android.

# What’s New in Mobile SDK 11.1

Mobile SDK 11.1.0 is a minor release that features modernized support for iOS and Android.

In interim releases, we often deprecate items in native libraries for removal in an upcoming major release. Be sure to check your compiler logs for deprecation warnings so that you can address any changes before they go into effect.

## How to Upgrade Your Apps

For information on upgrading Mobile SDK apps, follow the instructions at [Migrating from the Previous Release](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/migration_migrating_from_previous.htm).

## General Updates in Mobile SDK 11.1

These changes apply to more than one platform.

External Component Version Updates

Cordova for Android: 12.0.1

Cordova for iOS: 7.0.1

React Native: 0.70.14

## What’s New in Mobile SDK 11.1 for iOS

iOS 17 Compatibility

We’ve successfully tested Mobile SDK for compatibility with iOS 17 and XCode 15. See [iOS 17 Release Notes](https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-17-release-notes).

Swift Package Manager Support

We’ve introduced support for Swift Package Manager, which can now be used to bring Mobile SDK into applications.

-   Binary Frameworks for Mobile SDK are hosted on a new repository: [https://github.com/forcedotcom/SalesforceMobileSDK-iOS-SPM](https://github.com/forcedotcom/SalesforceMobileSDK-iOS-SPM).
-   We’ve added a iOSNativeSwiftPackageManager template, which pulls its dependencies through Swift Package Manager.
-   See also: [Add Mobile SDK Libraries to Your Project](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_clone_sdk.htm), [Creating an iOS Swift Project Manually](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm "If you prefer not to use forceios or CocoaPods, you can create Mobile SDK apps manually in Xcode."), [Creating an iOS Project with Forceios](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_force_project.htm).

Deprecated APIs

Check your compiler warnings, or see [iOS Current Deprecations](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm "These lists show currently deprecated Mobile SDK objects and artifacts for iOS, as annotated in the source files. Use this information to prepare for the removal of these artifacts in the release indicated.").

## What’s New in Mobile SDK 11.1 for Android

Android 14 Compatibility

We’ve successfully tested Mobile SDK for compatibility with Android 14. See [Android Version 14](https://developer.android.com/about/versions/14).

Mobile Sync Library Modernization

We’ve modernized the Mobile Sync Library on Android.

-   All source files are now written in Kotlin.
-   Parameters and members now use non-nullable types wherever nulls aren’t expected or supported.
-   Kotlin syntax is now supported where appropriate. For example: string templates, ?:, let, also, map, forEach, when, etc.
-   Co-routine wrappers are now available for key methods in SyncManager. See [Incremental Syncs with reSync](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_inc_sync.htm "For sync up targets and SOQL-based sync down targets, you can incrementally update a pre-defined sync operation. Incremental reSync methods download or upload only new or updated records from the source. You can call reSync with either a sync ID or a sync name. If you call reSync for a sync configuration that has never been run, reSync knows to do a full sync."), [Handling “Ghost” Records After Sync Down Operations](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_ghosts.htm "If you’re finding that sync down operations sometimes leave unwanted records in your SmartStore soups, you can use the cleanResyncGhosts API to get rid of them."), [Using Sync Names](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_name_based_apis.htm "Mobile SDK provides a collection of APIs for using and managing named sync operations. You can programmatically create and delete named syncs at runtime, run or rerun them by name, and manage named syncs in memory.").

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Although we don’t typically require consuming code changes in minor releases such as Mobile SDK 11.1, our modernized Mobile Sync library requires consuming code changes in some cases. For example, constants that were once imported from a class in Java are now imported from a companion object in consuming Kotlin code.

Android Template Updates

-   Our Mobile SDK Android templates are now up to date with the Kotlin DSL migration.
-   Our templates are now set up to download Mobile SDK artifacts from Maven Central, which results in a friendlier build environment.

Advanced Authentication Enhancements

We’ve fixed these bugs related to advanced auth.

-   If Chrome wasn’t found during the advanced auth flow, Android users were presented with an error and couldn’t continue with login. Advanced authentication now reinstates the expected behavior of using the default browser if Chrome isn’t available at runtime.
-   A bug caused some Android users’ login flow to reset to the initial screen when the app was backgrounded during MFA. We’ve fixed this issue and changed LoginActivity’s launch mode from singleInstance to singleTop. Apps that extend LoginActivity now require the same change.

We’ve added new advanced auth methods that allow you to 1) configure which browser your app selects and 2) view the currently selected custom tab browser. See [Configuring Advanced Authentication in Android Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_android_advanced.htm "In Salesforce orgs that use My Domain for advanced authentication, Mobile SDK requires a small amount of configuration in the client app. Android apps that use certificate-based authentication don’t require configuration within the Mobile SDK app.").

Deprecated APIs

Check your compiler warnings, or see [Android Current Deprecations](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_android.htm "HTML (New Window)").

-   **[What Was New in Recent Releases](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/gs_whatswasnew.htm)**
    Here’s an archive of What’s New bulletins from recent Mobile SDK releases.

## Related Topics

- Migrating from the Previous Release (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/migration_migrating_from_previous.htm)
- Add Mobile SDK Libraries to Your Project (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_clone_sdk.htm)
- Creating an iOS Swift Project Manually (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm)
- Creating an iOS Project with Forceios (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_force_project.htm)
- iOS Current Deprecations (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm)
- Incremental Syncs with reSync (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_inc_sync.htm)
- Handling “Ghost” Records After Sync Down Operations (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_ghosts.htm)
- Using Sync Names (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_name_based_apis.htm)
- Configuring Advanced Authentication in Android Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_android_advanced.htm)
- What Was New in Recent Releases (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/gs_whatswasnew.htm)
