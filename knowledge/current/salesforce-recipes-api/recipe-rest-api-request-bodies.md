---
title: "Recipe REST API Request Bodies"
domain: salesforce-recipes-api
topic: recipe-rest-api-request-bodies
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.374Z
estimatedTokens: 7637
keywords: [Recipe, REST, API, Bodies, perform, POST, PATCH, PUT, pass, query, formatted, either, XML, JSON, chapter]
---

# Recipe REST API Request Bodies

> To perform a POST, PATCH, or PUT request, pass query parameters
  or create a request body formatted in either XML or JSON. This chapter
  lists the request bodies. The query parameters are listed with each
  resource.

# Recipe REST API Request Bodies

To perform a POST, PATCH, or PUT request, pass query parameters or create a request body formatted in either XML or JSON. This chapter lists the request bodies. The query parameters are listed with each resource.

To create a JSON request body, specify the properties of the request body in JSON format.

This is an example of a Comment request body.

```

```

If a request body is top-level, it has a root XML tag listed. To create an XML request body, nest the properties as XML tags inside the root XML tag.

This is the same request body in XML format:

```

```

-   **[Abstract Bucket Algorithm Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_abstract_bucket_algorithm_input.htm)**
    The base bucket algorithm for a recipe.
-   **[Aggregate Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_aggregate_input.htm)**
    The aggregate data for a recipe node.
-   **[Aggregate Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_aggregate_node_input.htm)**
    An aggregate data node in a recipe.
-   **[Aggregate Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_aggregate_parameters_input.htm)**
    The parameters for an aggregate data node in a recipe.
-   **[Append Mapping Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_append_mapping_input.htm)**
    A mapping for an append node in a recipe.
-   **[Append Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_append_node_input.htm)**
    An append node in a recipe.
-   **[Append Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_append_parameters_input.htm)**
    The parameters for an append node in a recipe.
-   **[Append V2 Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_appendv2_node_input.htm)**
    A version 2 append node in a recipe.
-   **[Bucket Date Argument Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_date_argument_input.htm)**
    The argument for a bucket node date field in a recipe.
-   **[Bucket Date Bucket Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_date_bucket_input.htm)**
    A bucket for a bucket node date field in a recipe.
-   **[Bucket Date Only Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_date_only_field_input.htm)**
    A date only field for a bucket node in a recipe.
-   **[Bucket Date Setup Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_date_setup_input.htm)**
    The date setup for a bucket node in a recipe.
-   **[Bucket Date Source Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_date_source_field_input.htm)**
    A date source field for a bucket node in a recipe.
-   **[Bucket Date Time Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_date_time_field_input.htm)**
    A date time field for a bucket node in a recipe.
-   **[Bucket Dimension Bucket Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_dimension_bucket_input.htm)**
    A bucket for a bucket node dimension field in a recipe.
-   **[Bucket Dimension Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_dimension_field_input.htm)**
    A dimension field for a bucket node in a recipe.
-   **[Bucket Dimension Setup Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_dimension_setup_input.htm)**
    The dimension field setup for a bucket node in a recipe.
-   **[Bucket Dimension Source Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_dimension_source_field_input.htm)**
    A dimension source field for a bucket node in a recipe.
-   **[Bucket Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_field_input.htm)**
    A field for a bucket node in a recipe.
-   **[Bucket Measure Bucket Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_measure_bucket_input.htm)**
    A bucket for a bucket node measure field in a recipe.
-   **[Bucket Measure Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_measure_field_input.htm)**
    A measure field for a bucket node in a recipe.
-   **[Bucket Measure Setup Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_measure_setup_input.htm)**
    The measure field setup for a bucket node in a recipe.
-   **[Bucket Measure Source Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_measure_source_field_input.htm)**
    A measure source field for a bucket node in a recipe.
-   **[Bucket Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_node_input.htm)**
    A bucket node in a recipe.
-   **[Bucket Parameters](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_parameters_input.htm)**
    The parameters for a bucket node in a recipe.
-   **[Bucket Setup Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_setup_input.htm)**
    The base field setup for a bucket node in a recipe.
-   **[Bucket Term Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_term_input.htm)**
    A bucket term in a recipe node.
-   **[Bucket V2 Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_v2_input.htm)**
    A version 2 bucket in a recipe.
-   **[Bucket V2 Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_v2_node_input.htm)**
    A version 2 bucket node in a recipe, with improved functionality.
-   **[Bucket V2 Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_v2_parameters_input.htm)**
    A paramters for a version 2 bucket node in a recipe.
-   **[Cluster Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_cluster_node_input.htm)**
    A cluster node in a recipe.
-   **[Cluster Parameters](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_cluster_parameters_input.htm)**
    The parameters for a cluster node in a recipe.
-   **[Compute Relative Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_compute_relative_node_input.htm)**
    A compute relative node in a recipe.
-   **[Compute Relative Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_compute_relative_parameters_input.htm)**
    The parameters for a compute relative node in a recipe.
-   **[Compute Relative Sort Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_compute_relative_sort_parameters_input.htm)**
    The sort parameters for a compute relative node in a recipe.
-   **[Data Object Category Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_data_object_category_input.htm)**
    The data object category for an Output Data Cloud node.
-   **[Detect Sentiment Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_detect_sentiment_node_input.htm)**
    A detect sentiment node in a recipe.
-   **[Detect Sentiment Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_detect_sentiment_parameters_input.htm)**
    The parameters for a detect sentiment node in a recipe.
-   **[Discovery Contributor Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_discovery_contributor_input.htm)**
    The discovery contributor for an Einstein Discovery prediction field.
-   **[Discovery Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_discovery_node_input.htm)**
    An Einstein Discovery prediction node in a recipe.
-   **[Discovery Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_discovery_parameters_input.htm)**
    The parameters for an Einstein Discovery prediction node in a recipe.
-   **[Export Limits Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_export_limits_input.htm)**
    The limits for an export node in a recipe.
-   **[Export Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_export_node_input.htm)**
    An export node in a recipe.
-   **[Export Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_export_parameters_input.htm)**
    The parameters for an export node in a recipe.
-   **[Extension Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_extension_node_input.htm)**
    An extension node in a recipe.
-   **[Extension Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_extension_parameters_input.htm)**
    The parameters for an extension node in a recipe.
-   **[Extract Grain Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_extract_grain_field_input.htm)**
    An extract grain field.
-   **[Extract Grain Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_extract_grain_node_input.htm)**
    An extract grain node in a recipe.
-   **[Extract Grain Parameter Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_extract_grain_parameter_input.htm)**
    A parameter for an extract grain field.
-   **[Extract Grain Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_extract_grain_parameters_input.htm)**
    The parameters for an extract grain node in a recipe.
-   **[Filter Expression Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_filter_expression_input.htm)**
    A regex expression for a filter.
-   **[Filter Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_filter_node_input.htm)**
    A filter node in a recipe.
-   **[Filter Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_filter_parameters_input.htm)**
    The parameters for a filter node in a recipe.
-   **[Flatten Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_flatten_field_input.htm)**
    A field for a flatten node in a recipe.
-   **[Flatten Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_flatten_node_input.htm)**
    A flatten node in a recipe.
-   **[Flatten Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_flatten_parameters_input.htm)**
    The parameters for a flatten node in a recipe.
-   **[Format Date Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_format_date_node_input.htm)**
    A date format conversion node in a recipe.
-   **[Format Date Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_format_date_parameters_input.htm)**
    The parameters for a date format conversion node in a recipe.
-   **[Format Date Pattern Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_format_date_pattern_input.htm)**
    The pattern for date format conversion.
-   **[Formula Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_formula_node_input.htm)**
    A formula node in a recipe.
-   **[Formula Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_formula_parameters_input.htm)**
    The base parameters for a formula node in a recipe.
-   **[Join Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_join_node_input.htm)**
    A join node in a recipe.
-   **[Join Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_join_parameters_input.htm)**
    The parameters for a join node in a recipe.
-   **[Load Analytics Dataset Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_analytics_dataset_input.htm)**
    A CRM Analytics dataset to load.
-   **[Load Connected Dataset Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_connected_dataset_input.htm)**
    A connected dataset to load.
-   **[Load Data Lake Object Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_data_lake_object_input.htm)**
    A data lake object to load.
-   **[Load Data Model Object Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_data_model_object_input.htm)**
    A data model object to load.
-   **[Load Dataset Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_dataset_input.htm)**
    The base dataset for a load node in a recipe.
-   **[Load Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_node_input.htm)**
    A load node in a recipe.
-   **[Load Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_load_parameters_input.htm)**
    The parameters for a load node in a recipe.
-   **[Legacy Formula Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_legacy_formula_field_input.htm)**
    A legacy formula field for a formula.
-   **[Legacy Formula Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_legacy_formula_parameters_input.htm)**
    The legacy formula parameters for a formula.
-   **[Measure To Currency Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_measure_to_currency_input.htm)**
    The conversion information for currency measure field.
-   **[Optimized Append Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_optimized_append_node_input.htm)**
    An optimized append node in a recipe.
-   **[Optimized Append Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_optimized_append_parameters_input.htm)**
    The parameters for an optimized append node in a recipe.
-   **[Optimized Update Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_optimized_update_node_input.htm)**
    An optimized append node in a recipe.
-   **[Optimized Update Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_optimized_update_parameters_input.htm)**
    The parameters for an optimized update node in a recipe.
-   **[Output D360 Fields Mapping Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_output_d360_fields_mapping_input.htm)**
    The fields mapping for an output D360 node in a recipe.
-   **[Output D360 Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_output_d360_node_input.htm)**
    An output D360 node in a recipe.
-   **[Output D360 Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_output_d360_parameters_input.htm)**
    The parameters for an output D360 node in a recipe.
-   **[Output Data Cloud Fields Mapping Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_output_data_cloud_fields_mapping_input.htm)**
    The fields mapping for an output Data 360 node in a recipe.
-   **[Output Data Cloud Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_output_data_cloud_node_input.htm)**
    An output Data 360 node in a recipe.
-   **[Output Data Cloud Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_output_data_cloud_parameters_input.htm)**
    The parameters for an output Data 360 node in a recipe.
-   **[Output External Fields Mapping Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_output_external_field_mapping_input.htm)**
    A field mapping for an output external node in a recipe.
-   **[Output External Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_output_external_node_input.htm)**
    An output external node in a recipe.
-   **[Output External Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_output_external_parameters_input.htm)**
    The parameters for an output external node in a recipe.
-   **[Pivot Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_pivot_input.htm)**
    A pivot for an aggregate data node in a recipe.
-   **[Pivot V2 Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_pivotv2_input.htm)**
    A version 2 pivot for an aggregate data node in a recipe.
-   **[Predict Values Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_predict_values_field_input.htm)**
    A field for a predict values node in a recipe.
-   **[Predict Values Input Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_predict_values_input_field_input.htm)**
    An input field for a predict values node in a recipe.
-   **[Predict Values Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_predict_values_node_input.htm)**
    A predict missing values node in a recipe.
-   **[Predict Values Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_predict_values_parameters_input.htm)**
    The parameters for a predict values node in a recipe.
-   **[Predict Values Setup Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_predict_values_setup_input.htm)**
    The setup for a predict values node field.
-   **[Recipe Configuration Collection Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_configuration_collection_input.htm)**
    A collection of data prep recipe configurations.
-   **[Recipe Configuration Fiscal Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_configuration_fiscal_input.htm)**
    The data prep recipe fiscal configuration data.
-   **[Recipe Configuration Fiscal Offset Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_configuration_fiscal_offset_input.htm)**
    The data prep recipe fiscal offset configuration data.
-   **[Recipe Configuration](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_configuration_input.htm)**
    A data prep recipe configuration.
-   **[Recipe Conversion Detail Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_conversion_detail_input.htm)**
    The details for the upconversion of a data prep recipe.
-   **[Recipe Definition Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_definition_input.htm)**
    The definition for a data prep recipe. Available on for R3 recipes.
-   **[Recipe Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_input.htm)**
    A data prep recipe.
-   **[Recipe Name Label Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_name_label_input.htm)**
    The name and label for a field in a recipe node.
-   **[Recipe Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_node_input.htm)**
    The base node for a recipe.
-   **[Recipe Notification Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_notification_input.htm)**
    A notification for a data prep recipe.
-   **[Recipe Type Name Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_type_name_input.htm)**
    The name and type for a field in a recipe node.
-   **[Recommendation Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recommendation_node_input.htm)**
    A recommendation node in a recipe.
-   **[Recommendation Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recommendation_parameters_input.htm)**
    The parameters for a recommendation node in a recipe.
-   **[Sample Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sample_parameters_input.htm)**
    The sample parameters for loading data.
-   **[Streaming Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_streaming_parameters_input.htm)**
    The streaming parameters for loading data.
-   **[Save Dataset Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_save_dataset_input.htm)**
    The dataset for a save node in a recipe.
-   **[Save Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_save_node_input.htm)**
    A save data node in a recipe.
-   **[Save Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_save_parameters_input.htm)**
    The parameters for a save node in a recipe.
-   **[Schema Field Format Symbols Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_schema_field_format_symbols_input.htm)**
    The field format symbols for a schema node in a recipe.
-   **[Schema Field Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_schema_field_parameters_input.htm)**
    The field parameters for a schema node in a recipe.
-   **[Schema Field Properties Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_schema_field_properties_input.htm)**
    The field properties for a schema node in a recipe.
-   **[Schema Field Type Properties Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_schema_field_type_properties_input.htm)**
    The field type properties for a schema node in a recipe.
-   **[Schema Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_schema_node_input.htm)**
    A schema node in a recipe.
-   **[Schema Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_schema_parameters_input.htm)**
    The parameters for a schema node in a recipe.
-   **[Schema Slice Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_schema_slice_input.htm)**
    The slice definition for a schema node in a recipe.
-   **[Split Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_split_node_input.htm)**
    A split node in a recipe.
-   **[Split Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_split_parameters_input.htm)**
    The parameters for a split node in a recipe.
-   **[SQL Filter Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_filter_node_input.htm)**
    A SQL filter node in a recipe.
-   **[SQL Filter Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_filter_parameters_input.htm)**
    The parameters for a SQL filter node in a recipe.
-   **[SQL Formula Date Only Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_formula_date_only_field_input.htm)**
    The SQL formula date only field for a recipe node.
-   **[SQL Formula Date Time Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_formula_date_time_field_input.htm)**
    The SQL formula date time field for a recipe node.
-   **[SQL Formula Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_formula_field_input.htm)**
    The base SQL formula field for a recipe node.
-   **[SQL Formula Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_formula_parameters_input.htm)**
    The SQL formula parameters for a formula.
-   **[SQL Formula Multivalue Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_formula_multivalue_field_input.htm)**
    The SQL formula multivalue field for a recipe node.
-   **[SQL Formula Numeric Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_formula_numeric_field_input.htm)**
    The SQL formula numeric field for a recipe node.
-   **[SQL Formula Text Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_sql_formula_text_field_input.htm)**
    The SQL formula text field for a recipe node.
-   **[Target Field Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_target_field_input.htm)**
    A target field for a recipe bucket.
-   **[Time Series Input Confidence Interval High Low](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_time_series_input_confidence_interval_high_low_input.htm)**
    A confidence interval for a time series recipe node.
-   **[Time Series Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_time_series_node_input.htm)**
    A time series node in a recipe.
-   **[Time Series Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_time_series_parameters_input.htm)**
    The parameters for a time series node in a recipe.
-   **[Time Series V2 Algorithm Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_time_series_v2_algorithm_input.htm)**
    The algorithm for a time series version 2 node in a recipe.
-   **[Time Series V2 Forecast Info Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_time_series_v2_forecast_info_input.htm)**
    The forecast info for a time series version 2 node in a recipe.
-   **[Time Series V2 Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_time_series_v2_node_input.htm)**
    A time series version 2 node in a recipe.
-   **[Time Series V2 Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_time_series_v2_parameters_input.htm)**
    The parameters for a time series version 2 node in a recipe.
-   **[Typecast Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_typecast_node_input.htm)**
    A typecast node in a recipe.
-   **[Typecast Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_typecast_parameters_input.htm)**
    The parameters for a typecast node in a recipe.
-   **[Typographic Cluster Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_typographic_cluster_input.htm)**
    The configuration for a typographic cluster algorithm.
-   **[Update Data Cloud Object Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_update_data_cloud_object_node_input.htm)**
    A Data 360 object update node in a recipe.
-   **[Update Data Cloud Object Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_update_data_cloud_object_parameters_input.htm)**
    The parameters for an update data cloud object node in a recipe.
-   **[Update Node Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_update_node_input.htm)**
    An update node in a recipe.
-   **[Update Parameters Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_update_parameters_input.htm)**
    The parameters for an update node in a recipe.

## Code Examples

```
{
     "body" : "Let's look for a new solution."
     }
```

```
<comment>
     <body>Let's look for a new solution.</body>
     </comment>
```

## Related Topics

- Abstract Bucket Algorithm Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_abstract_bucket_algorithm_input.htm)
- Aggregate Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_aggregate_input.htm)
- Aggregate Node Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_aggregate_node_input.htm)
- Aggregate Parameters Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_aggregate_parameters_input.htm)
- Append Mapping Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_append_mapping_input.htm)
- Append Node Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_append_node_input.htm)
- Append Parameters Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_append_parameters_input.htm)
- Append V2 Node Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_appendv2_node_input.htm)
- Bucket Date Argument Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_date_argument_input.htm)
- Bucket Date Bucket Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_bucket_date_bucket_input.htm)
