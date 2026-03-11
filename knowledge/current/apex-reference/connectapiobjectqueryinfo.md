---
title: "ConnectApi.ObjectQueryInfo"
domain: apex-reference
topic: connectapiobjectqueryinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.443Z
keywords: [ConnectApi.ObjectQueryInfo, See]
---

# ConnectApi.ObjectQueryInfo

# ConnectApi.ObjectQueryInfo

Search query metadata related to the object.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| displayFields | List<String> | Fields to display from the response. | 64.0 |
| hasMoreResults | Boolean | Specifies whether there are more records to fetch matching the search query for the object (true) or not (false). | 64.0 |
| nameField | String | Name field identifier of the object. | 64.0 |
| numberOfMatches | Integer | Number of results for the object matching the search query. | 64.0 |
| orderBy | List<ConnectApi.​SearchApplied​OrderBy> | Applied order for object search. | 64.0 |
| source | String | Source name for the object. | 64.0 |
| spellCorrectionInfo | ConnectApi.​SpellCorrection​Info | Spell correction information for the object search. | 64.0 |
| status | ConnectApi.​SearchStatus | Status on the object search such as error messages and warnings. | 64.0 |

#### See Also

-   [ConnectApi.QueryInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_inf.htm "Query execution information.")
    
-   [ConnectApi.ScopedSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scoped_search_result.htm "Keyword search results for an object.")