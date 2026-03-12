---
title: "sin(n)"
domain: bi-dev-guide-saql
topic: sinn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.463Z
estimatedTokens: 64
keywords: [sin, sine, radians, any, real, numeric, range, -1e308, 1e308, passed, argument, function, foreach, statement]
---

# sin(n)

> Returns the sine value of radians value n. n can
  be any real numeric value in the range of -1e308 <= n <= 1e308. If
   null is passed as an argument, sin() returns null. This function can only be used
  in a foreach statement.

# sin(n)

Returns the sine value of radians value n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, sin() returns null. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate sin(radians) as sine;
```
