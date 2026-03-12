---
title: "Abstract Smart Data Discovery Model Field Input"
domain: bi-dev-guide-rest-sdd
topic: abstract-smart-data-discovery-model-field-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.097Z
estimatedTokens: 369
keywords: [Abstract, Smart, Data, Discovery, Model, Input, base, Einstein]
---

# Abstract Smart Data Discovery Model Field Input

> The base Einstein Discovery model field create or update.

# Abstract Smart Data Discovery Model Field Input

The base Einstein Discovery model field create or update.

Properties

Inherited by [Smart Data Discovery Model Field Date Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_field_date_input.htm "The Einstein Discovery date model field create or update."), [Smart Data Discovery Model Numeric Field Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_field_numeric_input.htm "The Einstein Discovery numeric model field create or update.") and [Smart Data Discovery Model Field Text Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_field_text_input.htm "The Einstein Discovery text model field create or update.").

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| disparate​Impact | Boolean | Indicates whether the model field is disparate impact (true) or not (false). | Required | 55.0 |
| label | String | The label of the model field. | Required | 48.0 |
| name | String | The name of the model field. | Required | 48.0 |
| sensitive | Boolean | Indicates whether the model field is sensitive (true) or not (false). | Optional | 55.0 |
| type | Smart​Data​Discovery​Model​Field​Type​Enum | The type of the model field. Valid values are:DateNumberText | Small, 48.0 | 48.0 |

## Related Topics

- Smart Data Discovery Model Field Date Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_field_date_input.htm)
- Smart Data Discovery Model Numeric Field Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_field_numeric_input.htm)
- Smart Data Discovery Model Field Text Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_field_text_input.htm)
