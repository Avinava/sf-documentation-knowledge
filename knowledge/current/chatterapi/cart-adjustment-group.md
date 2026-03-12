---
title: "Cart Adjustment Group"
domain: chatterapi
topic: cart-adjustment-group
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.493Z
estimatedTokens: 268
keywords: [Cart, Adjustment, Group, Price, checkout, prorated, across, eligible, items]
---

# Cart Adjustment Group

> Price adjustment that applies to the cart. During checkout, this
      adjustment is prorated across all eligible items.

# Cart Adjustment Group

Price adjustment that applies to the cart. During checkout, this adjustment is prorated across all eligible items.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustmentBasisReference | String | Reference to coupon, if applicable. | Small, 56.0 | 56.0 |
| adjustmentDescription | String | Description of the adjustment. | Small, 56.0 | 56.0 |
| adjustmentType | String | Adjustment type. Possible values are:AdjustmentAmountAdjustmentPercentage | Small, 56.0 | 56.0 |
| adjustmentValue | String | Value of the adjustment. | Small, 56.0 | 56.0 |
| baseAmount | String | Base amount of the adjustment. | Small, 56.0 | 56.0 |
| cartId | String | Cart ID associated with the adjustment. | Small, 56.0 | 56.0 |
| id | String | ID of the adjustment. | Small, 56.0 | 56.0 |
| priceAdjustmentCauseId | String | ID of the promotion that triggered this adjustment. | Small, 56.0 | 56.0 |
| priority | Integer | Sequence in which the adjustments are applied. | Small, 56.0 | 56.0 |
