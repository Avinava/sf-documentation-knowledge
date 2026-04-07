---
title: "char_length(str)"
domain: bi-dev-guide-sql
topic: charlengthstr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:01.991Z
estimatedTokens: 78
keywords: [char_length, str, number, characters, char, _length]
---

> Returns the number of characters in a given string.

# char\_length(str)

Returns the number of characters in a given string.

## Example

This example returns the number of characters in the first five entries in the City column.

```

```

| City | CityLen |
| --- | --- |
| Aberdeen | 8 |
| Abilene | 7 |
| Akron | 5 |
| Albuquerque | 11 |
| Alexandria | 10 |

## Code Examples

```
SELECT City, CHAR_LENGTH(City) as "CityLen"
FROM "Superstore"
GROUP BY City
LIMIT 5;
```
