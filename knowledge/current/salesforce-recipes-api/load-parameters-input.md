---
title: "Load Parameters Input"
domain: salesforce-recipes-api
topic: load-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.313Z
estimatedTokens: 246
keywords: [Load, Input, node, recipe]
---

# Load Parameters Input

> The parameters for a load node in a recipe.

# Load Parameters Input

The parameters for a load node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataset | Load​Dataset​Input | The dataset to load. Valid values are:Load Analytics Dataset InputLoad Connected Dataset InputLoad Data Lake Object InputLoad Data Model ObjectInput | Required | 51.0 |
| fields | String[] | The list of fields to load. | Required | 51.0 |
| preserve​Currency​Fields | String[] | The list of fields to preserve currency for. | Optional | 65.0 |
| purge​Cache | Boolean | Indicates whether to purge the cache (true) or not (false). | Optional | 57.0 |
| run​Mode | Input​Run​Mode​Enum | The input run mode. Valid values are:FullIncrementalStreaming | Optional | 57.0 |
| sample​Details | Sample​Parameters​Input | The sample parameters for the dataset load. | Required | 55.0 |
| sample​Size | Integer | The number of rows to load. | Required | 51.0 |

## Related Topics

- Load​Dataset​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_dataset_input.htm)
- Load Analytics Dataset Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_analytics_dataset_input.htm)
- Load Connected Dataset Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_connected_dataset_input.htm)
- Load Data Lake Object Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_data_lake_object_input.htm)
- Load Data Model ObjectInput (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_data_model_object_input.htm)
- Sample​Parameters​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sample_parameters_input.htm)
