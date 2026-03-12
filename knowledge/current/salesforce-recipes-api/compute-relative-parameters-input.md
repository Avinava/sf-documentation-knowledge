---
title: "Compute Relative Parameters Input"
domain: salesforce-recipes-api
topic: compute-relative-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.201Z
estimatedTokens: 200
keywords: [Compute, Relative, Input, node, recipe]
---

# Compute Relative Parameters Input

> The parameters for a compute relative node in a recipe.

# Compute Relative Parameters Input

The parameters for a compute relative node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expression​Type | Recipe​Formula​Expression​Type | The formula expression type. Valid values are:LegacySql | Optional | 51.0 |
| fields | Sql​Formula​Field​Input[] | The list of formula fields. Valid values are:SQL Formula Date Only Field InputSQL Formula Date Time Field InputSQL Formula Multivalue Field InputSQL Formula Numeric Field InputSQL Formula Text Field Input | Required | 51.0 |
| order​By | Compute​Relative​Sort​Parameters​Input[] | The list of sort fields. | Optional | 51.0 |
| partition​By | String[] | The list of partition by values. | Optional | 51.0 |

## Related Topics

- Sql​Formula​Field​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_formula_field_input.htm)
- SQL Formula Date Only Field Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_formula_date_only_field_input.htm)
- SQL Formula Date Time Field Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_formula_date_time_field_input.htm)
- SQL Formula Multivalue Field Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_formula_multivalue_field_input.htm)
- SQL Formula Numeric Field Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_formula_numeric_field_input.htm)
- SQL Formula Text Field Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_formula_text_field_input.htm)
- Compute​Relative​Sort​Parameters​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_compute_relative_sort_parameters_input.htm)
