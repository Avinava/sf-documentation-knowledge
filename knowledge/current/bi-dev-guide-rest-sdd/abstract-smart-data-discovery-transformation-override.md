---
title: "Abstract Smart Data Discovery Transformation Override"
domain: bi-dev-guide-rest-sdd
topic: abstract-smart-data-discovery-transformation-override
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.600Z
estimatedTokens: 300
keywords: [Abstract, Smart, Data, Discovery, Transformation, Override, base, Einstein, deploy, overrides]
---

# Abstract Smart Data Discovery Transformation Override

> The base Einstein Discovery transformation deploy overrides.

# Abstract Smart Data Discovery Transformation Override

The base Einstein Discovery transformation deploy overrides.

Properties

Inherited by [Smart Data Discovery Projected Predictions Override](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_projected_predictions_override.htm "The settings for an Einstein Discovery projected predictions override.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The ID of the override. | Small, 55.0 | 55.0 |
| input | Asset​Reference | A transformation asset associated with the override settings. | Small, 55.0 | 55.0 |
| type | Smart​Data​Discovery​AI​Model​Transformation​Type​Enum | The transformation type. Valid values are:Categorical​Imputation (Replace categorical missing values)Extract​Day​Of​Week (Extract day of week)Extract​Month​Of​Year (Extract month of year)Free​Text​Clustering (Free text clustering)Numerical​Imputation (Replace numerical missing values)Sentiment​Analysis (Detecting sentiment)Time​Series​Forecast (Projected predictions)Typographic​Clustering (Fuzzy matching) | Small, 55.0 | 55.0 |

## Related Topics

- Smart Data Discovery Projected Predictions Override (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_projected_predictions_override.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_asset_reference.htm)
