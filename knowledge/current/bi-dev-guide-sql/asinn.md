---
title: "asin(n)"
domain: bi-dev-guide-sql
topic: asinn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.161Z
estimatedTokens: 79
keywords: [asin, arcsine, radians, any, real, number, range, passed, argument, sin]
---

# asin(n)

> Returns the arcsine value of radians value n. n can be
  any real number in the range of -1 <= n
  <= 1. If null is passed as an argument, sin() returns null.

# asin(n)

Returns the arcsine value of radians value n. n can be any real number in the range of -1 <= n <= 1. If null is passed as an argument, sin() returns null.

asin(n) takes the following syntax.

```

```

## Example

This example takes the arcsine of 35 degrees.

```

```

| asinValue |
| --- |
| 0.60746 |

## Code Examples

```
SELECT ASIN(n) as Alias
FROM dataset;
```

```
SELECT ASIN(RADIANS(35)) as asinValue
FROM "Opportunity"
LIMIT 1;
```
