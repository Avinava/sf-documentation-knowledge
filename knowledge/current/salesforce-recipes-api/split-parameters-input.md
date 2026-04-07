---
title: "Split Parameters Input"
domain: salesforce-recipes-api
topic: split-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:39:18.716Z
estimatedTokens: 106
keywords: [Split, node, recipe]
---

> The parameters for a split node in a recipe.

# Split Parameters Input

The parameters for a split node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| delimiter | String | The split delimiter. | Required | 51.0 |
| source​Field | String | The source field. | Required | 51.0 |
| target​Fields | Recipe​Name​Label​Input[] | The list of target fields. | Required | 51.0 |

## Related Topics

- Recipe​Name​Label​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_name_label_input.htm)
