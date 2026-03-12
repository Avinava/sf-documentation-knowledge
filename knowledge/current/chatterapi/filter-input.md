---
title: "Filter Input"
domain: chatterapi
topic: filter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.728Z
estimatedTokens: 226
keywords: [Filter, Input, search]
---

# Filter Input

> Filter input for object search.

# Filter Input

Filter input for object search.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | String | Field to use in the filter. | Optional | 63.0 |
| operator | String | Filter operator. Values are:EqOp—EqualExcludesOp—ExcludesGtOp—Greater thanGteOp—Greater than or equalInOp—InIncludesOp—IncludesLikeOp—LikeLtOp—Less thanLteOp—Less than or equalNeOp—Not equalNinOp—Not in | Optional | 63.0 |
| values | Boolean List InputDouble List InputLong List InputString List Input | Values for the filter. Do not mix data types for filter values, for example, ["A", "B", "C"]is valid, but ["A", -7, false]is not valid. | Optional | 63.0 |

#### See Also

-   [Search Request Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_reques.htm "Search request input for searching an object.")

## Code Examples

```
{
  "field": "Language",
  "operator": "EqOp",
  "values": ["en_US"]
}
```

## Related Topics

- Boolean List Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_boolean_list_inpu.htm)
- Double
                          List Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_double_list_inpu.htm)
- Long List Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_long_list_inpu.htm)
- String
                          List Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_string_list_inpu.htm)
- Search Request Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_reques.htm)
