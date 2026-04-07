---
title: "Story"
domain: bi-dev-guide-rest-sdd
topic: story
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:03:13.475Z
estimatedTokens: 978
keywords: [Story, Einstein, Discovery]
---

# Story

> An Einstein Discovery story.

# Story

An Einstein Discovery story.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| autopilot | Autopilot | The autopilot settings for the story. | Small, 55.0 | 55.0 |
| classification​Threshold | Abstract​Classification​Threshold | The threshold for classification predictions for the story. Valid values are:Binary​Classification​Threshold | Small, 48.0 | 48.0 |
| created​By | Smart​Data​Discovery​User | The user who created the prediction definition. | Small, 48.0 | 48.0 |
| created​Date | Date | The creation date of the prediction definition. | Small, 48.0 | 48.0 |
| error​Code | Integer | The diagnostic error code for the story. | Small, 48.0 | 48.0 |
| fields | Abstract​Field​Configuration | A list of field configurations for the story. Valid values are:Date​Field​ConfigurationNumeric​Field​ConfigurationText​Field​Configuration | Small, 54.0 | 54.0 |
| folder | Asset​Reference | The analytics folder the story belongs to. | Small, 48.0 | 48.0 |
| histories​Url | String | The URL for the story's history items. | Small, 48.0 | 48.0 |
| id | String | The ID of the story. | Small, 48.0 | 48.0 |
| input | Abstract​Story​Source | The input data for the story. Valid values are:Analytics​Dataset​SourceReport​Source | Small, 48.0 | 48.0 |
| input​Profile | Asset​Reference | The statistical summary of the input data. | Small, 48.0 | 48.0 |
| label | String | The label of the story. | Small, 48.0 | 48.0 |
| last​Modified​By | Smart​Data​Discovery​User | The user who last modified the story. | Small, 48.0 | 48.0 |
| last​Modified​Date | Date | The last modified date of the story. | Small, 48.0 | 48.0 |
| last​Successful​Version | Story​Version​Reference | The mapped outcome field for Salesforce. | Small, 51.0 | 51.0 |
| message | String | The informational message related to the story generation. | Small, 48.0 | 48.0 |
| models​Configuration | Smart​Data​Discovery​Model​Configuration | The model configuration for the story. | Small, 54.0 | 54.0 |
| name | String | The developer name of the story. | Small, 53.0 | 53.0 |
| namespace | String | The qualified namespace of the story. | Small, 53.0 | 53.0 |
| outcome | Smart​Data​Discovery​Outcome | The selected outcome of the generated story. | Small, 48.0 | 48.0 |
| run​Id | ID | The run ID for fetching the story insights. | Small, 48.0 | 48.0 |
| setup | Map<Object, Object> | A map of the setup information for the story, including names, action variables, model settings, variables, and outcomes. | Big, 46.0 | 46.0 |
| status | Analysis​Setup​Status​Enum | The current status of the story. Valid values are:AutopilotDone​DescriptiveDone​Feature​EngineeringDone​Model​MetricsDone​PredictiveDraftFailedFetchingGenerate​SetupIn​ProgressPostprocessingPreprocessingQueuedQueued​For​FetchingQueued​For​PostprocessingRequest​To​DeleteResizingRetry​PreprocessingRunning​DescriptiveRunning​Feature​EngineeringRunning​Model​MetricsRunning​PredictiveSuccessTimed​Out | Small, 46.0 | 46.0 |
| transformations | Abstract​Smart​Data​Discovery​Transformation​Input[] | A list of field transformation. Valid values in the list are:Smart Data Discovery Categorical Imputation Transformation InputSmart Data Discovery Extract Day Of Week Transformation InputSmart Data Discovery Extract Month Of Year Transformation InputSmart Data Discovery Free Text Clustering Transformation InputSmart Data Discovery Numerical Imputation Transformation InputSmart Data Discovery Projected Predictions Transformation InputSmart Data Discovery Sentiment Analysis Transformation Input | Small, 55.0 | 55.0 |
| url | String | The URL for the story. | Small, 48.0 | 48.0 |
| validation​Configuration | Abstract​Smart​Data​Discovery​Validation​Configuration | The validation configuration for the story. Valid values are:Validation DatasetValidation Ratio | Small, 57.0 | 57.0 |

## Related Topics

- Autopilot (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_autopilot.htm)
- Abstract​Classification​Threshold (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_classification_threshold.htm)
- Binary​Classification​Threshold (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_binary_classification_threshold.htm)
- Smart​Data​Discovery​User (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_user.htm)
- Abstract​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_field_configuration.htm)
- Date​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_date_field_configuration.htm)
- Numeric​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_numeric_field_configuration.htm)
- Text​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_text_field_configuration.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_asset_reference.htm)
- Abstract​Story​Source (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_story_source.htm)
