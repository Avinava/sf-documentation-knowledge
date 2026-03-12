---
title: "position(search_str IN
    source_str)"
domain: bi-dev-guide-sql
topic: positionsearchstr-in-sourcestr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.282Z
estimatedTokens: 104
keywords: [position, search_str, source_str, occurrence, substring, found, function, search, _str, source]
---

# position(search_str IN
    source_str)

> Returns an integer that indicates the first occurrence of a substring in a given string.
  If the substring is not found, the function returns 0.

# position(search\_str IN source\_str)

Returns an integer that indicates the first occurrence of a substring in a given string. If the substring is not found, the function returns 0.

## Example

This example returns the position of the substring “der” in the City field.

```

```

| City | Pos |
| --- | --- |
| Henderson | 4 |
| Henderson | 4 |
| Los Angeles | 0 |
| Fort Lauderdale | 9 |
| Fort Lauderdale | 9 |

## Code Examples

```
SELECT City, POSITION('der' IN City) as "Pos"
FROM "Superstore"
LIMIT 5;
```
