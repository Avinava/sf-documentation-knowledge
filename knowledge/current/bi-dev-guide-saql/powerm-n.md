---
title: "power(m,
  n)"
domain: bi-dev-guide-saql
topic: powerm-n
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.452Z
estimatedTokens: 102
keywords: [power, raised, nth, any, numeric, range, -1e308, 1e308, function, foreach, statement]
---

# power(m,
  n)

> Returns m raised to the nth power.
   m, n can be any numeric value in the range of -1e308 <=
   m, n <= 1e308. Returns null if m = 0 and n < 0. This function can
  only be used in a foreach statement.

# power(m, n)

Returns m raised to the nth power. m, n can be any numeric value in the range of -1e308 <= m, n <= 1e308. Returns null if m = 0 and n < 0. This function can only be used in a foreach statement.

-   If m = 0, n must be a non-negative value.
-   If m < 0, n must be an integer value.
-   The result of power(m, n) must be within the range expressed by a float64 number.

## Example

```

```

## Code Examples

```
q = foreach q generate power(length, 2) as area, length;
q = filter q by power(length, 2) > 10;
```
