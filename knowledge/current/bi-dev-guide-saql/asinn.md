---
title: "asin(n)"
domain: bi-dev-guide-saql
topic: asinn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.433Z
estimatedTokens: 63
keywords: [asin, arcsine, radians, any, real, numeric, range, passed, argument, null.This, function, foreach, statement]
---

# asin(n)

> Returns the arcsine value of radians value n. n
  can be any real numeric value in the range of -1 <= n <= 1. If null is passed as an argument, asin() returns null.This function can only be used
  in a foreach statement.

# asin(n)

Returns the arcsine value of radians value n. n can be any real numeric value in the range of -1 <= n <= 1. If null is passed as an argument, asin() returns null.This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate asin(radians) as arcsine;
```
