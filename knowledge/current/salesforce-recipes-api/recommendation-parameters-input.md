---
title: "Recommendation Parameters Input"
domain: salesforce-recipes-api
topic: recommendation-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.440Z
estimatedTokens: 262
keywords: [Recommendation, Input, node, recipe]
---

# Recommendation Parameters Input

> The parameters for a recommendation node in a recipe.

# Recommendation Parameters Input

The parameters for a recommendation node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cust​Id​Field | String | The customer ID field. | Required | 53.0 |
| exclude​Previous​Recommendations | Boolean | Indicates whether to exclude previous recommendations (true) or not (false). | Required | 53.0 |
| product​Id​Field | String | The product ID field. | Required | 53.0 |
| product​Recommendations | Integer | The product recommendations field. | Required | 53.0 |
| rating​Field | String | The rating field. | Required | 53.0 |
| target​Field | Recipe​Name​Label​Input | The target field. | Required | 53.0 |
| target​Rank​Field | Recipe​Name​Label​Input | The target rank field. | Required | 53.0 |
| target​Rating​Field | Recipe​Name​Label​Input | The target rating field. | Required | 53.0 |
| use​Implicit​Ratings | Boolean | Indicates whether to use implicit ratings (true) or not (false). | Required | 53.0 |

## Related Topics

- Recipe​Name​Label​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_name_label_input.htm)
