---
title: "ConnectApi.PromotionCartAdjustmentGroupInput"
domain: apex-reference
topic: connectapipromotioncartadjustmentgroupinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.878Z
keywords: [ConnectApi.PromotionCartAdjustmentGroupInput]
---

# ConnectApi.PromotionCartAdjustmentGroupInput

# ConnectApi.PromotionCartAdjustmentGroupInput

Cart adjustment group for a promotion.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adjustmentBasis​Reference | String | ID of the associated coupon, if applicable. | Optional | 60.0 |
| adjustment​Description | String | Description of the price adjustment. | Optional | 60.0 |
| adjustmentType | ConnectApi.​AdjustmentType | Type of price adjustment. Valid values are:AdjustmentAmount—The adjustment is a fixed amount.AdjustmentPercentage—The adjustment is a percentage. | Required | 60.0 |
| adjustmentValue | String | Price value of the adjustment. | Optional | 60.0 |
| baseAmount | String | Total amount of the adjustment. | Optional | 60.0 |
| cartId | String | ID of the cart. | Required | 60.0 |
| id | String | ID of the cart adjustment group. | Required | 60.0 |
| priceAdjustment​CauseId | String | ID of the related promotion. | Optional | 60.0 |
| priority | Integer | Where in the sequence of adjustments this adjustment was applied. | Optional | 60.0 |