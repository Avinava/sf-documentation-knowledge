---
title: "Submit Cart to Exchange Order"
domain: chatterapi
topic: submit-cart-to-exchange-order
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.482Z
estimatedTokens: 489
keywords: [Submit, Cart, Exchange, Order, Creates, summary, exchanges, new, attached, original, created, any, occurred, provide, payment, resulting, action]
---

# Submit Cart to Exchange Order

> Creates an exchange order summary, based on the return order and the cart used for
      exchanges. The new exchange order summary is attached to the original order summary (created
      before any exchanges occurred). You can also provide optional payment information and optional
      information about order summary sequences, which affect the newly created exchange order
      summary.

# Submit Cart to Exchange Order

Creates an exchange order summary, based on the return order and the cart used for exchanges. The new exchange order summary is attached to the original order summary (created before any exchanges occurred). You can also provide optional payment information and optional information about order summary sequences, which affect the newly created exchange order summary.

Resource

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

[Submit Cart to Exchange Order Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_submit_cart_to_exchange_order_input.htm "Information required to submit an exchange order.")

Root XML tag

<submitCartToExchangeOrderInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| exchangeCartId | String | ID of the cart used for adding items to the exchange order. | Required | 60.0 |
| orderNumber | String | Order number. | Optional | 60.0 |
| orderSummaryId | String | Order summary ID. | Required | 60.0 |
| paymentInfoList | Payment Info Input[] | List of payment information when additional funds are needed for the newly created exchange order. | Optional | 60.0 |
| referenceId | String | Return order ID. | Optional | 60.0 |
| reservationType | String | The reservation that's created by the submit API. The possible values are Full, which means there’s a reservation against the exchange cart, or None if there’s no reservation. | Optional | 61.0 |
| sequences | Shared Order Payment Summary Sequence Input[] | Ordered list of order payment summaries and reserved balance amounts to apply them to. | Optional | 60.0 |

Response body for POST

[Submit Cart to Exchange Order](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_submit_cart_to_exchange_order_output.htm "Exchange order summary resulting from a submit cart to exchange order action.")

## Code Examples

```
/commerce/order-management/exchanges/actions/submit-cart-to-exchange-order
```

```
{
  "orderSummaryId": "1Osxx0000000000",
  "exchangeCartId": "0a6xx0000000000",
  "referenceId": "2oNxx0000000000",
  "orderNumber": "My exchange order",
  "paymentInfoList": {
    "paymentInfoItems": [
      {
        "paymentIds": [
          "0aQxx0000000000",
          "0aQxx0000000001"
        ],
        "name": "VISA-1234",
        "paymentMethodId": "0aaxx0000000001",
        "lastPaymentGatewayLogId": "0Xtxx0000000001"
      },
      {
        "paymentAuthorizationId": "0Xcxx0000000002",
        "name": "VISA-4567",
        "paymentMethodId": "0aaxx0000000002",
        "lastPaymentGatewayLogId": "0Xtxx0000000002"
      },
      {
        "paymentIds": [
          "0aQxx0000000003",
          "0aQxx0000000004"
        ],
        "paymentAuthorizationId": "0Xcxx0000000003",
        "name": "VISA-9123",
        "paymentMethodId": "0aaxx0000000003",
        "lastPaymentGatewayLogId": "0Xtxx0000000003"
      }
    ]
  },
  "sequences": {
    "sequences": [
      {
        "orderPaymentSummaryId": "0bMxx0000000000",
        "amount": 10
      },
      {
        "orderPaymentSummaryId": "0bMxx0000000001",
        "amount": 20
      },
      {
        "orderPaymentSummaryId": "0bMxx0000000002"
      }
    ]
  }
}
```

## Related Topics

- Submit Cart to Exchange Order Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_submit_cart_to_exchange_order_input.htm)
- Payment Info Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_payment_info_input.htm)
- Shared Order Payment Summary Sequence
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_shared_order_payment_summary_sequence_input.htm)
- Submit Cart to Exchange Order (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_submit_cart_to_exchange_order_output.htm)
- Balance
                           State Preview Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_balance_state_preview_output.htm)
- Change Item Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_change_item_output.htm)
- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
