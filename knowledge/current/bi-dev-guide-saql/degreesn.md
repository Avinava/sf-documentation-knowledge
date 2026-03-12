---
title: "degrees(n)"
domain: bi-dev-guide-saql
topic: degreesn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.441Z
estimatedTokens: 67
keywords: [degrees, radians, any, real, numeric, range, -1e308, 1e308, passed, argument, function, foreach, statement]
---

# degrees(n)

> Returns the degrees value of a radians value n. n
  can be any real numeric value in the range of -1e308 <= n <= 1e308. If
   null is passed as an argument, degrees() returns null. This function can only be
  used in a foreach statement.

# degrees(n)

Returns the degrees value of a radians value n. n can be any real numeric value in the range of -1e308 <= n <= 1e308. If null is passed as an argument, degrees() returns null. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate degrees(radians) as degrees;
```
