---
title: "Full-Text Query Specs"
domain: mobile-sdk
topic: full-text-query-specs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.884Z
estimatedTokens: 84
keywords: [Full-Text, Query, Specs, perform, SmartStore, match, spec, platform’s, matchKey, argument, provide, search]
---

> To perform a full-text query, you create a SmartStore "match" query spec using your
  platform’s match query method. For the matchKey argument, you
  provide a full-text search query.

# Full-Text Query Specs

To perform a full-text query, you create a SmartStore "match" query spec using your platform’s match query method. For the matchKey argument, you provide a full-text search query.

Use the following methods to create full-text query specs.

**iOS:**

```

```

**Android:**

```

```

**JavaScript:**

```

```

## Code Examples

```
+ (SFQuerySpec*) newMatchQuerySpec:(NSString*)soupName
                          withPath:(NSString*)path 
                      withMatchKey:(NSString*)matchKey
                     withOrderPath:(NSString*)orderPath
                         withOrder:(SFSoupQuerySortOrder)order
                      withPageSize:(NSUInteger)pageSize;

+ (SFQuerySpec*) newMatchQuerySpec:(NSString*)soupName 
                   withSelectPaths:(NSArray*)selectPaths 
                          withPath:(NSString*)path 
                      withMatchKey:(NSString*)matchKey 
                     withOrderPath:(NSString*)orderPath 
                         withOrder:(SFSoupQuerySortOrder)order 
                      withPageSize:(NSUInteger)pageSize;
```

```apex
public static QuerySpec buildMatchQuerySpec(
    String soupName, String path, String exactMatchKey, 
    String orderPath, Order order, int pageSize)

public static QuerySpec buildMatchQuerySpec(
    String soupName, String[] selectPaths, String path, 
    String matchKey, String orderPath, Order order, 
    int pageSize)
```

```
smartstore.buildMatchQuerySpec(
    path, matchKey, order, pageSize, orderPath, selectPaths)
```
