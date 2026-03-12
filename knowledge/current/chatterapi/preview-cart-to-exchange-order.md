---
title: "Preview Cart to Exchange Order"
domain: chatterapi
topic: preview-cart-to-exchange-order
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.475Z
estimatedTokens: 294
keywords: [Preview, Cart, Exchange, Order, Retrieves, action, considers, summary, balance, difference, Expected, change, financial]
---

# Preview Cart to Exchange Order

> Retrieves a preview of an exchange order. This action considers the order summary
    balance and the difference between the return order and the cart that represents the exchange
    order.

# Preview Cart to Exchange Order

Retrieves a preview of an exchange order. This action considers the order summary balance and the difference between the return order and the cart that represents the exchange order.

Resource

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

[Preview Cart to Exchange Order Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_preview_cart_to_exchange_order_input.htm "Information required to preview a cart to exchange order.")

Root XML tag

<previewCartToExchangeOrderInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| exchangeCartId | String | ID of the cart used for adding items to the exchange order. | Required | 60.0 |
| orderSummaryId | String | Order summary ID. | Required | 60.0 |
| referenceId | String | Return order ID. | Required | 60.0 |

Response body for POST

[Preview Cart to Exchange Order](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_preview_cart_to_exchange_order_output.htm "Expected change order financial values for the preview cart to exchange order action.")

## Code Examples

```
/commerce/order-management/exchanges/actions/preview-cart-to-exchange-order
```

```
{
  "orderSummaryId": "1Osxx0000000000",
  "exchangeCartId": "0a6xx0000000000",
  "referenceId": "2oNxx0000000000"
}
```

## Related Topics

- Preview Cart to Exchange Order Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_preview_cart_to_exchange_order_input.htm)
- Preview Cart to Exchange Order (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_preview_cart_to_exchange_order_output.htm)
- Balance
                           State Preview Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_balance_state_preview_output.htm)
- Change Item Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_change_item_output.htm)
- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
