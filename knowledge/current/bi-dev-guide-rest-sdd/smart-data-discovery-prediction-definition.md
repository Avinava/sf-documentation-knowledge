---
title: "Smart Data Discovery Prediction Definition"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-prediction-definition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.941Z
estimatedTokens: 763
keywords: [Smart, Data, Discovery, Prediction, Definition, Einstein]
---

# Smart Data Discovery Prediction Definition

> An Einstein Discovery prediction definition.

# Smart Data Discovery Prediction Definition

An Einstein Discovery prediction definition.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count​Of​Active​Models | Integer | The number of active models currently present for the prediction model. | Small, 48.0 | 48.0 |
| count​Of​Models | Integer | The number of all models currently present for the prediction model. | Small, 41.0 | 41.0 |
| created​By | Smart​Data​Discovery​User | The user who created the prediction definition. | Small, 41.0 | 41.0 |
| created​Date | Date | The creation date of the prediction definition. | Small, 41.0 | 41.0 |
| id | String | The ID of the prediction definition. | Small, 41.0 | 41.0 |
| label | String | The label of the prediction definition. | Small, 41.0 | 41.0 |
| last​Modified​By | Smart​Data​Discovery​User | The user who last modified the prediction definition. | Small, 41.0 | 41.0 |
| last​Modified​Date | Date | The last modified date of the prediction definition. | Small, 41.0 | 41.0 |
| mapped​Outcome​Field | Integer | The mapped outcome field for Salesforce. | Small, 47.0 | 47.0 |
| models​Url | String | The URL for the prediction definition's models. | Small, 41.0 | 41.0 |
| name | String | The developer name of the prediction definition. | Small, 41.0 | 41.0 |
| namespace | String | The qualified namespace of the prediction definition. | Small, 51.0 | 51.0 |
| ninety​Day​Warning​Count | Integer | The total number of warnings for the prediction model over the last 90 days. | Supplemental, 50.0 | 50.0 |
| outcome | Smart​Data​Discovery​Pred​Def​Outcome​Field | The outcome information of the prediction definition. | Small, 46.0 | 46.0 |
| prediction​Type | Smart​Data​Discovery​Prediction​Type​Enum | The prediction type. Valid values are:ClassificationMulticlass​ClassificationRegressionUnknown | Small, 48.0 | 48.0 |
| pushback​Field | Smart​Data​Discovery​Pushback​Field | The pushback of the prediction definition. | Small, 46.0 | 46.0 |
| pushback​Type | Smart​Data​Discovery​Pushback​Type​Enum | The pushback type. Valid values are:Ai​Record​InsightDirect | Small, 52.0 | 52.0 |
| refresh​Config | Smart​Data​Discovery​Refresh​Config | The refresh configuration of the prediction definition. | Small, 50.0 | 50.0 |
| status | Smart​Data​Discovery​Status​Enum | The status of the prediction definition. Valid values are:DisabledEnabled | Small, 46.0 | 46.0 |
| subscribed​Entity | String | The entity the prediction definition is subscribed to. | Small, 41.0 | 41.0 |
| terminal​State​Filter | Smart​Data​Discovery​Filter​List | The terminal state filter of the prediction definition. | Small, 46.0 | 46.0 |
| total​Predictions​Count | Integer | The total number of predictions for the prediction definition. | Supplemental, 50.0 | 50.0 |
| total​Warnings​Count | Integer | The total number of warnings for the prediction definition. | Supplemental, 50.0 | 50.0 |
| url | String | The URL for the prediction definition. | Small, 41.0 | 41.0 |

## Related Topics

- Smart​Data​Discovery​User (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_user.htm)
- Smart​Data​Discovery​Pred​Def​Outcome​Field (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_pred_def_outcome_field.htm)
- Smart​Data​Discovery​Pushback​Field (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_pushback_field.htm)
- Smart​Data​Discovery​Refresh​Config (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_refresh_config.htm)
- Smart​Data​Discovery​Filter​List (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_filter_list.htm)
