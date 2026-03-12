---
title: "ConnectApi.AttributeLimitingExpressionInput"
domain: apex-reference
topic: connectapiattributelimitingexpressioninput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.316Z
estimatedTokens: 150
keywords: [ConnectApi.AttributeLimitingExpressionInput, Represents, limiting, expression, input, activation.]
---

# ConnectApi.AttributeLimitingExpressionInput

> Represents the limiting expression input for an activation.

# ConnectApi.AttributeLimitingExpressionInput

Represents the limiting expression input for an activation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeName | String | Name of the attribute. |  | 63.0 |
| entityName | String | Name of the entity. |  | 63.0 |
| order | FilterSortOrderEnum | The sort order for filtering.FilterSortOrderAscFilterSortOrderDesc |  | 63.0 |
| queryPathConfig | List< ConnectApi.QueryPathInputConfig> | Query path configuration input. |  | 63.0 |
| type | String | Type of attribute. |  | 63.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- FilterSortOrderEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.QueryPathInputConfig> (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_path_config.htm)
