---
title: "CdpMachineLearning Class"
domain: apex-reference
topic: cdpmachinelearning-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:16.398Z
estimatedTokens: 362
namespace: ConnectApi
keywords: [CdpMachineLearning, machine-learning, prediction, Data, predict, API, Version, Requires, Chatter]
---

# CdpMachineLearning Class

> Make a machine-learning prediction with Data 360.

**Namespace:** `ConnectApi`

# CdpMachineLearning Class

Make a machine-learning prediction with Data 360.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpMachineLearning Methods

These methods are for CdpMachineLearning. All methods are static.

-   **[predict(predict)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpMachineLearning_static_methods.htm#apex_ConnectAPI_CdpMachineLearning_predict_1)**
    Make a prediction using a specified model and parameters. This request is synchronous.

### predict(predict)

Make a prediction using a specified model and parameters. This request is synchronous.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpMlPredictResult predict(ConnectApi.CdpMlBasePredictInput predict)

#### Parameters

predict

Type: [ConnectApi.CdpMlBasePredictInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_ml_predict_input_base_representatio.htm "Base input representation for a prediction request.")

Input representation for a prediction.

#### Return Value

Type: [ConnectApi.CdpMlPredictResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_ml_predict_result.htm "Represents a CDP machine-learning prediction result.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- predict(predict) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpMachineLearning_static_methods.htm)
- ConnectApi.CdpMlBasePredictInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_ml_predict_input_base_representatio.htm)
- ConnectApi.CdpMlPredictResult (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_ml_predict_result.htm)
