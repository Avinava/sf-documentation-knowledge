---
title: "CacheBuilder Example Implementation"
domain: apex-reference
topic: cachebuilder-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.720Z
keywords: [CacheBuilder, Example, Implementation]
---

# CacheBuilder Example Implementation

## CacheBuilder Example Implementation

This example creates a class called UserInfoCache that implements the CacheBuilder interface. The class caches the results of a SOQL query run against the User object.

```

```

This example gets a cached User record based on a user ID. If the value exists in the org cache, it is returned. If the value doesn’t exist, the doLoad(String var) method is re-executed, and the new value is cached and returned.

```

```