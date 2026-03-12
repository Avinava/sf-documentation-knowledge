---
title: "Bucket Setup Input"
domain: salesforce-recipes-api
topic: bucket-setup-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:42.174Z
estimatedTokens: 314
keywords: [Bucket, Setup, Input, base, node, recipe]
---

# Bucket Setup Input

> The base field setup for a bucket node in a recipe.

# Bucket Setup Input

The base field setup for a bucket node in a recipe.

## Properties

d

Inherited by [Bucket Date Setup Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_date_setup_input.htm "The date setup for a bucket node in a recipe."), [Bucket Dimension Setup Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_dimension_setup_input.htm "The dimension field setup for a bucket node in a recipe."), and [Bucket Measure Setup Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_measure_setup_input.htm "The measure field setup for a bucket node in a recipe.")

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| algorithm | Abstract​Bucket​Algorithm​Input | The bucketing algorithm. Valid values are:Typographic​Cluster​Input | Required | 52.0 |
| default​Bucket​Value | String | The default bucket value. | Required | 51.0 |
| is​Pass​Through​Enabled | Boolean | Indicates whether pass through is enabled (true) or not (false). | Required | 51.0 |
| null​Bucket​Value | String | The null bucket value | Required | 51.0 |

## Related Topics

- Bucket Date Setup Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_date_setup_input.htm)
- Bucket Dimension Setup Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_dimension_setup_input.htm)
- Bucket Measure Setup Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_measure_setup_input.htm)
- Abstract​Bucket​Algorithm​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_abstract_bucket_algorithm_input.htm)
- Typographic​Cluster​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_typographic_cluster_input.htm)
