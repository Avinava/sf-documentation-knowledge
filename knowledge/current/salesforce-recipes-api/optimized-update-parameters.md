---
title: "Optimized Update Parameters"
domain: salesforce-recipes-api
topic: optimized-update-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.841Z
estimatedTokens: 169
keywords: [Optimized, node, recipe]
---

# Optimized Update Parameters

> The parameters for an optimized update node in a recipe.

# Optimized Update Parameters

The parameters for an optimized update node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| allow​Implicit​Disjoint​Schema | Boolean | Indicates whether disjoint schema merge is allowed (true) or not (false). | Small, 64.0 | 64.0 |
| dataset | Load​Analytics​Datatset | The base dataset to update. | Small, 64.0 | 64.0 |
| date​Configuration​Name | String | The name of the date configuration. | Small, 64.0 | 64.0 |
| operation | Operation​Enum | The update operation type. Valid operation types are:AppendDeleteUpsert | Small, 64.0 | 64.0 |

## Related Topics

- Load​Analytics​Datatset (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_load_analytics_dataset.htm)
