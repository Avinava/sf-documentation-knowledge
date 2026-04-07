---
title: "What Was New in Recent Releases"
domain: mobile-sdk
topic: what-was-new-in-recent-releases
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-04-07T09:06:30.611Z
estimatedTokens: 6191
keywords: [New, Recent, Releases, Here’s, archive, What’s, bulletins, Mobile, SDK, 11.0.1, 11.0, 10.2, iOS, Android, React]
---

# What Was New in Recent Releases

> Here’s an archive of What’s New bulletins from recent Mobile SDK releases.

# What Was New in Recent Releases

Here’s an archive of What’s New bulletins from recent Mobile SDK releases.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Mobile SDK 11.0.1

Mobile SDK 11.0.1 is a minor patch release that features these changes.

-   Bug fixes for login and refresh with custom domain and enhanced domain.
-   Access token re-hydration in hybrid apps and when using an IDP flow.
-   Improved read performance for Key-Value Stores.

## Mobile SDK 11.0

Mobile SDK 11.0 is a major release that modernizes several authentication flows. In major releases, we typically remove items that have been deprecated for removal. Read the following information to learn about new features and breaking changes that can affect your app. In every release, be sure to check your compiler logs for deprecation warnings so that you can address these changes before they go into effect.

General Updates

These changes apply to more than one platform.

-   The default authentication on iOS and Android now uses Web Server Flow instead of User-Agent Flow. See [OAuth 2.0 Web Server Flow](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_web_server_flow.htm "Beginning in Mobile SDK 11.0, OAuth 2.0 Web Server Flow is the default authentication flow. Upon upgrading to Mobile SDK 11.0, you do not need to make any changes in your client application. However, make sure the “Require Secret for Web Server Flow” checkbox is deselected in your connected app.").
-   Device system biometric authentication for logins. See [Biometric Authentication](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/biometric_auth.htm "Starting in Mobile SDK 11.0, you can configure your app to use the device system biometric authentication to log in. For example, when the app exceeds its timeout period in the background, the login screen appears upon the user’s return to the app. This behavior gives the appearance that the user is logged out, even if the user’s login session hasn’t expired. The user can then log in using their username and password or their device’s biometric authentication if they enabled that option.").
-   Reworked multi-app SSO flows and configurations with identity providers. See [Identity Provider Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_providers.htm "Identity providers help known users avoid reentering their Salesforce credentials every time they log in to a Mobile SDK app. At the same time, it preserves the stringent security level of previous Mobile SDK releases.").

    External Component Version Updates

    SQLCipher: 4.5.4 (iOS and Android)

    SQLite: 3.41.2

    Cordova for Android: 11.0.0

    Cordova for iOS: 6.3.0

    Cordova Command Line: 12.0.0


iOS

See also: *General Updates in Mobile SDK 11.0*

Version Updates

Deployment target: 15

Base SDK version: 16

Xcode: 14

Removed APIs

See [iOS APIs Removed in Mobile SDK 11.0](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_removed_ios.htm "These lists show Mobile SDK objects and artifacts for iOS that were removed in Mobile SDK 10.0.").

Deprecated APIs

Check your compiler warnings, or see [iOS Current Deprecations](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm "These lists show currently deprecated Mobile SDK objects and artifacts for iOS, as annotated in the source files. Use this information to prepare for the removal of these artifacts in the release indicated.").

## Mobile SDK 10.2

Mobile SDK 10.2 is an interim release that features non-breaking API changes and modernized platform support.

## iOS

**iOS 16 Compatibility**

We’ve successfully tested Mobile SDK for compatibility with iOS 16. See [iOS 16 Release Notes](https://developer.apple.com/documentation/ios-ipados-release-notes/ios-16-release-notes).

Version Updates

SQLite: 3.39.2

SQLCipher: 4.5.2

React Native: 0.70.1

ShellJS: 0.8.5 (for command line tools)

TypeScript: 4.8.3 (for React Native)

Deprecated APIs

Check your compiler warnings, or see [iOS Current Deprecations](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm "These lists show currently deprecated Mobile SDK objects and artifacts for iOS, as annotated in the source files. Use this information to prepare for the removal of these artifacts in the release indicated.").

## Android

**Android 13 Compatibility**

We’ve successfully tested Mobile SDK for compatibility with Android 13. See [Android Version 13](https://developer.android.com/about/versions/13).

Version Updates

SQLite: 3.39.2

SQLCipher: 4.5.2

OkHttp: 4.10.0

Cordova-android: 11.0.0

React Native: 0.70.1

ShellJS: 0.8.5 (for command line tools)

TypeScript: 4.8.3 (for React Native)

Android SDK (target API): 33

Deprecated APIs

Check your compiler warnings, or see [Android Current Deprecations](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_android.htm "HTML (New Window)").

## React Native

Version Updates

React Native: 0.70.1

## Changes in Mobile SDK 10.1.1

Mobile SDK 10.1.1 is a minor patch release. Mobile SDK 10.1.1 restores use of the **Lock App After** timeout setting from the org’s Connected App settings for your mobile app. When set, the mobile app locks after it has been in the background for longer than the timeout period. Locking occurs when the mobile app is activated. Unlocking the app remains the same.

## Mobile SDK 10.1

Mobile SDK 10.1.0 is a minor release that includes bug fixes, performance enhancements, feature additions, and updates.

In interim releases, we often deprecate items in native libraries for removal in an upcoming major release. Be sure to check your compiler logs for deprecation warnings so that you can address any changes before they go into effect.

General Updates

These changes apply to more than one platform.

REST API Methods for Briefcase Priming Records (iOS, Android)

REST request factory method and response parser for the Briefcase Priming Salesforce API. See [Briefcase Priming Records](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_briefcase_priming.htm "Returns a request object that obtains record IDs from briefcases assigned to the connected app.").

REST API Methods for sObject Collections (iOS, Android, React Native)

REST request factory methods and response parser for the following sObject Collections operations:

-   Create—See [Collection Create](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_create.htm "Creates a collection of records of the specified object type.").
-   Retrieve—See [Collection Retrieve](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_retrieve.htm "Retrieves a collection of objects of the given object type that match the given object IDs.").
-   Update—See [Collection Update](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_update.htm "Updates the requested collection with the given records.").
-   Upsert—See [Collection Upsert](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_upsert.htm "Updates or inserts a collection of objects from external data.").
-   Delete—See [Collection Delete](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_delete.htm "Deletes the objects in a collection that match the given object IDs.").

Briefcase Sync Down Target (iOS, Android)

New sync down target for downloading and locally synchronizing records from an org's briefcases. See [Using the Briefcase Sync Down Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_down_target_briefcase.htm "If your org uses Briefcases for your mobile users, the Briefcase sync down target was introduced in Mobile SDK 10.1. This sync target is an efficient way to load many records at a time. Sync is constrained to the records included in all Briefcases assigned to the current user and made accessible in the mobile client’s Connected App. You can limit the sync target to specific objects and fields included in those Briefcases. This target takes an array of BriefcaseObjectInfo objects, which include sObject type, fields, and the soup to add them to.").

Collection Sync Up Target using sObject Collections (iOS, Android)

New sync up target that uses sObject Collections to improve performance. If you don't specify an implementation class ("androidImpl" or "iOSImpl") in your sync up target configuration, Mobile SDK automatically uses CollectionSyncUpTarget. See [Using the sObject Collection Sync Up Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_up_target_sobject.htm "For the very best performance in large sync up operations, Mobile SDK 10.1 introduced an sObject collection sync up target.").

External Component Version Updates

SQLCipher: 4.5.1 (iOS and Android)

SQLite: 3.37.2

Gradle: 7.2.1

iOS

See also *General Updates in Mobile SDK 10.0*.

Version Updates

SQLCipher: 4.5.1

SQLite: 3.37.2

Deprecated APIs

Check your compiler warnings, or see [iOS Current Deprecations](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm "These lists show currently deprecated Mobile SDK objects and artifacts for iOS, as annotated in the source files. Use this information to prepare for the removal of these artifacts in the release indicated.").

Android

See also *General Updates in Mobile SDK 10.0*.

MobileSyncExplorerKotlin Template

A new Android app template that demonstrates the full power of Mobile Sync, using Kotlin and Jetpack Compose: [https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/dev/MobileSyncExplorerKotlinTemplate](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/dev/MobileSyncExplorerKotlinTemplate "HTML (New Window)")

Version Updates

SQLCipher: 4.5.4

SQLite: 3.41.2

Gradle: 7.2.1

Deprecated APIs

Check your compiler warnings, or see [Android Current Deprecations](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_android.htm "HTML (New Window)").

React Native

See also *General Updates in Mobile SDK 10.0*.

Version Updates

React Native: 0.70.14

SmartStore

Version Updates

SQLCipher: 4.5.4 (iOS and Android)

SQLite: 3.41.2

Mobile Sync

See also *General Updates in Mobile SDK 10.0*.

Briefcase Sync Down Target (iOS, Android)

New sync down target for downloading and locally synchronizing records from an org's briefcases.

Collection Sync Up Target using sObject Collections (iOS, Android)

New sync up target that uses sObject Collections to improve performance. If you don't specify an implementation class in your sync up target configuration, Mobile SDK automatically uses CollectionSyncUpTarget.

## Mobile SDK 10.0

Mobile SDK 10.0.0 is a major trust release. It includes breaking API changes, bug fixes, performance enhancements, minor feature additions, and updates.

In major releases, we remove items in native libraries that were deprecated in interim releases. For your convenience, we've compiled lists of deprecated native APIs.

General Updates

These changes apply to more than one platform.

Binary Storage in Key-Value Stores

Key-value stores in native iOS and Android now support secure binary storage APIs. See [Using Key-Value Stores for Secure Data Storage](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/key_value_store_about.htm "Beginning in Mobile SDK 8.2, encrypted key-value stores offer an alternative to SmartStore for secure data storage on mobile devices. Key-value stores aren’t a replacement for SmartStore. They're designed for simpler storage scenarios that don't demand the full power of a relational database. An example is a response cache that requires your app to fetch data quickly from an opaque pool of values, unaware of data relationships or structure.").

External Component Version Updates

React Native: 0.67.1

Cordova for iOS: 6.2.0

Cordova for Android: 10.1.1

Cordova command line: 11.0.0

SQLCipher: 4.5.0 (iOS and Android)

SQLite: 3.36.0

node.js: 12.0 to latest LTS version

iOS

Binary Storage in Key-Value Stores

Key-value stores now support secure binary storage with new Mobile SDK APIs. See [Using Key-Value Stores for Secure Data Storage](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/key_value_store_about.htm "Beginning in Mobile SDK 8.2, encrypted key-value stores offer an alternative to SmartStore for secure data storage on mobile devices. Key-value stores aren’t a replacement for SmartStore. They're designed for simpler storage scenarios that don't demand the full power of a relational database. An example is a response cache that requires your app to fetch data quickly from an opaque pool of values, unaware of data relationships or structure.").

Widgets in the MobileSyncExplorerSwift Template App

We've added a Recent Contacts widget to this template.

Version Updates

Deployment target: 14

Base SDK version: 15

Xcode: 13

Removed APIs

See [iOS APIs Removed in Mobile SDK 11.0](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_removed_ios.htm "These lists show Mobile SDK objects and artifacts for iOS that were removed in Mobile SDK 10.0.").

Deprecated APIs

Check your compiler warnings, or see [iOS Current Deprecations](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm "HTML (New Window)").

Android

Binary Storage in Key-Value Stores

Key-value stores now support secure binary storage using existing Mobile SDK APIs. See [Using Key-Value Stores for Secure Data Storage](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/key_value_store_about.htm "Beginning in Mobile SDK 8.2, encrypted key-value stores offer an alternative to SmartStore for secure data storage on mobile devices. Key-value stores aren’t a replacement for SmartStore. They're designed for simpler storage scenarios that don't demand the full power of a relational database. An example is a response cache that requires your app to fetch data quickly from an opaque pool of values, unaware of data relationships or structure.").

Version Updates

Minimum API: Android Nougat (API 24)

Target API: Android 12 (API 32)

Default SDK version for hybrid apps: Android 12 (API 32)

Removed APIs

See [Android APIs Removed in Mobile SDK 11.0](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_removed_android.htm "These lists show Mobile SDK objects and artifacts for Android that were removed in Mobile SDK 10.0.").

Deprecated APIs

Check your compiler warnings, or see [Android Current Deprecations](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_android.htm "HTML (New Window)").

React Native

Version Updates

React Native: 0.67.1

Hybrid

Version Updates

Cordova for iOS: 6.2.0

Cordova for Android: 10.1.1

Cordova command line: 11.0.0

SmartStore

WAL for Android

Mobile SDK 10.0 implements write-ahead logging (WAL) in SQLCipher for Android. Although SQLCipher's concurrent read-write support remains blocked on Android, lower-level updates bring measurable improvements to SmartStore performance.

Feature Deprecations

Due to improvements in third-party modules, the external storage feature and the SoupSpec class have been deprecated for removal in Mobile SDK 11.0. SmartStore is now fully capable of handling large data sets. See [Android Current Deprecations](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_android.htm "HTML (New Window)") and [iOS Current Deprecations](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm "HTML (New Window)").

Version Updates

SQLCipher: 4.5.0 (iOS and Android)

SQLite: 3.36.0

## Mobile SDK 9.2.0

Mobile SDK 9.2.0 is an interim release that features non-breaking API changes and modernized iOS support.

In interim releases, we often deprecate items in native libraries for removal in an upcoming major release. Be sure to check your compiler logs for deprecation warnings so that you can address any changes before they go into effect.

These changes apply to more than one platform.

General Updates

Passcode Removal

We’ve removed app-specific passcodes from iOS and Android apps in favor of mobile operating system security. Mobile SDK still honors an org’s passcode requirement but ignores passcode length, passcode timeout, and biometric settings from a connected app. For customers who’ve already configured a device lock screen or biometric unlock, this upgrade is seamless. For others, the new app lock screen prompts the customer to configure an authentication mode. When the customer reactivates the app from the background, the device passcode, rather than an app-specific passcode, is required. See [About Login and Passcodes](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_native_login_passcodes.htm) (iOS) and [Using Passcodes](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_passcodes.htm) (Android).

External Component Version Updates

Cordova

-   iOS: 6.2.0
-   Android: 10.1.0

React Native

0.66.0 (iOS and Android)

SQLite

3.34.1

SQLCipher

4.4.3 (iOS and Android)

## Mobile SDK 9.1.0

Mobile SDK 9.1.0 is an interim release that features non-breaking API changes and modernized iOS support.

In interim releases, we often deprecate items in native libraries for removal in an upcoming major release. Be sure to check your compiler logs for deprecation warnings so that you can address any changes before they go into effect.

General Updates

These changes apply to more than one platform.

Key-Value Stores (iOS, Android)

-   Key-value store version 2 debuts in 9.1. With version 2, you can use key-value store APIs to retrieve all keys from the store.
-   The **Inspect Key-Value Store** option of the Dev Support menu now lets you search for all keys that match a given partial or whole key name.
-   For details of these features, see [Using Key-Value Stores for Secure Data Storage](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/key_value_store_about.htm "Beginning in Mobile SDK 8.2, encrypted key-value stores offer an alternative to SmartStore for secure data storage on mobile devices. Key-value stores aren’t a replacement for SmartStore. They're designed for simpler storage scenarios that don't demand the full power of a relational database. An example is a response cache that requires your app to fetch data quickly from an opaque pool of values, unaware of data relationships or structure.").

iOS

iPad Support in Sample Apps

-   The [MobileSyncExplorerSwift](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/master/MobileSyncExplorerSwift) template app now supports Catalyst and multiple windows for iPad.
-   The [RestAPIExplorer](https://github.com/forcedotcom/SalesforceMobileSDK-iOS/tree/master/native/SampleApps/RestAPIExplorer) sample app now supports Catalyst.

REST API Wrapper Update

-   We’ve added a batchSize parameter to requestForQuery methods of SFRestApi (Objective-C) and RestClient (Swift). Use this parameter to specify a preferred number of records to be returned in each fetch. Permissible values range from 200 to 2,000 (default setting). To allow for run-time performance adjustments, Mobile SDK doesn’t guarantee that your requested size will be the actual batch size.

Deprecations

-   Check your compiler warnings, or see [iOS Current Deprecations](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm "HTML (New Window)").

Android

REST API Wrapper Update

-   We’ve added a batchSize parameter to the RestRequest.getRequestForQuery method. Use this parameter to specify a preferred number of records to be returned in each fetch. Permissible values range from 200 to 2,000 (default setting). To allow for run-time performance adjustments, Mobile SDK doesn’t guarantee that your requested size will be the actual batch size.

Deprecations

Check your compiler warnings, or see [Android Current Deprecations](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_android.htm "HTML (New Window)").

SmartStore

Smart SQL no longer requires index paths for all fields referenced in SELECT or WHERE clauses. See [Queries Queries](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_smart_sql.htm "To exert full control over your queries—or to reuse existing SQL queries—you can define custom SmartStore queries.").

Mobile Sync

SOQL Sync Down Target Enhancement

You can now configure the size for SOQL sync down batches. You can specify any value from 200 to 2,000 (default value). See [Using the SOQL Sync Down Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_down_target_soql.htm "If you can define a SOQL query that selects everything required for a business need, the SOQL target is your simplest sync down option. This target takes a SOQL query and optional supporting arguments.").

## Mobile SDK 9.0

General

These changes apply to more than one platform.

**Developer Tools**

(iOS, Android) The Dev Support menu now provides a new utility: **Inspect Key-Value Store**. [In-App Developer Support](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/tools_dev_support.htm "Mobile SDK 6.0 introduces several new screens in native apps for debugging during app development. These features usually do not require coding and are designed for debug builds.")

**External Component Version Updates**

-   SQLCipher (iOS, Android): 4.4.2
-   SQLite (iOS, Android): 3.33.0
-   yarn: 1.22
-   Cordova:
    -   **iOS:** 6.1.1
    -   **Android:** 9.0.0

iOS

**iPadOS Support**

-   Implemented multiple window support for iPadOS. This new feature requires changes to existing apps that intend to run on iPads. See [Supporting iPadOS in Apps Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_ipados_compatibility.htm "Mobile SDK 9.0 enhances the iPad customer experience. Landscape mode now functions as expected, and Mobile SDK now supports multiple windows.").
-   Improved support for landscape mode on iPadOS. (Other than updating to Mobile SDK 9.0, no app changes required.)

**Version Updates**

-   Deployment target: iOS 13
-   Base SDK: iOS 14
-   Xcode: 12
-   CocoaPods: 1.8.0 (no maximum)

**Deprecations**

-   Check your compiler warnings, or see [iOS Current Deprecations](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm "HTML (New Window)").
-   The Carthage framework manager is no longer officially supported.

Android

**Version Updates**

Target API: Android 11 (API 30)

**Deprecations**

Check your compiler warnings, or see [Android Current Deprecations](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_android.htm "HTML (New Window)").

React Native

**TypeScript Now Supported**

Mobile SDK’s implementation of React Native now supports TypeScript for app development in addition to standard JavaScript. Mobile SDK libraries for React Native now also use types. TypeScript requires you to install the TypeScript compiler. [Development Development](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_intro.htm "React Native is a third-party framework that lets you access native UI elements directly with JavaScript, style sheets, and markup. You can combine this technology with special Mobile SDK native modules for rapid development using native resources.")

**Version Updates**

React Native version: 0.63.4

Mobile Sync

**Parent-Child Sync Up Adds externalIdField Parameter**

The new externalIdField parameter for parent-child sync up matches the functionality added for basic sync operations in Mobile SDK 8.0. [Syncing Up by External ID](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_up_external_id.htm "Mobile SDK enhances its sync-up functionality by adding the ability to sync up by external ID. To use this feature, you specify an external ID field name in the sync up target definition. If a soup record is marked as locally created, updated, or deleted and has an external ID value, Mobile Sync syncs it up using upsert instead of create. If the record also has a valid Id value, however, Mobile Sync updates the indicated Salesforce record.").

## Related Topics

- OAuth 2.0 Web
                  Server Flow (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_web_server_flow.htm)
- Biometric
                  Authentication (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/biometric_auth.htm)
- Identity Provider
                  Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_providers.htm)
- iOS APIs
                    Removed in Mobile SDK 11.0 (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_removed_ios.htm)
- iOS Current Deprecations (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm)
- Briefcase Priming Records (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_briefcase_priming.htm)
- Collection Create (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_create.htm)
- Collection Retrieve (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_retrieve.htm)
- Collection Update (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_update.htm)
- Collection Upsert (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_upsert.htm)
