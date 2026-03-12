---
title: "Story Version"
domain: bi-dev-guide-rest-sdd
topic: story-version
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.187Z
estimatedTokens: 1083
keywords: [Story, Version, Einstein, Discovery]
---

# Story Version

> An Einstein Discovery story version.

# Story Version

An Einstein Discovery story version.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| alerts​Url | String | The URL for the alerts for this story version. | Small, 53.0 | 53.0 |
| classification​Threshold | Abstract​Classification​Threshold | The threshold for classification. Valid values are:Binary Classification Threshold | Small, 47.0 | 47.0 |
| created​By | Smart​Data​Discovery​User | The user who created this story version. | Small, 44.0 | 44.0 |
| created​Date | Date | The creation date of the story version. | Small, 44.0 | 44.0 |
| description | String | The description of the story version. | Small, 50.0 | 50.0 |
| error​Code | Integer | The error code for the story version, if any. | Small, 44.0 | 44.0 |
| fields | Abstract​Field​Configuration[] | A list of field configurations. Valid values are:Abstract​Date​Field​ConfigurationAbstract​Numeric​Field​ConfigurationAbstract​Text​Field​Configuration | Small, 47.0 | 47.0 |
| folder | Asset​Reference | The folder that the story version belongs to. | Small, 44.0 | 44.0 |
| id | String | The ID of the story version. | Small, 51.0 | 51.0 |
| input | Abstract​Story​Source | The source for the story version. Valid values are:Analytics​Dataset​SourceReport​Source | Small, 45.0 | 45.0 |
| input​Profile | Asset​Reference | The statistical summary of the input data. | Small, 46.0 | 46.0 |
| insights | Smart​Data​Discovery​Insights[] | A list of insights associated with this story version. | Small, 44.0 | 44.0 |
| label | String | The label for the story version. | Small, 44.0 | 44.0 |
| last​Modified​By | Smart​Data​Discovery​User | The user who last modified this story version. | Small, 44.0 | 44.0 |
| last​Modified​Date | Date | The last modified date of the story version. | Small, 44.0 | 44.0 |
| message | String | The error message for the story version, if any. | Small, 44.0 | 44.0 |
| model​Configuration | Smart​Data​Discovery​Model​Configuration | The model configuration for the story version. | Small, 54.0 | 54.0 |
| outcome | Smart​Data​Discovery​Outcome | The field on which analysis is performed and its attributes. | Small, 44.0 | 44.0 |
| parent | Asset​Reference | The parent of the story version, when it is created from an existing story. | Small, 44.0 | 44.0 |
| processed​Row​Count | Integer | The number of rows processed in building the analysis. | Small, 57.0 | 57.0 |
| sampling​Strategy | Analysis​Sampling​Strategy​Enum | The sampling strategy associated with the story version. Valid values are:DiscoveryNoneRandom | Small, 57.0 | 57.0 |
| setup | Map<Object, Object> | A map of the JSON containing information about the setup menu, names, action variables, model settings, variables, and outcomes. | Big, 44.0 | 44.0 |
| status | Analysis​Setup​Status​Enum | The current status of the analysis. Valid values are:AutopilotDone​DescriptiveDone​Feature​EngineeringDone​Model​MetricsDone​PredictiveDraftFailedFetchingGenerate​SetupIn​ProgressPostprocessingPreprocessingQueuedQueued​For​FetchingQueued​For​PostprocessingRequest​To​DeleteResizingRetry​PreprocessingRunning​DescriptiveRunning​Feature​EngineeringRunning​Model​MetricsRunning​PredictiveSuccessTimed​Out | Small, 44.0 | 44.0 |
| transformations | Abstract​Smart​Data​Discovery​Transformation​Input[] | A list of field transformation. Valid values in the list are:Smart Data Discovery Categorical Imputation Transformation InputSmart Data Discovery Extract Day Of Week Transformation InputSmart Data Discovery Extract Month Of Year Transformation InputSmart Data Discovery Free Text Clustering Transformation InputSmart Data Discovery Numerical Imputation Transformation InputSmart Data Discovery Projected Predictions Transformation InputSmart Data Discovery Sentiment Analysis Transformation Input | Small, 55.0 | 55.0 |
| url | String | The URL for the story version. | Small, 51.0 | 51.0 |
| validation​Configuration | Abstract​Smart​Data​Discovery​Validation​Configuration | The validation configuration for the story. Valid values are:Validation DatasetValidation Ratio | Small, 57.0 | 57.0 |
| validation​Input | Abstract​Story​Source | The analysis source for the validation dataset. Valid values are:Analytics​Dataset​SourceReport​Source | Small, 53.0 | 53.0 |

## Related Topics

- Abstract​Classification​Threshold (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_classification_threshold.htm)
- Binary Classification Threshold (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_binary_classification_threshold.htm)
- Smart​Data​Discovery​User (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_user.htm)
- Abstract​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_field_configuration.htm)
- Abstract​Date​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_date_field_configuration.htm)
- Abstract​Numeric​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_numeric_field_configuration.htm)
- Abstract​Text​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_text_field_configuration.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_asset_reference.htm)
- Abstract​Story​Source (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_story_source.htm)
- Analytics​Dataset​Source (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_analytics_dataset_source.htm)
