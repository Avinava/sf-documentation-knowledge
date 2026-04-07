---
title: "Creating and Accessing User-based Stores"
domain: mobile-sdk
topic: creating-and-accessing-user-based-stores
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.558Z
estimatedTokens: 832
keywords: [Creating, Accessing, User-based, Stores, app, initializes, SmartStore, creates, instance, store, uses, register, populate, soups, manipulate]
---

# Creating and Accessing User-based Stores

> When an app initializes SmartStore, it creates an instance of a
  store. It then uses the store to register and populate soups and manipulate soup data. For a
  user-based store, SmartStore manages the
  store’s life cycle—you don’t need to think about cleaning up after the user’s session ends.
  For global stores, though, your app is responsible for deleting the store’s data when the app
  terminates.

# Creating and Accessing User-based Stores

When an app initializes SmartStore, it creates an instance of a store. It then uses the store to register and populate soups and manipulate soup data. For a user-based store, SmartStore manages the store’s life cycle—you don’t need to think about cleaning up after the user’s session ends. For global stores, though, your app is responsible for deleting the store’s data when the app terminates.

## Android Native Apps

Android requires you to first get an instance of SmartStoreSDKManager which you then use to create stores.

```

```

A call to SmartStoreSDKManager.getSmartStore() without arguments always accesses the default anonymous store. To create a named user-based store, call the following method.

```

```

Both account and communityId can be null. You can call these methods as many times as necessary to create additional stores.

## iOS Native Apps

For creating stores, iOS provides the sharedStoreWithName: class message.

```

```

In Swift:

```

```

You can create a store with a custom name by passing in any string other than kDefaultSmartStoreName. You can call this method as many times as necessary to create additional stores.

## Hybrid Apps

In hybrid apps, you access user-based stores and global stores the same way. Rather than creating stores explicitly, you automatically create stores that don’t already exist when you call registerSoup(). To use a named store—for subsequent direct references, for example—you call this function with a StoreConfig object as the first argument. This function object takes a store name and a Boolean value that indicates whether the store is global.

```

```

You can pass this object as the optional first argument to most soup functions. If used, the StoreConfig object configures the execution context. Either storeName or isGlobalStore can be optional—you can specify one or both. SmartStore evaluates StoreConfig objects as follows:

-   If storeName is not specified, this.storeName is set to the SmartStore default store name.
-   If isGlobalStore is not specified, this.isGlobalStore is set to false.
-   Store names aren’t necessarily unique. A single store name can be used twice—once for a user-based store, and once for a global store.
-   If you provide a store name that doesn’t exist in the space indicated by your isGlobalStore setting, SmartStore creates it.

The following example creates a user-based store named “Store1” that contains the soupName soup.

```

```

You can call registerSoup() with as many different soup names as necessary. If you call a soup function without passing in StoreConfig, SmartStore always performs the operation on the default user-based (non-global) store. This behavior applies even if you’ve created named stores. The following example creates a soup named soupName, with the provided index specs, in the current user’s default store.

```

```

#### See Also

-   [Stores Stores](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_store_types.htm "SmartStore puts encrypted soup data in an underlying system database known as the store. The store is where all soup data is stored, encrypted, related, and indexed. If the device loses connectivity, the user can continue to work on data in the store until the Salesforce cloud is again accessible.")

## Code Examples

```
SmartStoreSDKManager sdkManager = 
    SmartStoreSDKManager.getInstance();

SmartStore smartStore = sdkManager.getSmartStore(); // Creates a default store for the current user
```

```apex
public SmartStore getSmartStore(String dbNamePrefix, UserAccount account, String communityId)
```

```
- (SFSmartStore *)store
{
    return [SFSmartStore sharedStoreWithName:kDefaultSmartStoreName]; // Creates a default store for the current user
}
```

```
var store = SmartStore.shared(withName: storeName)
```

```
var StoreConfig = function (storeName, isGlobalStore) { 
    this.storeName = storeName; 
    this.isGlobalStore = isGlobalStore; 
};
```

## Related Topics

- Stores Stores (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_store_types.htm)
