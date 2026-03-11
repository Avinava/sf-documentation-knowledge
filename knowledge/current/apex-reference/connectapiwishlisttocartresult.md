---
title: "ConnectApi.WishlistToCartResult"
domain: apex-reference
topic: connectapiwishlisttocartresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.234Z
keywords: [ConnectApi.WishlistToCartResult]
---

# ConnectApi.WishlistToCartResult

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