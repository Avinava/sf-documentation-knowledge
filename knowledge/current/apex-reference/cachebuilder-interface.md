---
title: "CacheBuilder Interface"
domain: apex-reference
topic: cachebuilder-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.028Z
estimatedTokens: 651
namespace: Cache
keywords: [CacheBuilder, safely, retrieving, removing, session, org, cache, generate, want, store, checks, misses, means, longer, check]
---

# CacheBuilder Interface

> An interface for safely retrieving and removing values from a
            session or org cache. Use the interface to generate a value that you want to store in
            the cache. The interface checks for cache misses, which means you no longer need to
            check for null cache values yourself.

**Namespace:** `Cache`

# CacheBuilder Interface

An interface for safely retrieving and removing values from a session or org cache. Use the interface to generate a value that you want to store in the cache. The interface checks for cache misses, which means you no longer need to check for null cache values yourself.

## Namespace

[Cache](atlas.en-us.apexref.meta/apexref/apex_namespace_cache.htm "The Cache namespace contains methods for managing the platform cache.")

-   **[CacheBuilder Methods](atlas.en-us.apexref.meta/apexref/apex_interface_cache_CacheBuilder.htm#apex_cache_CacheBuilder_methods)**

-   **[CacheBuilder Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_cache_CacheBuilder.htm#apex_interface_cache_CacheBuilder_example)**


#### See Also

-   [*Apex Developer Guide*: Safely Cache Values with the CacheBuilder Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_platform_cache_builder.htm "Apex Developer Guide: Safely Cache Values with the CacheBuilder Interface - HTML (New Window)")


## CacheBuilder Methods

The following are methods for CacheBuilder.

-   **[doLoad(var)](atlas.en-us.apexref.meta/apexref/apex_interface_cache_CacheBuilder.htm#apex_cache_CacheBuilder_doLoad)**
    Contains the logic that builds a cached value. You don’t call this method directly. Instead, it’s called indirectly when you reference the class that implements the CacheBuilder interface.

### doLoad(var)

Contains the logic that builds a cached value. You don’t call this method directly. Instead, it’s called indirectly when you reference the class that implements the CacheBuilder interface.

#### Signature

public Object doLoad(String var)

#### Parameters

var

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A case-sensitive string value used to build a cached value. This parameter is also used as part of the unique key that identifies the cached value.

#### Return Value

Type: Object

The value that was cached. Cast the return value to the appropriate type.

## CacheBuilder Example Implementation

This example creates a class called UserInfoCache that implements the CacheBuilder interface. The class caches the results of a SOQL query run against the User object.

```

```

This example gets a cached User record based on a user ID. If the value exists in the org cache, it is returned. If the value doesn’t exist, the doLoad(String var) method is re-executed, and the new value is cached and returned.

```

```

## Code Examples

```apex
class UserInfoCache implements Cache.CacheBuilder {
    public Object doLoad(String userid) {
        User u = (User)[SELECT Id, IsActive, username FROM User WHERE id =: userid];
        return u;
    }
}
```

```
User batman = (User) Cache.Org.get(UserInfoCache.class, ‘00541000000ek4c');
```

## Related Topics

- Cache (atlas.en-us.apexref.meta/apexref/apex_namespace_cache.htm)
- CacheBuilder Methods (atlas.en-us.apexref.meta/apexref/apex_interface_cache_CacheBuilder.htm)
- CacheBuilder Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_cache_CacheBuilder.htm)
- doLoad(var) (atlas.en-us.apexref.meta/apexref/apex_interface_cache_CacheBuilder.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
