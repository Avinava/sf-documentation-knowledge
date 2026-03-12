---
title: "cos(n)"
domain: bi-dev-guide-saql
topic: cosn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.439Z
estimatedTokens: 64
keywords: [cos, cosine, radians, any, real, numeric, range, -1e308, 1e308, passed, argument, function, foreach, statement]
---

# cos(n)

> Returns the cosine value of radians value n. n can
  be any real numeric value in the range of -1e308 <= n <= 1e308. If
   null is passed as an argument, cos() returns null. This function can only be used
  in a foreach statement.

# cos(n)

Returns the cosine value of radians value n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, cos() returns null. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate cos(radians) as cosine;
```
