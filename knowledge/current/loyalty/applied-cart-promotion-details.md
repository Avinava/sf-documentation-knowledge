---
title: "Applied Cart Promotion Details"
domain: loyalty
topic: applied-cart-promotion-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.289Z
estimatedTokens: 454
keywords: [Applied, Cart, Promotion, cart-level, promotions]
---

# Applied Cart Promotion Details

> The details of the cart-level promotions applied to the cart.

# Applied Cart Promotion Details

The details of the cart-level promotions applied to the cart.

JSON example

This example shows a sample response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartAmountAfterDiscount | Double | The updated cart amount after the current promotion is applied. | Big, 65.0 | 65.0 |
| cartAmountBeforeDiscount | Double | Cart amount before the current promotion is applied. | Big, 65.0 | 65.0 |
| cartLevelDiscountAmount | Double | Total amount of discounts from promotions. | Big, 65.0 | 65.0 |
| couponCode | String | Coupon code of the applied promotion. | Big, 65.0 | 65.0 |
| currencyIsoCode | String | Three-letter ISO 4217 code of the monetary currency assoaicted with the applied promotion. | Big, 65.0 | 65.0 |
| displayName | String | Display name of the applied promotion. | Big, 65.0 | 65.0 |
| isAutomatic | Boolean | Indicates whether the promotion is automatically applied for eligible carts (true) or not (false). | Big, 65.0 | 65.0 |
| nonPricingRewards | Map<String, Object> | The non-pricing rewards issued to customers as a part of the applied promotions. Possible rewards are:badgeRewards: List of rewards for members in the form of badges.fixedPointsRewards: List of rewards for members in the form of fixed number of loyalty points.gameRewards: List of rewards in the form of games.multiplierPointsRewards: List of rewards for members in the form of loyalty points that are calculated based on a multiplier and a transaction journal field.voucherRewards: List of rewards in the form of vouchers. | Big, 65.0 | 65.0 |
| promotionCode | String | Code of the applied promotion. | Big, 65.0 | 65.0 |
| promotionId | String | The ID of the applied promotion. | Big, 65.0 | 65.0 |

## Code Examples

```
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
        ]
```
