---
title: "Recipe Node"
domain: salesforce-recipes-api
topic: recipe-node
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.948Z
estimatedTokens: 1702
keywords: [Recipe, Node, base]
---

# Recipe Node

> The base node for a recipe.

# Recipe Node

The base node for a recipe.

## Properties

As of October 14, 2025, Data Cloud has been rebranded to Data 360. During this transition, you may see references to Data Cloud in our application and documentation. While the name is new, the functionality and content remains unchanged.

Inherited by [Aggregate Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_aggregate_node.htm "An aggregate data node in a recipe."), [Append Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_append_node.htm "An append node in a recipe."), [Append V2 Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_appendv2_node.htm "A version 2 append node in a recipe."), [Bucket Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_bucket_node.htm "A bucket node in a recipe."), [Bucket V2 Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_bucket_v2_node.htm "A version 2 bucket node in a recipe, with improved functionality."), [Cluster Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_cluster_node.htm "A cluster node in a recipe."), [Compute Relative Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_compute_relative_node.htm "A compute relative node in a recipe."), [Detect Sentiment Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_detect_sentiment_node.htm "A detect sentiment node in a recipe."), [Discovery Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_discovery_node.htm "An Einstein Discovery predict node in a recipe."), [Export Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_export_node.htm "An export node in a recipe."), [Extension Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_extension_node.htm "An extension node in a recipe."), [Extract Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_extract_node.htm "An extract grain node in a recipe."), [Filter Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_filter_node.htm "A filter node in a recipe."), [Flatten Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_flatten_node.htm "A flatten node in a recipe."), [Format Date Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_format_date_node.htm "A date format conversion node in a recipe."), [Formula Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_formula_node.htm "A formula node in a recipe."), [Join Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_join_node.htm "A join node in a recipe."), [Load Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_load_node.htm "A load node in a recipe."), [Optimized Append Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_optimized_append_node.htm "An optimized append node in a recipe."), [Optimized Update Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_optimized_update_node.htm "An optimized update node in a recipe."), [Output D360 Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_output_d360_node.htm "An output D360 node in a recipe."), [Output Data Cloud Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_output_data_cloud_node.htm "An output node in a recipe to write to Data 360."), [Output External Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_output_external_node.htm "An output external node in a recipe."), [Predict Values Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_predict_values_node.htm "A predict missing values node in a recipe."), [Recommendation Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recommendation_node.htm "A recommendation node in a recipe."), [Save Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_save_node.htm "A save data node in a recipe."), [Schema Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_schema_node.htm "A schema node in a recipe."), [Split Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_split_node.htm "A split node in a recipe."), [SQL Filter Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_sql_filter_node.htm "A SQL filter node in a recipe."), [Time Series Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_time_series_node.htm "A time series node in a recipe."), [Time Series V2 Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_time_series_v2_node.htm "A time series version 2 node in a recipe."), [Typecast Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_typecast_node.htm "A typecast node in a recipe."), [Update Data Cloud Object Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_update_data_cloud_object_node.htm "A Data 360 object update node in a recipe."), and [Update Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_update_node.htm "An update node in a recipe.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| action | Recipe​Node​Action | The recipe node action. Valid recipe actions are:AggregateAppendAppend_V2BucketBucket V2ClusteringCompute​RelativeDate​Format​ConversionDetect​SentimentDiscovery​PredictExportExtensionExtractFilterFlattenFormulaJoinLoadOptimized​Append​OutputOptimized​Update​OutputOutput​D360Output​ExternalPredict​Missing​ValuesRecommendationSaveSchemaSplitSql​FilterTime​SeriesTime​Series​V2Type​CastUpdateiUpdate​Data​Cloud​ObjectWrite​Data​Cloud​Object | Small, v51.0 | 51.0 |
| schema | Schema​Node | The schema changes for the node. | Small, v51.0 | 51.0 |
| sources | String[] | The input node ids. | Small, v51.0 | 51.0 |

## Related Topics

- Aggregate Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_aggregate_node.htm)
- Append
     Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_append_node.htm)
- Append V2 Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_appendv2_node.htm)
- Bucket
     Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_bucket_node.htm)
- Bucket V2 Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_bucket_v2_node.htm)
- Cluster
     Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_cluster_node.htm)
- Compute Relative Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_compute_relative_node.htm)
- Detect Sentiment Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_detect_sentiment_node.htm)
- Discovery Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_discovery_node.htm)
- Export Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_export_node.htm)
