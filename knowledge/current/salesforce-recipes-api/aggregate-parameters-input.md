---
title: "Aggregate Parameters Input"
domain: salesforce-recipes-api
topic: aggregate-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.104Z
estimatedTokens: 233
keywords: [Aggregate, Input, data, node, recipe]
---

# Aggregate Parameters Input

> The parameters for an aggregate data node in a recipe.

# Aggregate Parameters Input

The parameters for an aggregate data node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| aggregations | Aggregate​Input[] | The list of aggregations for the node. | Required | 49.0 |
| groupings | String[] | The list of groupings for the node. | Required | 49.0 |
| node​Type | Recipe​Aggregate​Node​Enum | The aggregate type for the node. Valid values are:HierarchicalStandard | Required | 49.0 |  |
| parent​Field | String | The parent field for the node | Required | 53.0 |  |
| percentage​Field | String | The percentage field for the node | Required | 53.0 |  |
| pivot_v2 | PivotV2​Input[] | The pivot v2 data for the node. | Optional | 54.0 |
| pivots | Pivot​Input[] | The list of pivots for the node. | Required | 51.0 |
| self​Field | String | The self field for the node | Required | 53.0 |  |

## Related Topics

- Aggregate​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_aggregate_input.htm)
- PivotV2​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_pivotv2_input.htm)
- Pivot​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_pivot_input.htm)
