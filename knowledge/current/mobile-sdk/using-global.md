---
title: "Using Global"
domain: mobile-sdk
topic: using-global
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.679Z
estimatedTokens: 1094
keywords: [Although, usually, tie, SmartStore, instance, specific, customer’s, credentials, access, special, requirements, Android, APIs, iOS, Hybrid]
---

# Using Global

> Although you usually tie a SmartStore instance to a specific customer’s
  credentials, you can also access a global instance for special requirements.

# Using Global

Although you usually tie a SmartStore instance to a specific customer’s credentials, you can also access a global instance for special requirements.

Under certain circumstances, some applications require access to a SmartStore instance that is not tied to Salesforce authentication. This situation can occur in apps that store application state or other data that does not depend on a Salesforce user, organization, or community. To address this situation, Mobile SDK supports global stores that persists beyond the app’s life cycle.

Data stored in global stores does not depend on user authentication and therefore is not deleted at logout. Since a global store remains intact after logout, you are responsible for deleting its data when the app exits. Mobile SDK provides APIs for this purpose.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Do not store user-specific data in global SmartStore. Doing so violates Mobile SDK security requirements because user data can persist after the user logs out.

## Android APIs

In Android, you access global SmartStore through an instance of SmartStoreSDKManager.

-   ```

    ```

    Returns a global SmartStore instance with the specified database name. You can set dbName to any string other than “smartstore”. Set dbName to null to use the default global SmartStore database.
-   ```

    ```

    Checks if a global SmartStore instance exists with the specified database name. Set dbName to null to verify the existence of the default global SmartStore.
-   ```

    ```

    Deletes the specified global SmartStore database. You can set this name to any string other than “smartstore”. Set dbName to null to remove the default global SmartStore.

## iOS APIs

In iOS, you access global SmartStore through an instance of SFSmartStore.

-   **Objective-C:**

    ```

    ```

    **Swift:**

    ```

    ```

    Returns a global SmartStore instance with the specified database name. You can set storeName to any string other than “defaultStore”. Set storeName to kDefaultSmartStoreName to use the default global SmartStore.
-   **Objective-C:**

    ```

    ```

    **Swift:**

    ```

    ```

    Deletes the specified global SmartStore database. You can set storeName to any string other than “defaultStore”. Set storeName to kDefaultSmartStoreName to use the default global SmartStore.

## Hybrid APIs

Most SmartStore JavaScript soup methods take an optional first argument that specifies whether to use global SmartStore. This argument can be a Boolean value or a StoreConfig object. If this argument is absent, Mobile SDK uses the default user store.

For example:

```

```

SmartStore defines the following functions for removing stores. Each function takes success and error callbacks. The removeStore() function also requires either a StoreConfig object that specifies the store name, or just the store name as a string.

```

```

#### See Also

-   [Stores Stores](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_store_types.htm "SmartStore puts encrypted soup data in an underlying system database known as the store. The store is where all soup data is stored, encrypted, related, and indexed. If the device loses connectivity, the user can continue to work on data in the store until the Salesforce cloud is again accessible.")

-   [Managing Stores](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_managing_stores.htm "If you create global stores, you’re required to perform cleanup when the app exits. Also, if you create multiple user stores, you can perform cleanup if you’re no longer using particular stores. SmartStore provides methods deleting named and global stores. For hybrid apps, SmartStore also provides functions for getting a list of named stores.")

-   [Creating and Accessing User-based Stores](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_access_store.htm "When an app initializes SmartStore, it creates an instance of a store. It then uses the store to register and populate soups and manipulate soup data. For a user-based store, SmartStore manages the store’s life cycle—you don’t need to think about cleaning up after the user’s session ends. For global stores, though, your app is responsible for deleting the store’s data when the app terminates.")

## Code Examples

```apex
public SmartStore getGlobalSmartStore(String dbName)
```

```apex
public boolean hasGlobalSmartStore(String dbName)
```

```apex
public void removeGlobalSmartStore(String dbName)
```

```
+ (id)sharedGlobalStoreWithName:(NSString *)storeName
```

```
var gstore = SmartStore.sharedGlobal(withName: storeName)
```

## Related Topics

- Stores Stores (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_store_types.htm)
- Managing Stores (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_managing_stores.htm)
- Creating and Accessing User-based Stores (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_access_store.htm)
