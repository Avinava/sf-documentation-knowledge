---
title: "Stores Stores"
domain: mobile-sdk
topic: stores-stores
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:31.859Z
estimatedTokens: 575
keywords: [Stores, SmartStore, puts, encrypted, soup, data, underlying, system, database, known, store, stored, indexed, device, loses]
---

# Stores Stores

> SmartStore puts encrypted soup
  data in an underlying system database known as the store. The store is where all soup
  data is stored, encrypted, related, and indexed. If the device loses connectivity, the user can
  continue to work on data in the store until the Salesforce cloud is again
  accessible.

# Stores Stores

SmartStore puts encrypted soup data in an underlying system database known as the store. The store is where all soup data is stored, encrypted, related, and indexed. If the device loses connectivity, the user can continue to work on data in the store until the Salesforce cloud is again accessible.

When you initialize SmartStore, you specify the name of a store to open. You assign a custom name or use a standard name, such as kDefaultSmartStoreName in iOS native apps, to define the store. Named stores are user-specific—like soups, the store persists only while the user’s session remains valid.

In a traditional SmartStore session, all soups reference, organize, and manipulate content from a single store. Single-store configuration is the best choice for many apps. However, if an app queries large quantities of data from many objects, performance can begin to degrade. To avoid slower response time, you can create multiple named stores and partition your data between them. For example, if your app defines tasks that operate on clear-cut domains of Salesforce data, you can create a store for each task. Runtime access to a smaller store can make a big difference in user satisfaction.

Some use cases require a store that isn’t tied to a user’s login credentials and can persist between user and app sessions. SmartStore accommodates this requirement by supporting global stores. Global stores are also named stores, but you create and remove them through a different set of APIs.

#### See Also

-   [Using Global](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_global_smartstore.htm "Although you usually tie a SmartStore instance to a specific customer’s credentials, you can also access a global instance for special requirements.")

-   [Creating and Accessing User-based Stores](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_access_store.htm "When an app initializes SmartStore, it creates an instance of a store. It then uses the store to register and populate soups and manipulate soup data. For a user-based store, SmartStore manages the store’s life cycle—you don’t need to think about cleaning up after the user’s session ends. For global stores, though, your app is responsible for deleting the store’s data when the app terminates.")

## Related Topics

- Using Global (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_global_smartstore.htm)
- Creating and Accessing User-based Stores (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_access_store.htm)
