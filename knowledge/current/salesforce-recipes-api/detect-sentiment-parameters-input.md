---
title: "Detect Sentiment Parameters Input"
domain: salesforce-recipes-api
topic: detect-sentiment-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:39:18.241Z
estimatedTokens: 190
keywords: [Detect, Sentiment, node, recipe]
---

> The parameters for a detect sentiment node in a recipe.

# Detect Sentiment Parameters Input

The parameters for a detect sentiment node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| output​Type | Detect​Sentiment​Output​Type​Enum | The output type. Valid values are:DimensionMeasure | Required | 54.0 |
| sentiment​Score | Sentiment​Score​Type​Enum | The sentiment score type. Valid values are:AllNone | Required | 54.0 |
| source​Field | String | The source field. | Required | 51.0 |
| target​Field | Recipe​Name​Label​Input | The target field. | Required | 51.0 |
| target​Sentiment​Score​Fields | Map<String, Map<String, Recipe​Name​Label​Input> | The collection of target confidence fields. | Required | 54.0 |

## Related Topics

- Recipe​Name​Label​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_name_label_input.htm)
