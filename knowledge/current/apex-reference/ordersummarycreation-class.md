---
title: "OrderSummaryCreation Class"
domain: apex-reference
topic: ordersummarycreation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.275Z
estimatedTokens: 565
namespace: ConnectApi
keywords: [OrderSummaryCreation, OrderSummary, order, considered, original, Subsequent, change, orders, apply, represented, specify, whether, managed, Salesforce, Management]
---

# OrderSummaryCreation Class

> Create an OrderSummary based on an order. That order is considered
      the original order for the OrderSummary. Subsequent change orders that apply to the
      OrderSummary are also represented as orders. You can specify whether the order is managed in
      Salesforce Order Management or by an external system. Most Salesforce Order Management APIs
      can run only on orders that it manages.

**Namespace:** `ConnectApi`

# OrderSummaryCreation Class

Create Order Summaries in Order Management.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## OrderSummaryCreation Methods

These methods are for OrderSummaryCreation. All methods are static.

-   **[createOrderSummary(orderSummaryInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummaryCreation_static_methods.htm#apex_ConnectAPI_OrderSummaryCreation_createOrderSummary_1)**
    Create an OrderSummary based on an order. That order is considered the original order for the OrderSummary. Subsequent change orders that apply to the OrderSummary are also represented as orders. You can specify whether the order is managed in Salesforce Order Management or by an external system. Most Salesforce Order Management APIs can run only on orders that it manages.

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

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createOrderSummary(orderSummaryInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummaryCreation_static_methods.htm)
- ConnectApi.OrderSummaryInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_summary.htm)
- ConnectApi.OrderSummaryOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_output.htm)
