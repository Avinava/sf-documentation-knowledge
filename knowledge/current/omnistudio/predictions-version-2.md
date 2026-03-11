---
title: "Predictions Version 2"
domain: omnistudio
topic: predictions-version-2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.948Z
keywords: [Predictions, Version, Special, Access, Rules]
---

# Predictions Version 2

# Predictions Version 2

Identify the prediction scores for the given request which the customer service representatives can utilize to improve overall customer experience.

## Special Access Rules

You must have AI Accelerator enabled in your org.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| featureExtraction​Parameters | Feature Extraction Parameters Map Value[] | Input parameters to extract the features that a model requires to make the prediction. Supports a maximum of 200 records.. | Optional | 63.0 |
| featureExtractor​DevName | String | API name of the feature extractor record. | Optional | 63.0 |
| feature​ExtractorId | String | ID of the feature extractor record from the AIFeatureExtractor object. The specified feature extractor is used to extract the features for the prediction. | Optional | 63.0 |
| maxInsights | Integer | Maximum number of insights that can be returned by the response. | Optional | 62.0 |
| predictionModel | String | API name of the prediction model. | Optional | 62.0 |
| predictionPlatform | String | Platform on which the machine learning model is created and deployed. | Optional | 62.0 |
| records | String[] | The IDs of the Salesforce records that are used as input features for model to make the prediction. | Optional | 62.0 |
| scoreFilter​Criteria | String | Criteria to filter the prediction scores based on the scoring threshold. Possible values are:GreaterThanGreaterThanEqualsLesserThan | Optional | 62.0 |
| scoringThreshold | Double | Threshold value for which predictions aren't shown. | Optional | 62.0 |
| sortingOrder | String | Sorting order of multiple prediction card in a carousel. Possible values are:AscDesc | Optional | 62.0 |
| usecaseModel​Name | String | API name of the usecase model that’s associated with the feature extractor. | Required | 65.0 |
| usecaseName | String | API name of the usecase definition record. | Required | 62.0 |

Response body for POST

[Prediction Response](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_prediction_response.htm "Predictions for a given request.")