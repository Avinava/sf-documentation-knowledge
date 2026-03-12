---
title: "ConnectApi.SearchAnswer"
domain: apex-reference
topic: connectapisearchanswer
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.000Z
estimatedTokens: 313
keywords: [ConnectApi.SearchAnswer, Results, searching, objects, natural, language, query]
---

# ConnectApi.SearchAnswer

> Results of searching objects using a natural language query.

# ConnectApi.SearchAnswer

Results of searching objects using a natural language query.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| content | String | AI generated response. | 63.0 |
| llmGenerationId | String | LLM generation ID used to track any feedback on the conversation. | 63.0 |
| metadata | Map<String, ConnectApi.​ObjectMetadata> | All search related metadata associated with the objects found in the results. | 63.0 |
| searchObjects | List<ConnectApi.​SearchObject> | Record results for the natural language search. | 63.0 |

#### See Also

-   [answer(q, objectApiName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_answer_object_1 "Search an object using a natural language query and return an answer.")

-   [answer(q, objectApiName, displayFields)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_answer_object_2 "Search an object using a natural language query and display fields.")

-   [answer(q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm#apex_ConnectAPI_Search_answer_objects_1 "Search objects using a natural language query and return an answer.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.​ObjectMetadata (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_metadat.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​SearchObject (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_objec.htm)
- answer(q, objectApiName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm)
- answer(q, objectApiName, displayFields) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm)
- answer(q) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Search_static_methods.htm)
