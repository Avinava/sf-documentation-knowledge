---
title: "sin(n)"
domain: bi-dev-guide-sql
topic: sinn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.212Z
estimatedTokens: 77
keywords: [sin, sine, radians, ncan, any, real, number, range, -1e308, 1e308, passed, argument]
---

# sin(n)

> Returns the sine value of radians value n. ncan be
  any real number in the range of -1e308 <= n <= 1e308. If null is
  passed as an argument, sin() returns null.

# sin(n)

Returns the sine value of radians value n. ncan be any real number in the range of -1e308 <= n <= 1e308. If null is passed as an argument, sin() returns null.

sin(n) takes the following syntax.

```

```

## Example

This example takes the sine of 90 degrees.

```

```

| sinValue |
| --- |
| 1 |

## Code Examples

```
SELECT SIN(n) as Alias
FROM dataset;
```

```
SELECT SIN(RADIANS(90)) as sinValue
FROM "Opportunity"
LIMIT 1;
```
