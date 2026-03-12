---
title: "Smart Data Discovery AI Model Transformation"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-ai-model-transformation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.745Z
estimatedTokens: 368
keywords: [Smart, Data, Discovery, Model, Transformation, Einstein]
---

# Smart Data Discovery AI Model Transformation

> An Einstein Discovery AI model transformation.

# Smart Data Discovery AI Model Transformation

An Einstein Discovery AI model transformation.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The ID for the AI model. | Small, 55.0 | 55.0 |
| source​Fields | Abstract​Smart​Data​Discovery​Model​Field[] | A list of the model field names used as input parameters by the transformation. Valid values are:Smart​Data​Discovery​Model​Field​DateSmart​Data​Discovery​Model​Field​NumericSmart​Data​Discovery​Model​Field​Text | Small, 54.0 | 54.0 |
| state | Map<Object, Object> | A map of the model transformation state. | Small, 51.0 | 51.0 |
| target​Fields | Abstract​Smart​Data​Discovery​Model​Field[] | A list of the model field names modified by the transformation. Valid values are:Smart​Data​Discovery​Model​Field​DateSmart​Data​Discovery​Model​Field​NumericSmart​Data​Discovery​Model​Field​Text | Small, 54.0 | 54.0 |
| type | Smart​Data​Discovery​AI​Model​Transformation​Type​Enum | The model transformation type. Valid values are:Categorical​Imputation (Replace categorical missing values)Extract​Day​Of​Week (Extract day of week)Extract​Month​Of​Year (Extract month of year)Free​Text​Clustering (Free text clustering)Numerical​Imputation (Replace numerical missing values)Sentiment​Analysis (Detecting sentiment)Time​Series​Forecast (Projected predictions)Typographic​Clustering (Fuzzy matching) | Small, 51.0 | 51.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Model​Field (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_model_field.htm)
- Smart​Data​Discovery​Model​Field​Date (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model_field_date.htm)
- Smart​Data​Discovery​Model​Field​Numeric (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model_field_numeric.htm)
- Smart​Data​Discovery​Model​Field​Text (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model_field_text.htm)
