---
title: "Adjustment Details Input"
domain: revenue-cloud
topic: adjustment-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.574Z
estimatedTokens: 133
keywords: [Adjustment, Input, representation]
---

# Adjustment Details Input

> Input representation of the adjustment details.

# Adjustment Details Input

Input representation of the adjustment details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adjustments | Map<String, Object>[] | Details of the pricing element. | Optional | 60.0 |
| description | String | Description of the pricing element. | Optional | 60.0 |
| elementType | String | Type of the pricing element. | Optional | 60.0 |
| name | String | Name of the pricing element. | Optional | 60.0 |

## Code Examples

```
"pricingElement": {
     "adjustments": [{
     "AdjustmentValue": "15.00",
     "AdjustmentType": "Percentage"
  }],
   "description": null,
   "elementType": "VolumeDiscount",
   "name": "Volume Discount"
 }
```
