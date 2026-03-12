---
title: "ConnectApi.CdpMlPredictResult"
domain: apex-reference
topic: connectapicdpmlpredictresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:26.508Z
estimatedTokens: 266
keywords: [ConnectApi.CdpMlPredictResult, Represents, CDP, machine-learning, prediction, result.]
---

# ConnectApi.CdpMlPredictResult

> Represents a CDP machine-learning prediction result.

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

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.CdpMlAggregatePrediction (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_ml_aggregate_prediction.htm)
- ConnectApi.CdpAssetReference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_asset_reference.htm)
- CdpMlModelPredictionTypeEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.CdpMlPredictionBase (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_ml_prediction_base.htm)
- ConnectApi.CdpMlPredictSettings (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_ml_predict_settings.htm)
- predict(predict) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpMachineLearning_static_methods.htm)
