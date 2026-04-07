---
title: "Incremental Syncs with reSync"
domain: mobile-sdk
topic: incremental-syncs-with-resync
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.208Z
estimatedTokens: 667
keywords: [Incremental, Syncs, reSync, sync, targets, SOQL-based, down, incrementally, pre-defined, operation, download, upload, new, updated, records]
---

# Incremental Syncs with reSync

> For sync up targets and SOQL-based sync down targets, you can incrementally update a
    pre-defined sync operation. Incremental reSync methods
    download or upload only new or updated records from the source. You can call reSync with either a sync ID or a sync name. If you call reSync for a sync configuration that has never been run, reSync knows to do a full sync.

# Incremental Syncs with reSync

For sync up targets and SOQL-based sync down targets, you can incrementally update a pre-defined sync operation. Incremental reSync methods download or upload only new or updated records from the source. You can call reSync with either a sync ID or a sync name. If you call reSync for a sync configuration that has never been run, reSync knows to do a full sync.

The following general rules help you decide whether to use syncUp and syncDown, or reSync.

-   You can use syncUp or syncDown anytime you want to do a full sync. You can pass in a sync you’ve defined previously, or you can define the sync in the call.
-   You can use reSync only to run syncs that are already defined. On the first run, reSync performs a full sync. In subsequent syncs, reSync returns the delta between the last run and the current state.

During sync down, Mobile SDK checks downloaded records for the modification date field specified by the target and remembers the most recent timestamp. If you request a resync for that sync down, Mobile SDK passes the most recent timestamp, if available, to the sync down target. The sync down target then fetches only records created or updated since the given timestamp. The default modification date field is lastModifiedDate.

Of the three built-in sync down targets (MRU, SOSL-based, and SOQL-based), only the SOQL-based sync down target supports reSync. To support reSync in custom sync down targets, use the maxTimeStamp parameter passed during a fetch operation.

## Limitation: There Are Ghosts in the Store!

After an incremental sync down, the following unused records remain in the local soup:

-   Records that have been deleted on the server
-   Records that no longer satisfy the sync down target

If you choose to remove these orphaned records, you can:

-   Run a full sync down operation, or
-   Call one of the [cleanResyncGhosts](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_ghosts.htm "If you’re finding that sync down operations sometimes leave unwanted records in your SmartStore soups, you can use the cleanResyncGhosts API to get rid of them.") methods

## Invoking the reSync Method

iOS:

On a sync manager instance, call:

Swift

```

```

Objective-C

```

```

Android:

On a SyncManager instance, call:

Kotlin

```

```

Java

```

```

Hybrid:

Call:

```

```

## Sample Apps

iOS

The MobileSyncExplorer sample app uses reSync() in the SObjectDataManager class.

Android

The MobileSyncExplorer sample app uses reSync() in the ContactListLoader class.

Hybrid

The SimpleSync sample app uses reSync() in SimpleSync.html’s app.views.SearchPage class.

## Code Examples

```
var syncState = 
    try syncManager.reSync(id: syncState.syncId, onUpdate: updateFunc)
```

```
- (nullable SFSyncState*) reSync:(NSNumber*)syncId updateBlock:(SFSyncSyncManagerUpdateBlock)updateBlock;
```

```
suspend fun suspendReSync(syncId: Long): SyncState
```

```
SyncState reSync(long syncId, SyncUpdateCallback callback);
```

```
cordova.require("com.salesforce.plugin.MobileSync").reSync(syncId,successCB);
```

## Related Topics

- cleanResyncGhosts (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_ghosts.htm)
