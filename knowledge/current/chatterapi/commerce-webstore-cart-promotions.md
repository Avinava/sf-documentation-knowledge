---
title: "Commerce Webstore Cart Promotions"
domain: chatterapi
topic: commerce-webstore-cart-promotions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.290Z
estimatedTokens: 283
keywords: [Commerce, Webstore, Cart, Promotions, associated]
---

# Commerce Webstore Cart Promotions

> Get promotions associated with a cart.

# Commerce Webstore Cart Promotions

Get promotions associated with a cart.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

Resource

```

```

Values for cartStateOrId are:

-   cartId—ID of the cart.
-   active—Active cart. This value should only be used for authenticated users.
-   current—Cart that isn’t closed or pending deletion. Available in version 50.0 and later.

Available version

53.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Currency ISO code of the cart. | Optional | 57.0 |
| effective​AccountId |  | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 53.0 |

Response body for GET

[Cart Promotion Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_promotion_collection.htm "Promotions associated with a cart.")

## Code Examples

```
/commerce/webstores/webstoreId/carts/cartStateOrId/promotions
```

## Related Topics

- Cart Promotion Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_promotion_collection.htm)
