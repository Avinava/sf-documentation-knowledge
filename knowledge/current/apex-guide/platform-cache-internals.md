---
title: "Platform Cache Internals"
domain: apex-guide
topic: platform-cache-internals
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:33.755Z
estimatedTokens: 560
keywords: [Platform, Cache, Internals, uses, local, cache, least, recently, used, LRU, algorithm, improve, performance., Local, Note, Atomic, Transactions, Eviction, Algorithm]
---

# Platform Cache Internals

> Platform Cache uses local cache and a least recently used (LRU) algorithm to improve
    performance.

# Platform Cache Internals

Platform Cache uses local cache and a least recently used (LRU) algorithm to improve performance.

## Local Cache

Platform Cache uses local cache to improve performance, ensure efficient use of the network, and support atomic transactions. Local cache is the application server’s in-memory container that the client interacts with during a request. Cache operations don’t interact with the caching layer directly, but instead interact with local cache.

For session cache, all cached items are loaded into local cache upon first request. All subsequent interactions use the local cache. Similarly, an org cache get operation retrieves a value from the caching layer and stores it in the local cache. Subsequent requests for this value are retrieved from the local cache. All mutable operations, such as put and remove, are also performed against the local cache. Upon successful completion of the request, mutable operations are committed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Local cache doesn’t support concurrent operations. Mutable operations, such as put and remove, are performed against the local cache and are only committed when the entire Apex request is successful. Therefore, other simultaneous requests don’t see the results of the mutable operations.

## Atomic Transactions

Each cache operation depends on the Apex request that it runs in. If the entire request fails, all cache operations in that request are rolled back. Behind the scenes, the use of local cache supports these atomic transactions.

## Eviction Algorithm

When possible, Platform Cache uses an LRU algorithm to evict keys from the cache. When cache limits are reached, keys are evicted until the cache is reduced to 100-percent capacity. If session cache is used, the system removes cache evenly from all existing session cache instances. Local cache also uses an LRU algorithm. When the maximum local cache size for a partition is reached, the least recently used items are evicted from the local cache.

#### See Also

-   [Platform Cache Limits](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_limits.htm "These limits apply when using Platform Cache.")

## Related Topics

- Platform Cache Limits (atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_limits.htm)
