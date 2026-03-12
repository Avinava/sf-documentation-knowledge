---
title: "floor(n)"
domain: bi-dev-guide-saql
topic: floorn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.444Z
estimatedTokens: 55
keywords: [floor, nearest, equal, lesser, any, real, numeric, range, -1e308, 1e308, function, foreach, statement]
---

# floor(n)

> Returns the nearest integer of equal or lesser value to n.
   n can be any real numeric value in the range of -1e308 <= n <= 1e308.
  This function can only be used in a foreach
  statement.

# floor(n)

Returns the nearest integer of equal or lesser value to n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate floor(miles) as distance;
```
