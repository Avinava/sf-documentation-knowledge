---
title: "Output D360 Parameters"
domain: salesforce-recipes-api
topic: output-d360-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.849Z
estimatedTokens: 146
keywords: [Output, D360, node, recipe]
---

# Output D360 Parameters

> The parameters for an output D360 node in a recipe.

# Output D360 Parameters

The parameters for an output D360 node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fields​Mapping | Output​D360​Fields​Mapping[] | The list of field mappings. | Small, v56.0 | 56.0 |
| name | String | The name of the D360 object. | Small, v56.0 | 56.0 |
| streaming | Streaming​Parameters[] | The streaming parameters. | Small, v57.0 | 57.0 |
| type | Recipe​D360​Output​Type | The output type. Valid values are:Date​Lake​Object | Small, v56.0 | 56.0 |

## Related Topics

- Output​D360​Fields​Mapping (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_output_d360_fields_mapping.htm)
- Streaming​Parameters (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_streaming_parameters.htm)
