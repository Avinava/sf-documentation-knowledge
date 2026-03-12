---
title: "Bucket V2 Parameters Input"
domain: salesforce-recipes-api
topic: bucket-v2-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.188Z
estimatedTokens: 258
keywords: [Bucket, Input, paramters, version, node, recipe]
---

# Bucket V2 Parameters Input

> A paramters for a version 2 bucket node in a recipe.

# Bucket V2 Parameters Input

A paramters for a version 2 bucket node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| algorithm | Abstract​Bucket​Algorithm​Input[] | The bucket algorithm. Valid bucket algorithms are:Typographic​Cluster​Input | Required | 64.0 |
| buckets | Bucket​V2​Input[] | A list of the buckets for the node. | Required | 64.0 |
| default​Bucket | Object | A default bucket for the node. | Required | 64.0 |
| multi​Value​Result | boolean | Indicates whether the bucket result is multi-value (true) or not (false). | Optional | 64.0 |
| null​Bucket | Object | A null bucket for the node. | Optional | 64.0 |
| passthrough​Enabled | boolean | Indicates whether pass through is enabled for the bucket (true) or not (false). | Optional | 64.0 |
| source​Field | String | The source field for the bucket. | Required | 64.0 |
| target​Field | Target​Field​Input | The target field for the bucket. | Required | 64.0 |

## Related Topics

- Abstract​Bucket​Algorithm​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_abstract_bucket_algorithm_input.htm)
- Typographic​Cluster​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_typographic_cluster_input.htm)
- Bucket​V2​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_v2_input.htm)
- Target​Field​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_target_field_input.htm)
