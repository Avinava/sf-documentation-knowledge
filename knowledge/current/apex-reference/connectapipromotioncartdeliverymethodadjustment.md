---
title: "ConnectApi.PromotionCartDeliveryMethodAdjustment"
domain: apex-reference
topic: connectapipromotioncartdeliverymethodadjustment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.107Z
keywords: [ConnectApi.PromotionCartDeliveryMethodAdjustment]
---

# ConnectApi.PromotionCartDeliveryMethodAdjustment

# ConnectApi.PromotionCartDeliveryMethodAdjustment

Adjustment for a cart delivery method in a promotion.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| adjustmentType | String | Type of price adjustment. Valid values are:AdjustmentAmount—The adjustment is a fixed amount.AdjustmentPercentage—The adjustment is a percentage. | 60.0 |
| adjustmentValue | String | Price value of the adjustment. | 60.0 |
| baseAmount | String | Price value of the adjustment. | 60.0 |
| priceAdjustment​CauseId | String | ID of the related promotion. | 60.0 |
| priority | Integer | Where in the sequence of adjustments this adjustment was applied. | 60.0 |