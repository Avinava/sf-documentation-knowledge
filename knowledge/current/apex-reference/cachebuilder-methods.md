---
title: "CacheBuilder Methods"
domain: apex-reference
topic: cachebuilder-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.720Z
keywords: [CacheBuilder, Methods, Contains, logic, builds, cached, value., don’t, call, method, directly., Instead, it’s, called, indirectly, reference, class, implements, interface., doLoad]
---

# CacheBuilder Methods

> Contains the logic that builds a cached value. You don’t call this
      method directly. Instead, it’s called indirectly when you reference the class that implements
      the CacheBuilder interface.

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