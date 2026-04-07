---
title: "Defining a Custom Sync Down Target"
domain: mobile-sdk
topic: defining-a-custom-sync-down-target
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.556Z
estimatedTokens: 692
keywords: [Defining, Sync, Down, Target, define, targets, operations, subclassing, platform’s, abstract, base, hybrid, apps, implement, native, platform, support, classes]
---

> You define custom targets for sync down operations by subclassing your platform’s abstract base
   class for sync down targets. To use custom targets in hybrid apps, implement a custom native
   target class for each platform you support. The base sync down target classes are:

# Defining a Custom Sync Down Target

You define custom targets for sync down operations by subclassing your platform’s abstract base class for sync down targets. To use custom targets in hybrid apps, implement a custom native target class for each platform you support. The base sync down target classes are:

-   **iOS:**

    | Swift | Objective-C |
    | --- | --- |
    | SyncDownTarget | SFSyncDownTarget |

-   **Android:** SyncDownTarget

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

These classes sync the requested records but not their related records. To include related records, use the sync target classes described in [Syncing Related Records](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_related.htm#entity_framework_sync_related "It’s a common problem in syncing offline data: You can easily sync your explicit changes, but how do you update affected related records? You can do it manually with enough knowledge, determination, and perspicacity, but that’s the old way. Starting with Mobile SDK 5.2, Mobile Sync provides tools that let you sync parent records and their related records with a single call.").

## Required Methods

Every custom target class must implement the following required methods.

Start Fetch Method

Called by the sync manager to initiate the sync down operation. If maxTimeStamp is greater than 0, this operation becomes a “resync”. It then returns only the records that have been created or updated since the specified time.

iOS:

Swift

```

```

Objective-C

```

```

Android:

JSONArray startFetch(SyncManager syncManager, long maxTimeStamp);

Continue Fetching Method

Called by the sync manager repeatedly until the method returns null. This process retrieves all records that require syncing.

iOS:

Swift

```

```

Objective-C

```

```

Android:

JSONArray continueFetch(SyncManager syncManager);

modificationDateFieldName Property (Optional)

Optionally, you can override the modificationDateFieldName property in your custom class. If you provide modificationDateFieldName, Mobile Sync uses the field with this name to compute the maxTimestamp value that startFetch uses to resync the records. Default field name is lastModifiedDate.

iOS (Swift and Objective-C):

modificationDateFieldName property

Android:

String getModificationDateFieldName();

idFieldName Property (Optional)

If you provide "idFieldName", Mobile Sync uses the field with the given name to get the ID of the record. For example, if you specify "idFieldName":"AcmeId", Mobile Sync obtains the record’s ID from the AcmeId field instead of the default Id field.

iOS (Swift and Objective-C):

idFieldName property

Android:

String getIdFieldName();

## Code Examples

```
func startFetch(syncManager: SyncManager, 
                     maxTimeStamp: Int64, 
                       errorBlock: SyncDownErrorBlock, 
                         complete: SyncDownCompleteBlock)
```

```
- (void) startFetch:(SFMobileSyncSyncManager*)syncManager 
       maxTimeStamp:(long long)maxTimeStamp 
         errorBlock:(SFSyncDownTargetFetchErrorBlock)
                    errorBlock 
      completeBlock:(SFSyncDownTargetFetchCompleteBlock)
                    completeBlock;
```

```
func continueFetch(syncManager: SyncManager, 
                        onFail: SyncDownErrorBlock, 
                    onComplete: SyncDownCompletionBlock?)
```

```
- (void) 
    continueFetch:(SFMobileSyncSyncManager*)syncManager  
       errorBlock:(SFSyncDownTargetFetchErrorBlock)
                  errorBlock         
    completeBlock:(SFSyncDownTargetFetchCompleteBlock)
                  completeBlock;
```

## Related Topics

- Syncing Related Records (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_related.htm)
