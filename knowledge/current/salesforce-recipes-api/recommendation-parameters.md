---
title: "Recommendation Parameters"
domain: salesforce-recipes-api
topic: recommendation-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:05:25.843Z
estimatedTokens: 266
keywords: [Recommendation, node, recipe]
---

# Recommendation Parameters

> The parameters for a recommendation node in a recipe.

# Recommendation Parameters

The parameters for a recommendation node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cust​Id​Field | String | The customer ID field. | Small, v53.0 | 53.0 |
| exclude​Previous​Recommendations | Boolean | Indicates whether to exclude previous recommendations (true) or not (false). | Small, v53.0 | 53.0 |
| product​Id​Field | String | The product ID field. | Small, v53.0 | 53.0 |
| product​Recommendations | Integer | The product recommendations field. | Small, v53.0 | 53.0 |
| rating​Field | String | The rating field. | Small, v53.0 | 53.0 |
| target​Field | Recipe​Name​Label | The target field. | Small, v53.0 | 53.0 |
| target​Rank​Field | Recipe​Name​Label | The target rank field. | Small, v53.0 | 53.0 |
| target​Rating​Field | Recipe​Name​Label | The target rating field. | Small, v53.0 | 53.0 |
| use​Implicit​Ratings | Boolean | Indicates whether to use implicit ratings (true) or not (false). | Small, v53.0 | 53.0 |

## Related Topics

- Recipe​Name​Label (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_name_label.htm)
