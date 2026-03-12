---
title: "tan(n)"
domain: bi-dev-guide-saql
topic: tann
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.467Z
estimatedTokens: 64
keywords: [tan, tangent, radians, any, real, numeric, range, -1e308, 1e308, passed, argument, function, foreach, statement]
---

# tan(n)

> Returns the tangent value of radians value n. n
  can be any real numeric value in the range of -1e308 <= n <= 1e308. If
   null is passed as an argument, tan() returns null. This function can only be used
  in a foreach statement.

# tan(n)

Returns the tangent value of radians value n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, tan() returns null. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate tan(radians) as tangent;
```
