---
title: "ConnectApi.CreateOrderPaymentSummaryInputRepresentation"
domain: apex-reference
topic: connectapicreateorderpaymentsummaryinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.039Z
keywords: [ConnectApi.CreateOrderPaymentSummaryInputRepresentation, See]
---

# ConnectApi.CreateOrderPaymentSummaryInputRepresentation

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