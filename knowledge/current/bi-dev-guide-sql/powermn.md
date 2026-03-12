---
title: "power(m,n)"
domain: bi-dev-guide-sql
topic: powermn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.200Z
estimatedTokens: 123
keywords: [power, raised, nth, any, numeric, range, -1.797e308, 1.797e308]
---

# power(m,n)

> Returns m raised to the nth power.
   m, n can be any numeric value in the range of -1.797e308
  <= m, n <= 1.797e308. Returns null if
   m = 0 and n < 0.

# power(m,n)

Returns m raised to the nth power. m, n can be any numeric value in the range of -1.797e308 <= m, n <= 1.797e308. Returns null if m = 0 and n < 0.

-   If m = 0, n must be a non-negative value.
-   If m < 0, n must be an integer value.
-   The result of power(m, n) must be within the range expressed by a float64 number.

power(m,n) takes the following syntax.

```

```

## Example

This example returns 2 raised to the 5th power.

```

```

| powerExampe |
| --- |
| 32.0 |

## Code Examples

```
SELECT power(m,n) as AliasName
FROM dataset;
```

```
SELECT power(2, 5) as powerExample FROM Superstore
LIMIT 1;
```
