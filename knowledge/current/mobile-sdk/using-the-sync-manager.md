---
title: "Using the Sync Manager"
domain: mobile-sdk
topic: using-the-sync-manager
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.613Z
estimatedTokens: 833
keywords: [Sync, Manager, handles, simple, down, operations, authenticated, requests, server, behalf, stores, locally, SmartStore, collects, records, specify, merges, cor, States, Instantiation, iOS, Android]
---

> The sync manager object handles simple sync up and sync down operations. For sync down, it
   sends authenticated requests to the server on your behalf, and stores response data locally in
    SmartStore. For sync up, it
   collects the records you specify from SmartStore and merges them with
   cor

# Using the Sync Manager

The sync manager object handles simple sync up and sync down operations. For sync down, it sends authenticated requests to the server on your behalf, and stores response data locally in SmartStore. For sync up, it collects the records you specify from SmartStore and merges them with corresponding server records according to your instructions. Sync managers know how to handle authentication for Salesforce users and community users. Sync managers can store records in any user or global SmartStore instance—the default instance, or a named instance.

Sync manager classes provide factory methods that return customized sync manager instances. To use the sync manager, you create an instance that matches the requirements of your sync operation. For example, Mobile SDK provides a specialized sync manager class for layouts and another for metadata.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

It is of utmost importance that you create the correct type of sync manager for every sync activity. If you don't, your customers can encounter runtime authentication failures.

Once you've created an instance, you can use it to call typical sync manager functionality:

-   Sync down
-   Sync up
-   Resync
-   Stop
-   Restart

Sync managers can perform three types of actions on SmartStore soup entries and Salesforce records:

-   Create
-   Update
-   Delete

If you provide custom targets, sync managers can use them to synchronize data at arbitrary REST endpoints.

## Sync Manager States

At runtime, sync manager objects progress through three states:

-   accepting\_syncs—The sync manager can start sync operations.
-   stopping—The sync manager’s stop method has been called.
-   stopped—All sync operations have stopped.

The sync manager can start sync operations only when it’s in the accepting\_syncs state. Calling the sync manager’s restart method resets a stopping or stopped state to accepting\_syncs. If the restart method is called with restartStoppedSyncs set to true, the sync manager calls reSync on each stopped sync operation.

## Sync Manager Instantiation (iOS)

| Swift Class | Objective-C Class |
| --- | --- |
| SyncManager | SFMobileSyncSyncManager |

In iOS, you use pairs of access and removal methods. You call the sharedInstance class methods on the SFMobileSyncSyncManager class to access a preconfigured shared instance for each scenario. When you're finished using the shared instance for a particular use case, remove it with the corresponding removeSharedInstance method.

For a specified user:

Swift

```

```

Objective-C

```

```

For a specified user using the specified SmartStore database:

Swift

```

```

Objective-C

```

```

For the current user and a specified SmartStore database:

Swift

```

```

Objective-C

```

```

## Sync Manager Instantiation (Android)

In Android, you use a different factory method for each of the following scenarios:

For the current user:

```

```

For a specified user:

```

```

For a specified user in a specified community:

```

```

For a specified user in a specified community using the specified SmartStore database:

```

```

## Example

Here's a Swift example of initializing the sync manager with a shared store.

```

```

## Code Examples

```
SFMobileSyncSyncManager.sharedInstance(user: userAccount)
SFMobileSyncSyncManager.removeSharedInstance(user: userAccount)
```

```
+ (instancetype)sharedInstance:(SFUserAccount *)user;
+ (void)removeSharedInstance:(SFUserAccount *)user;
```

```
SFMobileSyncSyncManager.sharedInstance(forUser: userAccount, storeName: "StoreName")
SFMobileSyncSyncManager.removeSharedInstance(forUser: userAccount, storeName: "StoreName")
```

```
+ (instancetype)sharedInstanceForUser:(SFUserAccount *)user 
                            storeName:(NSString *)storeName;

+ (void)removeSharedInstanceForUser:(SFUserAccount *)user 
                          storeName:(NSString *)storeName;
```

```
SFMobileSyncSyncManager.sharedInstance(for: store)
SFMobileSyncSyncManager.removeSharedInstance(for: store)
```
