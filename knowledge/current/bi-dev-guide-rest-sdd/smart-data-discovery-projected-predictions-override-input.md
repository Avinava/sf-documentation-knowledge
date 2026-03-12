---
title: "Smart Data Discovery Projected Predictions Override Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-projected-predictions-override-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.289Z
estimatedTokens: 277
keywords: [Smart, Data, Discovery, Projected, Predictions, Override, Input, deploy, time, transformation, overrides]
---

# Smart Data Discovery Projected Predictions Override Input

> The input for deploy time projected predictions transformation overrides.

# Smart Data Discovery Projected Predictions Override Input

The input for deploy time projected predictions transformation overrides.

Properties

Inherits properties from [Abstract​Smart​Data​Discovery​Transformation​Override​Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_override_input.htm "The base Einstein Discovery transformation deploy override input.").

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| asset​Id​Field | String | The Salesforce object field name to use as a look-up for a record ID in a historical dataset. | Required | 55.0 |
| interval​Override | Abstract​Smart​Data​Discovery​Projected​Predictions​Interval​Setting​Input | The projected predictions interval settings. Valid values are:Smart Data Discovery Projected Predictions Count From Date Interval Setting InputSmart Data Discovery Projected Predictions Count Interval Setting InputSmart Data Discovery Projected Predictions Date Interval Setting Input | Required | 55.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Transformation​Override​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_override_input.htm)
- Abstract​Smart​Data​Discovery​Projected​Predictions​Interval​Setting​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_projected_predictions_interval_setting_input.htm)
- Smart Data Discovery Projected Predictions Count From Date Interval Setting Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_count_from_date_interval_setting_input.htm)
- Smart Data Discovery Projected Predictions Count Interval Setting Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_count_interval_setting_input.htm)
- Smart Data Discovery Projected Predictions Date Interval Setting Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_date_interval_setting_input.htm)
