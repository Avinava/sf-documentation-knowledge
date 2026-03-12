---
title: "ceil(n), ceiling(n)"
domain: bi-dev-guide-sql
topic: ceiln-ceilingn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.166Z
estimatedTokens: 79
keywords: [ceil, ceiling, nearest, equal, greater, any, real, numeric, range, -1.797e308, 1.797e308]
---

# ceil(n), ceiling(n)

> Returns the nearest integer of equal or greater value to n.
   n can be any real numeric value in the range of -1.797e308 <=
   n <= 1.797e308.

# ceil(n), ceiling(n)

Returns the nearest integer of equal or greater value to n. n can be any real numeric value in the range of -1.797e308 <= n <= 1.797e308.

ceil(n) takes the following syntax.

```

```

## Example

This example takes the ceiling of the Profit field.

```

```

| ceilProfit |
| --- |
| 42 |

## Code Examples

```
SELECT ceil(column_name) as aliasName
FROM dataset;
```

```
SELECT ceil(Profit) as ceilProfit
FROM Superstore
LIMIT 1;
```
