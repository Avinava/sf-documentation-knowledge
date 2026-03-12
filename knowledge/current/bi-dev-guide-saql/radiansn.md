---
title: "radians(n)"
domain: bi-dev-guide-saql
topic: radiansn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.454Z
estimatedTokens: 67
keywords: [radians, degrees, any, real, numeric, range, -1e308, 1e308, passed, argument, function, foreach, statement]
---

# radians(n)

> Returns the radians value of a degrees value n. n
  can be any real numeric value in the range of -1e308 <= n <= 1e308. If
   null is passed as an argument, radians() returns null. This function can only be
  used in a foreach statement.

# radians(n)

Returns the radians value of a degrees value n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, radians() returns null. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate radians(degrees) as radians;
```
