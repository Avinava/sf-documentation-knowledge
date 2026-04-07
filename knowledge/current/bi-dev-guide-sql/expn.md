---
title: "exp(n)"
domain: bi-dev-guide-sql
topic: expn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:01.860Z
estimatedTokens: 99
keywords: [exp, Euler's, number, raised, power, 2.71828183…, smallest, result, 3e-324, any, real, numeric, range, -1.797e308]
---

> Returns the value of Euler's number e raised to the power of n, where
  e = 2.71828183… The smallest value for n that does not result in 0 is 3e-324.
   n can be any real numeric value in the range of -1.797e308 <=
   n <= 700.

# exp(n)

Returns the value of Euler's number e raised to the power of n, where e = 2.71828183… The smallest value for n that does not result in 0 is 3e-324. n can be any real numeric value in the range of -1.797e308 <= n <= 700.

exp(n) takes the following syntax.

```

```

## Example

This example returns the value of e raised to the 5th power.

```

```

| expExample |
| --- |
| 148.413 |

## Code Examples

```
SELECT exp(n) as AliasName
FROM dataset;
```

```
SELECT exp(5) as expExample FROM Superstore
LIMIT 1;
```
