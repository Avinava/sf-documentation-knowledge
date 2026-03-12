---
title: "Binding Object Rate Adjustments"
domain: revenue-cloud
topic: binding-object-rate-adjustments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.408Z
estimatedTokens: 261
keywords: [Binding, Rate, Adjustments, Output, representation, details, binding, target, rate, adjustments.]
---

# Binding Object Rate Adjustments

> Output representation of the details of binding target rate adjustments.

# Binding Object Rate Adjustments

Output representation of the details of binding target rate adjustments.

JSON example

This example includes the details of binding target rate adjustments.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| lowerBound | Double | Minimum quantity for the adjustment to be applicable. | Small, 65.0 | 65.0 |
| name | String | Name of the tier or binding object rate adjustment. | Small, 65.0 | 65.0 |
| rateAdjustmentId | String | ID of the binding object rate adjustment. | Small, 65.0 | 65.0 |
| rateAdjustmentType | String | Type of the binding object rate adjustment. | Small, 65.0 | 65.0 |
| rateAdjustmentValue | Double | Value of the binding object rate adjustment. | Small, 65.0 | 65.0 |
| tierUnitOfMeasure | String | Unit of measure that represents the tier or binding object rate adjustment. | Small, 65.0 | 65.0 |
| upperBound | Double | Maximum quantity for the adjustment to be applicable. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "negotiatedRateAdjustments": [
    {
      "lowerBound": 101,
      "name": null,
      "rateAdjustmentId": "1DMSB000001N3C74AK",
      "rateAdjustmentType": "Amount",
      "rateAdjustmentValue": 10,
      "tierUnitOfMeasure": "USD",
      "upperBound": null
    },
    {
      "lowerBound": 1,
      "name": null,
      "rateAdjustmentId": "1DMSB000001N3C64AK",
      "rateAdjustmentType": "Percentage",
      "rateAdjustmentValue": 30,
      "tierUnitOfMeasure": "USD",
      "upperBound": 100
    }
  ]
}
```
