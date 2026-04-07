---
title: "Smart Data Discovery Prediction"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-prediction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:13.313Z
estimatedTokens: 287
keywords: [Smart, Data, Discovery, Prediction, Einstein, result]
---

# Smart Data Discovery Prediction

> An Einstein Discovery prediction result.

# Smart Data Discovery Prediction

An Einstein Discovery prediction result.

Properties

Inherits properties from [Abstract​Smart​Data​Discovery​Prediction](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_prediction.htm "The base Einstein Discovery prediction result.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| model | Asset​Reference | The model information of a success prediction. | Small, 47.0 | 47.0 |
| prediction | Abstract​Smart​Data​Discovery​Predict | The raw prediction, including prediction value, predictive factors, and warnings. Valid values are:Smart Data Discovery Multiclass PredictionSmart Data Discovery Predict ErrorSmart Data Discovery Predict | Small, 41.0 | 41.0 |
| prescriptions | Smart​Data​Discovery​Predict​Condition[] | The details of how actionable values could be used to improve the prediction. | Small, 41.0 | 41.0 |
| projected​Predictions | Smart​Data​Discovery​Projected​Predictions | The projected predictions for the prediction, if available. | Small, 54.0 | 54.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Prediction (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_prediction.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_asset_reference.htm)
- Abstract​Smart​Data​Discovery​Predict (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_predict.htm)
- Smart Data Discovery Multiclass Prediction (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_multiclass_predict.htm)
- Smart Data Discovery Predict Error (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_predict_error.htm)
- Smart Data Discovery Predict (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_predict.htm)
- Smart​Data​Discovery​Predict​Condition (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_aggregate_predict_condition.htm)
- Smart​Data​Discovery​Projected​Predictions (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_projected_predictions.htm)
