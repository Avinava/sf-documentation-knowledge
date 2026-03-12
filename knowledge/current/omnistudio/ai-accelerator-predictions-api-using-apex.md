---
title: "AI Accelerator Predictions API Using Apex"
domain: omnistudio
topic: ai-accelerator-predictions-api-using-apex
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:46.423Z
estimatedTokens: 136
keywords: [Accelerator, Predictions, API, Apex, exposed, access, invoke, realtime, prediction, results]
---

# AI Accelerator Predictions API Using Apex

> This AI Accelerator Predictions API is also exposed to Apex. You can
            access/invoke this API from within your Apex class to get realtime prediction
            results.

# AI Accelerator Predictions API Using Apex

This AI Accelerator Predictions API is also exposed to Apex. You can access/invoke this API from within your Apex class to get realtime prediction results.

Here are the details to invoke/access the AI Accelerator Predictions API from an Apex class:

1.  In the Developer Console, select **File** | **New Apex Class**.
2.  Implement the AI Accelerator Connect API request in the Apex class.

    This example shows an implementation of the connect API request from an Apex class.

    ```

    ```

## Code Examples

```
ConnectApi.PredictionRequest predictionInputRepresentation = new ConnectApi.PredictionRequest();
predictionInputRepresentation.async = false;
predictionInputRepresentation.enableScorePersistence = false;
predictionInputRepresentation.enableInsightPersistence = false;
predictionInputRepresentation.enableFeaturePersistence = false;
predictionInputRepresentation.enableSuggestionPersistence = false;
predictionInputRepresentation.usecaseDefinition = '0sIx00000000006EAA';
predictionInputRepresentation.predictionDefinition = '0sIx00000000006EAB';
predictionInputRepresentation.inputType = 'ExtractedRawData';
predictionInputRepresentation.featureExtractorId = '0sIx00000000006EAC';
Map < String, Integer > insightsSettings = new Map < String, Integer > ();
insightsSettings.put('maxInsights', 0);
insightsSettings.put('suggestionImpactMinimumPct', 0);
predictionInputRepresentation.insightsSettings = insightsSettings;
List < String > recordIds = new List < String > ();
recordIds.add('subscriptionId');
predictionInputRepresentation.records = recordIds;

//Create a Map with feature extraction parameters
//Replace 'key1', 'recordId' with the required params in your feature extractor
Map < String, Object > map1 = new Map < String, Object > ();
map1.put('recordId', '0sIx000000000068EAC');
map1.put('key1', 'value1');
Object objForList = map1;
ConnectApi.FeatureExtractionParametersFieldMapValue features = new ConnectApi.FeatureExtractionParametersFieldMapValue();
features.featureExtractionParametersMapValue = objForList;
List < ConnectApi.FeatureExtractionParametersFieldMapValue > featuresList = new List < ConnectApi.FeatureExtractionParametersFieldMapValue > ();
featuresList.add(features);
predictionInputRepresentation.featureExtractionParameters = featuresList;
//Act
ConnectApi.PredictionResponse predictionOutputRepresentation = ConnectApi.AIAcceleratorConnectFamily.predictions(predictionInputRepresentation);
```
