---
title: "Load Connected Dataset Input"
domain: salesforce-recipes-api
topic: load-connected-dataset-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.298Z
estimatedTokens: 192
keywords: [Load, Connected, Dataset, Input]
---

# Load Connected Dataset Input

> A connected dataset to load.

# Load Connected Dataset Input

A connected dataset to load.

## Properties

Inherits properties from [Load Dataset Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_dataset_input.htm "The base dataset for a load node in a recipe.").

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| connection​Name | String | The name of the connection. | Required | 51.0 |
| filter | Filter​Parameters​Input | The pushdown filter. | Optional | 52.0 |
| mode | Connected​Mode​Enum | >The mode for accessing connected datasets. Valid values are:AUTODIRECTSYNCED | Optional | 65.0 |
| source​Object​Name | String | The name of the source object. | Required | 51.0 |

## Related Topics

- Load Dataset Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_dataset_input.htm)
- Filter​Parameters​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_filter_parameters_input.htm)
