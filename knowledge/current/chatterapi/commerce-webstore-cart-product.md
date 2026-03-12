---
title: "Commerce Webstore Cart Product"
domain: chatterapi
topic: commerce-webstore-cart-product
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.280Z
estimatedTokens: 303
keywords: [Commerce, Webstore, Cart, Product, items, specific]
---

# Commerce Webstore Cart Product

> Get cart items of a specific product.

# Commerce Webstore Cart Product

Get cart items of a specific product.

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
| productFields | String | Comma-separated list of up to 15 product fields. Results include fields that you have access to. Some product fields (such as productName and sku) are returned even when not included in the productFields parameter. | Optional | 60.0 |

Response body for GET

[Product Cart Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_cart_item.htm "Cart items of a specific product type.")

## Code Examples

```
/commerce/webstores/webStoreId/carts/cartStateOrId/products/productId
```

## Related Topics

- Product Cart Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_cart_item.htm)
