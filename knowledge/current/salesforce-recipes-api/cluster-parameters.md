---
title: "Cluster Parameters"
domain: salesforce-recipes-api
topic: cluster-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.195Z
estimatedTokens: 217
keywords: [Cluster, node, recipe]
---

# Cluster Parameters

> The parameters for a cluster node in a recipe.

# Cluster Parameters

The parameters for a cluster node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cluster​Count | Integer | The cluster count. | Small, v49.0 | 49.0 |
| find​Optimal​Clusters | Boolean | Indicates whether to find the optimal clusters (true) or (not). | Small, v53.0 | 53.0 |
| produce​Scaled​Columns | Boolean | Indicates whether to produce scaled columns (true) or (not). | Small, v53.0 | 53.0 |
| scaling | Measure​Scaling​Type​Enum | The scaling type. Valid values are:Min​Max​Scaling | Small, v53.0 | 53.0 |
| source​Fields | String[] | The source fields. | Small, v51.0 | 51.0 |
| target​Field | Recipe​Name​Label | The target field. | Small, v51.0 | 51.0 |
| target​Scaled​Fields | Recipe​Name​Label[] | A list of target scaled fields. | Small, v53.0 | 53.0 |

## Related Topics

- Recipe​Name​Label​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_name_label_input.htm)
- Recipe​Name​Label (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_name_label.htm)
