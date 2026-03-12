---
title: "Cart Details"
domain: loyalty
topic: cart-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.305Z
estimatedTokens: 391
keywords: [Cart, line, items, including, initial, amount, adjusted, price, applied, discounts, promotions]
---

# Cart Details

> The details of the cart and its line items, including initial amount, adjusted price, and details of all applied discounts and promotions.

# Cart Details

The details of the cart and its line items, including initial amount, adjusted price, and details of all applied discounts and promotions.

JSON example

This example shows a sample response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustedCartAmount | Double | The final total amount of the cart after all promotions are applied. | Big, 65.0 | 65.0 |
| appliedCartPromotionDetails | Applied Cart Promotion Details[] | Details of the cart-level promotions and non-pricing rewards of the line and cross line level promotions applied to the cart. | Big, 65.0 | 65.0 |
| cartHeaderId | String | The ID of the cart on which promotions are applied. | Big, 65.0 | 65.0 |
| cartLineDetails | Cart Line Details[] | Details of the initial amount, adjusted price, and details of all applied discounts and promotions to cart line items within the cart. | Big, 65.0 | 65.0 |
| initialCartAmount | Double | Sum of the prices of all items in the cart before any promotions are applied. | Big, 65.0 | 65.0 |
| totalCartLevelDiscountAmount | Double | Total amount of discounts applied to the the cart from cart-level promotions. | Big, 65.0 | 65.0 |
| totalDiscountAmount | Double | Sum of all discounts applied to the the cart, including line-level, crossline-level and cart-level discounts. | Big, 65.0 | 65.0 |
| totalLineLevelDiscountAmount | Double | Total amount of discounts applied to line items from line-level and crossline-level promotions. | Big, 65.0 | 65.0 |

## Code Examples

```
{
    "cartDetails": [
      {
        "adjustedCartAmount": 69.5,
        "appliedCartPromotionDetails": [
          {
            "cartAmountAfterDiscount": 99.5,
            "cartAmountBeforeDiscount": 99.5,
            "cartLevelDiscountAmount": 0,
            "displayName": "Get 10% off on Burger + Voucher",
            "isAutomatic": true,
            "nonPricingRewards": {
              "voucherRewards": [
                {
                  "voucherDefinitionId": "2Xaxx00000000XtCAI",
                  "voucherDefinitionName": "Voucher1"
                }
              ]
            },
            "promotionId": "0c8xx00000004y5AAA"
          },
          {
            "cartAmountAfterDiscount": 89.5,
            "cartAmountBeforeDiscount": 99.5,
            "cartLevelDiscountAmount": 10,
            "displayName": "10% off on Cart",
            "isAutomatic": true,
            "nonPricingRewards": {},
            "promotionId": "0c8xx00000005R7AAI"
          },
          {
            "cartAmountAfterDiscount": 99.5,
            "cartAmountBeforeDiscount": 99.5,
            "cartLevelDiscountAmount": 0,
            "displayName": "Cart Voucher",
            "isAutomatic": true,
            "nonPricingRewards": {
              "voucherRewards": [
                {
                  "voucherDefinitionId": "2Xaxx00000000XtCAI",
                  "voucherDefinitionName": "Voucher1"
                }
              ]
            },
            "promotionId": "0c8xx000000060bAAA"
          },
          {
            "cartAmountAfterDiscount": 79.5,
            "cartAmountBeforeDiscount": 99.5,
            "cartLevelDiscountAmount": 20,
            "isAutomatic": true,
            "nonPricingRewards": {},
            "promotionId": "0c8xx00000006wfAAA"
          },
          {
            "cartAmountAfterDiscount": 99.5,
            "cartAmountBeforeDiscount": 99.5,
            "cartLevelDiscountAmount": 0,
            "displayName": "LOY promotion",
            "isAutomatic": true,
            "nonPricingRewards": {
              "badgeRewards": [
                {
                  "loyaltyProgramBadgeId": "0w8xx0000000001AAA",
                  "badgeValidityEndDate": "2025-08-31T00:00:00.000Z",
                  "loyaltyProgramBadgeName": "badge1"
                }
              ],
              "fixedPointsRewards": [
                {
                  "loyaltyProgramCurrencyName": "NQP",
                  "loyaltyProgramCurrencyId": "0lcxx00000001FRAAY",
                  "points": 100
                }
              ]
            },
            "promotionId": "0c8xx0000000EpNAAU"
          },
          {
            "cartAmountAfterDiscount": 99.5,
            "cartAmountBeforeDiscount": 99.5,
            "cartLevelDiscountAmount": 0,
            "isAutomatic": true,
            "nonPricingRewards": {
              "multiplierPointsRewards": [
                {
                  "loyaltyProgramCurrencyName": "NQP",
                  "pointsExpirationDate": "2025-09-07T00:00:00.000Z",
                  "transactionJournalField": "TransactionJournal.TransactionAmount",
                  "loyaltyProgramCurrencyId": "0lcxx00000001FRAAY",
                  "multiplierValue": 44
                }
              ],
              "gameRewards": [
                {
                  "gameDefinitionId": "3GDxx0000004C92GAE",
                  "gameType": "Scratchcard",
                  "gameDefinitionName": "GD1"
                }
              ]
            },
            "promotionId": "0c8xx0000000Fv7AAE"
          }
        ],
        "cartHeaderId": "01ddf0000003kfMAAW",
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
            ],
            "cartLineItemAmountAfterDiscount": 3.14,
            "cartLineItemAmountBeforeDiscount": 10,
            "cartLineItemId": "abcd2",
            "cartLineItemQuantity": 2,
            "cartLineProduct": "Burger",
            "totalCartLineItemDiscountAmount": 6.86,
            "totalCartLinePromotionsDiscountAmount": 5.5,
            "totalCartPromotionsDistributedDiscountAmount": 1.36
          }
        ],
        "initialCartAmount": 110,
        "totalCartLevelDiscountAmount": 30,
        "totalDiscountAmount": 40.5,
        "totalLineLevelDiscountAmount": 10.5
      }
    ]
  }
}
```

## Related Topics

- Applied
                  Cart Promotion Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_applied_cart_promotion_details.htm)
- Cart Line
                  Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_cart_line_details.htm)
