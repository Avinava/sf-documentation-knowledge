---
title: "atan(n)"
domain: bi-dev-guide-sql
topic: atann
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.164Z
estimatedTokens: 82
keywords: [atan, arctan, radians, any, real, number, range, -1e308, 1e308, passed, argument]
---

# atan(n)

> Returns the arctan value of radians value n. n can be
  any real number in the range of -1e308 <= n <= 1e308. If null is
  passed as an argument, atan() returns null.

# atan(n)

Returns the arctan value of radians value n. n can be any real number in the range of -1e308 <= n <= 1e308. If null is passed as an argument, atan() returns null.

atan(n) takes the following syntax.

```

```

## Example

This example takes the arctan of 90 degrees.

```

```

| arctanValue |
| --- |
| 1.00388 |

## Code Examples

```
SELECT ATAN(n) as Alias
FROM dataset;
```

```
SELECT ATAN(RADIANS(90)) as arctanValue
FROM "Opportunity"
LIMIT 1;
```
