---
title: "ConnectApi.SearchObject"
domain: apex-reference
topic: connectapisearchobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.013Z
estimatedTokens: 328
keywords: [ConnectApi.SearchObject, Record, results, keyword, search]
---

# ConnectApi.SearchObject

> Record results for the keyword search.

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

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​SearchApplied​OrderBy (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_applied_order_b.htm)
- ConnectApi.​PageInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_page_inf.htm)
- ConnectApi.​SearchResult (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_resul.htm)
- ConnectApi.​SpellCorrection​Info (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_spell_correction_inf.htm)
- ConnectApi.​SearchStatus (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_statu.htm)
- ConnectApi.SearchResultGroups (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm)
- ConnectApi.SearchAnswer (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm)
- ConnectApi.ScopedSearchResults (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scoped_search_result.htm)
