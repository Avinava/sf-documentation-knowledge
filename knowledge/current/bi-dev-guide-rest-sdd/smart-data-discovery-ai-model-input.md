---
title: "Smart Data Discovery AI Model Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-ai-model-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.152Z
estimatedTokens: 571
keywords: [Smart, Data, Discovery, Model, Input, Einstein]
---

# Smart Data Discovery AI Model Input

> The Einstein Discovery AI model to create or update.

# Smart Data Discovery AI Model Input

The Einstein Discovery AI model to create or update.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | The description for the AI model. | Optional | 48.0 |
| input | Abstract​Smart​Data​Discovery​AI​Model​Source​Input | The input source for the AI model. Valid data properties are:Smart Data Discovery AI Model Discovery Source InputSmart Data Discovery AI Model User Upload Source Input | Required | 48.0 |
| label | String | The label for the AI model. | Optional | 48.0 |
| model​Fields | Abstract​Smart​Data​Discovery​Model​Field​Input[] | The list of model fields for the AI model. Valid values are:Smart​Data​Discovery​Model​Field​Date​InputSmart​Data​Discovery​Model​Field​Numeric​InputSmart​Data​Discovery​Model​Field​Text​Input | Required | 48.0 |
| input | Abstract​Smart​Data​Discovery​Model​Runtime​Input | The runtime for the AI model. Valid runtimes are:Smart Data Discovery Discovery Model Runtime InputSmart Data Discovery H2O Model Runtime InputSmart Data Discovery ScikitLearn 120 Model Runtime InputSmart Data Discovery TensorFlow 27 Model Runtime InputSmart Data Discovery TensorFlow Model Runtime Input | Required | 48.0 |
| name | String | The developer name for the AI model. | Required | 48.0 |
| predicted​Field | String | The field name that the AI model is trying to predict. | Optional | 48.0 |
| prediction​Property | Abstract​Smart​Data​Discovery​Prediction​Property​Input | The prediction property of the AI model. Valid prediction properties are:Smart Data Discovery Classification Prediction Property InputSmart Data Discovery Multiclass Classification Prediction Property InputSmart Data Discovery Regression Prediction Property Input | Optional | 48.0 |
| status | Connect​ED​Insight​Type​Enum | The status of the AI model. Valid values are:DisabledEnabledUpload​CompletedUpload​FailedUploadingValidatingValidation​CompletedValidation​Failed | Optional | 49.0 |
| transformations | Smart Data Discovery AI Model Transformation Input[] | A list of transformations associated with this AI model. | Small, 48.0 | 48.0 |
| validation​Result | Object | The validation result of the AI model. | Optional | 50.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​AI​Model​Source​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_ai_model_source_input.htm)
- Smart Data Discovery AI Model Discovery Source Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_ai_model_discovery_source_input.htm)
- Smart Data Discovery AI Model User Upload Source Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_ai_model_user_upload_source_input.htm)
- Abstract​Smart​Data​Discovery​Model​Field​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_model_field_input.htm)
- Smart​Data​Discovery​Model​Field​Date​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_field_date_input.htm)
- Smart​Data​Discovery​Model​Field​Numeric​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_field_numeric_input.htm)
- Smart​Data​Discovery​Model​Field​Text​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_field_text_input.htm)
- Abstract​Smart​Data​Discovery​Model​Runtime​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_model_runtime_input.htm)
- Smart Data Discovery Discovery Model Runtime Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_discovery_model_runtime_input.htm)
- Smart Data Discovery H2O Model Runtime Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_h20_model_runtime_input.htm)
