---
title: "Detect Sentiment Parameters"
domain: salesforce-recipes-api
topic: detect-sentiment-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.726Z
estimatedTokens: 192
keywords: [Detect, Sentiment, node, recipe]
---

# Detect Sentiment Parameters

> The parameters for a detect sentiment node in a recipe.

# Detect Sentiment Parameters

The parameters for a detect sentiment node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| output​Type | Detect​Sentiment​Output​Type​Enum | The output type. Valid values are:DimensionMeasure | Small, v54.0 | 54.0 |
| sentiment​Score | Sentiment​Score​Type​Enum | The sentiment score type. Valid values are:AllNone | Small, v54.0 | 54.0 |
| source​Field | String | The source field. | Small, v51.0 | 51.0 |
| target​Field | Recipe​Name​Label | The target field. | Small, v51.0 | 51.0 |
| target​Sentiment​Score​Fields | Map<String, Map<String, Recipe​Name​Label>> | The collection of target confidence fields. | Small, v54.0 | 54.0 |

## Related Topics

- Recipe​Name​Label (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_name_label.htm)
