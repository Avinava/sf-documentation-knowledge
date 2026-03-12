---
title: "Output External Parameters"
domain: salesforce-recipes-api
topic: output-external-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.870Z
estimatedTokens: 234
keywords: [Output, External, node, recipe]
---

# Output External Parameters

> The parameters for an output external node in a recipe.

# Output External Parameters

The parameters for an output external node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| connection​Name | String | The connection name. | Small, v51.0 | 51.0 |
| external​Id​Field​Name | String | The field name for the external ID. | Small, v51.0 | 51.0 |
| fields​Mapping | Output​External​Field​Mapping[] | The list of field mappings. | Small, v51.0 | 51.0 |
| hyper​File​Name | String | The name of hyper file. | Small, v54.0 | 54.0 |
| object | String | The object name. | Small, v51.0 | 51.0 |
| operation | Recipe​Output​External​Operation | The output external operation type. Valid values are:EmptyInsertUpdateUpsert | Small, v51.0 | 51.0 |
| named​Credential | Map<String,String> | A map of key/value pairs of a named credential for a virtual private connection (VPC). | Small, v65.0 | 65.0 |

## Related Topics

- Output​External​Field​Mapping (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_output_external_field_mapping.htm)
