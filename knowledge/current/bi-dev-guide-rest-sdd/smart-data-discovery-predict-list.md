---
title: "Smart Data Discovery Predict List"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-predict-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.924Z
estimatedTokens: 268
keywords: [Smart, Data, Discovery, Predict, Einstein, predictions]
---

# Smart Data Discovery Predict List

> A list of Einstein Discovery predictions.

# Smart Data Discovery Predict List

A list of Einstein Discovery predictions.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aggregate​Predictions | Abstract​Smart​Data​Discovery​Aggregate​Prediction[] | A list of aggregate prediction results. Valid values are:Smart​Data​Discovery​Aggregate​PredictionSmart​Data​Discovery​Aggregate​Prediction​Error | Small, 55.0 | 55.0 |
| prediction​Definition | String | The ID of the prediction definition used to make the prediction. | Small, 44.0 | 44.0 |
| prediction​Type | Smart​Data​Discovery​Prediction​Type​Enum | The prediction type. Valid values are:ClassificationMulticlass​ClassificationRegressionUnknown | Small, 55.0 | 55.0 |
| predictions | Abstract​Smart​Data​Discovery​Prediction[] | A list of predictions. Valid values are:Smart​Data​Discovery​PredictionSmart​Data​Discovery​Prediction​Error | Small, 55.0 | 55.0 |
| settings | Smart​Data​Discovery​Predict​Settings | The settings used for improvements. | Small, 46.0 | 46.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Aggregate​Prediction (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_aggregate_prediction.htm)
- Smart​Data​Discovery​Aggregate​Prediction (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_aggregate_prediction.htm)
- Smart​Data​Discovery​Aggregate​Prediction​Error (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_aggregate_prediction_error.htm)
- Abstract​Smart​Data​Discovery​Prediction (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_prediction.htm)
- Smart​Data​Discovery​Prediction (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_prediction.htm)
- Smart​Data​Discovery​Prediction​Error (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_prediction_error.htm)
- Smart​Data​Discovery​Predict​Settings (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_predict_settings.htm)
