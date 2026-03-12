---
title: "Bucket V2 Parameters"
domain: salesforce-recipes-api
topic: bucket-v2-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.701Z
estimatedTokens: 257
keywords: [Bucket, paramters, version, node, recipe]
---

# Bucket V2 Parameters

> A paramters for a version 2 bucket node in a recipe.

# Bucket V2 Parameters

A paramters for a version 2 bucket node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| algorithm | Abstract​Bucket​Algorithm[] | The bucket algorithm. Valid bucket algorithms are:Typographic​Cluster | Small, 64.0 | 64.0 |
| buckets | Bucket​V2[] | A list of the buckets for the node. | Small, 64.0 | 64.0 |
| default​Bucket | Object | A default bucket for the node. | Small, 64.0 | 64.0 |
| multi​Value​Result | boolean | Indicates whether the bucket result is multi-value (true) or not (false). | Small, 64.0 | 64.0 |
| null​Bucket | Object | A null bucket for the node. | Small, 64.0 | 64.0 |
| passthrough​Enabled | boolean | Indicates whether pass through is enabled for the bucket (true) or not (false). | Small, 64.0 | 64.0 |
| source​Field | String | The source field for the bucket. | Small, 64.0 | 64.0 |
| target​Field | Target​Field | The target field for the bucket. | Small, 64.0 | 64.0 |

## Related Topics

- Abstract​Bucket​Algorithm (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_abstract_bucket_algorithm.htm)
- Typographic​Cluster (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_typographic_cluster.htm)
- Bucket​V2 (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_bucket_v2.htm)
- Target​Field (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_target_field.htm)
