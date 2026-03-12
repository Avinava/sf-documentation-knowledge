---
title: "Commerce Webstore Order Summaries Add Order to Cart"
domain: chatterapi
topic: commerce-webstore-order-summaries-add-order-to-cart
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.414Z
estimatedTokens: 446
keywords: [Commerce, Webstore, Order, Summaries, Add, Cart, webstore’s, summary]
---

# Commerce Webstore Order Summaries Add Order to Cart

> Use a webstore’s order summary to add an order to a cart.

# Commerce Webstore Order Summaries Add Order to Cart

Use a webstore’s order summary to add an order to a cart. This API is available only to registered users.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

We recommend using the enhanced [Commerce Webstore Add Order Summaries to Cart](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_order_summaries_add_order_to_cart.htm "Add an order summary to an active or a current cart. The API includes products from the existing order summary, with the same quantity and configuration details, such as the product selling model.") API, which is accessible to both registered and guest users.

Resource

```

```

Example

```

```

Available version

57.0

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the account for which the request is made. If null, defaults to the account ID for the context user. | Optional | 57.0 |

Request body for POST

[Order to Cart Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_to_cart_input.htm "Input for action adding an order to a cart.")

Root XML tag

<orderToCartInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartStateOrId | String | Cart state (active or current) or the ID of the cart to which the products from an order are to be copied. | Required | 57.0 |

Response body for POST

[Order to Cart Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_to_cart_result.htm "Result of action adding an order to a cart.")

## Code Examples

```
/commerce/webstores/webstoreId/order-summaries/orderSummaryId/actions/add-order-to-cart
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/commerce/webstores/0ZExx000000005rGAA/order-summaries/orderSummaryId/actions/add-order-to-cart
```

```
{
	"cartStateOrId":"0a6xx0000000cwXAAQ"
}
```

## Related Topics

- Commerce Webstore Add Order Summaries to
          Cart (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_order_summaries_add_order_to_cart.htm)
- Order to Cart Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_to_cart_input.htm)
- Order to Cart Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_to_cart_result.htm)
