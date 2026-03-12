---
title: "degrees(n)"
domain: bi-dev-guide-sql
topic: degreesn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.172Z
estimatedTokens: 84
keywords: [degrees, radians, any, real, number, range, -1e308, 1e308, passed, argument]
---

# degrees(n)

> Returns the degrees value of n
  radians. n can be any real number in the
  range of -1e308 <= n <= 1e308. If
   null is passed as an argument, radians() returns null.

# degrees(n)

Returns the degrees value of n radians. n can be any real number in the range of -1e308 <= n <= 1e308. If null is passed as an argument, radians() returns null.

degrees(n) takes the following syntax.

```

```

## Example

This example returns the degrees of 1.57079 radians.

```

```

| degreesValue |
| --- |
| 90 |

## Code Examples

```
SELECT DEGREES(n) as Alias
FROM dataset;
```

```
SELECT DEGREES(1.57079) as degreesValue
FROM "Opportunity"
LIMIT 1;
```
