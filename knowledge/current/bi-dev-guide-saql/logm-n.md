---
title: "log(m, n)"
domain: bi-dev-guide-saql
topic: logm-n
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.448Z
estimatedTokens: 81
keywords: [log, natural, logarithm, base, number, any, positive, non-zero, numeric, range, 1e308, smallest, produce, 0.3e-323, function]
---

# log(m, n)

> Returns the natural logarithm (base m) of a number n. The values
   m and n can be any positive, non-zero numeric value in the
  range 0 < m, n <= 1e308 and m ≠ 1. The smallest value for m or
   n that will not produce 0 is log(10, 0.3e-323). This function can only be used
  in a foreach statement.

# log(m, n)

Returns the natural logarithm (base m) of a number n. The values m and n can be any positive, non-zero numeric value in the range 0 < m, n <= 1e308 and m ≠ 1. The smallest value for m or n that will not produce 0 is log(10, 0.3e-323). This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate log(10, Population) as Population;
q = filter q by log(10, Population) < 15;
```
