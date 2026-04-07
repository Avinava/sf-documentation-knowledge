---
title: "Using Sync Names"
domain: mobile-sdk
topic: using-sync-names
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.520Z
estimatedTokens: 1074
keywords: [Sync, Mobile, SDK, collection, APIs, managing, named, operations, programmatically, syncs, runtime, run, rerun, manage, memory, Name-Based, iOS, Android, Hybrid, React, Native, Invoking, Resync, Apps]
---

> Mobile SDK
        provides a collection of APIs for using and managing named sync operations. You can
        programmatically create and delete named syncs at runtime, run or rerun them by name, and
        manage named syncs in memory.

# Using Sync Names

Mobile SDK provides a collection of APIs for using and managing named sync operations. You can programmatically create and delete named syncs at runtime, run or rerun them by name, and manage named syncs in memory.

## Name-Based APIs (iOS)

Most of these methods are new. Updated methods use the same parameters as their existing analogs for target, options, and updateBlock.

Get sync status by name

Swift

```

```

Objective-C

```

```

Check for an existing sync by name

Swift

```

```

Objective-C

```

```

Delete a sync configuration by name

Swift

```

```

Objective-C

```

```

Create, run, or rerun a named sync configuration

See [Syncing Down](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_down.htm) and [Syncing Up](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_up.htm).

Call cleanResyncGhosts with a named sync configuration

See [Calling cleanResyncGhosts Methods by Sync Name](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_ghosts.htm#clean_resync_ghosts_by_name) .

## Name-Based APIs (Android)

Most of these methods are new. Overridden methods use the same parameters as their existing analogs for target, options, and callback.

Get sync status by name

```

```

Check for an existing sync by name

```

```

Delete a sync configuration by name

```

```

Create, run, or rerun a named sync configuration

See [Syncing Down](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_down.htm) and [Syncing Up](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_up.htm).

Call cleanResyncGhosts with a named sync configuration

See [Calling cleanResyncGhosts Methods by Sync Name](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_ghosts.htm#clean_resync_ghosts_by_name).

## Name-Based APIs (Hybrid)

Most of these methods are existing legacy APIs. Wherever a sync ID is accepted, you can pass the sync name instead.

Get sync status by name

You can use this function to determine if a sync configuration exists. It returns null if the sync configuration doesn’t exist.

```

```

Delete a sync configuration by name

```

```

Create and run a named sync configuration

The legacy syncDown() function now includes a syncName parameter. If the name is provided, Mobile SDK creates a configuration with the given name. This function fails if the requested sync name already exists.

```

```

```

```

Run (or rerun) any sync by name

This existing method now has an overload that accepts either a sync ID or name.

```

```

## Name-Based APIs (React Native)

Most of these methods are existing legacy APIs. Wherever a sync ID is accepted, you can pass the sync name instead.

Get sync status by name

This existing method now has an overload that accepts either a sync ID or a sync name.

getSyncStatus(storeConfig, syncIdOrName, successCB, errorCB)

Delete by name

This method, new in Mobile SDK 6.0, accepts either a sync ID or a sync name.

deleteSync(storeConfig, syncIdOrName, successCB, errorCB)

Create and run a sync with a name - new optional parameter syncName

This existing method now has an optional parameter that accepts a sync name.

```

```

Run (or rerun) any sync by name - overloaded to accept id or name

This existing method now has an overload that accepts either a sync ID or a sync name.

reSync(storeConfig, syncIdOrName, successCB, errorCB)

## Invoking the Resync Method in Native iOS Apps

Excerpt from SObject.swift from MobileSyncExplorerSwift template app. In this example, updateRemoteData calls reSync with a sync up configuration (kSyncUpName). If that operation succeeds, it then calls refreshRemoteData with a sync down configuration (kSyncDownName). This follow-up step ensures that the soup reflects all the latest changes on the server:

```

```

```

```

## Invoking the Resync Method in Native Android Apps

Excerpt from SObjectSyncableRepoBase.kt from MobileSyncExplorerKotlinTemplate.

```

```

Excerpt from ContactListLoader.java from Android MobileSyncExplorer native sample app:

```

```

```

```

## Invoking the Resync Method in Hybrid Apps

Excerpt from MobileSyncExplorer.html from MobileSyncExplorerHybrid sample app:

```

```

## Code Examples

```
var syncStatus = syncManager.getSyncStatus(syncName: syncState.syncName)
```

```
- (nullable
       SFSyncState*)getSyncStatusByName:(NSString*)syncName;
```

```
var syncExists = syncManager.hasSync(syncName: syncState.syncName)
```

```
- (BOOL)hasSyncWithName:(NSString*)syncName;
```

```
syncManager.deleteSync(syncName: syncState.syncName)
```

## Related Topics

- Syncing Down (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_down.htm)
- Syncing Up (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_up.htm)
- Calling
                            cleanResyncGhosts Methods by Sync Name (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_ghosts.htm)
