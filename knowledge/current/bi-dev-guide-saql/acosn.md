---
title: "acos(n)"
domain: bi-dev-guide-saql
topic: acosn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.431Z
estimatedTokens: 63
keywords: [acos, arccosine, radians, any, real, numeric, range, passed, argument, function, foreach, statement]
---

# acos(n)

> Returns the arccosine value of radians value n. n
  can be any real numeric value in the range of -1 <= n <= 1. If null is passed as an argument, acos() returns null. This function can only be
  used in a foreach statement.

# acos(n)

Returns the arccosine value of radians value n. n can be any real numeric value in the range of -1 <= n <= 1. If null is passed as an argument, acos() returns null. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate acos(radians) as arccosine;
```
