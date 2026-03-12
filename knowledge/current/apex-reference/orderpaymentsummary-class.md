---
title: "OrderPaymentSummary Class"
domain: apex-reference
topic: orderpaymentsummary-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.268Z
estimatedTokens: 534
namespace: ConnectApi
keywords: [OrderPaymentSummary, OrderSummary, Specify, payment, authorization, payments, share, org, multicurrency, feature, enabled, inherits, CurrencyIsoCode, createOrderPaymentSummary, orderPaymentSummaryInput]
---

# OrderPaymentSummary Class

> Create an OrderPaymentSummary for an OrderSummary. Specify a payment
      authorization or payments that share the same payment method. In an org with the multicurrency
      feature enabled, the OrderPaymentSummary inherits the CurrencyIsoCode value from the
      OrderSummary.

**Namespace:** `ConnectApi`

# OrderPaymentSummary Class

Work with payments in Order Management.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## OrderPaymentSummary Methods

These methods are for OrderPaymentSummary. All methods are static.

-   **[createOrderPaymentSummary(orderPaymentSummaryInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderPaymentSummary_static_methods.htm#apex_ConnectAPI_OrderPaymentSummary_createOrderPaymentSummary_1)**
    Create an OrderPaymentSummary for an OrderSummary. Specify a payment authorization or payments that share the same payment method. In an org with the multicurrency feature enabled, the OrderPaymentSummary inherits the CurrencyIsoCode value from the OrderSummary.

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

## Code Examples

```apex
String orderSummaryId = '1Osxx0000004CCG';
String paymentId1 = '0a3xx0000000085AAA';
String paymentId2 = '0a3xx0000000085BBB';

ConnectApi.CreateOrderPaymentSummaryInputRepresentation orderPaymentSummaryInput = new ConnectApi.CreateOrderPaymentSummaryInputRepresentation();
orderPaymentSummaryInput.orderSummaryId = orderSummaryId;
List<String> paymentList = new List<String>();
paymentList.add(paymentId1);
paymentList.add(paymentId2);
orderPaymentSummaryInput.paymentIds = paymentList;

ConnectApi.CreateOrderPaymentSummaryOutputRepresentation result = ConnectApi.OrderPaymentSummary.createOrderPaymentSummary(orderPaymentSummaryInput);
```

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createOrderPaymentSummary(orderPaymentSummaryInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderPaymentSummary_static_methods.htm)
- ConnectApi.CreateOrderPaymentSummaryInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_create_order_payment_summary.htm)
- ConnectApi.CreateOrderPaymentSummaryOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_create_order_payment_summary_output.htm)
