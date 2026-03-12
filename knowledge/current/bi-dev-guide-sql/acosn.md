---
title: "acos(n)"
domain: bi-dev-guide-sql
topic: acosn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.158Z
estimatedTokens: 81
keywords: [acos, arccosine, radians, any, real, number, range, passed, argument]
---

# acos(n)

> Returns the arccosine value of radians value n. n can be
  any real number in the range of -1 <= n
  <= 1. If null is passed as an argument, acos() returns null.

# acos(n)

Returns the arccosine value of radians value n. n can be any real number in the range of -1 <= n <= 1. If null is passed as an argument, acos() returns null.

acos(n) takes the following syntax.

```

```

## Example

This example takes the arccosine of 35 degrees.

```

```

| acosValue |
| --- |
| 0.913643 |

## Code Examples

```
SELECT ACOS(n) as Alias
FROM dataset;
```

```
SELECT ACOS(RADIANS(90)) as acosValue
FROM "Opportunity"
LIMIT 1;
```
