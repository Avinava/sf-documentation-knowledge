---
title: "Format Date Parameters Input"
domain: salesforce-recipes-api
topic: format-date-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:05:24.654Z
estimatedTokens: 140
keywords: [Date, Input, conversion, node, recipe]
---

# Format Date Parameters Input

> The parameters for a date format conversion node in a recipe.

# Format Date Parameters Input

The parameters for a date format conversion node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| source​Field | String | The source field. | Required | 51.0 |
| source​Formats | Format​Date​Pattern​Input[] | The list of source date formats. | Required | 51.0 |
| target​Field | Recipe​Name​Label​Input | The target field. | Required | 51.0 |
| target​Format | Format​Date​Pattern​Input | The target date format. | Required | 51.0 |

## Related Topics

- Format​Date​Pattern​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_format_date_pattern_input.htm)
- Recipe​Name​Label​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_name_label_input.htm)
