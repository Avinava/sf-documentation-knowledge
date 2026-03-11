---
title: "ConnectApi.SearchResultGroups"
domain: apex-reference
topic: connectapisearchresultgroups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:39.998Z
keywords: [ConnectApi.SearchResultGroups, See]
---

# ConnectApi.SearchResultGroups

# ConnectApi.SearchResultGroups

Results of searching objects using keywords.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| metadata | Map<String, ConnectApi.​ObjectMetadata> | All related metadata associated with the objects found in the results. | 63.0 |
| queryInfo | ConnectApi.​QueryInfo | Search query execution information. | 64.0 |
| resultGroups | ConnectApi.​SearchResultGroup | Record results from a keyword search. | 64.0 |
| searchObjects | List<ConnectApi.​SearchObject> | Record results for the keyword search grouped by object. In version 64.0 and later, use resultGroups for record results. | 63.0 only |

#### See Also

-   [findAndGroup(q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_objects_1 "Search objects using keyword search and return result groups.")
    
-   [findAndGroup(q, configurationName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_objects_2 "Search objects using keyword search and a configuration. The search returns result groups.")
    
-   [findAndGroup(q, configurationName, highlights)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_find_objects_3 "Search objects using keyword search, a configuration, and highlights. The search returns result groups.")