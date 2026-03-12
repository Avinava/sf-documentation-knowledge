---
title: "Order Payment Summaries"
domain: chatterapi
topic: order-payment-summaries
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.510Z
estimatedTokens: 582
keywords: [Order, Payment, Summaries, OrderPaymentSummary, OrderSummary, Specify, authorization, payments, share, org, multicurrency, feature, enabled, inherits, CurrencyIsoCode]
---

# Order Payment Summaries

> Create an OrderPaymentSummary for an OrderSummary. Specify a payment
      authorization or payments that share the same payment method. In an org with the multicurrency
      feature enabled, the OrderPaymentSummary inherits the CurrencyIsoCode value from the
      OrderSummary.

# Order Payment Summaries

Create an OrderPaymentSummary for an OrderSummary. Specify a payment authorization or payments that share the same payment method. In an org with the multicurrency feature enabled, the OrderPaymentSummary inherits the CurrencyIsoCode value from the OrderSummary.

Resource

```

```

Available version

48.0

HTTP methods

POST

Request body for POST

[Create Order Payment Summary Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_create_order_payment_summary_input.htm "An OrderSummary for which to create an OrderPaymentSummary, with the payment authorization or payments to include in it.")

Root XML tag

<orderPaymentSummaryInput>

JSON examples

```

```

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderSummaryId | String | ID of the OrderSummary. | Required | 48.0 |
| name | String | Name of the OrderPaymentSummary. | Optional | 66.0 |
| payment​AuthorizationId | String | ID of the payment authorization. | Either a payment authorization or at least one payment is required. | 48.0 |
| paymentIds | String[] | List of IDs of the payments. | Either a payment authorization or at least one payment is required. | 48.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is a [Create Order Payment Summary Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_create_order_payment_summary_output.htm "ID of the created Order Payment Summary."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is a [Create Order Payment Summary Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_create_order_payment_summary_output.htm "ID of the created Order Payment Summary."), and the value of the enhancedErrorType property can be ignored.

## Code Examples

```
/commerce/order-management/order-payment-summaries
```

```
{
  "orderSummaryId":"1Osxx0000000000001",
  "paymentAuthorizationId":"2Dgxx00000000W0001",
  “name”: “CASH”
}
```

```
{
  "orderSummaryId":"1Osxx0000000000001",
  "paymentIds":[  
    "0a3xx0000000085AAA",
    "0a3xx0000000085BBB",
  ],
  “name”: “CASH”
}
```

## Related Topics

- Create Order Payment Summary Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_create_order_payment_summary_input.htm)
- Create Order Payment Summary Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_create_order_payment_summary_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
