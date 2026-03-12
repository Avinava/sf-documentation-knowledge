---
title: "Cart"
domain: loyalty
topic: cart
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.300Z
estimatedTokens: 117
keywords: [Cart, line, items, evaluate, execute, promotions]
---

# Cart

> The details of a cart and its line items for which to evaluate and execute promotions.

# Cart

The details of a cart and its line items for which to evaluate and execute promotions.

JSON example

This example shows a sample response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartDetails | Cart Details[] | Details of the cart and its line items, including initial amount, adjusted price, and details of all applied discounts and promotions. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "cart": {
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

- Cart
                Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_cart_details.htm)
