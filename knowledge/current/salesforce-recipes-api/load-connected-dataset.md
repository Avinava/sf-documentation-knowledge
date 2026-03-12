---
title: "Load Connected Dataset"
domain: salesforce-recipes-api
topic: load-connected-dataset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.813Z
estimatedTokens: 197
keywords: [Load, Connected, Dataset, node, recipe]
---

# Load Connected Dataset

> A connected dataset for a load node in a recipe.

# Load Connected Dataset

A connected dataset for a load node in a recipe.

## Properties

Inherits properties from [Load Dataset](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_load_dataset.htm "The base dataset for a load node in a recipe.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| connection​Name | String | The name of the connection. | Small, v51.0 | 51.0 |
| filter | Filter​Parameters | The pushdown filter. | Small, v52.0 | 52.0 |
| mode | Connected​Mode​Enum | >The mode for accessing connected datasets. Valid values are:AUTODIRECTSYNCED | Small, v65.0 | 65.0 |
| source​Object​Name | String | The name of the source object. | Small, v51.0 | 51.0 |

## Related Topics

- Load Dataset (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_load_dataset.htm)
- Filter​Parameters (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_filter_parameters.htm)
