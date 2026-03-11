---
title: "Platform Cache"
domain: apex-guide
topic: platform-cache
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.357Z
keywords: [Platform, Cache]
---

# Platform Cache

# Platform Cache

The Lightning Platform Cache layer provides faster performance and better reliability when caching Salesforce session and org data. Specify what to cache and for how long without using custom objects and settings or overloading a Visualforce view state. Platform Cache improves performance by distributing cache space so that some applications or operations don’t steal capacity from others.

Because Apex runs in a multi-tenant environment with cached data living alongside internally cached data, caching involves minimal disruption to core Salesforce processes.

-   **[Platform Cache Features](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_features.htm)**  
    The Platform Cache API lets you store and retrieve data that’s tied to Salesforce sessions or shared across your org. Put, retrieve, or remove cache values by using the Session, Org, SessionPartition, and OrgPartition classes in the Cache namespace. Use the Platform Cache Partition tool in Setup to create or remove org partitions and allocate their cache capacities to balance performance across apps.
-   **[Platform Cache Considerations](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_limitations.htm)**  
    Review these considerations when working with Platform Cache.
-   **[Platform Cache Limits](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_limits.htm)**  
    These limits apply when using Platform Cache.
-   **[Platform Cache Partitions](atlas.en-us.apexcode.meta/apexcode/apex_cache_partition_setup.htm)**  
    Use Platform Cache partitions to improve the performance of your applications. Partitions allow you to distribute cache space in the way that works best for your applications. Caching data to designated partitions ensures that it’s not overwritten by other applications or less-critical data.
-   **[Platform Cache Internals](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_internals.htm)**  
    Platform Cache uses local cache and a least recently used (LRU) algorithm to improve performance.
-   **[Store and Retrieve Values from the Session Cache](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_session_examples.htm)**  
    Use the Cache.Session and Cache.SessionPartition classes to manage values in the session cache. To manage values in any partition, use the methods in the Cache.Session class. If you’re managing cache values in one partition, use the Cache.SessionPartition methods instead.
-   **[Store and Retrieve Values from the Org Cache](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_org_examples.htm)**  
    Use the Cache.Org and Cache.OrgPartition classes to manage values in the org cache. To manage values in any partition, use the methods in the Cache.Org class. If you’re managing cache values in one partition, use the Cache.OrgPartition methods instead.
-   **[Use a Visualforce Global Variable for the Platform Cache](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_global_variable.htm)**  
    You can access cached values stored in the session or org cache from a Visualforce page with global variables.
-   **[Safely Cache Values with the CacheBuilder Interface](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_builder.htm)**  
    A Platform Cache best practice is to ensure that your Apex code handles cache misses by testing for cache requests that return null. You can write this code yourself. Or, you can use the Cache.CacheBuilder interface, which makes it easy to safely store and retrieve values to a session or org cache.
-   **[Platform Cache Best Practices](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_best_practices.htm)**  
    Platform Cache can greatly improve performance in your applications. However, it’s important to follow these guidelines to get the best cache performance. In general, it’s more efficient to cache a few large items than to cache many small items separately. Also be mindful of cache limits to prevent unexpected cache evictions.