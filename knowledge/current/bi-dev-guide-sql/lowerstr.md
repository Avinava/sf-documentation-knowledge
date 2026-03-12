---
title: "lower(str)"
domain: bi-dev-guide-sql
topic: lowerstr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.272Z
estimatedTokens: 70
keywords: [lower, str, copy, cased, characters, converted, lowercase]
---

# lower(str)

> Returns a copy of string str with all cased characters converted to
  lowercase.

# lower(str)

Returns a copy of string str with all cased characters converted to lowercase.

## Example

This example returns the first five entries in the City column in lowercase.

```

```

| lCity |
| --- |
| aberdeen |
| abilene |
| akron |
| albuquerque |
| alexandria |

## Code Examples

```
SELECT lower(City) as "lCity"
FROM "Superstore"
GROUP BY City
LIMIT 5;
```
