---
title: "Output External Parameters Input"
domain: salesforce-recipes-api
topic: output-external-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:05:24.795Z
estimatedTokens: 229
keywords: [Output, External, Input, node, recipe]
---

# Output External Parameters Input

> The parameters for an output external node in a recipe.

# Output External Parameters Input

The parameters for an output external node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| connection​Name | String | The connection name. | Required | 51.0 |
| external​Id​Field​Name | String | The field name for the external ID. | Required | 51.0 |
| fields​Mapping | Output​External​Field​Mapping​Input[] | The list of field mappings. | Required | 56.0 |
| hyper​File​Name | String | The name of hyper file. | Required | 54.0 |
| object | String | The object name. | Required | 51.0 |
| operation | Recipe​Output​External​Operation | The output external operation type. Valid values are:EmptyInsertUpdateUpsert | Required | 51.0 |
| named​Credential | Map<String,String> | A map of key/value pairs of a named credential for a virtual private connection (VPC). | Optional | 65.0 |

## Related Topics

- Output​External​Field​Mapping​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_output_external_field_mapping_input.htm)
