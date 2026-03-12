---
title: "ConnectApi.PromotionApproachingDiscount"
domain: apex-reference
topic: connectapipromotionapproachingdiscount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.656Z
estimatedTokens: 170
keywords: [ConnectApi.PromotionApproachingDiscount, Qualifier, promotion, approaching, discount.]
---

# ConnectApi.PromotionApproachingDiscount

> Qualifier for a promotion with an approaching discount.

# ConnectApi.PromotionApproachingDiscount

Qualifier for a promotion with an approaching discount.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| promotionId | String | ID of the promotion with an approaching discount. | Required | 64.0 |
| qualifyingAmount | String | Qualifying amount when promotion is applied. | Required | 64.0 |
| qualifying​ProductTotal | String | Qualifying product total. | Required | 64.0 |
| targetType | ConnectApi.TargetType | Target type of a promotion discount.Shipping—Promotion discounts shipping amount.Transaction—Promotion discounts total transaction amount. | Required | 64.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
