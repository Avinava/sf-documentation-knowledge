---
title: "sign(n)"
domain: bi-dev-guide-saql
topic: signn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.461Z
estimatedTokens: 78
keywords: [sign, numeric, positive, negative, any, real, range, -1e308, 1e308, passed, argument, function, foreach, statement]
---

# sign(n)

> Returns 1 if the numeric value, n is positive. It returns -1 if the
   n is negative, and 0 if n is 0. n can be
  any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, sign() returns null. This function can only be
  used in a foreach statement.

# sign(n)

Returns 1 if the numeric value, n is positive. It returns -1 if the n is negative, and 0 if n is 0. n can be any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, sign() returns null. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate sign(value) as value;
```
