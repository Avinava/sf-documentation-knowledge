---
title: "trim(LEADING | TRAILING | BOTH, chars,
    str)"
domain: bi-dev-guide-sql
topic: trimleading-trailing-both-chars-str
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.295Z
estimatedTokens: 373
keywords: [trim, LEADING, TRAILING, chars, str, Removes, characters, function, blank, spaces]
---

# trim(LEADING | TRAILING | BOTH, chars,
    str)

> Removes leading or trailing characters from a string. If no characters are specified,
  the function removes blank spaces.

# trim(LEADING | TRAILING | BOTH, chars, str)

Removes leading or trailing characters from a string. If no characters are specified, the function removes blank spaces.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_sql)

#### Note

The trim function isn’t supported in Analytics Studio. An error occurs when the function is used in the UI. The function is available using the Query API. For more information, see [Query CRM Analytics Data with the Query API](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_api_query_data.htm).

LEADING

Optional. Specify to remove characters from the beginning of the string.

TRAILING

Optional. Specify to remove characters from the end of the string.

BOTH

Optional. Specify to remove characters from both the start and end of the string.

If LEADING, TRAILING, or BOTH aren't specified, trim() defaults to BOTH.

## Example

This example shows all variations of the trim() function for removing the characters "A", "b", and "n" from the beginning, end, or both sides of the City field string.

```

```

| City | TrimCity | LTrimCity | RTrimCity | BothTrimCity |
| --- | --- | --- | --- | --- |
| Aberdeen | erdee | erdeen | Aberdee | erdee |
| Abilene | ilene | ilene | Abilene | ilene |
| Akron | kro | kron | Akro | kro |
| Albuquerque | lbuquerque | lbuquerque | Albuquerque | Ibuquerque |
| Alexandria | lexandria | lexandria | Alexandria | lexandria |

## Code Examples

```
SELECT City, Trim('Abn' FROM City) as TrimCity, Trim(LEADING 'Abn' FROM City) as LTrimCity, Trim(TRAILING 'Abn' FROM City) as RTrimCity, Trim(BOTH 'Abn' FROM City) as BothTrimCity
FROM "Superstore"
GROUP BY City
LIMIT 5;
```
