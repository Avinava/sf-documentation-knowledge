---
title: "ConnectApi.SearchFilter"
domain: apex-reference
topic: connectapisearchfilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.931Z
estimatedTokens: 230
keywords: [ConnectApi.SearchFilter, Filter, input, search.]
---

# ConnectApi.SearchFilter

> Filter input for object search.

# ConnectApi.SearchFilter

Filter input for object search.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | String | Field to use in the filter. | Optional | 63.0 |
| operator | ConnectApi.​FilterOperator | Filter operator. Values are:EqOp—EqualExcludesOp—ExcludesGtOp—Greater thanGteOp—Greater than or equalInOp—InIncludesOp—IncludesLikeOp—LikeLtOp—Less thanLteOp—Less than or equalNeOp—Not equalNinOp—Not in | Optional | 63.0 |
| values | List<ConnectApi.​AbstractList> | Values of the filter, it can be a List of String, Boolean, Long, or Double. Do not mix data types for filter values, for example, ["A", "B", "C"] is valid, but ["A", -7, false] isn't. | Optional | 63.0 |

#### See Also

-   [ConnectApi.SearchRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_search_reques.htm "Search request input for searching an object.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​FilterOperator (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​AbstractList (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_abstract_list_inpu.htm)
- ConnectApi.SearchRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_search_reques.htm)
