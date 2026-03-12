---
title: "Order By Input"
domain: chatterapi
topic: order-by-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.287Z
estimatedTokens: 178
keywords: [Order, Input, Sort, search, results]
---

# Order By Input

> Sort order for the search results.

# Order By Input

Sort order for the search results.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | String | Field to order the results by. | Optional | 63.0 |
| order | String | Order direction. Values are:AscendingDescendingDefault value is Ascending. | Optional | 63.0 |
| orderNulls | String | Null value order. Values are:Firsts—Null values are sorted first.Lasts—Null values are sorted last.Default value is Firsts. | Optional | 63.0 |

#### See Also

-   [Search Request Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_reques.htm "Search request input for searching an object.")

## Code Examples

```
{
  "field": "LastModifiedDate",
  "order": "Ascending",
  "orderNulls": "Firsts"
}
```

## Related Topics

- Search Request Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_reques.htm)
