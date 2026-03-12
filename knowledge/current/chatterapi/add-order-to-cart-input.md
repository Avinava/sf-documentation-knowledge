---
title: "Add Order To Cart Input"
domain: chatterapi
topic: add-order-to-cart-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.941Z
estimatedTokens: 326
keywords: [Add, Order, Cart, Input, adding]
---

# Add Order To Cart Input

> Input for adding an order to a cart.

# Add Order To Cart Input

Input for adding an order to a cart.

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

## Code Examples

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

- Order Summary Verification Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_verification_input.htm)
