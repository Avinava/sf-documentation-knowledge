---
title: "Export Parameters Input"
domain: salesforce-recipes-api
topic: export-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.231Z
estimatedTokens: 175
keywords: [Export, Input, node, recipe]
---

# Export Parameters Input

> The parameters for an export node in a recipe.

# Export Parameters Input

The parameters for an export node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| csv​Header​Row​Value​Type | Recipe​Export​Csv​Header​Row​Value​Type | The type of the recipe export CSV header row value. Valid values are:Fully​Qualified​NameLabel | Required | 53.0 |
| fields | String[] | The list of fields to export. | Required | 51.0 |
| format | String | The format of the export. | Required | 51.0 |
| limits​Per​Part | Export​Limits​Input | The limits to export. | Required | 51.0 |
| user​Id | String | The user ID with access to the exported data. | Required | 51.0 |

## Related Topics

- Export​Limits​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_export_limits_input.htm)
