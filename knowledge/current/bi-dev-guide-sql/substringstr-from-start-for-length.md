---
title: "substring(str FROM start
   FOR length)"
domain: bi-dev-guide-sql
topic: substringstr-from-start-for-length
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.291Z
estimatedTokens: 320
keywords: [substring, str, start, length, begins, character, position]
---

# substring(str FROM start
   FOR length)

> Returns a substring from string str that begins with the character at
  the start position.

# substring(str FROM start FOR length)

Returns a substring from string str that begins with the character at the start position.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_sql)

#### Note

The substring function isn’t supported in Analytics Studio. An error occurs when the function is used in the UI. The function is available using the Query API. For more information, see [Query CRM Analytics Data with the Query API](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_api_query_data.htm).

start

Required. The starting position of the substring. This is the first character of the substring. The value can be positive or negative. If positive, the position is taken from the beginning of the string. If negative, the position is taken from the end of the string.

length

Optional. The length of the substring, beginning at the start position. If no value is provided, substring() extracts characters from the start position through the end of the string.

## Example

This example extracts the first three letters from each City field.

```

```

| City | CityCode |
| --- | --- |
| Aberdeen | Abe |
| Abilene | Abi |
| Akron | Akr |
| Albuquerque | Alb |
| Alexandria | Ale |

## Code Examples

```
SELECT City, SUBSTRING(City FROM 1 FOR 3) as CityCode FROM "Superstore"
GROUP BY City LIMIT 5;
```
