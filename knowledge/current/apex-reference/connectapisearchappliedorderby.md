---
title: "ConnectApi.SearchAppliedOrderBy"
domain: apex-reference
topic: connectapisearchappliedorderby
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.935Z
keywords: [ConnectApi.SearchAppliedOrderBy, See]
---

# ConnectApi.SearchAppliedOrderBy

# ConnectApi.SearchAppliedOrderBy

The applied order for object search.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| field | String | Field used to sort the results. | 63.0 |
| order | ConnectApi.​OrderDirection | Order direction. Values are:AscendingDescending | 63.0 |
| orderNulls | ConnectApi.​OrderNulls | Null value order. Values are:Firsts—Null values are sorted first.Lasts—Null values are sorted last. | 63.0 |

#### See Also

-   [ConnectApi.ObjectQueryInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_query_inf.htm "Search query metadata related to the object.")
    
-   [ConnectApi.SearchObject](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_objec.htm "Record results for the keyword search.")