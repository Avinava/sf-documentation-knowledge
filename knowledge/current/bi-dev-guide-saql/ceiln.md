---
title: "ceil(n)"
domain: bi-dev-guide-saql
topic: ceiln
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.437Z
estimatedTokens: 55
keywords: [ceil, nearest, equal, greater, any, real, numeric, range, -1e308, 1e308, function, foreach, statement]
---

# ceil(n)

> Returns the nearest integer of equal or greater value to n.
   n can be any real numeric value in the range of -1e308 <= n <= 1e308.
  This function can only be used in a foreach
  statement.

# ceil(n)

Returns the nearest integer of equal or greater value to n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate ceil(miles) as distance;
```
