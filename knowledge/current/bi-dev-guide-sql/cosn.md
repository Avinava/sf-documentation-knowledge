---
title: "cos(n)"
domain: bi-dev-guide-sql
topic: cosn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.169Z
estimatedTokens: 81
keywords: [cos, cosine, radians, any, real, number, range, -1e308, 1e308, passed, argument]
---

# cos(n)

> Returns the cosine value of radians value n. n can be
  any real number in the range of -1e308 <= n <= 1e308. If null is
  passed as an argument, cos() returns null.

# cos(n)

Returns the cosine value of radians value n. n can be any real number in the range of -1e308 <= n <= 1e308. If null is passed as an argument, cos() returns null.

cos(n) takes the following syntax.

```

```

## Example

This example takes the cosine of 90 degrees.

```

```

| cosValue |
| --- |
| 6.12323e-17 |

## Code Examples

```
SELECT COS(n) as Alias
FROM dataset;
```

```
SELECT COS(RADIANS(90)) as cosValue
FROM "Opportunity"
LIMIT 1;
```
