---
title: "Pricing Model"
domain: revenue-cloud
topic: pricing-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-07-26T01:59:43.329Z
estimatedTokens: 185
keywords: [Pricing, Model]
---

> Output representation of the details of the pricing model.

# Pricing Model

Output representation of the details of the pricing model.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| frequency | String | Details about the frequency of recurrence of the pricing model. | Small, 67.0 | 67.0 |
| id | String | ID of the pricing model. | Small, 67.0 | 67.0 |
| name | String | Name of the pricing model. | Small, 67.0 | 67.0 |
| occurrence | Integer | Details about the number of occurrences of the pricing model. | Small, 67.0 | 67.0 |
| pricingModelType | String | Type of the pricing model. | Small, 67.0 | 67.0 |
| unitOfMeasure | String | Unit of measure for the pricing model. | Small, 67.0 | 67.0 |

## Code Examples

```
{
  "pricingModel": {
    "id": "0jPSG000000Avcv2AC",
    "name": "One Time",
    "pricingModelType": "OneTime"
  }
}
```
