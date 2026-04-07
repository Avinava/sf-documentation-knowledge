---
title: "Full-Text Search Index Specs"
domain: mobile-sdk
topic: full-text-search-index-specs
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:26.880Z
estimatedTokens: 149
keywords: [Full-Text, Search, Index, Specs, register, soup, full-text-indexed, paths, SmartStore, full_text, spec, designating]
---

> To use full-text search, you register your soup with one or more full-text-indexed
  paths. SmartStore provides a
   full_text index spec for designating index fields.

# Full-Text Search Index Specs

To use full-text search, you register your soup with one or more full-text-indexed paths. SmartStore provides a full\_text index spec for designating index fields.

When you define a path with a full-text index, you can also use that path for non-full-text queries. These other types of queries—”all”, “exact”, “:like”, “range”, and “smart” queries—interpret full-text indexed fields as string indexed fields.

The following examples show how to instantiate a full-text index spec.

## Example

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
[[SFSoupIndex alloc] 
    initWithDictionary:@{kSoupIndexPath: @"some_path", 
    kSoupIndexType: kSoupIndexTypeFullText}]
```

```
new IndexSpec("some_path", Type.full_text)
```

```
new navigator.smartstore.SoupIndexSpec("some_path", "full_text")
```
