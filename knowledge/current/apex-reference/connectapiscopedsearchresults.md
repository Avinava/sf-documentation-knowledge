---
title: "ConnectApi.ScopedSearchResults"
domain: apex-reference
topic: connectapiscopedsearchresults
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:28.997Z
estimatedTokens: 246
keywords: [ConnectApi.ScopedSearchResults, Keyword, search, results]
---

# ConnectApi.ScopedSearchResults

> Keyword search results for an object.

# ConnectApi.ScopedSearchResults

Keyword search results for an object.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| metadata | ConnectApi.​ObjectMetadata | All search metadata associated with the object. | 63.0 |
| objectQueryInfo | ConnectApi.​ObjectQueryInfo | Query execution information for the object. | 64.0 |
| queryId | String | Unique identifier assigned to a search query to enable tracking usage and analysis of user interactions with search results. | 65.0 |
| results | List<ConnectApi.​SearchResult> | Record results for the keyword search. | 64.0 |
| searchObject | ConnectApi.​SearchObject | Record results for the keyword search. In version 64.0 and later, use results for record results. | 63.0 only |

#### See Also

-   [find(objectApiName, request)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_object_1 "Search an object using keywords and return results.")

## Related Topics

- ConnectApi.​ObjectMetadata (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_metadat.htm)
- ConnectApi.​ObjectQueryInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_query_inf.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​SearchResult (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_resul.htm)
- ConnectApi.​SearchObject (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_objec.htm)
- find(objectApiName, request) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm)
