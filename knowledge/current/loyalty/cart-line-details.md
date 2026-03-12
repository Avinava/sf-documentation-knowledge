---
title: "Cart Line Details"
domain: loyalty
topic: cart-line-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.310Z
estimatedTokens: 425
keywords: [Cart, Line, initial, amount, adjusted, price, applied, discounts, promotions, items]
---

# Cart Line Details

> The details of the initial amount, adjusted price, and details of all applied discounts and promotions to cart line items within the cart.

# Cart Line Details

The details of the initial amount, adjusted price, and details of all applied discounts and promotions to cart line items within the cart.

JSON example

This example shows a sample response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| appliedCartLinePromotionDetails | Applied Cart Line Promotion Details[] | Details of the line or cross line promotions applied. | Big, 65.0 | 65.0 |
| cartLineItemAmountAfterDiscount | Double | Updated price of the line items after the current promotions are applied. | Big, 65.0 | 65.0 |
| cartLineItemAmountBeforeDiscount | Double | Price of the line item before the current promotions are applied. | Big, 65.0 | 65.0 |
| cartLineItemId | String | The ID of cart line item on which promotions are applied. | Big, 65.0 | 65.0 |
| cartLineItemQuantity | Integer | Quantity of the cart line item on which promotions are applied. | Big, 65.0 | 65.0 |
| cartLineProduct | String | Product on which promotions are applied. | Big, 65.0 | 65.0 |
| totalCartLineItemDiscountAmount | Double | Total amount of discounts applied to the line item, including discount from applied line or cross line promotions. and cart line. The distributed amount is only from cart level promotions. | Big, 65.0 | 65.0 |
| totalCartLinePromotionsDiscountAmount | Double | Total amount of discount from all line or cross line promotions. | Big, 65.0 | 65.0 |
| totalCartPromotionsDistributedDiscountAmount | Double | The prorated amount of the total monetary discount from cart promotions that a discount distribution service applies to an individual line item. | Big, 65.0 | 65.0 |

## Code Examples

```
"cartLineDetails": [
          {
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
          }
        ]
```

## Related Topics

- Applied Cart Line Promotion Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_applied_cart_line_promotion_details.htm)
