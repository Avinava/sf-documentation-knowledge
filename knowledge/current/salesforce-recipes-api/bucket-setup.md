---
title: "Bucket Setup"
domain: salesforce-recipes-api
topic: bucket-setup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:05:25.308Z
estimatedTokens: 210
keywords: [Bucket, Setup, node, recipe]
---

# Bucket Setup

> The setup for a bucket node field in a recipe.

# Bucket Setup

The setup for a bucket node field in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| algorithm | Abstract​Bucket​Algorithm | The bucketing algorithm. Valid values are:Typographic​Cluster | Small, v52.0 | 52.0 |
| buckets | Bucket | The buckets. Valid values are:Bucket​Date​BucketBucket​Dimension​BucketBucket​Measure​Bucket | Small, v51.0 | 51.0 |
| default​Bucket​Value | String | The default bucket value. | Small, v51.0 | 51.0 |
| is​Pass​Through​Enabled | Boolean | Indicates whether pass through is enabled (true) or not (false). | Small, v51.0 | 51.0 |
| null​Bucket​Value | String | The null bucket value | Small, v51.0 | 51.0 |
| source​Field | Bucket​Source​Field | The bucket source fields. | Small, v51.0 | 51.0 |

## Related Topics

- Abstract​Bucket​Algorithm (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_abstract_bucket_algorithm.htm)
- Typographic​Cluster (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_typographic_cluster.htm)
- Bucket (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_bucket.htm)
- Bucket​Date​Bucket (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_bucket_date_bucket.htm)
- Bucket​Dimension​Bucket (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_bucket_dimension_bucket.htm)
- Bucket​Measure​Bucket (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_bucket_measure_bucket.htm)
- Bucket​Source​Field (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_bucket_source_field.htm)
