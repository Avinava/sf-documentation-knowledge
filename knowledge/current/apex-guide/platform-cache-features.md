---
title: "Platform Cache Features"
domain: apex-guide
topic: platform-cache-features
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:33.766Z
estimatedTokens: 1152
namespace: Session
keywords: [Platform, Cache, Features, API, lets, store, retrieve, data, that’s, tied, Salesforce, sessions, shared, across, org]
---

# Platform Cache Features

> The Platform Cache API lets you store and retrieve data that’s tied
      to Salesforce sessions or shared across your org. Put, retrieve, or remove cache values by
      using the Session, Org, SessionPartition, and OrgPartition classes in the Cache namespace. Use the
      Platform Cache Partition tool in Setup to create or remove org partitions and allocate their
      cache capacities to balance performance across apps.

**Namespace:** `Session`

# Platform Cache Features

The Platform Cache API lets you store and retrieve data that’s tied to Salesforce sessions or shared across your org. Put, retrieve, or remove cache values by using the Session, Org, SessionPartition, and OrgPartition classes in the Cache namespace. Use the Platform Cache Partition tool in Setup to create or remove org partitions and allocate their cache capacities to balance performance across apps.

There are two types of cache:

-   **Session cache**—Stores data for individual user sessions. For example, in an app that finds customers within specified territories, the calculations that run while users browse different locations on a map are reused.

    Session cache lives alongside a user session. The maximum life of a session is eight hours. Session cache expires when its specified time-to-live (ttlsecs value) is reached or when the session expires after eight hours, whichever comes first.

-   **Org cache**—Stores data that any user in an org reuses. For example, the contents of navigation bars that dynamically display menu items based on user profile are reused.

    Unlike session cache, org cache is accessible across sessions, requests, and org users and profiles. Org cache expires when its specified time-to-live (ttlsecs value) is reached.


Additionally, Salesforce provides 3 MB of free Platform Cache capacity for security-reviewed managed packages through a capacity type called Provider Free capacity. You can allocate capacities to session cache and org cache from the Provider Free capacity.

The best data to cache is:

-   Reused throughout a session
-   Static (not rapidly changing)
-   Otherwise expensive to retrieve

For both session and org caches, you can construct calls so that cached data in one namespace isn’t overwritten by similar data in another. Optionally use the Cache.Visibility enumeration to specify whether Apex code can access cached data in a namespace outside of the invoking namespace.

Each cache operation depends on the Apex transaction within which it runs. If the entire transaction fails, all cache operations in that transaction are rolled back.

## Try Platform Cache

To test performance improvements by using Platform Cache in your own org, you can request trial cache for your production org. Enterprise, Unlimited, and Performance editions come with some cache, but adding more cache often provides greater performance. When your trial request is approved, you can allocate capacity to partitions and experiment with using the cache for different scenarios. Testing the cache on a trial basis lets you make an informed decision about whether to purchase cache.

For more information about trial cache, see “Request a Platform Cache Trial” in Salesforce Help.

You can request additional cache space to improve the performance of your application. For more information about requesting additional cache, see "Request Additional Platform Cache" in Salesforce Help.

For more information about Provider Free capacity cache, see “Set Up a Platform Cache partition using Provider Free Capacity” in Salesforce Help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Platform Cache isn’t supported in Professional Edition.

#### See Also

-   [*Apex Reference Guide*: Session Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_cache_Session.htm "Apex Reference Guide: Session Class - HTML (New Window)")

-   [*Apex Reference Guide*: Org Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_cache_Org.htm "Apex Reference Guide: Org Class - HTML (New Window)")

-   [*Apex Reference Guide*: Partition Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_cache_Partition.htm "Apex Reference Guide: Partition Class - HTML (New Window)")

-   [*Apex Reference Guide*: OrgPartition Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_cache_OrgPartition.htm "Apex Reference Guide: OrgPartition Class - HTML (New Window)")

-   [*Apex Reference Guide*: SessionPartition Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_cache_SessionPartition.htm "Apex Reference Guide: SessionPartition Class - HTML (New Window)")

-   [*Apex Reference Guide*: CacheBuilder Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_cache_CacheBuilder.htm "Apex Reference Guide: CacheBuilder Interface - HTML (New Window)")
