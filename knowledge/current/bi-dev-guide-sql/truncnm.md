---
title: "trunc(n[,m])"
domain: bi-dev-guide-sql
topic: truncnm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.222Z
estimatedTokens: 146
keywords: [trunc, numeric, expression, truncated, decimal, places, negative, case, function, left, point, omitted, place, any, real]
---

# trunc(n[,m])

> Returns the value of the numeric expression n truncated to
   m decimal places. m can be negative, in which case the
  function returns n truncated to -m places to the left of the
  decimal point. If m is omitted, it returns n truncated to
  the integer place. n can be any real numeric value in the range of -1.797e308
  <= n <= 1.797e308. m can be an integer value between
  -15 and 15 inclusive.

# trunc(n\[,m\])

Returns the value of the numeric expression n truncated to m decimal places. m can be negative, in which case the function returns n truncated to -m places to the left of the decimal point. If m is omitted, it returns n truncated to the integer place. n can be any real numeric value in the range of -1.797e308 <= n <= 1.797e308. m can be an integer value between -15 and 15 inclusive.

trunc(n\[,m\]) takes the following syntax.

```

```

## Example

This example returns 47.385 truncated to the second decimal place.

```

```

| truncExample |
| --- |
| 47.38 |

## Code Examples

```
SELECT trunc(n[,m]) as AliasName
FROM dataset;
```

```
SELECT trunc(47.385, 2) as truncExample FROM Superstore
LIMIT 1;
```
