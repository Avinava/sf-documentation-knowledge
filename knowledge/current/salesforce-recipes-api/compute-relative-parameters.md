---
title: "Compute Relative Parameters"
domain: salesforce-recipes-api
topic: compute-relative-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.714Z
estimatedTokens: 185
keywords: [Compute, Relative, node, recipe]
---

# Compute Relative Parameters

> The parameters for a compute relative node in a recipe.

# Compute Relative Parameters

The parameters for a compute relative node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| expression​Type | Recipe​Formula​Expression​Type | The formula expression type. Valid values are:LegacySql | Small, v51.0 | 51.0 |
| fields | Sql​Formula​Field[] | The list of formula fields. Valid values are:SQL Formula Date FieldSQL Formula Multivalue FieldSQL Formula Numeric FieldSQL Formula Text Field | Small, v51.0 | 51.0 |
| order​By | Compute​Relative​Sort​Parameters[] | The list of sort fields. | Small, v51.0 | 51.0 |
| partition​By | String[] | The list of partition by values. | Small, v51.0 | 51.0 |

## Related Topics

- Sql​Formula​Field (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_sql_formula_field.htm)
- SQL Formula Date Field (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_sql_formula_date_field.htm)
- SQL Formula Multivalue Field (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_sql_formula_multivalue_field.htm)
- SQL Formula Numeric Field (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_sql_formula_numeric_field.htm)
- SQL Formula Text Field (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_sql_formula_text_field.htm)
- Compute​Relative​Sort​Parameters (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_compute_relative_sort_parameters.htm)
