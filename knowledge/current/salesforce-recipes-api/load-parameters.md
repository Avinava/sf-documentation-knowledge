---
title: "Load Parameters"
domain: salesforce-recipes-api
topic: load-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.827Z
estimatedTokens: 243
keywords: [Load, node, recipe]
---

# Load Parameters

> The parameters for a load node in a recipe.

# Load Parameters

The parameters for a load node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataset | Load​Dataset | The dataset to load. Valid values are:Load Analytics DatasetLoad Connected DatasetLoad Data Lake ObjectLoad Data Model Object | Small, v51.0 | 51.0 |
| fields | String[] | The list of fields to load. | Small, v51.0 | 51.0 |
| preserve​Currency​Fields | String[] | The list of fields to preserve currency for. | Small, v65.0 | 65.0 |
| purge​Cache | Boolean | Indicates whether to purge the cache (true) or not (false). | Small, v57.0 | 57.0 |
| run​Mode | Input​Run​Mode​Enum | The input run mode. Valid values are:FullIncrementalStreaming | Small, v57.0 | 57.0 |
| sample​Details | Sample​Parameters | The sample parameters for the dataset load. | Small, v55.0 | 55.0 |
| sample​Size | Integer | The number of rows to load. | Small, v51.0 | 51.0 |

## Related Topics

- Load​Dataset (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_load_dataset.htm)
- Load Analytics Dataset (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_load_analytics_dataset.htm)
- Load Connected Dataset (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_load_connected_dataset.htm)
- Load Data Lake Object (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_load_data_lake_object.htm)
- Load Data Model Object (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_load_data_model_object.htm)
- Sample​Parameters (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_sample_parameters.htm)
