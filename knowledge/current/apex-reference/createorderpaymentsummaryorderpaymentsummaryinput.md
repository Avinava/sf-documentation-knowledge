---
title: "createOrderPaymentSummary(orderPaymentSummaryInput)"
domain: apex-reference
topic: createorderpaymentsummaryorderpaymentsummaryinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.466Z
keywords: [createOrderPaymentSummary, orderPaymentSummaryInput, Create, OrderPaymentSummary, OrderSummary., Specify, payment, authorization, payments, share, same, method., org, multicurrency, feature, enabled, inherits, CurrencyIsoCode, value, API]
---

# createOrderPaymentSummary(orderPaymentSummaryInput)

> Create an OrderPaymentSummary for an OrderSummary. Specify a payment
      authorization or payments that share the same payment method. In an org with the multicurrency
      feature enabled, the OrderPaymentSummary inherits the CurrencyIsoCode value from the
      OrderSummary.

### createOrderPaymentSummary(orderPaymentSummaryInput)

Create an OrderPaymentSummary for an OrderSummary. Specify a payment authorization or payments that share the same payment method. In an org with the multicurrency feature enabled, the OrderPaymentSummary inherits the CurrencyIsoCode value from the OrderSummary.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CreateOrderPaymentSummaryOutputRepresentation createOrderPaymentSummary(ConnectApi.CreateOrderPaymentSummaryInputRepresentation orderPaymentSummaryInput)

#### Parameters

orderPaymentSummaryInput

Type: [ConnectApi.CreateOrderPaymentSummaryInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_create_order_payment_summary.htm "An OrderSummary for which to create an OrderPaymentSummary, with the payment authorization or payments to include in it.")

The OrderSummary and payment authorization or payments.

#### Return Value

Type: [ConnectApi.CreateOrderPaymentSummaryOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_create_order_payment_summary_output.htm "ID of the created Order Payment Summary.")

#### Example

```

```