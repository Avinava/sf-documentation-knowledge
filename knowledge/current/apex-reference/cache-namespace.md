---
title: "Cache Namespace"
domain: apex-reference
topic: cache-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.641Z
estimatedTokens: 674
namespace: Cache
keywords: [Cache, contains, managing, platform, cache.]
---

# Cache Namespace

> The Cache namespace contains methods for managing
    the platform cache.

**Namespace:** `Cache`

# Cache Namespace

The Cache namespace contains methods for managing the platform cache.

The following are the classes in the Cache namespace.

-   **[CacheBuilder Interface](atlas.en-us.apexref.meta/apexref/apex_interface_cache_CacheBuilder.htm#apex_interface_cache_CacheBuilder)**
    An interface for safely retrieving and removing values from a session or org cache. Use the interface to generate a value that you want to store in the cache. The interface checks for cache misses, which means you no longer need to check for null cache values yourself.
-   **[Org Class](atlas.en-us.apexref.meta/apexref/apex_class_cache_Org.htm#apex_class_cache_Org)**
    Use the Cache.Org class to add, retrieve, and manage values in the org cache. Unlike the session cache, the org cache is not tied to any session and is available to the organization across requests and to all users.
-   **[OrgPartition Class](atlas.en-us.apexref.meta/apexref/apex_class_cache_OrgPartition.htm#apex_class_cache_OrgPartition)**
    Contains methods to manage cache values in the org cache of a specific partition. Unlike the session cache, the org cache is not tied to any session. It’s available to the org across requests and to all users.
-   **[Partition Class](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_class_cache_Partition)**
    Base class of Cache.OrgPartition and Cache.SessionPartition. Use the subclasses to manage the cache partition for org caches and session caches.
-   **[Session Class](atlas.en-us.apexref.meta/apexref/apex_class_cache_Session.htm#apex_class_cache_Session)**
    Use the Cache.Session class to add, retrieve, and manage values in the session cache. The session cache is active as long as the user’s Salesforce session is valid (the user is logged in, and the session is not expired).
-   **[SessionPartition Class](atlas.en-us.apexref.meta/apexref/apex_class_cache_SessionPartition.htm#apex_class_cache_SessionPartition)**
    Contains methods to manage cache values in the session cache of a specific partition.
-   **[Cache Exceptions](atlas.en-us.apexref.meta/apexref/apex_cache_exceptions.htm)**
    The Cache namespace contains exception classes.
-   **[Visibility Enum](atlas.en-us.apexref.meta/apexref/apex_enum_cache_Visibility.htm)**
    Use the Cache.Visibility enumeration in the Cache.Session or Cache.Org methods to indicate whether a cached value is visible only in the value’s namespace or in all namespaces.

#### See Also

-   [*Apex Developer Guide*: Platform Cache](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_cache_namespace_overview.htm "Apex Developer Guide: Platform Cache - HTML (New Window)")

## Related Topics

- CacheBuilder Interface (atlas.en-us.apexref.meta/apexref/apex_interface_cache_CacheBuilder.htm)
- Org Class (atlas.en-us.apexref.meta/apexref/apex_class_cache_Org.htm)
- OrgPartition Class (atlas.en-us.apexref.meta/apexref/apex_class_cache_OrgPartition.htm)
- Partition Class (atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm)
- Session Class (atlas.en-us.apexref.meta/apexref/apex_class_cache_Session.htm)
- SessionPartition Class (atlas.en-us.apexref.meta/apexref/apex_class_cache_SessionPartition.htm)
- Cache Exceptions (atlas.en-us.apexref.meta/apexref/apex_cache_exceptions.htm)
- Visibility Enum (atlas.en-us.apexref.meta/apexref/apex_enum_cache_Visibility.htm)
