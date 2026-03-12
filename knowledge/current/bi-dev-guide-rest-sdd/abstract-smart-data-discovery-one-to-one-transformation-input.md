---
title: "Abstract Smart Data Discovery One To One Transformation Input"
domain: bi-dev-guide-rest-sdd
topic: abstract-smart-data-discovery-one-to-one-transformation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.105Z
estimatedTokens: 657
keywords: [Abstract, Smart, Data, Discovery, Transformation, Input, base, identify]
---

# Abstract Smart Data Discovery One To One Transformation Input

> The base input to identify the transformation as one to one.

# Abstract Smart Data Discovery One To One Transformation Input

The base input to identify the transformation as one to one.

Properties

Inherits properties from [Abstract​Smart​Data​Discovery​Transformation​Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_input.htm "The base Einstein Discovery transformation input.").

Inherited by [Smart Data Discovery Extract Day Of Week Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_extract_day_of_week_transformation_input.htm "The input for an extract day of week transformation."), [Smart Data Discovery Extract Month Of Year Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_extract_month_of_year_transformation_input.htm "The input for an extract month of year transformation."), [Smart Data Discovery Free Text Clustering Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_free_text_clustering_transformation_input.htm "The input for a free text clustering transformation."), [Smart Data Discovery Numerical Imputation Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_numerical_imputation_transformation_input.htm "The input for a numerical imputation transformation."), [Smart Data Discovery Projected Predictions Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_transformation_input.htm "The input for a projected predictions transformation.") and [Smart Data Discovery Sentiment Analysis Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_sentiment_analysis_transformation_input.htm "The input for a sentiment analysis transformation.").

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| post​Transformation​Filter | Abstract​Smart​Data​Discovery​Transformation​Filter​Input | The filter applied after the transformation is executed. Valid values are:Smart​Data​Discovery​Numeric​Transformation​Filter​InputSmart​Data​Discovery​Text​Transformation​Filter​Input | Optional | 55.0 |
| source​Field​Names | String[] | A list of field names for the data to transform. | Required | 55.0 |
| target​Field​Name | String | The field name to write the transformed value to. | Required | 55.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Transformation​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_input.htm)
- Smart Data Discovery Extract Day Of Week Transformation Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_extract_day_of_week_transformation_input.htm)
- Smart Data Discovery Extract Month Of Year Transformation Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_extract_month_of_year_transformation_input.htm)
- Smart Data Discovery Free Text Clustering Transformation Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_free_text_clustering_transformation_input.htm)
- Smart Data Discovery Numerical Imputation Transformation Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_numerical_imputation_transformation_input.htm)
- Smart Data Discovery Projected Predictions Transformation Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_transformation_input.htm)
- Smart Data Discovery Sentiment Analysis Transformation Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_sentiment_analysis_transformation_input.htm)
- Abstract​Smart​Data​Discovery​Transformation​Filter​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_filter_input.htm)
- Smart​Data​Discovery​Numeric​Transformation​Filter​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_numeric_transformation_filter_input.htm)
- Smart​Data​Discovery​Text​Transformation​Filter​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_text_transformation_filter_input.htm)
