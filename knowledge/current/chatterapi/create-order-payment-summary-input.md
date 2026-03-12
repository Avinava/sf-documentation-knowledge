---
title: "Create Order Payment Summary Input"
domain: chatterapi
topic: create-order-payment-summary-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.443Z
estimatedTokens: 296
keywords: [Order, Payment, Summary, Input, OrderSummary, OrderPaymentSummary, authorization, payments, include]
---

# Create Order Payment Summary Input

> An OrderSummary for which to create an OrderPaymentSummary, with the
      payment authorization or payments to include in it.

# Create Order Payment Summary Input

An OrderSummary for which to create an OrderPaymentSummary, with the payment authorization or payments to include in it.

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

#### See Also

-   [Order Payment Summaries](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_payment_summaries.htm "Create an OrderPaymentSummary for an OrderSummary. Specify a payment authorization or payments that share the same payment method. In an org with the multicurrency feature enabled, the OrderPaymentSummary inherits the CurrencyIsoCode value from the OrderSummary.")

## Code Examples

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

- Order Payment Summaries (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_payment_summaries.htm)
