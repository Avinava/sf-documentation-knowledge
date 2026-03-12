---
title: "tan(n)"
domain: bi-dev-guide-sql
topic: tann
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.217Z
estimatedTokens: 78
keywords: [tan, radians, any, real, number, range, -1e308, 1e308, passed, argument]
---

# tan(n)

> Returns the tan value of radians value n. n can be
  any real number in the range of -1e308 <= n <= 1e308. If null is
  passed as an argument, tan() returns null.

# tan(n)

Returns the tan value of radians value n. n can be any real number in the range of -1e308 <= n <= 1e308. If null is passed as an argument, tan() returns null.

tan(n) takes the following syntax.

```

```

## Example

This example takes the tan of 90 degrees.

```

```

| tanValue |
| --- |
| 163312 |

## Code Examples

```
SELECT TAN(n) as Alias
FROM dataset;
```

```
SELECT TAN(RADIANS(90)) as tanValue
FROM "Opportunity"
LIMIT 1;
```
