---
title: "exp(n)"
domain: bi-dev-guide-saql
topic: expn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.443Z
estimatedTokens: 76
keywords: [exp, Euler's, number, raised, power, 2.71828183…, smallest, doesn’t, result, 3e-324, any, real, numeric, range, -1e308]
---

# exp(n)

> Returns the value of Euler's number e raised to the power of
   n, where e = 2.71828183… The smallest value for
   n that doesn’t result in 0 is 3e-324. n can be any real
  numeric value in the range of -1e308 <= n <= 700. This function can only be used in a
   foreach statement.

# exp(n)

Returns the value of Euler's number e raised to the power of n, where e = 2.71828183… The smallest value for n that doesn’t result in 0 is 3e-324. n can be any real numeric value in the range of -1e308 <= n <= 700. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate exp(value) as value;
q = filter q by exp(value) < 5;
```
