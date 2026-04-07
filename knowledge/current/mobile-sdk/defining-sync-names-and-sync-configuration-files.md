---
title: "Defining Sync Names and Sync Configuration Files"
domain: mobile-sdk
topic: defining-sync-names-and-sync-configuration-files
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.752Z
estimatedTokens: 2761
keywords: [Defining, Sync, Configuration, Files, Beginning, Mobile, SDK, 6.0, define, assign, configurations, run, edit, saved, operation, Since, platforms, app, describe, syncs, file, compile, any, project, Locations, Loading, Definitions, iOS, Native, Apps, Android]
---

> Beginning in Mobile SDK 6.0, you can define sync configuration files and assign names to
    sync configurations. You can use sync names to run, edit, or delete a saved sync operation.
    Since all platforms and app types use the same configuration files, you can describe all your
    syncs in a single file. You can then compile that file into any Mobile SDK
    project.

# Defining Sync Names and Sync Configuration Files

Beginning in Mobile SDK 6.0, you can define sync configuration files and assign names to sync configurations. You can use sync names to run, edit, or delete a saved sync operation. Since all platforms and app types use the same configuration files, you can describe all your syncs in a single file. You can then compile that file into any Mobile SDK project.

Mobile Sync configuration files use JSON objects to express sync definitions. You can provide these files to avoid coding sync down and sync up configurations. The JSON schema for configuration files is the same for all app types and platforms. Hybrid apps load the configuration files automatically, while other apps load them with a single line of code. To keep the mechanism simple, Mobile SDK enforces the following file naming conventions:

-   To define sync operations for the default global store, provide a file named globalsyncs.json.
-   To define sync operations for the default user store, provide a file named usersyncs.json.

Configuration files can define syncs only in the default global store and default user store. For named stores, you define syncs through code.

In native and React Native apps, you load your JSON configuration file by calling a sync loading method. Call this method in your app initialization code after the customer successfully logs in. For example, in iOS, call this method in the block you pass to loginIfRequired. Call these methods only if you’re using a globalsyncs.json or usersyncs.json file instead of code to configure your syncs. Don’t call sync loading methods more than one time.

In hybrid apps that include them, sync configuration files are loaded automatically. To see loader examples, study the MobileSyncExplorer and MobileSyncExplorerHybrid sample apps. These apps use configuration files to set up their sync operations.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

-   Configuration files are intended for initial setup only. You can't change existing syncs by revising the JSON file and reloading it at runtime. Instead, you can use a syncUp or syncDown method to define the sync inline.
-   If the name that a configuration file assigns to a sync operation exists, Mobile SDK ignores the configuration file. In this case, you can set up and manage your sync only through code.

## Configuration File Format

The following example demonstrates the configuration file format.

```

```

For sync down, the "target" property’s "type" property accepts any one of the following values:

-   "soql"

    Uses a SOQL query for sync down.

    **Properties:**

    -   "type":"soql"
    -   "query": <string>
    -   "idFieldName": <string>
    -   "modificationDateFieldName": <string>
    -   "maxBatchSize": <integer>, any value from 200 and 2,000 (default value is 2,000)

    **Required:** "type", "query"

-   "sosl"

    Uses a SOSL query for sync down.

    **Properties:**

    -   "type":"sosl"
    -   "query": <string>
    -   "idFieldName": <string>
    -   "modificationDateFieldName": <string>
    -   "maxBatchSize": <integer>, any value from 200 and 2,000 (default value is 2,000)

    **Required:** "type", "query"

-   "briefcase"

    Uses a briefcase for sync down.

    **Properties:**

    -   "type":"briefcase"
    -   "infos": array of <BriefcaseObjectInfo> items

    **Required:** "type", "infos"

    See [Using the Briefcase Sync Down Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_down_target_briefcase.htm "If your org uses Briefcases for your mobile users, the Briefcase sync down target was introduced in Mobile SDK 10.1. This sync target is an efficient way to load many records at a time. Sync is constrained to the records included in all Briefcases assigned to the current user and made accessible in the mobile client’s Connected App. You can limit the sync target to specific objects and fields included in those Briefcases. This target takes an array of BriefcaseObjectInfo objects, which include sObject type, fields, and the soup to add them to.")

-   "mru"

    Syncs most recently used records for the given object.

    **Properties:**

    -   "type":"mru"
    -   "sobjectType": <string>
    -   "fieldlist": array of <string> items
    -   "idFieldName": <string>
    -   "modificationDateFieldName": <string>

    **Required:** "type", "sobjectType", "fieldlist"

-   "refresh"

    Refreshes a sync of the given object and fields in the given soup.

    **Properties:**

    -   "type":"refresh"
    -   "sobjectType": <string>
    -   "fieldlist": array of <string> items
    -   "soupName": <string>
    -   "idFieldName": <string>
    -   "modificationDateFieldName": <string>

    **Required:** "type", "sobjectType", "fieldlist", "soupName"

-   "layout"

    Syncs layouts for the given object.

    **Properties:**

    -   "type":"layout"
    -   "sobjectType": <string>
    -   "formFactor": *Choice*: <"Large" | "Medium" | "Small">
    -   "layoutType": *Choice*: <"Compact" | "Full">
    -   "mode": *Choice*: <"Create" | "Edit" | "View">
    -   "recordTypeId": <string>
    -   "idFieldName": <string>
    -   "modificationDateFieldName": <string>

    **Required:** "type", "sobjectType", "layoutType"

-   "metadata"

    Syncs metadata for the given object.

    **Properties:**

    -   "type":"metadata"
    -   "sobjectType": <string>
    -   "idFieldName": <string>
    -   "modificationDateFieldName": <string>

    **Required:** "type", "sobjectType"

-   "parent\_children"

    Syncs related records for the given parent object.

    **Properties:** See [Syncing Related Records](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_related.htm "It’s a common problem in syncing offline data: You can easily sync your explicit changes, but how do you update affected related records? You can do it manually with enough knowledge, determination, and perspicacity, but that’s the old way. Starting with Mobile SDK 5.2, Mobile Sync provides tools that let you sync parent records and their related records with a single call.").

-   "custom"

    Syncs using your custom sync down target. Assign the names of your native target sync down classes for iOS and Android the "iOSImpl" and "androidImpl" properties.

    **Properties:**

    -   "type":"custom"
    -   "iOSImpl": <string>
    -   "androidImpl": <string>
    -   "idFieldName": <string>
    -   "modificationDateFieldName": <string>

    **Required:** "type", "iOSImpl", "androidImpl"


By default, sync up targets defined in sync config files use batch APIs. In addition, all sync up targets:

-   Can define a "createFieldList" property.
-   Can define an "updateFieldList" property.
-   Don’t define a "type" property.

Here are the specific settings for the various types of sync up targets.

-   sObject Collection

    Standard sync up target type for Mobile SDK 10.1 and later.

    **Properties:**

    -   "createFieldlist": array of <string> items
    -   "updateFieldlist": array of <string> items
    -   "externalIdFieldName": <string>

    **Required:** none

-   Batch

    Similar to the standard target, but uses smaller batch operations. Standard target for Mobile SDK 7.1 to 10.0.

    **Properties:**

    -   "createFieldlist": array of <string> items
    -   "updateFieldlist": array of <string> items
    -   "externalIdFieldName": <string>

    **Required:** none

-   Non-batch

    Similar to the standard target, but doesn’t use batch or collection operations.

    **Properties:**

    -   "iOSImpl":"SFSyncUpTarget"
    -   "androidImpl":"com.salesforce.androidsdk.mobilesync.target.SyncUpTarget"
    -   "createFieldlist": array of <string> items
    -   "updateFieldlist": array of <string> items
    -   "externalIdFieldName": <string>

    **Required:** "iOSImpl", "androidImpl"

-   Parent-child

    Syncs related records for the given parent object.

    **Properties:** See [Syncing Related Records](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_related.htm "It’s a common problem in syncing offline data: You can easily sync your explicit changes, but how do you update affected related records? You can do it manually with enough knowledge, determination, and perspicacity, but that’s the old way. Starting with Mobile SDK 5.2, Mobile Sync provides tools that let you sync parent records and their related records with a single call.").

-   Custom

    Syncs using your custom sync up target. Assign the names of your native sync up target classes for iOS and Android to the "iOSImpl" and "androidImpl" properties.

    **Properties:**

    -   "iOSImpl": <string>
    -   "androidImpl": <string>
    -   "createFieldlist": array of <string> items
    -   "updateFieldlist": array of <string> items

    **Required:** "iOSImpl", "androidImpl"


Target JSON definitions are specified in the [Mobile Sync JSON schema](https://raw.githubusercontent.com/forcedotcom/SalesforceMobileSDK-Package/master/shared/syncs.schema.json).

## Configuration File Locations

Configuration file placement varies according to app type and platform. Mobile SDK looks for configuration files in the following locations:

iOS (Native and React Native)

Under / in the Resources bundle

Android (Native and React Native)

In the /res/raw project folder

Hybrid

In your Cordova project, do the following:

1.  Place the configuration file in the top-level www/ folder.
2.  In the top-level project directory, run: cordova prepare

## Loading Sync Definitions from Configuration Files (iOS Native Apps)

Loading methods are defined on the MobileSyncSDKManager class.

User store

Swift

```

```

Objective-C

```

```

Global store

Swift

```

```

Objective-C

\[\[MobileSyncSDKManager sharedManager\] setupGlobalSyncsFromDefaultConfig\];

## Loading Sync Definitions from Configuration Files (Android Native Apps)

Loading methods are defined on the MobileSyncSDKManager. You can call these loaders from anywhere in your app. Make sure that the call occurs before you call any sync or resync functions.

User store

MobileSyncSDKManager.getInstance().setupUserSyncsFromDefaultConfig();

Global store

MobileSyncSDKManager.getInstance().setupGlobalSyncsFromDefaultConfig();

-   **[Using Sync Names](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_name_based_apis.htm)**
    Mobile SDK provides a collection of APIs for using and managing named sync operations. You can programmatically create and delete named syncs at runtime, run or rerun them by name, and manage named syncs in memory.

#### See Also

-   [Validating Configuration Files](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_config_validator.htm "When you’re writing formally structured text files, schema validation is useful at any level. For SmartStore and Mobile Sync configuration files, schema validation is especially welcome for complex configurations that handle related records.")

## Code Examples

```
{
    "syncs": [
        {
            "syncName": "sync1",
            "syncType": "syncDown",
            "soupName": "accounts",
            "target": {"type":"soql", 
                       "query":"SELECT Id, Name, LastModifiedDate 
                                FROM Account", 
                       "maxBatchSize":200},
            "options": {"mergeMode":"OVERWRITE"}
        },
        {
            "syncName": "sync2",
            "syncType": "syncUp",
            "soupName": "accounts",
            "target": {"createFieldlist":["Name"]},
            "options": {"fieldlist":["Id", "Name", "LastModifiedDate"], 
                        "mergeMode":"LEAVE_IF_CHANGED"}
        }
    ]
}
```

```
MobileSyncSDKManager.sharedManager.setupUserSyncsFromDefaultConfig()
```

```
[[MobileSyncSDKManager sharedManager] setupUserSyncsFromDefaultConfig];
```

```
MobileSyncSDKManager.sharedManager.setupGlobalSyncsFromDefaultConfig()
```

## Related Topics

- Using the Briefcase Sync Down Target (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_down_target_briefcase.htm)
- Syncing Related Records (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_related.htm)
- Using Sync Names (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_name_based_apis.htm)
- Validating Configuration Files (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_config_validator.htm)
