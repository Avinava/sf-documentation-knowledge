---
title: "Smart Data Discovery Projected Predictions Transformation Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-projected-predictions-transformation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.295Z
estimatedTokens: 363
keywords: [Smart, Data, Discovery, Projected, Predictions, Transformation, Input]
---

# Smart Data Discovery Projected Predictions Transformation Input

> The input for a projected predictions transformation.

# Smart Data Discovery Projected Predictions Transformation Input

The input for a projected predictions transformation.

Properties

Inherits properties from [Abstract​Smart​Data​Discovery​OneToOne​Transformation​Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_one_to_one_transformation_input.htm "The base input to identify the transformation as one to one.").

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| asset​Id​Field​Name | String | The group by column, used for building time series for each asset ID. | Required | 55.0 |
| date​Field​Name | String | The field used for the time series time axis. | Required | 55.0 |
| input | Smart​Data​Discovery​Projected​Predictions​Historical​Dataset​Source​Input | The historical dataset input. | Required | 55.0 |
| num​Intervals | Integer | The default number of intervals to project forward. | Required | 55.0 |
| projected​Predictions​Interval​Type | Smart​Data​Discovery​Projected​Predictions​Interval​Type​Enum | The interval type for forward projections. Valid values are:DayMonthQuarterWeek | Required | 55.0 |
| projection​Field​Name | String | The time series y axis. This is the value column projected for each asset ID. | Required | 55.0 |
| seasonality​Period | Integer | The seasonality period. Use 0 for no seasonality, or [2-24]. | Required | 55.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​OneToOne​Transformation​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_one_to_one_transformation_input.htm)
- Smart​Data​Discovery​Projected​Predictions​Historical​Dataset​Source​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_historical_dataset_source_input.htm)
