---
title: "Promotion Cart Delivery Group Method Input"
domain: chatterapi
topic: promotion-cart-delivery-group-method-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.569Z
estimatedTokens: 135
keywords: [Promotion, Cart, Delivery, Group, Input]
---

# Promotion Cart Delivery Group Method Input

> Cart delivery group method for a promotion.

# Promotion Cart Delivery Group Method Input

Cart delivery group method for a promotion.

Root XML tag

<cartDeliveryGroupMethod>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartDelivery​MethodId | String | ID of the cart delivery method. | Required | 60.0 |
| price | String | Price before promotion. | Optional | 60.0 |
| shippingRateId | String | ID of the shipping rate for the promotion. | Required for shipping promotions. | 62.0 |

## Code Examples

```
{
  "cartDeliveryMethodId": "2Dmxx0000004MMuCAM",
  "shippingRateId": "5fyxx0000000006",
  "price": "20.00"
}
```
