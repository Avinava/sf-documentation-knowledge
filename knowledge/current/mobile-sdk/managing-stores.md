---
title: "Managing Stores"
domain: mobile-sdk
topic: managing-stores
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.950Z
estimatedTokens: 571
keywords: [Managing, Stores, you’re, perform, cleanup, app, exits, multiple, user, longer, particular, SmartStore, deleting, named, hybrid, apps, functions, getting, iOS, Native, Android, Removing, Runtime]
---

> If you create global stores, you’re required to perform cleanup when the app exits.
  Also, if you create multiple user stores, you can perform cleanup if you’re no longer using
  particular stores. SmartStore provides
  methods deleting named and global stores. For hybrid apps, SmartStore also provides functions for
  getting a list of named stores.

# Managing Stores

If you create global stores, you’re required to perform cleanup when the app exits. Also, if you create multiple user stores, you can perform cleanup if you’re no longer using particular stores. SmartStore provides methods deleting named and global stores. For hybrid apps, SmartStore also provides functions for getting a list of named stores.

## iOS Native Apps

Mobile SDK for iOS defines the following SFSmartStore methods for removing stores.

Swift

```

```

Objective-C

```

```

In addition, SmartStore provides the following methods for retrieving store names. Use this method for both Swift and Objective-C apps.

```

```

## Android Native Apps

Mobile SDK for Android defines the following SmartStoreSDKManager methods for removing stores.

```

```

In addition, SmartStore provides the following methods for retrieving store names.

```

```

## Hybrid Apps

SmartStore defines the following functions for removing stores. Each function takes success and error callbacks. The removeStore() function also requires either a StoreConfig object that specifies the store name, or just the store name as a string.

```

```

In addition, the hybrid version of SmartStore provides the following functions for retrieving the StoreConfig objects for defined stores.

```

```

## Removing All SmartStore Data at Runtime

Sometimes an app must remove all data in a store without logging out the current user. In this case, keep in mind that the sync manager object sets up a table to track syncs. If you delete this table, the manager can’t continue. Therefore, the recommended way to reset SmartStore to a zero-data state is as follows:

1.  Drop the sync managers associated with the current user.

    iOS

    Swift

    Call the following SyncManager method:

    ```

    ```

    Objective-C

    Call the following SFMobileSyncSyncManager method:

    ```

    ```

    Android

    Call the following MobileSyncSyncManager method:

    ```

    ```

2.  Drop the stores associated with the current user.

    iOS

    Swift

    Call the following SmartStore method:

    ```

    ```

    Objective-C

    Call the following SFSmartStore method:

    ```

    ```

    Android

    Call the following SmartStoreSDKManager method:

    ```

    ```

## Code Examples

```
func removeShared(withName: String) -> Void
func removeShared(withName: String, forUserAccount: UserAccount) -> Void
func removeSharedGlobal(withName: String) -> Void
func removeAllForCurrentUser() -> Void
func removeAll(forUserAccount: UserAccount) -> Void
func removeAllGlobal() -> Void
```

```
+ (void)removeSharedStoreWithName:(NSString *)storeName;
+ (void)removeSharedStoreWithName:(NSString *)storeName forUser:(SFUserAccount *)user;
+ (void)removeSharedGlobalStoreWithName:(NSString *)storeName;
+ (void)removeAllStores;
+ (void)removeAllStoresForUser:(SFUserAccount *)user;
+ (void)removeAllGlobalStores;
```

```
+ (NSArray *)allStoreNames;
+ (NSArray *)allGlobalStoreNames;
```

```apex
public void removeGlobalSmartStore(String dbName)
public void removeSmartStore()
public void removeSmartStore(UserAccount account)
public void removeSmartStore(UserAccount account, String communityId)
public void removeSmartStore(String dbNamePrefix, UserAccount account, String communityId)
```

```apex
public List<String> getGlobalStoresPrefixList()
public List<String> getUserStoresPrefixList()
```
