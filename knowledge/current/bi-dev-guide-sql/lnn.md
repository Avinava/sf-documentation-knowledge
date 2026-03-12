---
title: "ln(n)"
domain: bi-dev-guide-sql
topic: lnn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.190Z
estimatedTokens: 80
keywords: [base, Euler's, number, logarithm, any, positive, non-zero, numeric, range, 1.797e308]
---

# ln(n)

> Returns the base e (Euler's number) logarithm of a number n. The
  value n can be any positive, non-zero numeric value in the range 0 <
   n <= 1.797e308.

# ln(n)

Returns the base e (Euler's number) logarithm of a number n. The value n can be any positive, non-zero numeric value in the range 0 < n <= 1.797e308.

ln(n) takes the following syntax.

```

```

## Example

This example returns the base e logarithm for the number 8.

```

```

| LnExample |
| --- |
| 2.079 |

## Code Examples

```
SELECT ln(numericValue) as AliasName
FROM dataset;
```

```
SELECT ln(8.0) as LnExample FROM Superstore
LIMIT 1;
```
