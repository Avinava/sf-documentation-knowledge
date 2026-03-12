---
title: "sign(n)"
domain: bi-dev-guide-sql
topic: signn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.210Z
estimatedTokens: 78
keywords: [sign, numeric, positive, negative, any, real, number, range, -1e308, 1e308]
---

# sign(n)

> Returns 1 if the numeric value, n is positive. It returns -1 if the n is negative, and 0 if n is 0. n
  can be any real number in the range of -1e308 <= n <= 1e308.

# sign(n)

Returns 1 if the numeric value, n is positive. It returns -1 if the n is negative, and 0 if n is 0. n can be any real number in the range of -1e308 <= n <= 1e308.

SIGN(n) takes the following syntax.

```

```

## Example

This example returns the sign of -12.

```

```

| signValue |
| --- |
| -1 |

## Code Examples

```
SELECT SIGN(n) as Alias
FROM dataset;
```

```
SELECT SIGN(-12) as signValue
FROM "Opportunity"
LIMIT 1;
```
