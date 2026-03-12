---
title: "upper(str)"
domain: bi-dev-guide-sql
topic: upperstr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.299Z
estimatedTokens: 71
keywords: [upper, str, copy, cased, characters, converted, uppercase]
---

# upper(str)

> Returns a copy of string str with all cased characters converted to
  uppercase.

# upper(str)

Returns a copy of string str with all cased characters converted to uppercase.

## Example

This example returns the first five entries in the City column in uppercase.

```

```

| upperCity |
| --- |
| ABERDEEN |
| ABILENE |
| AKRON |
| ALBUQUERQUE |
| ALEXANDRIA |

## Code Examples

```
SELECT upper(City) as upperCity FROM "Superstore"
GROUP BY City
LIMIT 5;
```
