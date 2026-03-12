---
title: "Predictions"
domain: omnistudio
topic: predictions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.154Z
estimatedTokens: 2448
keywords: [Predictions, Retrieve, real-time, scores, prediction, machine, learning, case, Components, Accelerator, API]
---

# Predictions

> Retrieve real-time scores prediction for a machine learning use
      case.

# Predictions

Retrieve real-time scores prediction for a machine learning use case.

## Components of AI Accelerator Predictions API

The components that make up the AI Accelerator real-time scoring API are:

-   Configuration Resolution
-   Feature Extractor
-   Scorer
-   DB Writer

**Configuration Resolution**

For each API request, the API resolves the configuration values at run time in the following order:

-   API request (highest priority)
-   Admin configurations in setup BPOs. See [AI Accelerator](https://help.salesforce.com/s/articleView?id=ind.ai_accelerator.htm&type=5&language=en_US "HTML (New Window)").
-   Use case configuration file setting

**Feature Extractor**

This component is applicable to only those use cases where it’s necessary to derive or calculate some features during run time. Just to clarify, features are the inputs to an ML model.

As an example, let’s consider an ML use case that predicts the price of a real estate property. To do so, the ML model requires features, such as the property’s square feet area, carpet area, location, number of bedrooms, construction year, and construction age.

Say all these features are available in the property’s record except the construction age feature. In this case, the API invokes Feature Extractor to calculate the construction age in runtime by subtracting the construction year feature from the current year.

**Scorer**

Scorer accepts features and uses the Einstein Discovery Predict API to interact with the ED platform for scoring the records.

**DB Writer**

If you configure an ML use case for persistence, DB Writer persists the features, scores, and insights in the specified object and as per the specified field mapping in the [AIUsecaseFieldMapping](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_aiusecasefieldmapping.htm "Represents information about the field mapping that’s used to save extracted features, prediction scores, insights about the predictions, and suggestions to improve the prediction scores. This object is available in API version 55.0 and later.") object.

The AI Accelerator Predictions API returns the following output components:

-   A single prediction score per record, rawdata, recordoverrides, extractedrawdata, or extractedrecordoverrides.
-   Details on how the score was arrived at through a maximum of three prediction insights, which helps end users understand the impact of various features on the scores.
-   Prediction improvements to improve the score.

Resource

```

```

Resource example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| async | Boolean | Indicates whether the execution mode is async (true) or not (false). | Optional | 55.0 |
| columnNames | String[] | Comma-separated list of column names representing the columns that the model analyzes. These are the features that are inputs to the model for predicting the scores. | OptionalNoteThis field is required when type is rawdata or recordOverrides. | 55.0 |
| enableFeaturePersistence | Boolean | Indicates whether you want to persist the features (true) or not (false). | OptionalNoteThis field is required only if raw data or when features are extracted. | 55.0 |
| enableInsightPersistence | Boolean | Indicates whether you want to persist the insights (true) or not (false).NoteThe enableScorePersistence field must be enabled to persist insights. | Optional | 55.0 |
| enableScorePersistence | Boolean | Indicates whether you want to persist the prediction scores (true) or not (false). | Optional | 55.0 |
| enableSuggestionPersistence | Boolean | Indicates whether you want to persist the suggestions (true) or not (false).NoteThe enableScorePersistence field must be enabled to persist suggestions. | Optional | 55.0 |
| enrichModelClassification | Boolean | Indicates whether you want to retrieve the classification model type and the classification threshold (true) or not (false). | Optional | 55.0 |
| enrichModelFeatures | Boolean | Indicates whether you want to retrieve the model feature details, including label and data type (true) or not (false). | Optional | 55.0 |
| enrichPredictionDefinition | Boolean | Indicates whether you want to retrieve the prediction definition label (true) or not (false). | Optional | 55.0 |
| featureColumnMap | Map<String, String> | Represents the map that contains which features must be persisted and where they must be persisted. The key-value pair must contain:key—Feature namevalue—ResponseObjects (configured in the Admin UI setup).FieldName | Optional | 55.0 |
| featureExtractorDevName | String | The API name of the feature extractor record. | OptionalNoteThis field is required when the usecaseModel doesn’t have a default Feature Extractor and the input type is ExtractedRawData or ExtractedRecordOverrides. | 55.0 |
| featureExtractionParameters | Feature Extraction Parameters Field Map Value[] | Represents the input parameters that are required by the Feature Extractor to extract the features that a model requires to make the prediction. Supports a maximum of 200 records. | OptionalNoteThis field is required when the input type is ExtractedRawData or ExtractedRecordOverrides. | 55.0 |
| featureExtractorId | String | The ID of the feature extractor record from the AIFeatureExtractor object. The specified feature extractor is used to extract the features for the prediction.For information on the custom feature extractor interface implementation, see CustomFeatureExtractor Interface. | Optional | 55.0 |
| historyReferencePoint | String | Represents a reference point for a comparison between current and previous prediction scores. | Optional | 55.0 |
| inputType | String | The type of input used to make the prediction. Supports a maximum of 200 records.Possible values are:Records—All the features for a model are present in the Salesforce database.RawData—All the features for a model are provided in the API request itself.RecordOverrides—The API reads a part of the features for the model from the Salesforce database by using the specified record Id. The remaining features are provided in the API request as raw data.ExtractedRawData—The API computes some or all the features for the model at runtime using the configured Feature Extractor, others can be passed as raw data in the API request.ExtractedRecordOverrides—The API computes some features for the model at run time by using the configured Feature Extractor. For the remaining features, the API refers to the Salesforce database through the specified record ID. | Required | 55.0 |
| insightColumnMap | Map<String, String> | Represents the map that contains which insight's Name/Value must be persisted, and to which object they must be persisted. The key-value pair must contain:key—INSIGHT1.Name / INSIGHT1.Value (up to maximum of 3 insights Name/Value)value—ResponseObjects (configured in the Admin UI setup).FieldName | Optional | 55.0 |
| insightsSettings | Map<String, Integer> | A map for configuring insight settings.Here are the settings that contribute to the prediction score:maxInsights—Maximum number of insights that you want the machine learning model to generate.maxSuggestionCount—Maximum number of suggestions that you want the machine learning model to generate.suggestionImpactMinimumPct—Minimum eligible percentage for improving the prediction score based on suggestions.For more information, see Define Maximum Suggestions and Insights in the AI Accelerator Admin Guide. | Optional | 55.0 |
| predictionDefinition | String | The developer name or API name from the DiscoveryGoal object. | Required | 55.0 |
| rawData | Raw Data Input Wrap[] | A two-dimensional array of row values in which each row is a comma-separated list of values for features provided in columnNames. Supports a maximum of 200 records. | OptionalNoteThis field is required when the input type is RawData or RecordOverrides. | 55.0 |
| records | String[] | The IDs of the Salesforce record that is used as input features for model to make the prediction. | OptionalNoteThis field is required when the input type is Records, RecordOverrides, or ExtractedRecordOverrides. | 55.0 |
| scorePersistenceColumn | String | The name and value of the score that must be persisted, and to which object it must be persisted. The valid format is ResponseObject.FieldName. | Optional.NoteThis field is required when enableScorePersistence is set to true. If enableScorePersistence is true and the value isn’t specified, the score column map from the setup page is used by default. | 55.0 |
| suggestionColumnMap | Map<String, String> | Represents the map that contains which suggestions Name/Value must be persisted, and to which object they must be persisted. The key-value pair must contain:key—SUGGESTION1.Name / SUGGESTION1.Value (maximum of 5 suggestions Name/Value)value—ResponseObjects (configured in the Admin UI setup).FieldName | Optional | 55.0 |
| usecaseDefinition | String | The ID of the usecase definition record from the AIUsecaseDefinition object. | Optional | 55.0 |
| usecaseDevname | String | The API name of the usecase definition record. | Required | 55.0 |

JSON example

An example of inputType as Records.

```

```

An example of inputType as RawData.

```

```

An example of inputType as RecordOverrides.

```

```

An example of inputType as ExtractedRawData.

```

```

An example of inputType as ExtractedRecordOverrides.

```

```

Response body for POST

[Prediction Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_prediction_output.htm "Output representation of the prediction request.")

## Code Examples

```
/connect/aiaccelerator/predictions
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect/​​​aiaccelerator/predictions
```

```
{
  "usecaseDevname": "AIUsecaseDefinitionIdentifier",
  "predictionDefinition": "PredictionDefinitionIdentifier",
  "inputType": "Records",
  "records": {
    "wrappedList": [
      "a00x0000000CHa0AAG"
    ]
  },
  "insightsSettings": {
    "insightsSettings": {
      "maxSuggestionCount": 1,
      "maxInsights": 1,
      "suggestionImpactMinimumPct": 0
    }
  },
  "insightColumnMap": {
    "columnMap": {
      "INSIGHT1.Name": "Demo__c.InsightName1Override__c",
      "INSIGHT1.Value": "Demo__c.InsightValue1__c",
      "INSIGHT1.Impact": "Demo__c.InsightImpact1__c"
    }
  },
  "suggestionColumnMap": {
    "columnMap": {
      "SUGGESTION1.Name": "Demo__c.RecommendationName1__c",
      "SUGGESTION1.Value": "Demo__c.RecommendationValue1__c",
      "SUGGESTION1.Impact": "Demo__c.RecommendationImpact1Override__c"
    }
  },
..”scorePersistenceColumn”:”Demo__c.Score__c”,
..”enableInsightPersistence”:true,
  "enableScorePersistence": true,
..”enableSuggestionPersistence”:true,
  "async": false
}
```

```
{
  "usecaseDevname": "AIUsecaseDefinitionIdentifier",
  "predictionDefinition": "PredictionDefinitionIdentifier",
  "inputType": "RawData",
  "columnNames": {
    "wrappedList": [
      "corp_year_week__c",
      "sap_source_id__c",
      "sap_ppg_id__c",
      "sales_units__c"
    ]
  },
  "rawData": {
    "rawData": [
      {
        "rawDataInputWrap": {
          "rawDataInput": [
            "202016",
            "0YQx0000000CaS8GAK",
            "01tx00000006j2DAAQ",
            "20"
          ]
        }
      },
      {
        "rawDataInputWrap": {
          "rawDataInput": [
            "202016",
            "0YQx0000000CaS8GAK",
            "01tx00000006j2DAAQ",
            "20000"
          ]
        }
      }
    ]
  },
  "featureColumnMap": {
    "columnMap": {
      "corp_year_week__c": "Demo__c.YearWeekFeature__c",
      "sap_source_id__c": "Demo__c.StoreIdFeature__c",
      "sap_ppg_id__c": "Demo__c.ProductIdFeature__c",
      "sales_units__c": "Demo__c.SalesUnitsFeatureOverride__c"
    }
  },
  "enableFeaturePersistence": true
}
```

```
{
  "usecaseDevname": "AIUsecaseDefinitionIdentifier",
  "predictionDefinition": "PredictionDefinitionIdentifier",
  "inputType": "RecordOverrides",
  "records": {
    "wrappedList": [
      "a00x0000000CHa0AAG"
    ]
  },
  "columnNames": {
    "wrappedList": [
      "corp_year_week__c",
      "sap_source_id__c",
      "sap_ppg_id__c",
      "sales_units__c"
    ]
  },
  "rawData": {
    "rawData": [
      {
        "rawDataInputWrap": {
          "rawDataInput": [
            "202016",
            "0YQx0000000CaS8GAK",
            "01tx00000006j2DAAQ",
            "20"
          ]
        }
      },
      {
        "rawDataInputWrap": {
          "rawDataInput": [
            "202016",
            "0YQx0000000CaS8GAK",
            "01tx00000006j2DAAQ",
            "20000"
          ]
        }
      }
    ]
  }
}
```

## Related Topics

- AIUsecaseFieldMapping (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_aiusecasefieldmapping.htm)
- Feature Extraction Parameters Field Map
                      Value (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_feature_extraction_parameters_map_valu.htm)
- AIFeatureExtractor (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_aifeatureextractor.htm)
- CustomFeatureExtractor Interface (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_aiaccelerator_CustomFeatureExtractor.htm)
- Raw Data Input
                        Wrap (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_raw_data_input_wra.htm)
- AIUsecaseDefinition (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_aiusecasedefinition.htm)
- Prediction Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_prediction_output.htm)
