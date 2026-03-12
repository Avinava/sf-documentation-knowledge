---
title: "ConnectApi.DMOFilterInput"
domain: apex-reference
topic: connectapidmofilterinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.008Z
estimatedTokens: 222
keywords: [ConnectApi.DMOFilterInput, DMO, filter, input]
---

# ConnectApi.DMOFilterInput

> Represents the DMO filter input.

# ConnectApi.DMOFilterInput

Represents the DMO filter input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| entityFilter | BaseComparisonInputRepresentation | Entity filter. |  | 60.0 |
| entityFilterType | String | Type of the entity filter. |  | 60.0 |
| entityName | String | Name of the entity. |  | 60.0 |
| filterLimit | DmoFilterLimitInputRepresentation | Filter limit. |  | 60.0 |
| inheritedFilter | BaseComparisonInputRepresentation | Inherited filter. |  | 60.0 |
| inheritedFilterType | String | Type of the inherited filter. |  | 60.0 |
| queryPathConfigForActivateOnToContainer | List< ConnectApi.QueryPathInputConfig> | Path from the activation to the container. |  | 60.0 |
| queryPathConfigFromContainerToEntity | List< ConnectApi.QueryPathInputConfig> | Path from the container to the entity. |  | 60.0 |

## Related Topics

- BaseComparisonInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_base_comparison.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- DmoFilterLimitInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_dmo_filter_limit.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.QueryPathInputConfig> (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_path_config.htm)
