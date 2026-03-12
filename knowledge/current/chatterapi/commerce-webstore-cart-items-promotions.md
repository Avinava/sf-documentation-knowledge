---
title: "Commerce Webstore Cart Items Promotions"
domain: chatterapi
topic: commerce-webstore-cart-items-promotions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.263Z
estimatedTokens: 411
keywords: [Commerce, Webstore, Cart, Items, Promotions, associated]
---

# Commerce Webstore Cart Items Promotions

> Get promotions associated with items in a cart.

# Commerce Webstore Cart Items Promotions

Get promotions associated with items in a cart.

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

POST

POST methods typically create an item, but for this resource POST is used to retrieve information. GET calls can be cached.

Request body for POST

Root XML tag

<cartItemPromotionCollectionInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| items | Cart Item Promotion Input[] | List of cart items to get the associated promotions. | Required | 53.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Currency ISO code of the cart. | Optional | 57.0 |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 53.0 |

Response body for POST

[Cart Item Promotion Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_promotion_collection_output.htm "Collection of promotions associated with cart items.")

## Code Examples

```
/commerce/webstores/webstoreId/carts/cartStateOrId/cart-items/promotions
```

```
{
"items": [
   {
   "cartItemId":"0a9xx000000000GAAQ"
   },
   {
   "cartItemId":"0a9xx000000000GBCQ"
   }
   ]
}
```

## Related Topics

- Cart Item Promotion Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_cart_item_promotion_input.htm)
- Cart Item Promotion Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_promotion_collection_output.htm)
