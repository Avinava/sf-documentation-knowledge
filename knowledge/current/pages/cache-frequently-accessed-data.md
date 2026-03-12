---
title: "Cache Frequently Accessed Data"
domain: pages
topic: cache-frequently-accessed-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.865Z
estimatedTokens: 236
keywords: [Cache, Frequently, Accessed, Data, any, icon, graphics, custom, settings]
---

# Cache Frequently Accessed Data

> Cache any data that is frequently accessed, such as icon graphics, and cache global data
    in custom settings.

# Cache Frequently Accessed Data

Cache any data that is frequently accessed, such as icon graphics, and cache global data in custom settings.

Visualforce pages sometimes use calculation results globally. The pages use the same data across users and requests. To improve the performance of pages that use global data, cache the calculation results in a custom setting and refresh the results periodically instead of upon every request. Custom settings are part of an application’s cache and don’t require a database query for retrieval. Balance this approach against the time it takes to update custom cached data.

#### See Also

-   [*Apex Developer Guide*: Use a Visualforce Global Variable for the Platform Cache](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_platform_cache_global_variable.htm "Apex Developer Guide: Use a Visualforce Global Variable for the Platform
    Cache - HTML (New Window)")
