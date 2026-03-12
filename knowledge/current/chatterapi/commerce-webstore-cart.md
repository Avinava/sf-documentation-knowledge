---
title: "Commerce Webstore Cart"
domain: chatterapi
topic: commerce-webstore-cart
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.171Z
estimatedTokens: 571
keywords: [Commerce, Webstore, Cart, active, doesn’t, exist]
---

# Commerce Webstore Cart

> Get a cart. Delete a cart. Create an active cart, if one doesn’t
      exist.

# Commerce Webstore Cart

Get a cart. Delete a cart. Create an active cart, if one doesn’t exist.

Buyers with read access to carts can create and delete carts.

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

GET, PUT, DELETE

In API version 63.0 and later, if you use GET with /commerce/webstores/webstoreId/carts/current and there isn’t a current cart, it returns an empty cart with a null cartId and a 200 status.

If you use GET with /commerce/webstores/webstoreId/carts/active and there isn’t an active cart, you get an error.

Use PUT with /commerce/webstores/webstoreId/carts/active to create an active cart if one doesn’t exist.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

PUT doesn’t require parameters nor a request body.

Request parameters for GET, PUT, and DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Currency ISO code of the cart. | Optional | 57.0 |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 47.0 |

Response body for GET and PUT

[Cart Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_summary.htm "Summary of information about a cart and its contents.")

During asynchronous cart processing, if enabled, GET response headers include Location and Retry-After. While the cart is processing, GET requests return a 202 status and may include stale, null, or 0 pricing data. When cart processing is complete, requests return a 200 status with up-to-date pricing data.

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/commerce/webstores/webstoreId/carts/cartStateOrId
```

## Related Topics

- Cart Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_summary.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
