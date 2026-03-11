---
title: "ConnectApi.SearchObject"
domain: apex-reference
topic: connectapisearchobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.992Z
keywords: [ConnectApi.SearchObject, See]
---

# ConnectApi.SearchObject

# ConnectApi.SearchObject

Record results for the keyword search.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| displayFields | List<String> | Fields to display from the response. | 63.0 |
| objectApiName | String | Object API name. | 63.0 |
| orderBy | List<ConnectApi.​SearchApplied​OrderBy> | Applied order for object search. | 63.0 |
| pageInfo | ConnectApi.​PageInfo | Page position information for the object search. | 63.0-64.0 |
| searchResults | List<ConnectApi.​SearchResult> | Search results from the query. | 63.0 |
| spellCorrectionInfo | ConnectApi.​SpellCorrection​Info | Spell correction information for the object search. | 63.0 |
| status | ConnectApi.​SearchStatus | Provides status on the object search such as error messages and warnings. | 63.0 |

#### See Also

-   [ConnectApi.SearchResultGroups](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm "Results of searching objects using keywords.")
    
-   [ConnectApi.SearchAnswer](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")
    
-   [ConnectApi.ScopedSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scoped_search_result.htm "Keyword search results for an object.")