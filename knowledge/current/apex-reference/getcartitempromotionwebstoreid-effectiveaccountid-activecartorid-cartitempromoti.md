---
title: "getCartItemPromotion(webstoreId, effectiveAccountId, activeCartOrId, cartItemPromotionCollectionInput, currencyIsoCode)"
domain: apex-reference
topic: getcartitempromotionwebstoreid-effectiveaccountid-activecartorid-cartitempromoti
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [getCartItemPromotion, webstoreId, effectiveAccountId, activeCartOrId, cartItemPromotionCollectionInput, currencyIsoCode, Get, promotion, cart, item., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getCartItemPromotion(webstoreId, effectiveAccountId, activeCartOrId, cartItemPromotionCollectionInput, currencyIsoCode)

> Get a promotion for a cart item.

### getCartItemPromotion(webstoreId, effectiveAccountId, activeCartOrId, cartItemPromotionCollectionInput, currencyIsoCode)

Get a promotion for a cart item.

#### API Version

57.0

#### Available to Guest Users

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CartItemPromotionCollectionOutputRepresentation getCartItemPromotion(String webstoreId, String effectiveAccountId, String activeCartOrId, ConnectApi.CartItemPromotionCollectionInputRepresentation cartItemPromotionCollectionInput, String currencyIsoCode)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

activeCartOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart, active, or current. The current value indicates a cart with a status that isn’t Closed or PendingDelete. Use active only for B2B Aura stores; all other stores must use current.

cartItemPromotionCollectionInput

Type: [ConnectApi.CartItemPromotionCollectionInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cart_item_promotion_collection.htm "Promotions for a cart item.")

Promotions for a cart item.

currencyIsoCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Currency ISO code of the cart.

#### Return Value

Type: [ConnectApi.CartItemPromotionCollectionOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_promotion_collection_output.htm "Promotions for the items in a cart.")