---
title: "Abstract Smart Data Discovery Transformation Input"
domain: bi-dev-guide-rest-sdd
topic: abstract-smart-data-discovery-transformation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.121Z
estimatedTokens: 329
keywords: [Abstract, Smart, Data, Discovery, Transformation, Input, base, Einstein]
---

# Abstract Smart Data Discovery Transformation Input

> The base Einstein Discovery transformation input.

# Abstract Smart Data Discovery Transformation Input

The base Einstein Discovery transformation input.

Properties

Inherited by [Abstract Smart Data Discovery Discovery Many To One Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_many_to_one_transformation_input.htm "The base input to identify the transformation as many to one.") and [Abstract Smart Data Discovery Discovery One To One Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_one_to_one_transformation_input.htm "The base input to identify the transformation as one to one.")

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | Smart​Data​Discovery​AI​Model​Transformation​Type​Enum | The runtime type for the model. Valid values are:Categorical​Imputation (Replace categorical missing values)Extract​Day​Of​Week (Extract day of week)Extract​Month​Of​Year (Extract month of year)Free​Text​Clustering (Free text clustering)Numerical​Imputation (Replace numerical missing values)Sentiment​Analysis (Detecting sentiment)Time​Series​Forecast (Projected predictions)Typographic​Clustering (Fuzzy matching) | Required | 55.0 |

## Related Topics

- Abstract Smart Data Discovery Discovery Many To One Transformation Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_many_to_one_transformation_input.htm)
- Abstract Smart Data Discovery Discovery One To One Transformation Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_one_to_one_transformation_input.htm)
