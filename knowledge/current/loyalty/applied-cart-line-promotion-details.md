---
title: "Applied Cart Line Promotion Details"
domain: loyalty
topic: applied-cart-line-promotion-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.283Z
estimatedTokens: 354
keywords: [Applied, Cart, Line, Promotion, reward]
---

# Applied Cart Line Promotion Details

> Specifies the list of cart line reward details.

# Applied Cart Line Promotion Details

Specifies the list of cart line reward details.

JSON example

This example shows a sample response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartLineItemAmountAfterDiscount | Double | The updated cart amount after the current line or cross line promotion discount. | Big, 65.0 | 65.0 |
| cartLineItemAmountBeforeDiscount | Double | The cart line item amount before the current line or cross line promotion is applied. | Big, 65.0 | 65.0 |
| cartLineItemDiscountAmount | Double | Amount of line or cross line promotion discounts applied to the line items. | Big, 65.0 | 65.0 |
| couponCode | String | Coupon code of the applied line or cross line promotion. | Big, 65.0 | 65.0 |
| currencyIsoCode | String | Three-letter ISO 4217 code of the monetary currency associated with the applied line or cross line promotion. | Big, 65.0 | 65.0 |
| displayName | String | Display name of the applied line or cross line promotion. | Big, 65.0 | 65.0 |
| isAutomatic | Boolean | Indicates whether the promotion is automatically applied for eligible carts (true) or not (false). | Big, 65.0 | 65.0 |
| promotionCode | String | Code of the applied line or cross line promotion. | Big, 65.0 | 65.0 |
| promotionId | String | The ID of the applied line or cross line promotion. | Big, 65.0 | 65.0 |

## Code Examples

```
"appliedCartLinePromotionDetails": [
              {
                "cartLineItemAmountAfterDiscount": 95,
                "cartLineItemAmountBeforeDiscount": 100,
                "cartLineItemDiscountAmount": 5,
                "couponCode": "PIZZA5",
                "currencyIsoCode": "USD",
                "displayName": "5 % off on Pizza",
                "isAutomatic": false,
                "promotionId": "0c8xx00000005NtAAI"
              }
            ],
            "cartLineItemAmountAfterDiscount": 66.36,
            "cartLineItemAmountBeforeDiscount": 100,
            "cartLineItemId": "abcd1",
            "cartLineItemQuantity": 2,
            "cartLineProduct": "Pizza",
            "totalCartLineItemDiscountAmount": 33.64,
            "totalCartLinePromotionsDiscountAmount": 5,
            "totalCartPromotionsDistributedDiscountAmount": 28.64
          },
          {
            "appliedCartLinePromotionDetails": [
              {
                "cartLineItemAmountAfterDiscount": 9,
                "cartLineItemAmountBeforeDiscount": 10,
                "cartLineItemDiscountAmount": 1,
                "currencyIsoCode": "USD",
                "displayName": "Get 10% off on Burger + Voucher",
                "isAutomatic": true,
                "promotionId": "0c8xx00000004y5AAA"
              },
              {
                "cartLineItemAmountAfterDiscount": 4.5,
                "cartLineItemAmountBeforeDiscount": 9,
                "cartLineItemDiscountAmount": 4.5,
                "currencyIsoCode": "USD",
                "displayName": "Buy 1 Pizza, Get 1 Burger Free",
                "isAutomatic": true,
                "promotionId": "0c8xx00000006TdAAI"
              }
            ]
```
