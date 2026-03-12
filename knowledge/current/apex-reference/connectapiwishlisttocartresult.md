---
title: "ConnectApi.WishlistToCartResult"
domain: apex-reference
topic: connectapiwishlisttocartresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.365Z
estimatedTokens: 206
keywords: [ConnectApi.WishlistToCartResult, Result, adding, wishlist, cart]
---

# ConnectApi.WishlistToCartResult

> Result of adding a wishlist to a cart.

# ConnectApi.WishlistToCartResult

Result of adding a wishlist to a cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| cartId | String | ID of the cart to which the products were added. | 49.0 |
| failedWishlist​ToCartItems | List<ConnectApi.​CartItemResult> | Wishlist items that weren’t successfully added to the cart. | 49.0 |
| productsFailed​Count | Integer | Total number of products that weren’t added to the cart. | 49.0 |
| productsRequested​Count | Integer | Total number of products requested to add to the cart. | 49.0 |
| productsSucceeded​Count | Integer | Total number of products that were successfully added to the cart. | 49.0 |
| succeededWishlist​ToCartItems | List<ConnectApi.​CartItemResult> | Wishlist items that were successfully added to the cart. | 49.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CartItemResult (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_result.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
