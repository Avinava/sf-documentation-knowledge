---
title: "Discount Details"
domain: loyalty
topic: discount-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.352Z
estimatedTokens: 111
keywords: [Discount, applied, customer's, cart]
---

# Discount Details

> The details of the discount applied to a customer's cart.

# Discount Details

The details of the discount applied to a customer's cart.

JSON example

This example shows a sample response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| discountAmount | Double | The discount amount provided to a customer. | Big, 65.0 | 65.0 |
| discountType | String | The type of discount provided to a customer. | Big, 65.0 | 65.0 |

## Code Examples

```
"discountsAppliedList": [
        {
          "discountType": "ProvideDiscount",
          "discountAmount": 15
        }
      ]
```
