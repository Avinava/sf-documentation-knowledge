---
title: "Smart Data Discovery Classification Prediction Property"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-classification-prediction-property
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.754Z
estimatedTokens: 233
keywords: [Smart, Data, Discovery, Classification, Prediction, model]
---

# Smart Data Discovery Classification Prediction Property

> The classification prediction model type.

# Smart Data Discovery Classification Prediction Property

The classification prediction model type.

Properties

Inherits properties from [Abstract​Smart​Data​Discovery​Prediction​Property](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_prediction_property.htm "The base Einstein Discovery AI model prediction property.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| algorithm​Type | Smart​Data​Discovery​Classification​Algorithm​Type​Enum | The classification algorithm type. Valid values are:Best (Model tournament)Drf (Distributed Random Forest)Gbm (GBM)Glm (GLM)Xgboost (XGBoost) | Small, 49.0 | 49.0 |
| classification​Threshold | Binary​Classification​Threshold | The classification threshold (e.g. binary classification threshold for logistic regression models). | Small, 48.0 | 48.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Prediction​Property (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_prediction_property.htm)
- Binary​Classification​Threshold (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_binary_classification_threshold.htm)
