---
title: "ConnectApi.CdpMlAggregatePrediction"
domain: apex-reference
topic: connectapicdpmlaggregateprediction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.504Z
estimatedTokens: 185
keywords: [ConnectApi.CdpMlAggregatePrediction, Represents, CDP, machine-learning, aggregate, prediction.]
---

# ConnectApi.CdpMlAggregatePrediction

> Represents a CDP machine-learning aggregate prediction.

# ConnectApi.CdpMlAggregatePrediction

Represents a CDP machine-learning aggregate prediction.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| factors | List<ConnectApi.CdpMlAggregatePredictCondition> | Top factors associated with this aggregate prediction. | 59.0 |
| prescriptions | List<ConnectApi.CdpMlAggregatePredictCondition> | Prescriptions associated with this aggregate prediction. | 59.0 |
| status | CdpMlPredictAggregateFunctionStatusEnum | Status of the prediction aggregate function.ErrorSuccess | 59.0 |
| type | CdpMlPredictAggregateFunctionTypeEnum | Type of the prediction aggregate function.AverageMedianSum | 59.0 |
| value | Double | Value of the aggregate prediction. | 59.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.CdpMlAggregatePredictCondition (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_ml_aggregate_predict_condition.htm)
- CdpMlPredictAggregateFunctionStatusEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- CdpMlPredictAggregateFunctionTypeEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
