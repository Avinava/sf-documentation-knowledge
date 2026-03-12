---
title: "Save Parameters Input"
domain: salesforce-recipes-api
topic: save-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.453Z
estimatedTokens: 136
keywords: [Save, Input, node, recipe]
---

# Save Parameters Input

> The parameters for a save node in a recipe.

# Save Parameters Input

The parameters for a save node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataset | Save​Dataset​Input | The dataset to save. | Required | 51.0 |
| date​Configuration​Name | String | The date configuration name. | Required | 55.0 |
| fields | String[] | The list of fields to save. | Required | 51.0 |
| measures​To​Currencies | Measure​To​Currency​Input[] | A list of the measures to currencies. | Required | 56.0 |

## Related Topics

- Save​Dataset​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_save_dataset_input.htm)
- Measure​To​Currency​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_measure_to_currency_input.htm)
