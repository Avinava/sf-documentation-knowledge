---
title: "createOrderSummary(orderSummaryInput)"
domain: apex-reference
topic: createordersummaryordersummaryinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.469Z
keywords: [createOrderSummary, orderSummaryInput, Create, OrderSummary, based, order., order, considered, original, OrderSummary., Subsequent, change, orders, apply, represented, orders., specify, whether, managed, Salesforce]
---

# createOrderSummary(orderSummaryInput)

> Create an OrderSummary based on an order. That order is considered
      the original order for the OrderSummary. Subsequent change orders that apply to the
      OrderSummary are also represented as orders. You can specify whether the order is managed in
      Salesforce Order Management or by an external system. Most Salesforce Order Management APIs
      can run only on orders that it manages.

### createOrderSummary(orderSummaryInput)

Create an OrderSummary based on an order. That order is considered the original order for the OrderSummary. Subsequent change orders that apply to the OrderSummary are also represented as orders. You can specify whether the order is managed in Salesforce Order Management or by an external system. Most Salesforce Order Management APIs can run only on orders that it manages.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryOutputRepresentation createOrderSummary(ConnectApi.OrderSummaryInputRepresentation orderSummaryInput)

#### Parameters

orderSummaryInput

Type: [ConnectApi.OrderSummaryInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_summary.htm "An order from which to create an OrderSummary. Optionally, you can specify OrderSummary-specific information such as its Status and whether it is managed in Salesforce Order Management.")

Input object that wraps the ID of the source order.

#### Return Value

Type: [ConnectApi.OrderSummaryOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_output.htm "ID of the created Order Summary.")