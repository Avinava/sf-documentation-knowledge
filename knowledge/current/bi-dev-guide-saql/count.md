---
title: "count()"
domain: bi-dev-guide-saql
topic: count
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.317Z
estimatedTokens: 74
keywords: [count, number, rows, match, query, criteria]
---

# count()

> Returns the number of rows that match the query criteria.

# count()

Returns the number of rows that match the query criteria.

For example, to calculate the number of carriers:

```

```

count() operates on the stream that is input to the group or cogroup statement. It doesn’t operate on the newly grouped stream or on an ungrouped stream.

```

```

## Code Examples

```
q = foreach q generate 'carrier' as 'carrier', count() as 'count';
```

```
q = load "Carriers";
q = group q by (Year);
q = foreach a1 generate count(q) as countYear, count() as count, Year as year;
```
