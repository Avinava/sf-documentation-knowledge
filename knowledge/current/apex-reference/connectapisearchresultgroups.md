---
title: "ConnectApi.SearchResultGroups"
domain: apex-reference
topic: connectapisearchresultgroups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.021Z
estimatedTokens: 351
keywords: [ConnectApi.SearchResultGroups, Results, searching, objects, keywords]
---

# ConnectApi.SearchResultGroups

> Results of searching objects using keywords.

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

## Related Topics

- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ObjectMetadata (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_metadat.htm)
- ConnectApi.​QueryInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_inf.htm)
- ConnectApi.​SearchResultGroup (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result_grou.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​SearchObject (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_objec.htm)
- findAndGroup(q) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm)
- findAndGroup(q, configurationName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm)
- findAndGroup(q, configurationName, highlights) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm)
