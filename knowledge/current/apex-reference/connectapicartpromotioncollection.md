---
title: "ConnectApi.CartPromotionCollection"
domain: apex-reference
topic: connectapicartpromotioncollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.377Z
estimatedTokens: 278
keywords: [ConnectApi.CartPromotionCollection, promotions, associated, cart.]
---

# ConnectApi.CartPromotionCollection

> All the promotions associated with the cart.

# ConnectApi.CartPromotionCollection

All the promotions associated with the cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| cartId | String | ID of the cart. | 53.0 |
| cartStatus | ConnectApi.​CartStatus | Status of the cart. Values are:Active—Cart is created and available for modifications, like adding or removing products or promotions.Checkout—Cart is in checkout. If the customer modifies the cart, the current checkout session is canceled.Closed—Checkout is complete and an order was created. The cart cannot be modified.PendingClosed—Cart is marked to be closed, but the request isn't completed yet. The cart can’t be modified. This value is available in API version 57.0 and later.PendingDelete—Cart is marked for delete, but the request isn't completed yet. The cart can’t be modified.Processing—Cart is processing. For example, taxes are being calculated. The cart can’t be modified. | 53.0 |
| currencyIsoCode | String | Currency ISO code of the cart. | 53.0 |
| promotions | List<ConnectApi.​CartPromotion​List> | Collection of promotions. | 53.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CartStatus (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CartPromotion​List (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_promotion_list.htm)
