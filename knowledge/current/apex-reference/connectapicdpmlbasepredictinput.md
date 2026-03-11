---
title: "ConnectApi.CdpMlBasePredictInput"
domain: apex-reference
topic: connectapicdpmlbasepredictinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.941Z
keywords: [ConnectApi.CdpMlBasePredictInput, See]
---

# ConnectApi.CdpMlBasePredictInput

# ConnectApi.CdpMlBasePredictInput

Base input representation for a prediction request.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model | ConnectApi.CdpAssetReferenceInput | A reference to the model to use to generate the prediction. | Required | 59.0 |
| settings | ConnectApi.CdpMlPredictSettingsInput | The model configuration settings to use to generate the prediction. | Optional | 59.0 |
| type | CdpMlPredictTypeEnum | Type of input data for the prediction.RawData-Raw data.RecordOverrides-Record IDs with user-provided overrides.Records-Record IDs. | Required | 59.0 |

#### See Also

-   [predict(predict)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpMachineLearning_static_methods.htm#apex_ConnectAPI_CdpMachineLearning_predict_1 "Make a prediction using a specified model and parameters. This request is synchronous.")