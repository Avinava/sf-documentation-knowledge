---
title: "About SmartStore"
domain: mobile-sdk
topic: about-smartstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.809Z
estimatedTokens: 712
keywords: [SmartStore, primary, features, non-relational, desktop, databases—data, segmentation, indexing, querying—along, caching, offline, storage, What’s, New, Sample, Code]
---

> SmartStore provides
        the primary features of non-relational desktop databases—data segmentation, indexing,
        querying—along with caching for offline storage.

# About SmartStore

SmartStore provides the primary features of non-relational desktop databases—data segmentation, indexing, querying—along with caching for offline storage.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## What’s New in SmartStore

Smart SQL no longer requires index paths for all fields referenced in SELECT or WHERE clauses. This improvement doesn’t extend to soups that use external storage.

## About Data Caching

To provide offline synchronization and conflict resolution services, SmartStore uses StoreCache, a Mobile SDK caching mechanism. We recommend that you use StoreCache to manage operations on Salesforce data.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Pure HTML5 apps store offline information in a browser cache. Browser caching isn’t part of Mobile SDK, and we don’t document it here. SmartStore uses storage functionality on the device. This strategy requires a native or hybrid development path.

## About the Sample Code

Objective-C code snippets in this chapter use Account and Opportunity objects, which are predefined in every Salesforce organization. Accounts and opportunities are linked through a master-detail relationship. An account can be the master for more than one opportunity.

-   **[SmartStore Soups](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_smartstore_soups.htm)**
    SmartStore soups let you partition your offline content.
-   **[Stores Stores](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_store_types.htm)**
    SmartStore puts encrypted soup data in an underlying system database known as the store. The store is where all soup data is stored, encrypted, related, and indexed. If the device loses connectivity, the user can continue to work on data in the store until the Salesforce cloud is again accessible.
-   **[SmartStore Data Types](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_data_types.htm)**
    Like any database, SmartStore defines a set of data types that you use to create soups. SmartStore data types mirror the underlying SQLite database.

#### See Also

-   [Using StoreCache For Offline Caching](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_using_storecache.htm)

-   [Conflict Detection](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_conflict_detection.htm)

-   [Queries Queries](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_smart_sql.htm "To exert full control over your queries—or to reuse existing SQL queries—you can define custom SmartStore queries.")

## Related Topics

- SmartStore Soups (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_smartstore_soups.htm)
- Stores Stores (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_store_types.htm)
- SmartStore Data Types (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_data_types.htm)
- Using StoreCache For Offline Caching (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_using_storecache.htm)
- Conflict Detection (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_conflict_detection.htm)
- Queries Queries (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_smart_sql.htm)
