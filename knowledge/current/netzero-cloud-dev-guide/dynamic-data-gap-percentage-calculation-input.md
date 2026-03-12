---
title: "Dynamic Data Gap Percentage Calculation Input"
domain: netzero-cloud-dev-guide
topic: dynamic-data-gap-percentage-calculation-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.929Z
estimatedTokens: 278
keywords: [Dynamic, Data, Gap, Percentage, Calculation, Input, representation, endpoint]
---

# Dynamic Data Gap Percentage Calculation Input

> Input representation of Dynamic Data Gap Percentage Calculation endpoint.

# Dynamic Data Gap Percentage Calculation Input

Input representation of Dynamic Data Gap Percentage Calculation endpoint.

JSON Example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filters | Filter Input[] | List of filters to filter the output records. Each filter item is a key-value pair that contains the name and its value.Possible name is:FuelType | Required | 55.0 |
| dataGapTypeVaues | String[] | An array of values specifying the types of data gaps to include in the computation. Each entry includes the parameter value which is the value of the data gap type. | Optional | 64.0 |
| dataGapSourceIds | String[] | An array of identifiers for data gap sources. Each entry includes id which is the identifier of a data gap source like stationaryAsset environmental source. | Required | 64.0 |
| dataGapComputationMethods | String[] | An array of computation methods used for data gap calculation. Each entry includes computationMethod which is the method used for computation. For example, Average. | Required | 64.0 |

## Code Examples

```
{
  "filters": [
    {
      "item": "string",
      "value": "string"
    }
  ],
  "dataGapTypeVaues": [
    {
      "value": "string"
    }
  ],
  "dataGapSourceIds": [
    {
      "id": "string"
    }
  ],
  "dataGapComputationMethods": [
    {
      "computationMethod": "string"
    }
  ]
}
```

## Related Topics

- Filter Input (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_request_filter_input.htm)
