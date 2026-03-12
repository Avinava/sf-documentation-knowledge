---
title: "ConnectApi.QueryInfo"
domain: apex-reference
topic: connectapiqueryinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.700Z
estimatedTokens: 129
keywords: [ConnectApi.QueryInfo, Query, execution, information.]
---

# ConnectApi.QueryInfo

> Query execution information.

# ConnectApi.QueryInfo

Query execution information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| queryId | String | Unique identifier assigned to a search query to enable tracking usage and analysis of user interactions with search results. | 65.0 |
| sobjects | Map<String, ConnectApi.​ObjectQueryInfo> | Query execution information for the object. | 64.0 |
| status | ConnectApi.​SearchStatus | Status on the object search such as error messages and warnings. | 64.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.​ObjectQueryInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_query_inf.htm)
- ConnectApi.​SearchStatus (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_statu.htm)
