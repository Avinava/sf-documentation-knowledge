---
title: "Flatten Parameters Input"
domain: salesforce-recipes-api
topic: flatten-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.266Z
estimatedTokens: 148
keywords: [Flatten, Input, node, recipe]
---

# Flatten Parameters Input

> The parameters for a flatten node in a recipe.

# Flatten Parameters Input

The parameters for a flatten node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| include​Self​Id | Boolean | Indicates whether to include the self-ID (true) or not (false). | Required | 51.0 |
| multi​Field | Flatten​Field​Input | The multi field. | Required | 51.0 |
| parent​Field | String | The parent field. | Required | 51.0 |
| path​Field | Flatten​Field​Input | The path field. | Required | 51.0 |
| self​Field | String | The self-field. | Required | 51.0 |

## Related Topics

- Flatten​Field​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_flatten_field_input.htm)
