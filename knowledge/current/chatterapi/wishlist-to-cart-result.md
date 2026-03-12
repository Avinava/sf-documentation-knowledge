---
title: "Wishlist to Cart Result"
domain: chatterapi
topic: wishlist-to-cart-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.617Z
estimatedTokens: 227
keywords: [Wishlist, Cart, Result, adding]
---

# Wishlist to Cart Result

> Result of adding a wishlist to a cart.

# Wishlist to Cart Result

Result of adding a wishlist to a cart.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartId | String | ID of the cart to which the products were added. | Small, 49.0 | 49.0 |
| failedWishlist​ToCartItems | Cart Item Result[] | Wishlist items that weren’t successfully added to the cart. | Medium, 49.0 | 49.0 |
| productsFailed​Count | Integer | Total number of products that weren’t added to the cart. | Small, 49.0 | 49.0 |
| productsRequested​Count | Integer | Total number of products requested to add to the cart. | Small, 49.0 | 49.0 |
| productsSucceeded​Count | Integer | Total number of products that were successfully added to the cart. | Small, 49.0 | 49.0 |
| succeededWishlist​ToCartItems | Cart Item Result[] | Wishlist items that were successfully added to the cart. | Medium, 49.0 | 49.0 |

## Related Topics

- Cart Item Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_result.htm)
