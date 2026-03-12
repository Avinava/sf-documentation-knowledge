---
title: "Schema Field Type Properties Input"
domain: salesforce-recipes-api
topic: schema-field-type-properties-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.466Z
estimatedTokens: 189
keywords: [Schema, Input, node, recipe]
---

# Schema Field Type Properties Input

> The field type properties for a schema node in a recipe.

# Schema Field Type Properties Input

The field type properties for a schema node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| format | String | The DateTime format. | Optional | 51.0 |
| length | Integer | The total length of the text. | Required | 51.0 |
| precision | Integer | The length of an arbitrary precision value. | Optional | 51.0 |
| scale | Integer | The number of digits to the right of the decimal point. | Optional | 51.0 |
| symbols | Schema​Field​Format​Symbols​Input | The number format. | Optional | 51.0 |
| type | Recipe​Data​Type | The recipe data type. Valid values are:Date​OnlyDate​TimeMultivalueNumberText | Required | 51.0 |

## Related Topics

- Schema​Field​Format​Symbols​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_schema_field_format_symbols_input.htm)
