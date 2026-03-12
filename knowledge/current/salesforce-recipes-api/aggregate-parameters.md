---
title: "Aggregate Parameters"
domain: salesforce-recipes-api
topic: aggregate-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.608Z
estimatedTokens: 236
keywords: [Aggregate, data, node, recipe]
---

# Aggregate Parameters

> The parameters for an aggregate data node in a recipe.

# Aggregate Parameters

The parameters for an aggregate data node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aggregations | Aggregate[] | The list of aggregations for the node. | Small, v51.0 | 51.0 |
| groupings | String[] | The list of groupings for the node. | Small, v51.0 | 51.0 |
| node​Type | Recipe​Aggregate​Node​Enum | The aggregate type for the node. Valid values are:HierarchicalStandard | Small, v53.0 | 53.0 |  |
| parent​Field | String | The parent field for the node | Small, v53.0 | 53.0 |  |
| percentage​Field | String | The percentage field for the node | Small, v53.0 | 53.0 |  |
| pivot_v2 | PivotV2[] | The pivot v2 data for the node. | Small, v54.0 | 54.0 |
| pivots | Pivot[] | The list of pivots for the node. | Small, v51.0 | 51.0 |
| self​Field | String | The self field for the node | Small, v53.0 | 53.0 |  |

## Related Topics

- Aggregate (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_aggregate.htm)
- PivotV2 (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_pivotv2.htm)
- Pivot (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_pivot.htm)
