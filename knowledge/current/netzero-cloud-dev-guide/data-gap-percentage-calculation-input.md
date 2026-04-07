---
title: "Data Gap Percentage Calculation Input"
domain: netzero-cloud-dev-guide
topic: data-gap-percentage-calculation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:17.168Z
estimatedTokens: 132
keywords: [Gap, Percentage, Calculation, endpoint]
---

> Input representation of Data Gap Percentage Calculation endpoint.

# Data Gap Percentage Calculation Input

Input representation of Data Gap Percentage Calculation endpoint.

JSON Example

```

```

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | String | Specifies the reason for data gap percentage computation such as FuelConsumption. | Required | 64.0 |
| usageType | String | Specifies the usage category or purpose for the data such as ESG (Environmental, Social, and Governance). | Required | 64.0 |

## Code Examples

```
{
  "type": "string",
  "usageType": "string"
}
```
