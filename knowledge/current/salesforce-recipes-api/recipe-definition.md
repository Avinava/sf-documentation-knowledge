---
title: "Recipe Definition"
domain: salesforce-recipes-api
topic: recipe-definition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.939Z
estimatedTokens: 347
keywords: [Recipe, Definition, data, prep, recipes]
---

# Recipe Definition

> The definition for a data prep recipe. Available on for R3 recipes.

# Recipe Definition

The definition for a data prep recipe. Available on for R3 recipes.

## Properties

As of October 14, 2025, Data Cloud has been rebranded to Data 360. During this transition, you may see references to Data Cloud in our application and documentation. While the name is new, the functionality and content remains unchanged.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The recipe definition name. | Small, 49.0 | 49.0 |
| nodes | Map<String, Recipe​Node> | The map of recipe nodes by name. Valid values are:Aggregate NodeAppend NodeAppend V2 NodeBucket NodeBucket V2 NodeCluster NodeCompute Relative NodeDetect Sentiment NodeDiscovery NodeExport NodeExtension NodeExtract NodeFilter NodeFlatten NodeFormat Date NodeFormula NodeJoin NodeLoad NodeOptimized Append NodeOptimized Update NodeOutput D360 NodeOutput Data Cloud NodeOutput External NodePredict Values NodeRecommendation NodeSave NodeSchema NodeSplit NodeSQL Filter NodeTime Series NodeTime Series V2 NodeTypecast NodeUpdate Node | Small, 51.0 | 51.0 |
| run​Mode | Recipe​Run​Mode | The recipe run mode. Valid values are:FullIncrementalStreaming | Small, v57.0 | 57.0 |
| version | String | The recipe definition version. | Small, 49.0 | 49.0 |
| ui | Object | The recipe definition UI metadata. | Small, 49.0 | 49.0 |

## Related Topics

- Recipe​Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_node.htm)
- Aggregate Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_aggregate_node.htm)
- Append Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_append_node.htm)
- Append V2 Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_appendv2_node.htm)
- Bucket Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_bucket_node.htm)
- Bucket V2 Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_bucket_v2_node.htm)
- Cluster Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_cluster_node.htm)
- Compute Relative
           Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_compute_relative_node.htm)
- Detect Sentiment
           Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_detect_sentiment_node.htm)
- Discovery Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_discovery_node.htm)
