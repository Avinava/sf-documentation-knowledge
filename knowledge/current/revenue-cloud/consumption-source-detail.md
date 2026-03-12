---
title: "Consumption Source Detail"
domain: revenue-cloud
topic: consumption-source-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.284Z
estimatedTokens: 183
keywords: [Consumption, Source, Detail, Output, representation, specific]
---

# Consumption Source Detail

> Output representation of the details of a specific consumption source.

# Consumption Source Detail

Output representation of the details of a specific consumption source.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cmtAssetRatable​SummaryId | String | ID for querying rating waterfall. | Big, 66.0 | 66.0 |
| commitRate | Double | Net unit rate at which drawdown is done for commitment products. | Big, 66.0 | 66.0 |
| consumption​SourceId | String | Object on which the consumption was recorded. | Big, 66.0 | 66.0 |
| consumption​Unit | Double | Recorded quantity of consumption. | Big, 66.0 | 66.0 |
| targetRate | Double | Input unit rate which is used for commitment products. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "consumptionSources": [
    {
      "consumptionSourceId": "1AE000000000001",
      "consumptionUnit": 500
    },
    {
      "consumptionSourceId": "1CO000000000001",
      "consumptionUnit": 375,
      "commitRate": 1.5,
      "targetRate": 2,
      "cmtAssetRatableSummaryId": "URSCARID1"
    },
    {
      "consumptionSourceId": "1CO000000000002",
      "consumptionUnit": 125,
      "commitRate": 0.75,
      "targetRate": 1,
      "cmtAssetRatableSummaryId": "URSCARID2"
    }
  ]
}
```
