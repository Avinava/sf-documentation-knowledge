---
title: "predict(predict)"
domain: apex-reference
topic: predictpredict
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.053Z
keywords: [predict, prediction, specified, model, parameters., request, synchronous., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# predict(predict)

> Make a prediction using a specified model and parameters. This request is synchronous.

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