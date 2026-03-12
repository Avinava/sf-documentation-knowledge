---
title: "starts_with(source_str,
    search_str)"
domain: bi-dev-guide-sql
topic: startswithsourcestr-searchstr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.288Z
estimatedTokens: 136
keywords: [starts_with, source_str, search_str, indicating, whether, begins, search, starts, _with, source, _str]
---

# starts_with(source_str,
    search_str)

> Returns a Boolean indicating whether a string begins with the search string.

# starts\_with(source\_str, search\_str)

Returns a Boolean indicating whether a string begins with the search string.

STARTS\_WITH() follows this syntax.

source\_str

The string to be searched.

search\_str

The string to search for within the source string.

## Example

This example returns a Boolean that confirms whether the value in the City field begins with “Hen.”

```

```

| City | startValue |
| --- | --- |
| Henderson | true |
| Henderson | true |
| Los Angeles | false |
| Fort Lauderdale | false |
| Fort Lauderdale | false |

## Code Examples

```
SELECT City, STARTS_WITH(City, "Hen") as "startValue"
FROM "Superstore"
LIMIT 5;
```
