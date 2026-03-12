---
title: "Commerce Webstore Add Order Summaries to Cart"
domain: chatterapi
topic: commerce-webstore-add-order-summaries-to-cart
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.410Z
estimatedTokens: 937
keywords: [Commerce, Webstore, Add, Order, Summaries, Cart, summary, active, current, API, includes, products, quantity, configuration, product]
---

# Commerce Webstore Add Order Summaries to Cart

> Add an order summary to an active or a current cart. The API
    includes products from the existing order summary, with the same quantity and configuration
    details, such as the product selling model.

# Commerce Webstore Add Order Summaries to Cart

Add an order summary to an active or a current cart. The API includes products from the existing order summary, with the same quantity and configuration details, such as the product selling model.

This API is available to both registered and guest users. For registered users, this API uses the webstore’s order summary ID or reference number. For guest users, provide an order summary reference number.

This API authorizes guest users using either a session cookie, an access token generated via the [Commerce Webstore Order Summary Authorization](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_authorize_guest_buyer.htm "Authorize guest users by verifying their personally identifiable information to access the requested order summary. This API is specifically for guest users.") API, or a verification object (email, last name, or phone). If both an access token and verification input are provided along with the session cookie, the API authorizes using whichever one is valid.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Session cookie authorization is only available on Salesforce-hosted stores.

If the existing order summary includes a gift-wrap item, this API only adds the other items to the cart, ignoring the gift-wrap item. For example, if you have eight order item summaries and a gift-wrap item summary in an order summary, only these eight products are added to the cart when you reorder. However, buyers can choose to add gift wrap for the new order during checkout.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Gift wrap applies to the entire order summary with a single delivery address and isn't for a specific order item summary.

Resource

```

```

Example

```

```

Available version

59.0

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | OptionalThis field is required only for authenticated or registered shoppers. | 59.0 |

Request body for POST

Root XML tag

addOrderToCartInput

JSON example

Here’s a sample request for a registerd user:

```

```

Here’s a sample request with verification for a guest user:

```

```

Here’s a sample request with access token for a guest user:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accessToken | String | Encrypted access token, retrieved from the Commerce Webstore Order Summary Authorization API after successful verification for guest users. The access token is valid for 60 minutes. | OptionalThis is required for guest users if the request doesn't include the session cookie and verification field. | 64.0 |
| cartStateOrId | String | Cart state (active or current) or the ID of the cart to which the products from an order are to be added. | Required | 59.0 |
| orderSummaryId​OrRefNumber | String | Either the order summary ID or reference number value.For guest shoppers, use the order reference number. | Required | 59.0 |
| verification | Order Summary Verification Input | Verification attributes for guest shoppers. | OptionalThis is required for guest users if the request doesn't include the session cookie and accessToken field. | 59.0 |

Response body for POST

[Order to Cart Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_to_cart_result.htm "Result of action adding an order to a cart.")

## Code Examples

```
/commerce/webstores/webstoreId/order-summaries/actions/add-order-to-cart
```

```
https://yourInstance.salesforce.com/services/data/v66.0​/commerce/webstores/0ZExx000000005rGAA/order-summaries/actions/add-order-to-cart
```

```
{
  "cartStateOrId": "active",
  "orderSummaryIdOrRefNumber": "Oder_Summary_ID"
}
```

```
{
  "cartStateOrId": "active",
  "orderSummaryIdOrRefNumber": "GJA4C-MUVBN-6ZT4P-V6CSB",
  "verification": {
    "email": "Ma**********@vi*****.info",
    "lastName": "Strosin",
    "phoneNumber": "********7740"
  }
}
```

```
{
  "cartStateOrId": "active",
  "orderSummaryIdOrRefNumber": "GJA4C-MUVBN-6ZT4P-V6CSB",
  "accessToken": "U2FsdGVkX1+kp1d8aQKHsqZJv1shF8Jx4Nc0kOdN+L5gViQa/sZtU5NHMDpIUEhz"
  }
}
```

## Related Topics

- Commerce Webstore Order Summary
          Authorization (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_authorize_guest_buyer.htm)
- Order Summary Verification Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_verification_input.htm)
- Order to Cart Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_to_cart_result.htm)
