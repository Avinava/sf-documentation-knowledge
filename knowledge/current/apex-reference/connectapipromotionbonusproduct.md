---
title: "ConnectApi.PromotionBonusProduct"
domain: apex-reference
topic: connectapipromotionbonusproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.374Z
estimatedTokens: 124
keywords: [ConnectApi.PromotionBonusProduct, Bonus, product, promotion]
---

# ConnectApi.PromotionBonusProduct

> Bonus product for a promotion.

# ConnectApi.PromotionBonusProduct

Bonus product for a promotion.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| adjustmentBasis​Reference | String | ID of the associated coupon, if applicable. | 58.0 |
| bonusProductId | String | ID of the bonus product. | 58.0 |
| causeId | String | ID of the related promotion. | 58.0 |
| qualifyingItems | List<ConnectApi.​Promotion​CartItemKey> | List of qualifying cart items and their related quantity. | 58.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​Promotion​CartItemKey (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_key_output.htm)
