---
title: "Smart Data Discovery Classification Prediction Property Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-classification-prediction-property-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.165Z
estimatedTokens: 243
keywords: [Smart, Data, Discovery, Classification, Prediction, Input, identify]
---

# Smart Data Discovery Classification Prediction Property Input

> The input to identify the prediction type as Classification.

# Smart Data Discovery Classification Prediction Property Input

The input to identify the prediction type as Classification.

Properties

Inherits properties from [Abstract​Smart​Data​Discovery​Prediction​Property​Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_prediction_property_input.htm "The base Einstein Discovery prediction property input.").

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| algorithm​Type | Smart​Data​Discovery​Classification​Algorithm​Type​Enum | The algorithm type for the classification. Valid values are:Best (Model tournament)Drf (Distributed Random Forest)Gbm (GBM)Glm (GLM)Xgboost (XGBoost) | Required | 49.0 |
| classification​Threshold | Abstract​Classification​Threshold​Input | The classification threshold for the model. Valid values are:Binary​Classification​Threshold​Input | Required | 48.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Prediction​Property​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_prediction_property_input.htm)
- Abstract​Classification​Threshold​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_classification_threshold_input.htm)
- Binary​Classification​Threshold​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_binary_classification_threshold_input.htm)
