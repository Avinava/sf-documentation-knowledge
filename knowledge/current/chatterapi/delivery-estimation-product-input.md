---
title: "Delivery Estimation Product Input"
domain: chatterapi
topic: delivery-estimation-product-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.499Z
estimatedTokens: 131
keywords: [Delivery, Estimation, Product, Input]
---

# Delivery Estimation Product Input

> Delivery estimation product information.

# Delivery Estimation Product Input

Delivery estimation product information.

Root XML tag

deliveryEstimationProduct

JSON example

```

```

Properties

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | Product name. | Optional | 63.0 |
| productId | String | ID of the product. | Optional | 63.0 |
| quantity | Double | Product quantity. | Required | 63.0 |
| stockKeepingUnit | String | Product's stock keeping unit (SKU). | Required | 63.0 |

## Code Examples

```
"products": [
    {
      "stockKeepingUnit": "SKU01",
      "quantity": 5
    }
  ],
```
