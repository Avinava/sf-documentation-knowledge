---
title: "Commerce Webstore Cart Items, Batch"
domain: chatterapi
topic: commerce-webstore-cart-items-batch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.258Z
estimatedTokens: 487
keywords: [Commerce, Webstore, Cart, Items, Batch, Add]
---

# Commerce Webstore Cart Items, Batch

> Add a batch of up to 100 items to a cart.

# Commerce Webstore Cart Items, Batch

Add a batch of up to 100 items to a cart.

Buyers with read access to carts can add, update, and delete items in carts.

Adding items to a cart respects buyer View Product entitlements and only users entitled to view product data can access it.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

Resource

```

```

Values for cartStateOrId are:

-   cartId—ID of the cart.
-   active—Active cart. This value should only be used for authenticated users.
-   current—Cart that isn’t closed or pending deletion. Available in version 50.0 and later.

Available version

49.0

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Currency ISO code of the cart. | Optional | 57.0 |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 49.0 |

Request body for POST

[Batch Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_batch_collection_input.htm "Describes a collection of inputs for a batch request.")

The rich input for this batch collection is a [Cart Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_cart_item_input.htm "An item in a cart.").

Response body for POST

[Batch Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm "Batch results.")

The Batch Results response body contains [Cart Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item.htm "An item in a cart.") response bodies corresponding to each of the request bodies. The Cart Item response bodies are returned in the same order as the request bodies.

## Code Examples

```
/commerce/webstores/webstoreId/carts/cartStateOrId/cart-items/batch
```

## Related Topics

- Batch Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_batch_collection_input.htm)
- Cart Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_cart_item_input.htm)
- Batch Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm)
- Cart Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item.htm)
