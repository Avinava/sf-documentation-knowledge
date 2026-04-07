---
title: "sqrt(n)"
domain: bi-dev-guide-sql
topic: sqrtn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:01.926Z
estimatedTokens: 71
keywords: [sqrt, square, root, number, any, non-negative, numeric, range, 1.797e308]
---

> Returns the square root of a number n. The value n
  can be any non-negative numeric value in the range of 0 <= n <=
  1.797e308.

# sqrt(n)

Returns the square root of a number n. The value n can be any non-negative numeric value in the range of 0 <= n <= 1.797e308.

sqrt(n) takes the following syntax.

```

```

## Example

This example returns the square root of 64.

```

```

| SqrtExample |
| --- |
| 8.0 |

## Code Examples

```
SELECT sqrt(n) as AliasName
FROM dataset;
```

```
SELECT sqrt(64.0) as SqrtExample FROM Superstore
LIMIT 1;
```
