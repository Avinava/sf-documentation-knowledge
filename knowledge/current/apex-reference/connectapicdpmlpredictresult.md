---
title: "ConnectApi.CdpMlPredictResult"
domain: apex-reference
topic: connectapicdpmlpredictresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.244Z
keywords: [ConnectApi.CdpMlPredictResult, See]
---

# ConnectApi.CdpMlPredictResult

# ConnectApi.CdpMlPredictResult

Represents a CDP machine-learning prediction result.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| aggregatePredictions | List<ConnectApi.CdpMlAggregatePrediction> | List of aggregate results. | 59.0 |
| model | ConnectApi.CdpAssetReference | Model asset reference used as part of the prediction request. | 59.0 |
| predictionType | CdpMlModelPredictionTypeEnum | Type of the model prediction.BinaryClassification-Binary classification.Generic-Generic/unknown.MulticlassClassification-Multiclass classification.Regression-Regression. | 59.0 |
| predictions | List<ConnectApi.CdpMlPredictionBase> | A list of prediction results. | 59.0 |
| settings | ConnectApi.CdpMlPredictSettings | Settings used for the prediction. | 59.0 |

#### See Also

-   [predict(predict)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpMachineLearning_static_methods.htm#apex_ConnectAPI_CdpMachineLearning_predict_1 "Make a prediction using a specified model and parameters. This request is synchronous.")