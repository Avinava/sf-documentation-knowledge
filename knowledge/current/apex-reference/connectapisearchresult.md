---
title: "ConnectApi.SearchResult"
domain: apex-reference
topic: connectapisearchresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.995Z
keywords: [ConnectApi.SearchResult, See]
---

# ConnectApi.SearchResult

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