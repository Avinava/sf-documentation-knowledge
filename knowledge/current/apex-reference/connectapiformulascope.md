---
title: "ConnectApi.FormulaScope"
domain: apex-reference
topic: connectapiformulascope
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.592Z
estimatedTokens: 162
keywords: [ConnectApi.FormulaScope, Formula, scope, target]
---

# ConnectApi.FormulaScope

> Formula scope for a target.

# ConnectApi.FormulaScope

Formula scope for a target.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contextValues | Map<String, String> | Map of context values for the scope.NoteIn version 52.0 and later, use the contextValuesMap property. | 50.0–51.0 |
| contextValuesMap | Map<String, Object> | Map of context values for the scope. | 52.0 |
| fields | List<String> | List of fields of the scope. | 50.0 |
| formula | String | Formula of the scope. | 50.0 |

#### See Also

-   [ConnectApi.Target](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target.htm "Personalization target information.")

## Related Topics

- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.Target (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target.htm)
