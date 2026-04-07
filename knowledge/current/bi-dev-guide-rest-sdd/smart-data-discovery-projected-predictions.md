---
title: "Smart Data Discovery Projected Predictions"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-projected-predictions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:59.858Z
estimatedTokens: 357
keywords: [Smart, Discovery, Projected, Predictions, Einstein, prediction, result]
---

> The projected predictions for an Einstein Discovery prediction result.

# Smart Data Discovery Projected Predictions

The projected predictions for an Einstein Discovery prediction result.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fields | Smart​Data​Discovery​Projected​Prediction​Field[] | The field level information for each projected prediction transformation. | Small, 54.0 | 54.0 |
| interval​Setting | Abstract​Smart​Data​Discovery​Projected​Predictions​Interval​Setting | The setting used for calculating projected prediction interval. Valid values are:Smart Data Discovery Projected Predictions Count From Date Interval SettingSmart Data Discovery Projected Predictions Count Interval SettingSmart Data Discovery Projected Predictions Date Interval Setting | Small, 55.0 | 55.0 |
| interval​Type | Smart​Data​Discovery​Projected​Predictions​Interval​Type​Enum | The projected predictions interval type. Valid values are:DayMonthQuarterWeek | Small, 54.0 | 54.0 |
| number​Of​Intervals​Projected​Ahead | Integer | The number of intervals used to produce the results in projected prediction for all fields. | Small, 54.0 | 54.0 |
| predictions | Abstract​Smart​Data​Discovery​Projected​Prediction[] | A list of projected prediction results per interval. Valid values are:Smart Data Discovery Catagorical Projected PredictionSmart Data Discovery Numerical Projected Prediction | Small, 54.0 | 54.0 |

## Related Topics

- Smart​Data​Discovery​Projected​Prediction​Field (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_projected_prediction_field.htm)
- Abstract​Smart​Data​Discovery​Projected​Predictions​Interval​Setting (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_projected_predictions_interval_setting.htm)
- Smart Data Discovery Projected Predictions Count From Date Interval Setting (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_projected_predictions_count_from_date_interval_setting.htm)
- Smart Data Discovery Projected Predictions Count Interval Setting (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_projected_predictions_count_interval_setting.htm)
- Smart Data Discovery Projected Predictions Date Interval Setting (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_projected_predictions_date_interval_setting.htm)
- Abstract​Smart​Data​Discovery​Projected​Prediction (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_projected_prediction.htm)
- Smart Data Discovery Catagorical Projected Prediction (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_categorical_projected_prediction.htm)
- Smart Data Discovery Numerical Projected Prediction (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_numerical_projected_prediction.htm)
