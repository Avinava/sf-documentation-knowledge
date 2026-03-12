---
title: "WITH METADATA"
domain: soql-sosl
topic: with-metadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.959Z
estimatedTokens: 70
keywords: [METADATA, clause]
---

# WITH METADATA

> Specifies if metadata is returned in the response. Optional clause.

# WITH METADATA

Specifies if metadata is returned in the response. Optional clause.

No metadata is returned by default. To include metadata in the response, use the LABELS value, which returns the display label for the fields returned in search results. For example:

```

```

## Code Examples

```
FIND {Acme} RETURNING Account(Id, Name) WITH METADATA='LABELS'
```
