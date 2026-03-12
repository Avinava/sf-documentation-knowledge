---
title: "Einstein Discovery REST API Request Bodies"
domain: bi-dev-guide-rest-sdd
topic: einstein-discovery-rest-api-request-bodies
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.022Z
estimatedTokens: 5433
keywords: [Einstein, Discovery, REST, API, Bodies, perform, POST, PATCH, PUT, pass, query, formatted, either, XML, JSON]
---

# Einstein Discovery REST API Request Bodies

> To perform a POST, PATCH, or PUT request, pass query parameters
  or create a request body formatted in either XML or JSON. This chapter
  lists the request bodies. The query parameters are listed with each
  resource.

# Einstein Discovery REST API Request Bodies

To perform a POST, PATCH, or PUT request, pass query parameters or create a request body formatted in either XML or JSON. This chapter lists the request bodies. The query parameters are listed with each resource.

To create a JSON request body, specify the properties of the request body in JSON format.

This is an example of a Comment request body.

```

```

If a request body is top-level, it has a root XML tag listed. To create an XML request body, nest the properties as XML tags inside the root XML tag.

This is the same Einstein Discovery request body in XML format:

```

```

-   **[Abstract Classification Threshold Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_classification_threshold_input.htm)**
    The base classification threshold input.
-   **[Abstract Smart Data Discovery AI Model Source Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_ai_model_source_input.htm)**
    The base source input for an Einstein Discovery AI model.
-   **[Abstract Smart Data Discovery Field Mapping Source Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_field_mapping_source_input.htm)**
    The base Einstein Discovery field mapping source input.
-   **[Abstract Smart Data Discovery Many To One Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_many_to_one_transformation_input.htm)**
    The base input to identify the transformation as many to one.
-   **[Abstract Smart Data Discovery Model Field Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_model_field_input.htm)**
    The base Einstein Discovery model field create or update.
-   **[Abstract Smart Data Discovery Model Runtime Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_model_runtime_input.htm)**
    The base Einstein Discovery model runtime input.
-   **[Abstract Smart Data Discovery One To One Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_one_to_one_transformation_input.htm)**
    The base input to identify the transformation as one to one.
-   **[Abstract Smart Data Discovery Predict Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_predict_input.htm)**
    The base predict input for Einstein Discovery.
-   **[Abstract Smart Data Discovery Prediction Property Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_prediction_property_input.htm)**
    The base Einstein Discovery prediction property input.
-   **[Abstract Smart Data Discovery Projected Predictions Interval Setting Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_projected_predictions_interval_setting_input.htm)**
    The base Einstein Discovery projected predictions interval settings input.
-   **[Abstract Smart Data Discovery Transformation Filter Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_filter_input.htm)**
    The base Einstein Discovery transformation filter input.
-   **[Abstract Smart Data Discovery Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_input.htm)**
    The base Einstein Discovery transformation input.
-   **[Abstract Smart Data Discovery Transformation Override Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_override_input.htm)**
    The base Einstein Discovery transformation deploy override input.
-   **[Abstract Story Data Property Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_story_data_property_input.htm)**
    The base Einstein Discovery story data property filter.
-   **[Asset Reference Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_asset_reference_input.htm)**
    An Einstein Discovery asset reference. This wraps the BaseAssetReferenceInput
-   **[Base Asset Reference Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_base_asset_reference_input.htm)**
    The base Einstein Discovery asset, inherited by AssetReferenceInput.
-   **[Binary Classification Threshold Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_binary_classification_threshold_input.htm)**
    A binary classification threshold input.
-   **[Predict History Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_predict_history_input.htm)**
    The query input for prediction history.
-   **[Predict History Range Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_predict_history_range_input.htm)**
    The range for prediction history query.
-   **[Smart Data Discovery AI Model Discovery Source Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_ai_model_discovery_source_input.htm)**
    The discovery source input for a Smart Data Discovery AI Model.
-   **[Smart Data Discovery AI Model Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_ai_model_input.htm)**
    The Einstein Discovery AI model to create or update.
-   **[Smart Data Discovery AI Model Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_ai_model_transformation_input.htm)**
    The input for an Einstein Discovery AI model transformation.
-   **[Smart Data Discovery AI Model User Upload Source Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_ai_model_user_upload_source_input.htm)**
    The user upload source input for a Smart Data Discovery AI Model.
-   **[Smart Data Discovery Categorical Imputation Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_categorical_imputation_transformation_input.htm)**
    The input to identify the transformation as categorical imputation.
-   **[Smart Data Discovery Classification Prediction Property Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_classification_prediction_property_input.htm)**
    The input to identify the prediction type as Classification.
-   **[Smart Data Discovery Cluster Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_cluster_input.htm)**
    The input for cluster definitions.
-   **[Smart Data Discovery Complex Filter Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_complex_filter_input.htm)**
    The complex filter input for Einstein Discovery.
-   **[Smart Data Discovery Custom Prescribable Field Definition Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_custom_prescribable_field_definition_input.htm)**
    The input for a custom Einstein Discovery prescribable field definition to override default prescription text.
-   **[Smart Data Discovery Customizable Field Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_customizable_field_input.htm)**
    Input for an Einstein Discovery customizable field.
-   **[Smart Data Discovery Discovery Model Runtime Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_discovery_model_runtime_input.htm)**
    The input to identify the model runtime type as Discovery.
-   **[Smart Data Discovery Extract Day of Week Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_extract_day_of_week_transformation_input.htm)**
    The input for an extract day of week transformation.
-   **[Smart Data Discovery Extract Month of Year Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_extract_month_of_year_transformation_input.htm)**
    The input for an extract month of year transformation.
-   **[Smart Data Discovery Field Mapping Analytics Dataset Field Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_field_mapping_analytics_dataset_field_input.htm)**
    Input for an Einstein Discovery field mapped from an analytics dataset source.
-   **[Smart Data Discovery Field Mapping Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_field_mapping_input.htm)**
    An Einstein Discovery field mapping.
-   **[Smart Data Discovery Field Mapping Salesforce Field Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_field_mapping_salesforce_field_input.htm)**
    Input for an Einstein Discovery field mapped from a Salesforce field source.
-   **[Smart Data Discovery Filter Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_filter_input.htm)**
    The filter input for Einstein Discovery.
-   **[Smart Data Discovery Filter Value Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_filter_value_input.htm)**
    The filter value input for Einstein Discovery.
-   **[Smart Data Discovery Free Text Clustering Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_free_text_clustering_transformation_input.htm)**
    The input for a free text clustering transformation.
-   **[Smart Data Discovery H20 Model Runtime Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_h20_model_runtime_input.htm)**
    The input to identify the model runtime type as H20.
-   **[Smart Data Discovery Model Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_input.htm)**
    The Einstein Discovery model to create or update.
-   **[Smart Data Discovery Model Field Date Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_field_date_input.htm)**
    The Einstein Discovery date model field create or update.
-   **[Smart Data Discovery Model Field Numeric Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_field_numeric_input.htm)**
    The Einstein Discovery numeric model field create or update.
-   **[Smart Data Discovery Model Field Text Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_field_text_input.htm)**
    The Einstein Discovery text model field create or update.
-   **[Smart Data Discovery Multiclass Classification Prediction Property Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_multiclass_classification_prediction_property_input.htm)**
    The input to identify the prediction type as Multiclass Classification.
-   **[Smart Data Discovery Narrative Filter Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_narrative_filter_input.htm)**
    The narrative filter metadata.
-   **[Smart Data Discovery Narrative Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_narrative_input.htm)**
    The Einstein Discovery story narrative to retrieve.
-   **[Smart Data Discovery Narrative Insight Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_narrative_insight_input.htm)**
    The narrative insight metadata.
-   **[Smart Data Discovery Narrative Query Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_narrative_query_input.htm)**
    The query metadata for the Einstein Discovery story narrative to retrieve.
-   **[Smart Data Discovery Numeric Range Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_numeric_range_input.htm)**
    A numeric range for a field.
-   **[Smart Data Discovery Numeric Transformation Filter Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_numeric_transformation_filter_input.htm)**
    The input for a numeric transformation filter.
-   **[Smart Data Discovery Numerical Imputation Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_numerical_imputation_transformation_input.htm)**
    The input for a numerical imputation transformation.
-   **[Smart Data Discovery Predict Extension Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_extension_input.htm)**
    The predict record extension input for Einstein Discovery.
-   **[Smart Data Discovery Predict Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_input.htm)**
    The predict input for Einstein Discovery.
-   **[Smart Data Discovery Predict Nested Row List Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_nested_row_list_input.htm)**
    The predict nested row list input for Einstein Discovery.
-   **[Smart Data Discovery Predict Job Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_job_input.htm)**
    The predict job input for Einstein Discovery.
-   **[Smart Data Discovery Predict Job Update Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_job_update_input.htm)**
    The input to update a predict job for Einstein Discovery.
-   **[Smart Data Discovery Predict Settings Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_settings_input.htm)**
    The predict settings input for Einstein Discovery.
-   **[Smart Data Discovery Predict Raw Data Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_raw_data_input.htm)**
    The predict raw data input for Einstein Discovery.
-   **[Smart Data Discovery Predict Record Overrides Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_record_overrides_input.htm)**
    The predict record overrides input for Einstein Discovery.
-   **[Smart Data Discovery Predict Record Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_record_input.htm)**
    The predict record input for Einstein Discovery.
-   **[Smart Data Discovery Prescribable Field Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_prescribable_field_input.htm)**
    Input for an Einstein Discovery prescribable field.
-   **[Smart Data Discovery Projected Prediction Settings Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_prediction_settings_input.htm)**
    The projected prediction settings input for Einstein Discovery.
-   **[Smart Data Discovery Projected Predictions Count From Date Interval Setting Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_count_from_date_interval_setting_input.htm)**
    The input for settings for an Einstein Discovery count from date based projection interval.
-   **[Smart Data Discovery Projected Predictions Count Interval Setting Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_count_interval_setting_input.htm)**
    The input for settings for an Einstein Discovery count based projection interval.
-   **[Smart Data Discovery Projected Predictions Date Interval Setting Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_date_interval_setting_input.htm)**
    The input for settings for an Einstein Discovery date interval.
-   **[Smart Data Discovery Projected Predictions Historical Dataset Source Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_historical_dataset_source_input.htm)**
    The input for projected predictions transformation.
-   **[Smart Data Discovery Projected Predictions Override Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_override_input.htm)**
    The input for deploy time projected predictions transformation overrides.
-   **[Smart Data Discovery Projected Predictions Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_transformation_input.htm)**
    The input for a projected predictions transformation.
-   **[Smart Data Discovery Regression Prediction Property Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_regression_prediction_property_input.htm)**
    The input to identify the prediction type as Regression.
-   **[Smart Data Discovery Scikit Learn 102 Model Runtime Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_scikitlearn102_model_runtime_input.htm)**
    The input to identify the model runtime type as Scikit Learn v1.0.2.
-   **[Smart Data Discovery Sentiment Analysis Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_sentiment_analysis_transformation_input.htm)**
    The input for a sentiment analysis transformation.
-   **[Smart Data Discovery TensorFlow 27 Model Runtime Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_tensorflow27_model_runtime_input.htm)**
    The input to identify the model runtime type as TensorFlow v2.7.0.
-   **[Smart Data Discovery TensorFlow Model Runtime Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_tensorflow_model_runtime_input.htm)**
    The input to identify the model runtime type as TensorFlow.
-   **[Smart Data Discovery Text Transformation Filter Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_text_transformation_filter_input.htm)**
    The input for a text transformation filter.
-   **[Story Day Field Value Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_day_field_value_input.htm)**
    The story data day property.
-   **[Story Day of Week Field Value Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_day_of_week_field_value_input.htm)**
    The story data day of week property.
-   **[Story Field Only Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_field_only_input.htm)**
    The story data field property.
-   **[Story Month Field Value Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_month_field_value_input.htm)**
    The story data month property.
-   **[Story Month of Year Field Value Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_month_of_year_field_value_input.htm)**
    The story data month of year property.
-   **[Story Null Field Value Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_null_field_value_input.htm)**
    The story data null property.
-   **[Story Quarter Field Value Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_quarter_field_value_input.htm)**
    The story data quarter property.
-   **[Story Quarter of Year Field Value Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_quarter_of_year_field_value_input.htm)**
    The story data quarter of year property.
-   **[Story Query Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_query_input.htm)**
    The input to query an Einstein Discovery story.
-   **[Story Range Field Value Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_range_field_value_input.htm)**
    The story data range property.
-   **[Story Text Field Value Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_text_field_value_input.htm)**
    The story data text property.
-   **[Story Year Field Value Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_year_field_value_input.htm)**
    The story data year property.

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

- Abstract Classification Threshold Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_classification_threshold_input.htm)
- Abstract Smart Data Discovery AI Model Source Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_ai_model_source_input.htm)
- Abstract Smart Data Discovery Field Mapping Source Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_field_mapping_source_input.htm)
- Abstract Smart Data Discovery Many To One Transformation Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_many_to_one_transformation_input.htm)
- Abstract Smart Data Discovery Model Field Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_model_field_input.htm)
- Abstract Smart Data Discovery Model Runtime Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_model_runtime_input.htm)
- Abstract Smart Data Discovery One To One Transformation Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_one_to_one_transformation_input.htm)
- Abstract Smart Data Discovery Predict Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_predict_input.htm)
- Abstract Smart Data Discovery Prediction Property Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_prediction_property_input.htm)
- Abstract Smart Data Discovery Projected Predictions Interval Setting Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_projected_predictions_interval_setting_input.htm)
