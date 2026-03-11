---
title: "ConnectApi.CartPromotionOutputRepresentation"
domain: apex-reference
topic: connectapicartpromotionoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.160Z
keywords: [ConnectApi.CartPromotionOutputRepresentation]
---

# ConnectApi.CartPromotionOutputRepresentation

# ConnectApi.CartPromotionOutputRepresentation

A promotion associated with a cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| adjustmentAmount | String | Adjustment amount out of the promotion. | 53.0 |
| couponCode | String | Coupon code for a promotion. A coupon code is available only for manual promotions, not for automatic promotions. | 54.0 |
| currencyIsoCode | String | Currency ISO code associated with the cart. | 57.0 |
| displayName | String | Localized display name of the promotion. | 52.0 |
| promotionId | String | ID of the promotion. | 53.0 |
| targetType | ConnectApi.​CartPromotion​Type | Promotion target type. Values are:Cart—Promotion targets a cart.Item—Promotion targets an item in a cart. | 53.0 |
| termsAndConditions | String | Localized terms and conditions for the promotion. | 53.0 |