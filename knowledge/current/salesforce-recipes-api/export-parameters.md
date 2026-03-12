---
title: "Export Parameters"
domain: salesforce-recipes-api
topic: export-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.747Z
estimatedTokens: 187
keywords: [Export, node, recipe]
---

# Export Parameters

> The parameters for an export node in a recipe.

# Export Parameters

The parameters for an export node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| csv​Header​Row​Value​Type | Recipe​Export​Csv​Header​Row​Value​Type | The type of the recipe export CSV header row value. Valid values are:Fully​Qualified​NameLabel | Small, v53.0 | 53.0 |
| fields | String[] | The list of fields to select. | Small, v51.0 | 51.0 |
| format | Recipe​Export​Format | The format of the export. Valid values are:CSV. | Small, v51.0 | 51.0 |
| limits​Per​Part | Export​Limits | The limits to export. | Small, v51.0 | 51.0 |
| user​Id | String | The user ID with access to the exported data. | Small, v51.0 | 51.0 |

## Related Topics

- Export​Limits (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_export_limits.htm)
