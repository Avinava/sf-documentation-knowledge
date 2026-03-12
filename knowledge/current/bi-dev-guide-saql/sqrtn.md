---
title: "sqrt(n)"
domain: bi-dev-guide-saql
topic: sqrtn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.465Z
estimatedTokens: 53
keywords: [sqrt, square, root, number, any, non-negative, numeric, range, 1e308, function, foreach, statement]
---

# sqrt(n)

> Returns the square root of a number n. The value n
  can be any non-negative numeric value in the range of 0 <= n <= 1e308.
  This function can only be used in a foreach
  statement.

# sqrt(n)

Returns the square root of a number n. The value n can be any non-negative numeric value in the range of 0 <= n <= 1e308. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate sqrt(value) as value;
q = filter q by sqrt(value) < 10;
```
