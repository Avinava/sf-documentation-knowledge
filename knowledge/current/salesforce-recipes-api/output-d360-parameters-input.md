---
title: "Output D360 Parameters Input"
domain: salesforce-recipes-api
topic: output-d360-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.335Z
estimatedTokens: 146
keywords: [Output, D360, Input, node, recipe]
---

# Output D360 Parameters Input

> The parameters for an output D360 node in a recipe.

# Output D360 Parameters Input

The parameters for an output D360 node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields​Mapping | Output​D360​Fields​Mapping​Input[] | The list of field mappings. | Required | 56.0 |
| name | String | The name of the D360 object. | Required | 56.0 |
| streaming | Streaming​Parameters​Input[] | The streaming parameters. | Required | 57.0 |
| type | Recipe​D360​Output​Type | The output type. Valid values are:Date​Lake​Object | Required | 56.0 |

## Related Topics

- Output​D360​Fields​Mapping​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_output_d360_fields_mapping_input.htm)
- Streaming​Parameters​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_streaming_parameters_input.htm)
