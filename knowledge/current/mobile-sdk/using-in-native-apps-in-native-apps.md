---
title: "Using  in Native Apps in Native
    Apps"
domain: mobile-sdk
topic: using-in-native-apps-in-native-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.670Z
estimatedTokens: 1873
keywords: [Native, Apps, Mobile, Sync, library, iOS, Android, APIs, simplify, development, offline-ready, subset, functionality, hybrid, Cordova, plug-in]
---

> The native Mobile Sync library
    provides native iOS and Android APIs that simplify the development of offline-ready apps. A
    subset of this native functionality is also available to hybrid apps through a Cordova
    plug-in.

# Using in Native Apps in Native Apps

The native Mobile Sync library provides native iOS and Android APIs that simplify the development of offline-ready apps. A subset of this native functionality is also available to hybrid apps through a Cordova plug-in.

Mobile Sync libraries offer parallel architecture and functionality for iOS and Android, expressed in each platform’s native language. The shared functional concepts are straightforward:

-   Query Salesforce object metadata by calling Salesforce REST APIs.
-   Store the retrieved object data locally and securely for offline use.
-   Sync data changes when the device goes from an offline to an online state.

With Mobile Sync native libraries, you can:

-   Get and post data by interacting with a server endpoint. Mobile Sync helper APIs encode the most commonly used endpoints. These APIs help you fetch sObject metadata, retrieve the list of most recently used (MRU) objects, and build SOQL and SOSL queries. You can also use arbitrary endpoints that you specify in a custom class.
-   Fetch Salesforce records and metadata and cache them on the device, using one of the pre-defined cache policies.
-   Edit records offline and save them offline in SmartStore.
-   Synchronize batches of records by pushing locally modified data to the Salesforce cloud.

## Mobile Sync Components

The following components form the basis of Mobile Sync architecture.

Sync Manager Class

-   **iOS class:**

    | Swift | Objective-C |
    | --- | --- |
    | SyncManager | SFMobileSyncSyncManager |

-   **Android class:** com.salesforce.androidsdk.mobilesync.manager.SyncManager

Provides APIs for synchronizing large batches of sObjects between the server and SmartStore. This class works independently of the metadata manager and is intended for the simplest and most common sync operations. Sync managers can “sync down”—download sets of sObjects from the server to SmartStore—and “sync up”—upload local sObjects to the server.

The sync manager works in tandem with the following utility classes:

Sync State Class

Tracks the state of a sync operation. States include:

-   New—The sync operation has been initiated but has not yet entered a transaction with the server.
-   Running—The sync operation is negotiating a sync transaction with the server.
-   Done—The sync operation finished successfully.
-   Failed—The sync operation finished unsuccessfully.

-   **iOS:**

    | Swift | Objective-C |
    | --- | --- |
    | SyncState | SFSyncState |

-   **Android:** com.salesforce.androidsdk.mobilesync.util.SyncState

Sync Target Class

Parent class for specifying the sObjects to be downloaded during a “sync down” operation.

-   **iOS:**

    | Swift | Objective-C |
    | --- | --- |
    | SyncTarget | SFSyncTarget |

-   **Android:** com.salesforce.androidsdk.mobilesync.util.SyncTarget

Sync Options Class

Specifies configuration options for a “sync up” operation. Options include the list of field names to be synced.

-   **iOS:**

    | Swift | Objective-C |
    | --- | --- |
    | SyncOptions | SFSyncOptions |

-   **Android:** com.salesforce.androidsdk.mobilesync.util.SyncOptions

SOQL Builder

Utility class that makes it easy to build a SOQL query statement, by specifying the individual query clauses.

-   **iOS class:**

    | Swift | Objective-C |
    | --- | --- |
    | SFSDKSoqlBuilder | SFSDKSoqlBuilder |

-   **Android class:** com.salesforce.androidsdk.mobilesync.util.SOQLBuilder

SOSL Builder

Utility class that makes it easy to build a SOSL query statement, by specifying the individual query clauses.

-   **iOS class:**

    | Swift | Objective-C |
    | --- | --- |
    | SFSDKSoslBuilder | SFSDKSoslBuilder |

-   **Android class:** com.salesforce.androidsdk.mobilesync.util.SOSLBuilder

MobileSyncSDKManager

Beginning in Mobile SDK 6.0, all forcedroid and forceios template apps use MobileSyncSDKManager as the base SDK entry point. The class name, MobileSyncSDKManager, is the same for iOS (Objective-C and Swift) and Android. In Android, your App class extends MobileSyncSDKManager instead of SalesforceSDKManager. In iOS, the init method of your AppDelegate class uses a shared instance of MobileSyncSDKManager instead of SalesforceSDKManager. This change applies to both native and hybrid apps.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

To support multi-user switching, Mobile Sync creates unique instances of its components for each user account.

-   **[Creating Native Apps with](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_create_native.htm)**

-   **[Adding Mobile Sync to Existing Android Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_add_android.htm)**

-   **[Adding to Existing iOS Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_add_ios.htm)**
    You can easily upgrade existing iOS projects to support Mobile Sync: Just use forceios to create a new project, then add in your assets. However, if you’d like to know the steps for upgrading older Mobile Sync apps to Mobile SDK 6.0 or later, you’re in the right place.
-   **[About Sync Targets](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_targets_about.htm)**
    Sync targets configure data transfers between the Salesforce cloud and a local database on a mobile device. Mobile SDK 5.1 enhances the capabilities of targets to give developers more control over two-way data synchronization.
-   **[Defining Sync Names and Sync Configuration Files](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_names_configs.htm)**
    Beginning in Mobile SDK 6.0, you can define sync configuration files and assign names to sync configurations. You can use sync names to run, edit, or delete a saved sync operation. Since all platforms and app types use the same configuration files, you can describe all your syncs in a single file. You can then compile that file into any Mobile SDK project.
-   **[Syncing Data](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_requests.htm)**

-   **[Using Standard Targets](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_standard_targets.htm)**
    Mobile Sync provides ready-to-use target classes for several standard Salesforce request types. You can use these targets implicitly through configuration files, or directly through code.
-   **[Using Custom Sync Down Targets](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_custom_down_targets.htm)**

-   **[Using Custom Sync Up Targets](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_custom_up_targets.htm)**

-   **[Syncing Related Records](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_related.htm)**
    It’s a common problem in syncing offline data: You can easily sync your explicit changes, but how do you update affected related records? You can do it manually with enough knowledge, determination, and perspicacity, but that’s the old way. Starting with Mobile SDK 5.2, Mobile Sync provides tools that let you sync parent records and their related records with a single call.

#### See Also

-   [SDK Manager Classes](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/salesforce_sdk_manager_ios.htm)

-   [SalesforceSDKManager Class](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_native_classes_salesforcesdkmanager.htm)

## Related Topics

- Creating Native Apps with (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_create_native.htm)
- Adding Mobile Sync to Existing Android Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_add_android.htm)
- Adding to Existing iOS Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_add_ios.htm)
- About Sync Targets (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_targets_about.htm)
- Defining Sync Names and Sync Configuration Files (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_names_configs.htm)
- Syncing Data (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_requests.htm)
- Using Standard Targets (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_standard_targets.htm)
- Using Custom Sync Down Targets (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_custom_down_targets.htm)
- Using Custom Sync Up Targets (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_custom_up_targets.htm)
- Syncing Related Records (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_related.htm)
