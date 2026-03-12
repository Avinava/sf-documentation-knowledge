---
title: "ConnectApi.SearchResult"
domain: apex-reference
topic: connectapisearchresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.975Z
estimatedTokens: 265
keywords: [ConnectApi.SearchResult, Results, searching, keywords.]
---

# ConnectApi.SearchResult

> Results from searching an object using keywords.

# ConnectApi.SearchResult

Results from searching an object using keywords.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| apiName | String | Object API name. | 64.0 |
| chunks | List<ConnectApi.​Chunk | Content chunks for the search result. | 63.0 |
| fields | Map<String, ConnectApi.​RecordFieldValue> | Field values by field API | 63.0 |
| id | String | ID of the record. | 63.0 |
| matchInfo | ConnectApi.​MatchInfo | Search information related to the search result. | 63.0 |
| sourceUrl | String | Source URL from where the record originated. | 64.0 |

#### See Also

-   [ConnectApi.SearchResultGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result_grou.htm "Search result group.")

-   [ConnectApi.ScopedSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scoped_search_result.htm "Keyword search results for an object.")

-   [ConnectApi.SearchObject](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_objec.htm "Record results for the keyword search.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​Chunk (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chun.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.​RecordFieldValue (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_field_valu.htm)
- ConnectApi.​MatchInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_match_inf.htm)
- ConnectApi.SearchResultGroup (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result_grou.htm)
- ConnectApi.ScopedSearchResults (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scoped_search_result.htm)
- ConnectApi.SearchObject (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_objec.htm)
