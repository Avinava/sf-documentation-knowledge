---
title: "round(n[,m])"
domain: bi-dev-guide-sql
topic: roundnm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.207Z
estimatedTokens: 155
keywords: [round, rounded, decimal, places, negative, case, function, left, point, omitted, nearest, tie-breaking, follows, half, way]
---

# round(n[,m])

> Returns the value of n rounded to m decimal
  places. m can be negative, in which case the function returns
   n rounded to -m places to the left of the decimal point. If
   m is omitted, it returns n rounded to the nearest integer.
  For tie-breaking, it follows round half way from zero convention. n can be any
  real numeric value in the range of -1.797e308 <= n <= 1.797e308.
   m can be an integer value between -15 and 15, inclusive.

# round(n\[,m\])

Returns the value of n rounded to m decimal places. m can be negative, in which case the function returns n rounded to -m places to the left of the decimal point. If m is omitted, it returns n rounded to the nearest integer. For tie-breaking, it follows round half way from zero convention. n can be any real numeric value in the range of -1.797e308 <= n <= 1.797e308. m can be an integer value between -15 and 15, inclusive.

round(n\[,m\]) takes the following syntax.

```

```

## Example

This example returns 47.385 rounded to the first decimal place.

```

```

| roundExample |
| --- |
| 47.4 |

## Code Examples

```
SELECT round(n[,m]) as AliasName
FROM dataset;
```

```
SELECT round(47.385, 1) as roundExample FROM Superstore
LIMIT 1;
```
