---
title: "Commerce Webstore Cart, Add to Wishlist"
domain: chatterapi
topic: commerce-webstore-cart-add-to-wishlist
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.176Z
estimatedTokens: 301
keywords: [Commerce, Webstore, Cart, Add, Wishlist, Copy, products]
---

# Commerce Webstore Cart, Add to Wishlist

> Copy the products from a cart to a wishlist.

# Commerce Webstore Cart, Add to Wishlist

Copy the products from a cart to a wishlist.

Resource

```

```

Values for cartStateOrId are:

-   cartId—ID of the cart.
-   active—Active cart. This value should only be used for authenticated users.
-   current—Cart that isn’t closed or pending deletion. Available in version 50.0 and later.

Available version

50.0

HTTP methods

POST

Request body for POST

Root XML tag

<cartToWishlist>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| wishlistId | String | ID of the wishlist to copy cart products to. | Required | 50.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 50.0 |

Response body for POST

[Cart to Wishlist Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_to_wishlist_result.htm "Result of copying products from a cart to a wishlist.")

## Code Examples

```
/commerce/webstores/webstoreId/carts/cartStateOrId/actions/add-cart-to-wishlist
```

```
{
"wishlistId": "3orxx00000000A1"
}
```

## Related Topics

- Cart to Wishlist Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_to_wishlist_result.htm)
