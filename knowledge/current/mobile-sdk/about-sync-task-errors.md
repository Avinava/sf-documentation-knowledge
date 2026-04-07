---
title: "About Sync Task Errors"
domain: mobile-sdk
topic: about-sync-task-errors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.782Z
estimatedTokens: 374
keywords: [Sync, Task, Errors, Mobile, SDK, 7.1, error, consistently, across, platforms, New, Updated, Resync, Deprecated, iOS]
---

> In Mobile SDK 7.1 and later, sync task methods return error information consistently
    across platforms.

# About Sync Task Errors

In Mobile SDK 7.1 and later, sync task methods return error information consistently across platforms.

Sync tasks—sync down, sync up, resync, and clean resync ghosts—can fail for the following reasons:

-   Invalid ID or name
-   The requested sync operation is already running
-   Sync manager is stopped or stopping

To inform apps of the nature of failures, sync methods in Mobile SDK 7.1 and later return error information as follows.

-   On iOS:
    -   Swift methods throw a SyncState object.
    -   Objective-C methods include an NSError\*\* parameter.Earlier versions of these methods are deprecated.
-   On Android, these methods throw MobileSyncException.

## New and Updated Sync and Resync Methods in Mobile SDK 7.1

New iOS Methods

Objective-C

The following methods now support and NSError parameter.

```

```

Updated iOS Methods

Swift

The following methods now throw a SyncState object.

```

```

## Deprecated iOS Methods in Mobile SDK 7.1

Objective-C

Existing sync methods that do not support an NSError output parameter are slated for removal in a future major release.

```

```

## See Also

For changes to cleanResyncGhosts methods, see [Handling “Ghost” Records After Sync Down Operations](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_ghosts.htm "If you’re finding that sync down operations sometimes leave unwanted records in your SmartStore soups, you can use the cleanResyncGhosts API to get rid of them.").

## Code Examples

```
- (nullable SFSyncState*) 
    syncDownWithTarget:(SFSyncDownTarget*)target
               options:(SFSyncOptions*)options
              soupName:(NSString*)soupName
              syncName:(*nullable* NSString*)syncName
           updateBlock:(SFSyncSyncManagerUpdateBlock)updateBlock
                 error:(NSError**)error
;
- (*nullable* SFSyncState*) 
    syncUpWithTarget:(SFSyncUpTarget*)target
             options:(SFSyncOptions*)options
            soupName:(NSString*)soupName
            syncName:(*nullable* NSString*)syncName
         updateBlock:(SFSyncSyncManagerUpdateBlock)updateBlock
               error:(NSError**)error;

- (*nullable* SFSyncState*) 
         reSync:(NSNumber*)syncId 
    updateBlock:(SFSyncSyncManagerUpdateBlock)updateBlock
          error:(NSError**) error;

- (*nullable* SFSyncState*) 
    reSyncByName:(NSString*)syncName 
     updateBlock:(SFSyncSyncManagerUpdateBlock)updateBlock 
           error:(NSError**)error NS_SWIFT_NAME(reSync(named:onUpdate:));
```

```
open func syncDown(target: SyncDownTarget, 
                  options: SyncOptions, 
                 soupName: String, 
                 syncName: String?, 
     onUpdate updateBlock: @escaping SyncUpdateBlock) throws -> SyncState

open func syncUp(target: SyncUpTarget, 
                options: SyncOptions, 
               soupName: String, 
               syncName: String?, 
   onUpdate updateBlock: @escaping SyncUpdateBlock) throws -> SyncState

open func reSync(id syncId: NSNumber, 
      onUpdate updateBlock: @escaping SyncUpdateBlock) throws -> SyncState

open func reSync(
          named syncName: String, 
    onUpdate updateBlock: @escaping SyncUpdateBlock) throws -> SyncState
```

```
- (nullable SFSyncState*) 
    syncDownWithTarget:(SFSyncDownTarget*)target
               options:(SFSyncOptions*)options
              soupName:(NSString*)soupName
              syncName:(*nullable* NSString*)syncName
           updateBlock:(SFSyncSyncManagerUpdateBlock)updateBlock;

- (nullable SFSyncState*) 
    syncUpWithTarget:(SFSyncUpTarget*)target
             options:(SFSyncOptions*)options
            soupName:(NSString*)soupName
            syncName:(*nullable* NSString*)syncName
         updateBlock:(SFSyncSyncManagerUpdateBlock)updateBlock;

- (nullable SFSyncState*) 
         reSync:(NSNumber*)syncId
    updateBlock:(SFSyncSyncManagerUpdateBlock)updateBlock;

- (nullable SFSyncState*) 
    reSyncByName:(NSString*)syncName 
     updateBlock:(SFSyncSyncManagerUpdateBlock)updateBlock;
```

## Related Topics

- Handling “Ghost” Records After Sync Down Operations (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_ghosts.htm)
