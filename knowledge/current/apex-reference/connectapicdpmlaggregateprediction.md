---
title: "ConnectApi.CdpMlAggregatePrediction"
domain: apex-reference
topic: connectapicdpmlaggregateprediction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.241Z
keywords: [ConnectApi.CdpMlAggregatePrediction]
---

# ConnectApi.CdpMlAggregatePrediction

# ConnectApi.CdpMlAggregatePrediction

Represents a CDP machine-learning aggregate prediction.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| factors | List<ConnectApi.CdpMlAggregatePredictCondition> | Top factors associated with this aggregate prediction. | 59.0 |
| prescriptions | List<ConnectApi.CdpMlAggregatePredictCondition> | Prescriptions associated with this aggregate prediction. | 59.0 |
| status | CdpMlPredictAggregateFunctionStatusEnum | Status of the prediction aggregate function.ErrorSuccess | 59.0 |
| type | CdpMlPredictAggregateFunctionTypeEnum | Type of the prediction aggregate function.AverageMedianSum | 59.0 |
| value | Double | Value of the aggregate prediction. | 59.0 |