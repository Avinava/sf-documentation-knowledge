---
title: "Prediction Output"
domain: omnistudio
topic: prediction-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.735Z
keywords: [Prediction, Output]
---

# Prediction Output

# Prediction Output

Output representation of the prediction request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| batchDatasource | String | The batch data source name where batch-computed features are stored.NoteThe batch data source name is null when the feature input used to generate predictions is real-time. | Small, 57.0 | 57.0 |
| classificationThreshold | Double | The classification threshold value to derive the type of model to be used for prediction. If prediction score is higher/lower than this threshold, positive/negative prediction labels are displayed based on scorecard configuration. | Small, 55.0 | 55.0 |
| classificationType | String | Specifies the classification model type. For example. Binary or ternary. | Small, 55.0 | 55.0 |
| executionModeWarning | String | Indicates the change in execution mode from user specified to default mode configuration. | Small, 54.0 | 54.0 |
| featureExtractor | String | The class name of the feature extractor implementation used for the prediction. | Small, 54.0 | 54.0 |
| featureExtractorIdentifier | String | The API name of the feature extractor record. | Small, 57.0 | 57.0 |
| featureExtractorType | String | The feature extractor type used for the prediction.Possible values are:ApexHybridJava | Small, 54.0 | 54.0 |
| featureInputType | String | The type of feature input used in generating predictions.Possible values are:Realtime_InputSample_InputBatch_Input | Small, 57.0 | 57.0 |
| inputType | String | The type of input used to make the prediction. | Small, 55.0 | 55.0 |
| insightsSettings | Map<String, Integer> | A map for configuring insight settings. | Small, 55.0 | 55.0 |
| modelFeatures | Model Feature[] | Specifies additional details of the model feature, including name, label, and data type. | Small, 55.0 | 55.0 |
| outcomeGoal | String | Indicates whether predDef maximizes or minimizes the field value. | Small, 55.0 | 55.0 |
| predictionDefinition | String | The model developer name or API name used to make prediction. | Small, 55.0 | 55.0 |
| predictionDefinitionLabel | String | The label corresponding to the model ID used for prediction. | Small, 55.0 | 55.0 |
| predictionPersistenceErrorMessage | String | Indicates that an error occurred during persistence of prediction results or features. | Small, 54.0 | 54.0 |
| predictionPlatform | String | The machine learning platform that is used to make the prediction for a use case. | Small, 55.0 | 55.0 |
| predictions | Prediction Object[] | A list of prediction results. | Small, 55.0 | 55.0 |
| primaryResponseObjRecordIds | String[] | Indicates the list of recordIds where the response is persisted in primary response object. | Small, 55.0 | 55.0 |
| requestId | String | The unique identifier for the request to be generated and used for listening to notifications in the async mode of the execution. | Small, 55.0 | 55.0 |
| secondaryResponseObjRecordIds | String[] | Indicates the list of recordIds where the response is persisted in secondary response object. | Small, 55.0 | 55.0 |
| status | Status | Indicates whether the call succeeded or failed, and in case of failure, specifies the reason. | Small, 55.0 | 55.0 |

JSON example

```

```