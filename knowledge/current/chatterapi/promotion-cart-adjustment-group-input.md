---
title: "Promotion Cart Adjustment Group Input"
domain: chatterapi
topic: promotion-cart-adjustment-group-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.561Z
estimatedTokens: 281
keywords: [Promotion, Cart, Adjustment, Group, Input]
---

# Promotion Cart Adjustment Group Input

> Cart adjustment group for a promotion.

# Promotion Cart Adjustment Group Input

Cart adjustment group for a promotion.

Root XML tag

<cartAdjustmentGroup>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adjustmentBasis​Reference | String | ID of the associated coupon, if applicable. | Optional | 60.0 |
| adjustment​Description | String | Description of the price adjustment. | Optional | 60.0 |
| adjustmentType | String | Type of price adjustment. Valid values are:AdjustmentAmount—The adjustment is a fixed amount.AdjustmentPercentage—The adjustment is a percentage. | Required | 60.0 |
| adjustmentValue | String | Price value of the adjustment. | Optional | 60.0 |
| baseAmount | String | Total amount of the adjustment. | Optional | 60.0 |
| cartId | String | ID of the cart. | Required | 60.0 |
| id | String | ID of the cart adjustment group. | Required | 60.0 |
| priceAdjustment​CauseId | String | ID of the related promotion. | Optional | 60.0 |
| priority | Integer | Where in the sequence of adjustments this adjustment was applied. | Optional | 60.0 |

## Code Examples

```
{
         "id":"0m9xx0000006j3SAAQ",
         "cartId":"3z6xx000000001eAAA",
         "priceAdjustmentCauseId":"0c8xx0000000001AAA",
         "adjustmentDescription":"test",
         "priority":2,
         "adjustmentType":"AdjustmentPercentage",
         "adjustmentValue":-10.0,
         "baseAmount":-1.8,
         "adjustmentBasisReference":null
 }
```
