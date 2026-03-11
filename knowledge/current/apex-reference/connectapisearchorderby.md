---
title: "ConnectApi.SearchOrderBy"
domain: apex-reference
topic: connectapisearchorderby
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.386Z
keywords: [ConnectApi.SearchOrderBy, See]
---

# ConnectApi.SearchOrderBy

# ConnectApi.SearchOrderBy

Order by parameter for object search.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | String | Field to sort the results by. | Optional | 63.0 |
| order | ConnectApi.​SearchOrder | Order direction. Values are:AscendingDescendingDefault value is Ascending. | Optional | 63.0 |
| orderNulls | ConnectApi.​OrderNulls | Null value order. Values are:Firsts—Null values are sorted first.Lasts—Null values are sorted last.Default value is Firsts. | Optional | 63.0 |

#### See Also

-   [ConnectApi.SearchRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_search_reques.htm "Search request input for searching an object.")