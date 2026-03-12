---
title: "Abstract Smart Data Discovery Transformation Override Input"
domain: bi-dev-guide-rest-sdd
topic: abstract-smart-data-discovery-transformation-override-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.125Z
estimatedTokens: 290
keywords: [Abstract, Smart, Data, Discovery, Transformation, Override, Input, base, Einstein, deploy]
---

# Abstract Smart Data Discovery Transformation Override Input

> The base Einstein Discovery transformation deploy override input.

# Abstract Smart Data Discovery Transformation Override Input

The base Einstein Discovery transformation deploy override input.

Properties

Inherited by [Smart Data Discovery Projected Predictions Override Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_override_input.htm "The input for deploy time projected predictions transformation overrides.").

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| input | Asset​Reference​Input | A transformation asset associated with the override settings. | Required | 55.0 |
| type | Smart​Data​Discovery​AI​Model​Transformation​Type​Enum | The transformation type. Valid values are:Categorical​Imputation (Replace categorical missing values)Extract​Day​Of​Week (Extract day of week)Extract​Month​Of​Year (Extract month of year)Free​Text​Clustering (Free text clustering)Numerical​Imputation (Replace numerical missing values)Sentiment​Analysis (Detecting sentiment)Time​Series​Forecast (Projected predictions)Typographic​Clustering (Fuzzy matching) | Required | 55.0 |

## Related Topics

- Smart Data Discovery Projected Predictions Override Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_override_input.htm)
- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_asset_reference_input.htm)
