---
title: "log(m,n)"
domain: bi-dev-guide-sql
topic: logmn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.192Z
estimatedTokens: 85
keywords: [log, natural, logarithm, base, number, any, positive, non-zero, numeric, range, 1.797e308]
---

# log(m,n)

> Returns the natural logarithm (base m) of a number n. The values m and n can be any
  positive, non-zero numeric value in the range 0 < m, n <= 1.797e308 and m ≠ 1.

# log(m,n)

Returns the natural logarithm (base m) of a number n. The values m and n can be any positive, non-zero numeric value in the range 0 < m, n <= 1.797e308 and m ≠ 1.

log(mn) takes the following syntax.

```

```

## Example

This example returns the base 2 logarithm for the number 8.

```

```

| natlLogExample |
| --- |
| 3.0 |

## Code Examples

```
SELECT log(baseNumber, numericValue) as AliasName
FROM dataset;
```

```
SELECT log(2.0,8.0) as natlLogExample FROM Superstore
LIMIT 1;
```
