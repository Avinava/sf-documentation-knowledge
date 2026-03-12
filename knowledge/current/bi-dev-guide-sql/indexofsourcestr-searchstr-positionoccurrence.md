---
title: "index_of(source_str,
    search_str,
   [position,occurrence])"
domain: bi-dev-guide-sql
topic: indexofsourcestr-searchstr-positionoccurrence
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.264Z
estimatedTokens: 225
keywords: [index_of, source_str, search_str, position, occurrence, indicating, whether, ends, search, index, _of, source, _str]
---

# index_of(source_str,
    search_str,
   [position,occurrence])

> Returns a boolean indicating whether a string ends with the search string.

# index\_of(source\_str, search\_str, \[position,occurrence\])

Returns a boolean indicating whether a string ends with the search string.

INDEX\_OF() follows this syntax.

source\_str

The string to be searched.

search\_str

The string to search for within the source string.

position

Optional. The index from which to begin searching the string. The default position is set to 1.

occurrence

Optional. If there’s more than one instance of the searched string, you can specify occurrence to choose which instance to return. The default occurrence is set to 1.

The function returns 0 if search\_str isn’t found.

## Example

This example returns the index of the second occurrence of the letter “e” in the first five cities in the dataset.

```

```

| City | indexValue |
| --- | --- |
| Henderson | 5 |
| Henderson | 5 |
| Los Angeles | 10 |
| Fort Lauderdale | 15 |
| Fort Lauderdale | 15 |

## Code Examples

```
SELECT City, INDEX_OF(City, 'e', 1, 2) as "indexValue"
FROM "Superstore"
LIMIT 5;
```
