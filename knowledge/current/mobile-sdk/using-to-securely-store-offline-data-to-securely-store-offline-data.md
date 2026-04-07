---
title: "Using  to Securely Store Offline Data to Securely Store Offline Data"
domain: mobile-sdk
topic: using-to-securely-store-offline-data-to-securely-store-offline-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.693Z
estimatedTokens: 1735
keywords: [Securely, Store, Offline, Data, Mobile, devices, lose, connection, any, time, environments, hospitals, airplanes, often, prohibit]
---

# Using  to Securely Store Offline Data to Securely Store Offline Data

> Mobile devices can lose connection at any time, and environments such as
   hospitals and airplanes often prohibit connectivity. To handle these situations, it’s
   important that your mobile apps continue to function when they go offline.

# Using to Securely Store Offline Data to Securely Store Offline Data

Mobile devices can lose connection at any time, and environments such as hospitals and airplanes often prohibit connectivity. To handle these situations, it’s important that your mobile apps continue to function when they go offline.

Mobile SDK provides SmartStore, a multithreaded, secure solution for offline storage on mobile devices. With SmartStore, your customers can continue working with data in a secure environment even when the device loses connectivity. When you couple SmartStore with Mobile Sync, you can easily keep local SmartStore data in sync with the Salesforce server when connectivity resumes.

-   **[About SmartStore](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_about.htm)**
    SmartStore provides the primary features of non-relational desktop databases—data segmentation, indexing, querying—along with caching for offline storage.
-   **[Enabling in Hybrid and Native Apps in Hybrid and Native Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_setup.htm)**
    To use SmartStore in hybrid Android apps, you perform a few extra steps.
-   **[Adding SmartStore to Existing Android Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_android_add_smartstore.htm)**
    Hybrid projects created with Mobile SDK 4.0 or later automatically include SmartStore. If you used Mobile SDK 4.0+ to create an Android native project without SmartStore, you can easily add it later.
-   **[Creating and Accessing User-based Stores](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_access_store.htm)**
    When an app initializes SmartStore, it creates an instance of a store. It then uses the store to register and populate soups and manipulate soup data. For a user-based store, SmartStore manages the store’s life cycle—you don’t need to think about cleaning up after the user’s session ends. For global stores, though, your app is responsible for deleting the store’s data when the app terminates.
-   **[Using Global](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_global_smartstore.htm)**
    Although you usually tie a SmartStore instance to a specific customer’s credentials, you can also access a global instance for special requirements.
-   **[Registering Soups with Configuration Files](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_config_files.htm)**
    Beginning with Mobile SDK 6.0SmartStore lets you define soup structures through configuration files rather than code. Since all platforms and app types use the same configuration files, you can describe all your soups in a single file. You can then compile that file into any project.
-   **[Using Arrays in Index Paths](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_arrays.htm)**
    Index paths can contain arrays, but certain rules apply.
-   **[Populating a Soup](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_populate_soup.htm)**
    To add Salesforce records to a soup for offline access, use the REST API in conjunction with SmartStore APIs.
-   **[Retrieving Data from a Soup](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_query.htm)**
    SmartStore provides a set of helper methods that build query strings for you.
-   **[Queries Queries](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_smart_sql.htm)**
    To exert full control over your queries—or to reuse existing SQL queries—you can define custom SmartStore queries.
-   **[Using Full-Text Search Queries](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_full_text_search.htm)**
    To perform efficient and flexible searches in SmartStore, you use full-text queries. Full-text queries yield significant performance advantages over “like” queries when you’re dealing with large data sets.
-   **[Working with Query Results](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_cursor.htm)**
    Mobile SDK provides mechanisms on each platform that let you access query results efficiently, flexibly, and dynamically.
-   **[Inserting, Updating, and Upserting Data](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_functions.htm)**
    SmartStore defines standard fields that help you track entries and synchronize soups with external servers.
-   **[Using External Storage for Large Soup Elements](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_external_storage.htm)**

-   **[Removing Soup Elements](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_remove_entries.htm)**
    Traditionally, SmartStore methods let you remove soup elements by specifying an array of element IDs. To do so, you usually run a preliminary query to retrieve the candidate IDs, then call the method that performs the deletion. In Mobile SDK 4.2, SmartStore ups the game by adding a query option to its element deletion methods. With this option, you provide only a query, and SmartStore deletes all elements that satisfy that query. This approach delivers a performance boost because both the query and the deletion operation occur in a single call.
-   **[Managing Soups](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_managing_soups.htm)**
    SmartStore provides utility functionality that lets you retrieve soup metadata and perform other soup-level operations. This functionality is available for hybrid, React Native, Android native, and iOS native apps.
-   **[Managing Stores](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_managing_stores.htm)**
    If you create global stores, you’re required to perform cleanup when the app exits. Also, if you create multiple user stores, you can perform cleanup if you’re no longer using particular stores. SmartStore provides methods deleting named and global stores. For hybrid apps, SmartStore also provides functions for getting a list of named stores.
-   **[Testing with the Inspector Inspector](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_inspector.htm)**
    Verifying SmartStore operations during testing can become a tedious and time-consuming effort. SmartStore Inspector comes to the rescue.
-   **[Using the Mock](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_mockstore.htm)**
    To facilitate developing and testing code that makes use of the SmartStore while running outside the container, you can use an emulated SmartStore.
-   **[Preparing Soups for](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_mobilesync_compatibility.htm)**
    Soups that exchange information with the Salesforce cloud typically use Mobile Sync for synchronization. To support Mobile Sync, most app types require you to create and manage special soup fields for “sync up” operations.
-   **[Using SmartStore in Swift Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_smartstore_swift_template.htm)**
    You can easily install the basic plumbing for SmartStore in a forceios native Swift project.

## Related Topics

- About SmartStore (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_about.htm)
- Enabling in Hybrid and Native Apps in Hybrid and Native Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_setup.htm)
- Adding SmartStore to Existing Android Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_android_add_smartstore.htm)
- Creating and Accessing User-based Stores (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_access_store.htm)
- Using Global (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_global_smartstore.htm)
- Registering Soups with Configuration Files (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_config_files.htm)
- Using Arrays in Index Paths (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_arrays.htm)
- Populating a Soup (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_populate_soup.htm)
- Retrieving Data from a Soup (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_query.htm)
- Queries Queries (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_smart_sql.htm)
