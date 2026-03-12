---
title: "Smart Data Discovery Projected Predictions Override"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-projected-predictions-override
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.979Z
estimatedTokens: 267
keywords: [Smart, Data, Discovery, Projected, Predictions, Override, settings, Einstein]
---

# Smart Data Discovery Projected Predictions Override

> The settings for an Einstein Discovery projected predictions override.

# Smart Data Discovery Projected Predictions Override

The settings for an Einstein Discovery projected predictions override.

Properties

Inherits properties from [Abstract​Smart​Data​Discovery​Transformation​Override](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_transformation_override.htm "The base Einstein Discovery transformation deploy overrides.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| asset​Id​Field | String | The Salesforce object field name to use as a look-up for a record ID in a historical dataset. | Small, 55.0 | 55.0 |
| interval​Override | Abstract​Smart​Data​Discovery​Projected​Predictions​Interval​Setting | The projected predictions interval settings. Valid values are:Smart Data Discovery Projected Predictions Count From Date Interval SettingSmart Data Discovery Projected Predictions Count Interval SettingSmart Data Discovery Projected Predictions Date Interval Setting | Small, 55.0 | 55.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Transformation​Override (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_transformation_override.htm)
- Abstract​Smart​Data​Discovery​Projected​Predictions​Interval​Setting (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_projected_predictions_interval_setting.htm)
- Smart Data Discovery Projected Predictions Count From Date Interval Setting (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_projected_predictions_count_from_date_interval_setting.htm)
- Smart Data Discovery Projected Predictions Count Interval Setting (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_projected_predictions_count_interval_setting.htm)
- Smart Data Discovery Projected Predictions Date Interval Setting (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_projected_predictions_date_interval_setting.htm)
