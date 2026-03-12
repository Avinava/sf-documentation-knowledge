---
title: "round(n[,
  m])"
domain: bi-dev-guide-saql
topic: roundn-m
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.457Z
estimatedTokens: 203
keywords: [round, rounded, decimal, places, negative, case, function, left, point, omitted, nearest, tie-breaking, follows, half, way]
---

# round(n[,
  m])

> Returns the value of n rounded to m decimal
  places. m can be negative, in which case the function returns
   n rounded to -m places to the left of the decimal point. If
   m is omitted, it returns n rounded to the nearest integer.
  For tie-breaking, it follows round half way from zero convention. n can be any
  real numeric value in the range of -1e308 <= n <= 1e308. m can be an
  integer value between -15 and 15, inclusive. This function can only be used in a foreach statement.

# round(n\[, m\])

Returns the value of n rounded to m decimal places. m can be negative, in which case the function returns n rounded to -m places to the left of the decimal point. If m is omitted, it returns n rounded to the nearest integer. For tie-breaking, it follows round half way from zero convention. n can be any real numeric value in the range of -1e308 <= n <= 1e308. m can be an integer value between -15 and 15, inclusive. This function can only be used in a foreach statement.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

If the n value scale is lost on data upload, m can only work with the scale present in the dataset. It can't add scale back to the value.

## Example

```

```

## Example

```

```

```

```

```

```

```

```

## Code Examples

```
q = foreach q generate round(Price, 2) as Price;
```

```
round(-1.2345) = -1
```

```
round(2.355, 2) = 2.36
```

```
round(-3455.8, -1) = -3460
```

```
round(2.35, 3) = 2.35
```
