---
title: "ConnectApi.DmoFilter"
domain: apex-reference
topic: connectapidmofilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.067Z
estimatedTokens: 202
keywords: [ConnectApi.DmoFilter, Represents, DMO, filter, output.]
---

# ConnectApi.DmoFilter

> Represents a DMO filter output.

# ConnectApi.DmoFilter

Represents a DMO filter output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| entityFilter | ConnectApi.BaseComparison | Filter for the entity. | 60.0 |
| entityFilterType | String | Type of DMO filter. | 60.0 |
| entityName | String | Entity name of the DMO filter. | 60.0 |
| filterLimit | ConnectApi.DmoFilterLimit | Limit for the DMO filter. | 60.0 |
| inheritedFilter | ConnectApi.BaseComparison | Inherited filter. | 60.0 |
| inheritedFilterType | String | Type of inherited filter. | 60.0 |
| pathFromActivateOnToContainer | List<ConnectApi.​QueryPathConfigList> | Path from the activation to the container. | 60.0 |
| pathFromContainerToEntity | List<ConnectApi.​QueryPathConfigList> | Path from the container to the entity. | 60.0 |

## Related Topics

- ConnectApi.BaseComparison (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_comparison.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.DmoFilterLimit (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_dmo_filter_limit.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​QueryPathConfigList (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_path_config_list.htm)
