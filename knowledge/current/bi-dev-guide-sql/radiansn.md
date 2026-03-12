---
title: "radians(n)"
domain: bi-dev-guide-sql
topic: radiansn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.203Z
estimatedTokens: 84
keywords: [radians, degrees, any, real, number, range, -1e308, 1e308, passed, argument]
---

# radians(n)

> Returns the radians value of n
  degrees. n can be any real number in the
  range of -1e308 <= n <= 1e308. If
   null is passed as an argument, radians() returns null.

# radians(n)

Returns the radians value of n degrees. n can be any real number in the range of -1e308 <= n <= 1e308. If null is passed as an argument, radians() returns null.

radians(n) takes the following syntax.

```

```

## Example

This example returns the radians of 90 degrees.

```

```

| radiansValue |
| --- |
| 1.57079 |

## Code Examples

```
SELECT RADIANS(n) as Alias
FROM dataset;
```

```
SELECT RADIANS(90) as radiansValue
FROM "Opportunity"
LIMIT 1;
```
