---
title: "Search
    Request
    Input"
domain: chatterapi
topic: search-request-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.794Z
estimatedTokens: 421
keywords: [Search, Input, searching]
---

# Search
    Request
    Input

> Search request input for searching an object.

# Search Request Input

Search request input for searching an object.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| q | String | Query term to search on. Query term must be two or more characters. | Required | 63.0 |
| configurationName | String | Name of the search configuration to apply. Look up search configuration names from Search Manager. | Optional | 63.0 |
| dataCategories | Search Data Category Input[] | List of data categories to filter. | Optional | 63.0 |
| displayFields | String[] | List of fields to display and return in the search results. By default, the fields displayed are defined by the search layout. | Optional | 63.0 |
| filters | Filter Input[] | List of filters to apply. | Optional | 63.0 |
| highlights | Boolean | Specifies whether search generates a text highlight (true) or not (false). The default value is false. | Optional | 63.0 |
| offset | Integer | Search page offset position. Default value is 0, which indicates displaying results from the beginning without skipping any entries. | Optional | 63.0 |
| orderBy | Order By Input[] | Ordering information. | Optional | 63.0 |
| pageSize | Integer | Number of results in a page. Valid values are from 1 through 1999. If unspecified the default value is 20. | Optional | 63.0 |
| spellcheck | Boolean | Specifies whether search should apply spellcheck (true) or not (false). The default value is true. | Optional | 63.0 |

#### See Also

-   [Search Object Results](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_object.htm "Search an object using keywords and return results.")

## Code Examples

```
{
  "q": "overview",
  "orderBy": [
    {
      "field": "LastModifiedDate"
    }
  ],
  "dataCategories": [
    {
      "groupName": "Renewals",
      "operator": "Below",
      "categories": [
        "Deal_Progression_Stage"
      ]
    }
  ],
  "filters": [
    {
      "field": "Language",
      "operator": "EqOp",
      "values": ["en_US"]
    }
  ]
}
```

## Related Topics

- Search Data Category Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_data_category_inpu.htm)
- Filter
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_filter_inpu.htm)
- Order
                        By Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_by_inpu.htm)
- Search Object Results (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_object.htm)
