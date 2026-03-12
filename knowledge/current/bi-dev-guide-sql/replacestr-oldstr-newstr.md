---
title: "replace(str, old_str,
    new_str)"
domain: bi-dev-guide-sql
topic: replacestr-oldstr-newstr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.285Z
estimatedTokens: 93
keywords: [replace, str, old_str, new_str, Replaces, occurrences, substring, new, old, _str]
---

# replace(str, old_str,
    new_str)

> Replaces all occurrences in string str of a substring
   old_str with a new substring new_str. Returns a new
  string.

# replace(str, old\_str, new\_str)

Replaces all occurrences in string str of a substring old\_str with a new substring new\_str. Returns a new string.

## Example

This example replaces instances of 'Al' with 'AL' in the City column. The query returns the first five entries.

```

```

| City |
| --- |
| Aberdeen |
| Abilene |
| Akron |
| ALbuquerque |
| ALexandria |

## Code Examples

```
SELECT replace(City, 'Al', 'AL') as "City"
From "Superstore"
GROUP BY City
LIMIT 5;
```
