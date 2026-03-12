---
title: "Commerce Webstore Wishlist, Add to Cart"
domain: chatterapi
topic: commerce-webstore-wishlist-add-to-cart
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.617Z
estimatedTokens: 260
keywords: [Commerce, Webstore, Wishlist, Add, Cart]
---

# Commerce Webstore Wishlist, Add to Cart

> Add a wishlist to a cart.

# Commerce Webstore Wishlist, Add to Cart

Add a wishlist to a cart.

Adding wishlists to carts respects buyer View Product entitlements and only users entitled to view product data can access it.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

Resource

```

```

Available version

49.0

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartId | String | ID of the cart. If unspecified, wishlist items are added to the active cart. | Optional | 49.0 |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 49.0 |

Response body for POST

[Wishlist to Cart Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist_to_cart_result.htm "Result of adding a wishlist to a cart.")

## Code Examples

```
/commerce/webstores/webstoreId/wishlists/wishlistId/actions/add-wishlist-to-cart
```

## Related Topics

- Wishlist to Cart Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist_to_cart_result.htm)
