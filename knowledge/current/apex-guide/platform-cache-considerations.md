---
title: "Platform Cache Considerations"
domain: apex-guide
topic: platform-cache-considerations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.401Z
keywords: [Platform, Cache, Considerations]
---

# Platform Cache Considerations

# Platform Cache Considerations

Review these considerations when working with Platform Cache.

-   Cache isn’t persisted. There’s no guarantee against data loss.
-   Some or all cache is invalidated when you modify an Apex class in your org.
-   Data in the cache isn’t encrypted.
-   Org cache supports concurrent reads and writes across multiple simultaneous Apex transactions. For example, a transaction updates the key PetName with the value Fido. At the same time, another transaction updates the same key with the value Felix. Both writes succeed, but one of the two values is chosen arbitrarily as the winner, and later transactions read that one value. However, this arbitrary choice is per key rather than per transaction. For example, suppose one transaction writes PetType="Cat" and PetName="Felix". Then, at the same moment, another transaction writes PetType="Dog" and PetName="Fido". In this case, the PetType winning value could be from the first transaction, and the PetName winning value could be from the second transaction. Subsequent get() calls on those keys would return PetType="Cat" and PetName="Fido".
-   Cache misses can happen. We recommend constructing your code to consider a case where previously cached items aren’t found. Alternatively, use the [CacheBuilder Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_cache_CacheBuilder.htm), which checks for cache misses.
-   All platform cache statistical methods: getAvgGetSize(), getAvgGetTime(), getMaxGetSize(), getMaxGetTime(), and getMissRate()report data starting from the time the cache server was restarted, and do not include data prior to the restart.
-   Partitions must adhere to the limits within Salesforce.
-   The session cache can store values up to eight hours. The org cache can store values up to 48 hours.
-   For orgs that use Salesforce Flow:
    -   When a process contains a scheduled action, make sure that later actions in the process don't invoke Apex code that stores or retrieves values from the session cache. The session-cache restriction applies to Apex actions and to changes that the process makes to the database that cause Apex triggers to fire.
    -   When a flow contains a Pause element, make sure that later elements in the flow don't invoke Apex code that stores or retrieves values from the session cache. The session-cache restriction applies to Apex actions and to changes that the flow makes to the database that cause Apex triggers to fire.