---
title: "Dynamic Data Gap Percentage Calculation Output"
domain: netzero-cloud-dev-guide
topic: dynamic-data-gap-percentage-calculation-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.944Z
estimatedTokens: 211
keywords: [Dynamic, Data, Gap, Percentage, Calculation, Output, representation, endpoint]
---

# Dynamic Data Gap Percentage Calculation Output

> Output representation of Dynamic Data Gap Percentage Calculation endpoint.

# Dynamic Data Gap Percentage Calculation Output

Output representation of Dynamic Data Gap Percentage Calculation endpoint.

Example

```

```

Properties

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| gaps | String[] | An array that contains details about calculated data gaps. Each element in the array represents a single data gap. | 64.0 |
| id | String | A string identifier for the data gap, for example, the ID of Stationary asset envr src. | 64.0 |
| details | Object | An object that provides additional information about the data gap. | 64.0 |
| methods | String[] | An array of methods used to compute the data gap. | 64.0 |
| dataGapComputationMethod | String | The method used to calculate the data gap. | 64.0 |
| dataGapValue | Integer | The calculated value of the data gap. | 64.0 |

## Code Examples

```
{
  "gaps": [
    {
      "id": "string",
      "details": {
        "methods": [
          {
            "dataGapComputationMethod": "string",
            "dataGapValue": "string"
          }
        ]
      }
    }
  ]
}
```
