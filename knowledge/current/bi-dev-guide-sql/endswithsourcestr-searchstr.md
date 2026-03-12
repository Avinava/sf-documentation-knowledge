---
title: "ends_with(source_str,
    search_str)"
domain: bi-dev-guide-sql
topic: endswithsourcestr-searchstr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.261Z
estimatedTokens: 134
keywords: [ends_with, source_str, search_str, indicating, whether, ends, search, _with, source, _str]
---

# ends_with(source_str,
    search_str)

> Returns a Boolean indicating whether a string ends with the search string.

# ends\_with(source\_str, search\_str)

Returns a Boolean indicating whether a string ends with the search string.

ENDS\_WITH() follows this syntax.

source\_str

The string to be searched.

search\_str

The string to search for within the source string.

## Example

This example returns a Boolean that confirms whether the value in the City field ends with “ale.”

```

```

| City | endValue |
| --- | --- |
| Henderson | false |
| Henderson | false |
| Los Angeles | false |
| Fort Lauderdale | true |
| Fort Lauderdale | true |

## Code Examples

```
SELECT City, ENDS_WITH(City, "ale") as "endValue"
FROM "Superstore"
LIMIT 5;
```
