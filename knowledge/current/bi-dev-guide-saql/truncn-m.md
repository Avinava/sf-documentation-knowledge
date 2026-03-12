---
title: "trunc(n[,
  m])"
domain: bi-dev-guide-saql
topic: truncn-m
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.469Z
estimatedTokens: 119
keywords: [trunc, numeric, expression, truncated, decimal, places, negative, case, function, left, point, omitted, place, any, real]
---

# trunc(n[,
  m])

> Returns the value of the numeric expression n truncated to
   m decimal places. m can be negative, in which case the
  function returns n truncated to -m places to the left of the
  decimal point. If m is omitted, it returns n truncated to
  the integer place. n can be any real numeric value in the range of -1e308 <=
  n <= 1e308. m can be an integer value between -15 and 15 inclusive. This
  function can only be used in a foreach statement.

# trunc(n\[, m\])

Returns the value of the numeric expression n truncated to m decimal places. m can be negative, in which case the function returns n truncated to -m places to the left of the decimal point. If m is omitted, it returns n truncated to the integer place. n can be any real numeric value in the range of -1e308 <= n <= 1e308. m can be an integer value between -15 and 15 inclusive. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate trunc(Price, 2) as Price;
```
