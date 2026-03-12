---
title: "Recipe Definition Input"
domain: salesforce-recipes-api
topic: recipe-definition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.412Z
estimatedTokens: 395
keywords: [Recipe, Definition, Input, data, prep, recipes]
---

# Recipe Definition Input

> The definition for a data prep recipe. Available on for R3 recipes.

# Recipe Definition Input

The definition for a data prep recipe. Available on for R3 recipes.

## Properties

As of October 14, 2025, Data Cloud has been rebranded to Data 360. During this transition, you may see references to Data Cloud in our application and documentation. While the name is new, the functionality and content remains unchanged.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The recipe definition name. | Required | 49.0 |
| nodes | Map<String, Recipe​Node​Input> | The map of recipe nodes by name. Valid values are:Aggregate NodeAppend Node InputAppend V2 Node InputBucket Node InputBucket V@ Node InputCluster Node InputCompute Relative Node InputDetect Sentiment Node InputDiscovery Node InputExport Node InputExtension Node InputExtract Grain Node InputFilter Node InputFlatten Node InputFormat Date Node InputFormula Node InputJoin Node InputLoad Node InputOptimized Append Node InputOptimized Update Node InputOutput D360 Node InputOutput Data Cloud Node InputOutput External Node InputPredict Values Node InputRecommendation Node InputSave Node InputSchema Node InputSplit Node InputSQL Filter Node InputTime Series Node InputTime Series V2 Node InputTypecast Node InputUpdate Node Input | Required | 49.0 |
| run​Mode | Recipe​Run​Mode | The recipe run mode. Valid values are:FullIncrementalStreaming | Required | 57.0 |
| version | String | The recipe definition version. | Required | 49.0 |
| ui | Object | The recipe definition UI metadata. | Required | 49.0 |

## Related Topics

- Recipe​Node​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_node_input.htm)
- Aggregate Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_aggregate_node_input.htm)
- Append Node Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_append_node_input.htm)
- Append V2 Node
          Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_appendv2_node_input.htm)
- Bucket Node Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_v2_node_input.htm)
- Bucket V@ Node Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_node_input.htm)
- Cluster Node Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_cluster_node_input.htm)
- Compute Relative Node
           Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_compute_relative_node_input.htm)
- Detect Sentiment Node
           Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_detect_sentiment_node_input.htm)
- Discovery Node
          Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_discovery_node_input.htm)
