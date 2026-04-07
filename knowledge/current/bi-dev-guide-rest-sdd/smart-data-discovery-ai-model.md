---
title: "Smart Data Discovery AI Model"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-ai-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:59.464Z
estimatedTokens: 719
keywords: [Smart, Discovery, Model, Einstein, retrieve]
---

> An Einstein Discovery AI model to retrieve.

# Smart Data Discovery AI Model

An Einstein Discovery AI model to retrieve.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| coefficients​Url | String | The coefficients URL for the AI model. | Small, 55.0 | 55.0 |
| created​By | Smart​Data​Discovery​User | The user that created the AI model | Small, 48.0 | 48.0 |
| created​Date | Date | The date on which the AI model was created. | Small, 48.0 | 48.0 |
| description | String | The description for the AI model. | Small, 48.0 | 48.0 |
| id | String | The ID for the AI model. | Small, 48.0 | 48.0 |
| input | Abstract​Smart​Data​Discovery​AI​Model​Source | The input source for the AI model. Valid data properties are:Smart Data Discovery AI Model Discovery SourceSmart Data Discovery AI Model User Upload Source | Small, 48.0 | 48.0 |
| label | String | The label for the AI model. | Small, 48.0 | 48.0 |
| last​Modified​By | Smart​Data​Discovery​User | The user who last modified the AI model | Small, 48.0 | 48.0 |
| last​Modified​Date | Date | The date on which the AI model was last modified. | Small, 48.0 | 48.0 |
| metrics​Url | String | The metrics URL for the AI model. | Small, 54.0 | 54.0 |
| model​Fields | Abstract​Smart​Data​Discovery​Model​Field[] | The list of model fields for the AI model. Valid values are:Smart​Data​Discovery​Model​Field​DateSmart​Data​Discovery​Model​Field​NumericSmart​Data​Discovery​Model​Field​Text | Small, 48.0 | 48.0 |
| model​File​Url | String | The file URL for the AI model. | Small, 49.0 | 49.0 |
| model​Runtime | Abstract​Smart​Data​Discovery​Model​Runtime | The run time model for the AI model. | Small, 48.0 | 48.0 |
| name | String | The developer name for the AI model. | Small, 48.0 | 48.0 |
| namespace | String | The namespace for the AI model. | Small, 51.0 | 51.0 |
| predicted​Field | String | The predicted field name for the AI model. | Small, 48.0 | 48.0 |
| prediction​Property | Abstract​Smart​Data​Discovery​Prediction​Property | The prediction property for the AI model. Valid prediction properties are:Smart Data Discovery Classification Prediction PropertySmart Data Discovery Multiclass Classification Prediction PropertySmart Data Discovery Regression Classification Prediction Property | Small, 48.0 | 48.0 |
| status | Smart​Data​Discovery​AI​Model​Status​Enum | The model status. Valid values are:DisabledEnabledUpload​CompletedUpload​FailedUploadingValidatingValidation​CompletedValidation​Failed | Small, 48.0 | 48.0 |
| transformations | Smart​Data​Discovery​AI​Model​Transformation[] | The list of transformations associated with the AI model. | Small, 48.0 | 48.0 |
| url | String | The URL for the AI model. | Small, 48.0 | 48.0 |
| validation​Result | Map<Object, Object> | The validation result for the AI model, when available. | Small, 50.0 | 50.0 |

## Related Topics

- Smart​Data​Discovery​User (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_user.htm)
- Abstract​Smart​Data​Discovery​AI​Model​Source (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_ai_model_source.htm)
- Smart Data Discovery AI Model Discovery Source (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_discovery_source.htm)
- Smart Data Discovery AI Model User Upload Source (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_user_upload_source.htm)
- Abstract​Smart​Data​Discovery​Model​Field (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_model_field.htm)
- Smart​Data​Discovery​Model​Field​Date (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model_field_date.htm)
- Smart​Data​Discovery​Model​Field​Numeric (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model_field_numeric.htm)
- Smart​Data​Discovery​Model​Field​Text (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model_field_text.htm)
- Abstract​Smart​Data​Discovery​Model​Runtime (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_model_runtime.htm)
- Abstract​Smart​Data​Discovery​Prediction​Property (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_prediction_property.htm)
