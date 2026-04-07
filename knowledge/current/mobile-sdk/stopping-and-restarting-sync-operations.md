---
title: "Stopping and Restarting Sync Operations"
domain: mobile-sdk
topic: stopping-and-restarting-sync-operations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.708Z
estimatedTokens: 1206
keywords: [Android, Stopping, Restarting, Sync, Operations, Beginning, Mobile, SDK, 7.1, manager, classes, provide, allow, apps, stop, restart, syncs, Sometimes, stopped, paused, restarted, cases, forces, operation, fail, possibility, resuming, new, APIs, support, another, enhancement, ability, share, safely, across, multiple, app, extensions, Descriptions, iOS, Hybrid, React, Native, Efficiently, Down]
---

> Beginning in Mobile SDK 7.1, sync
    manager classes provide methods that allow apps to stop and restart syncs. Sometimes, a stopped
    sync is only paused and can later be restarted. In other cases, a stop request forces the sync
    operation to fail with no possibility of resuming. These new APIs support another Mobile SDK 7.1 enhancement:
    The ability to share data safely across multiple apps, or between an app and its
    extensions.

# Stopping and Restarting Sync Operations

Beginning in Mobile SDK 7.1, sync manager classes provide methods that allow apps to stop and restart syncs. Sometimes, a stopped sync is only paused and can later be restarted. In other cases, a stop request forces the sync operation to fail with no possibility of resuming. These new APIs support another Mobile SDK 7.1 enhancement: The ability to share data safely across multiple apps, or between an app and its extensions.

Stop/restart APIs provide a crucial safeguard for sharing data across multiple apps, or between an app and its extensions. To prevent multiple processes from writing to the same store, a data-sharing app is required to pause sync operations when it moves to the background.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Mobile SDK does NOT automatically call stop or restart when an app moves to the background or the foreground.

## Stop/Restart Method Descriptions

Sync manager stop/restart methods control the following sync operations:

-   Sync up
-   Sync down
-   Resync
-   Clean resync ghosts

The following generic method descriptions apply to all supported platforms.

stop

Asks the sync manager to suspend all sync operations currently running or queued for running. Sync down, sync up, and clean resync ghosts tasks now check periodically for stop requests. When a sync down or sync up tasks detect a stop request, they immediately stop running and change their status to stopped. When a clean resync ghosts task detects a stop request, it stops running and reports a failure. Tasks submitted after the stop request immediately return an error.

restart

-   Restarts the sync manager. A stopped sync manager can accept sync tasks again when restart is called. The restart method takes a Boolean argument (restartStoppedSyncs) and a callback block, and behaves as follows.
    -   If restartStoppedSyncs is true, restart calls reSync on all stopped sync up and sync down tasks and sends updates to the callback block.
    -   If restartStoppedSyncs is false, the tasks remain stopped. The app itself can then restart sync up and sync down operations as needed by calling reSync.

isStopping

Returns true if a stop was requested but some tasks are still running.

isStopped

Returns true if a stop was requested and all tasks have stopped running.

## iOS

Stop/restart functionality is available only for native iOS platforms. Here are the platform-specific signatures.

| Swift Class | Objective-C Class |
| --- | --- |
| SyncManager | SFMobileSyncSyncManager |

Swift

```

```

Objective-C

```

```

## Android

```

```

## What About Hybrid and React Native?

Currently, stop and restart methods are not exposed through either the Cordova or the React Native bridge. These new APIs are most useful for responding to application life cycle events, such as moving to the background or foreground. Typically, apps handle this type of low-level behavior in native code.

## Efficiently Restarting a Paused Sync Down Operation

Mobile Sync records a max time stamp. This setting reflects the maximum value of the field that contains the “last modified” date for downloaded records. Typically, Mobile SDK captures this value when a sync operation has completed. Before Mobile SDK 7.1, Mobile Sync used this value to reduce the number of records fetched on repeated reSync calls.

In Mobile SDK 7.1, sync down target base classes—SyncDownTarget on Android, SFSyncDownTarget on iOS—support a new method, isSyncDownSortedByLatestModification(), that subclasses can implement. This method returns a Boolean value that, when true, instructs Mobile Sync to sort a batch of records. When a sync down operation sorts records, the max time stamp is updated on the sync state object with every batch of records being fetched. If the sync down is stopped and later restarted, the max time stamp keeps previous batches from being refetched.

For SOQL-based sync down operations—SoqlSyncDownTarget on Android, SFSoqlSyncDownTarget on iOS—the sorting behavior depends on the given SOQL query. If the query does not include an ORDER BY clause, Mobile SDK adds an ORDER BY last-modified-field clause, and isSyncDownSortedByLatestModification() returns true.

Behavior also differs slightly between resyncing a sync down operation that has completed versus one that was stopped:

-   When reSync is invoked for a completed sync down, Mobile SDK fetches only records whose time stamp exceeds the captured max time stamp.
-   When reSync is invoked for a stopped sync down, Mobile SDK fetches records whose time stamp is greater than or equal to the captured max time stamp. This variation is necessary because records with the same time stamp could span more than one batch.

## Code Examples

```
open func stop()
open func restart(restartStoppedSyncs: Bool, 
                 onUpdate updateBlock: @escaping SyncUpdateBlock) throws
open func isStopping() -> Bool
open func isStopped() -> Bool
```

```
- (void)stop;
- (BOOL)restart:(BOOL)restartStoppedSyncs 
    updateBlock:(SFSyncSyncManagerUpdateBlock)updateBlock 
          error:(NSError**)error;
- (BOOL)isStopping;
- (BOOL)isStopped;
```

```apex
public synchronized void stop();
public synchronized void restart(boolean restartStoppedSyncs, 
    SyncUpdateCallback callback);
public boolean isStopping();
public boolean isStopped();
```
