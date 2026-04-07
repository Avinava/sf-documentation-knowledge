---
title: "Using the Sync Manager with Global SmartStore"
domain: mobile-sdk
topic: using-the-sync-manager-with-global-smartstore
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.460Z
estimatedTokens: 598
keywords: [Sync, Manager, SmartStore, Mobile, instance, call, factory, compatible]
---

> To use Mobile Sync with a global SmartStore instance, call a static factory
   method on the sync manager object to get a compatible sync manager instance.

# Using the Sync Manager with Global SmartStore

To use Mobile Sync with a global SmartStore instance, call a static factory method on the sync manager object to get a compatible sync manager instance.

iOS

Swift

```

```

Objective-C

```

```

Returns a sync manager instance that talks to the server as the current user and writes to or reads from the given SmartStore instance. Use this factory method for syncing data with the global SmartStore instance.

Android

```

```

Returns a sync manager instance that talks to the server as the given community user and writes to or reads from the given SmartStore instance. Use this factory method for syncing data with the global SmartStore instance.

Hybrid

In each of the following methods, the optional first argument tells the Mobile Sync plug-in whether to use a global store. This argument accepts a Boolean value or a StoreConfig object. If you use a StoreConfig object, you can specify storeName, isGlobalStore, or both, depending on your context. See [Creating and Accessing User-based Stores](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_access_store.htm "When an app initializes SmartStore, it creates an instance of a store. It then uses the store to register and populate soups and manipulate soup data. For a user-based store, SmartStore manages the store’s life cycle—you don’t need to think about cleaning up after the user’s session ends. For global stores, though, your app is responsible for deleting the store’s data when the app terminates.").

-   ```

    ```

-   ```

    ```

-   ```

    ```

-   ```

    ```


#### See Also

-   [Creating and Accessing User-based Stores](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_access_store.htm "When an app initializes SmartStore, it creates an instance of a store. It then uses the store to register and populate soups and manipulate soup data. For a user-based store, SmartStore manages the store’s life cycle—you don’t need to think about cleaning up after the user’s session ends. For global stores, though, your app is responsible for deleting the store’s data when the app terminates.")

-   [Using Global](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_global_smartstore.htm "Although you usually tie a SmartStore instance to a specific customer’s credentials, you can also access a global instance for special requirements.")

## Code Examples

```
SyncManager.sharedInstance(store: store!)
```

```
+ (instancetype)
    sharedInstanceForStore:
        (SFSmartStore *)store;
```

```
SyncManager getInstance(UserAccount account, String communityId, SmartStore smartStore);
```

```
syncDown(isGlobalStore, target, soupName, options, successCB, errorCB);
syncDown(storeConfig, target, soupName, options, successCB, errorCB);
```

```
reSync(isGlobalStore, syncId, successCB, errorCB);
reSync(storeConfig, syncId, successCB, errorCB);
```

## Related Topics

- Creating and Accessing User-based Stores (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_access_store.htm)
- Using Global (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_global_smartstore.htm)
