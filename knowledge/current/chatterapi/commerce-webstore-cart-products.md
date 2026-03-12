---
title: "Commerce Webstore Cart Products"
domain: chatterapi
topic: commerce-webstore-cart-products
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.285Z
estimatedTokens: 376
keywords: [Commerce, Webstore, Cart, Products, items, sorted, product]
---

# Commerce Webstore Cart Products

> Get the items in a cart, sorted by product ID.

# Commerce Webstore Cart Products

Get the items in a cart, sorted by product ID.

Resource

```

```

Values for cartStateOrId are:

-   cartId—ID of the cart.
-   active—Active cart. This value should only be used for authenticated users.
-   current—Cart that isn’t closed or pending deletion. Available in version 50.0 and later.

Available version

60.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Currency ISO code of the cart. | Optional | 60.0 |
| effectiveAccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 60.0 |
| pageNumber | Integer | Specifies the requested page number. | Optional | 60.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 60.0 |
| productFields | String | Comma-separated list of up to 15 product fields. Results include fields that you have access to. Some product fields (such as productName and sku) are returned even when not included in the productFields parameter. | Optional | 60.0 |

Response body for GET

[Product Cart Item Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_cart_item_collection.htm "Items in the cart, grouped by product type.")

## Code Examples

```
/commerce/webstores/webStoreId/carts/cartStateOrId/products
```

## Related Topics

- Product Cart Item Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_cart_item_collection.htm)
