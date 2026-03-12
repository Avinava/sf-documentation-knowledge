---
title: "Optimized Append Parameters Input"
domain: salesforce-recipes-api
topic: optimized-append-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.321Z
estimatedTokens: 168
keywords: [Optimized, Append, Input, node, recipe]
---

# Optimized Append Parameters Input

> The parameters for an optimized append node in a recipe.

# Optimized Append Parameters Input

The parameters for an optimized append node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allow​Implicit​Disjoint​Schema | Boolean | Indicates whether disjoint schema merge is allowed (true) or not (false). | Required | 62.0 |
| dataset | Load​Analytics​Datatset​Input | The base dataset to append. | Required | 62.0 |
| date​Configuration​Name | String | The name of the date configuration. | Required | 62.0 |
| operation | Operation​Enum | The append operation type. Valid operation types are:AppendDeleteUpsert | Required | 64.0 |

## Related Topics

- Load​Analytics​Datatset​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_analytics_dataset_input.htm)
