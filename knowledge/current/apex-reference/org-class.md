---
title: "Org Class"
domain: apex-reference
topic: org-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.713Z
keywords: [Org, Class, Deletes, cached, value, corresponding, specified, key, org, cache., method, class, implements, CacheBuilder, interface., remove, cacheBuilder, Signature, Parameters, Return]
---

# Org Class

> Deletes the cached value corresponding to the specified key from the org
    cache. Use this method if your cached value is a class that implements the
    CacheBuilder interface.

### remove(cacheBuilder, key)

Deletes the cached value corresponding to the specified key from the org cache. Use this method if your cached value is a class that implements the CacheBuilder interface.

#### Signature

public static Boolean remove(System.Type cacheBuilder, String key)

#### Parameters

cacheBuilder

Type: [System.Type](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_methods_system_type "Contains methods for getting the Apex type that corresponds to an Apex class and for instantiating new types.")

The Apex class that implements the CacheBuilder interface.

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A case-sensitive string value that, combined with the class name corresponding to the cacheBuilder parameter, uniquely identifies a cached value.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

true if the cache value was successfully removed. Otherwise, false.