---
title: "Handling “Ghost” Records After Sync Down Operations"
domain: mobile-sdk
topic: handling-ghost-records-after-sync-down-operations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.370Z
estimatedTokens: 882
keywords: [Handling, “Ghost”, Records, Sync, Down, Operations, you’re, finding, sometimes, leave, unwanted, SmartStore, soups, cleanResyncGhosts, API]
---

# Handling “Ghost” Records After Sync Down Operations

> If you’re finding that sync down operations sometimes leave unwanted records in your SmartStore soups, you can use the cleanResyncGhosts API to get rid of them.

# Handling “Ghost” Records After Sync Down Operations

If you’re finding that sync down operations sometimes leave unwanted records in your SmartStore soups, you can use the cleanResyncGhosts API to get rid of them.

In certain prescribed cases, SmartStore soups do not reflect the exact contents of the most recent sync down request. For example, if a record is deleted on the Salesforce server, the next sync down operation doesn’t remove that record from SmartStore. Also, records that don’t satisfy the sync criteria are excluded from the sync down results but aren’t automatically removed from the soup. These records that unexpectedly remain in the SmartStore soup are known as ghosts.

To root out these haunts, Mobile Sync provides a set of cleanResyncGhosts methods that identify and remove ghosts. You pass in the ID or name of a sync object and define a callback block. These methods are available for Android native, iOS native, hybrid, and React Native platforms.

![Warning](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_warning.png&folder=mobile_sdk)

#### Warning

Exercise restraint in using the cleanResyncGhosts methods! Calls to these methods can be expensive in both runtime performance and payload size. Use these methods for low-frequency cleanup, rather than as part of every sync down operation. Use your own judgment to determine whether a particular set of ghosts is problematic and therefore requires immediate cleanup.

## Using cleanResyncGhosts with Custom Sync Down Targets

If your app uses a custom sync down target, cleanResyncGhosts requires the custom target to implement the getListOfRemoteIds method. This method returns the list of Salesforce IDs that satisfy the sync down target’s criteria. For getListOfRemoteIds coding examples, see the SOQL, SOSL, or MRU sync down target in these Mobile Sync library folders:

iOS

[https://github.com/forcedotcom/SalesforceMobileSDK-iOS/tree/master/libs/MobileSync/MobileSync/Classes/Util](https://github.com/forcedotcom/SalesforceMobileSDK-iOS/tree/master/libs/MobileSync/MobileSync/Classes/Util "HTML (New Window)")

Android

[https://github.com/forcedotcom/SalesforceMobileSDK-Android/tree/master/libs/MobileSync/src/com/salesforce/androidsdk/mobilesync/util](https://github.com/forcedotcom/SalesforceMobileSDK-Android/tree/master/libs/MobileSync/src/com/salesforce/androidsdk/mobilesync/util "HTML (New Window)")

## Preparing Soups for cleanResyncGhosts

For the target soup, add an index for the following field:

\_\_sync\_id\_\_

This field ensures that the cleanResyncGhosts() method removes only the desired soup elements. Mobile Sync manages the content of this field for you.

## Calling cleanResyncGhosts Methods by Sync ID

iOS Native

| Swift | Objective-C |
| --- | --- |
| SyncManager | SFMobileSyncSyncManager |

Swift

In Mobile SDK 7.1, the following method is updated to throw.

```

```

Objective-C

In Mobile SDK 7.1, the following method is updated to support an NSError output parameter.

```

```

Android Native

Kotlin

```

```

Java

```

```

Hybrid

```

```

React Native

```

```

## Calling cleanResyncGhosts Methods by Sync Name

You can also call cleanResyncGhosts with a sync name.

iOS (Swift)

```

```

iOS (Objective-C)

```

```

Android (Kotlin)

```

```

Android (Java)

```

```

## Deprecations in Mobile SDK 7.1

Deprecated iOS Method (Objective-C)

The following method that does not support an NSError output parameter is slated for removal in a future major release.

```

```

## Code Examples

```
open func cleanResyncGhosts(
                        forId syncId: NSNumber, 
    onComplete completionStatusBlock: @escaping SyncCompletionBlock) throws
```

```
- (BOOL) 
        cleanResyncGhosts:(NSNumber*)syncId
    completionStatusBlock:
        (SFSyncSyncManagerCompletionStatusBlock)completionStatusBlock 
                    error:(NSError**)error;
```

```
suspend fun suspendCleanResyncGhosts(syncId: Long): Int
```

```apex
public void cleanResyncGhosts(final long syncId) 
    throws JSONException, IOException

public void cleanResyncGhosts(long syncId, 
    final CleanResyncGhostsCallback callback) 
    throws JSONException
```

```
cleanResyncGhosts(isGlobalStore, syncId, successCB, errorCB)

cleanResyncGhosts(storeConfig, syncId, successCB, errorCB)
```
