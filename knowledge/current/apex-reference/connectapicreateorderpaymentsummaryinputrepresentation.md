---
title: "ConnectApi.CreateOrderPaymentSummaryInputRepresentation"
domain: apex-reference
topic: connectapicreateorderpaymentsummaryinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:24.969Z
estimatedTokens: 303
keywords: [OrderSummary, OrderPaymentSummary, payment, authorization, payments, include]
---

# ConnectApi.CreateOrderPaymentSummaryInputRepresentation

> An OrderSummary for which to create an OrderPaymentSummary, with the
      payment authorization or payments to include in it.

# ConnectApi.CreateOrderPaymentSummaryInputRepresentation

An OrderSummary for which to create an OrderPaymentSummary, with the payment authorization or payments to include in it.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderSummaryId | String | ID of the OrderSummary. | Required | 48.0 |
| name | String | Name of the OrderPaymentSummary. | Optional | 66.0 |
| payment​AuthorizationId | String | ID of the payment authorization. | Either a payment authorization or at least one payment is required. | 48.0 |
| paymentIds | List<String> | List of IDs of the payments. | Either a payment authorization or at least one payment is required. | 48.0 |

#### See Also

-   [createOrderPaymentSummary(orderPaymentSummaryInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderPaymentSummary_static_methods.htm#apex_ConnectAPI_OrderPaymentSummary_createOrderPaymentSummary_1 "Create an OrderPaymentSummary for an OrderSummary. Specify a payment authorization or payments that share the same payment method. In an org with the multicurrency feature enabled, the OrderPaymentSummary inherits the CurrencyIsoCode value from the OrderSummary.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- createOrderPaymentSummary(orderPaymentSummaryInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderPaymentSummary_static_methods.htm)
