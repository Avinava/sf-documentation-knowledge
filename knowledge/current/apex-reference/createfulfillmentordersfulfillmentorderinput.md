---
title: "createFulfillmentOrders(fulfillmentOrderInput)"
domain: apex-reference
topic: createfulfillmentordersfulfillmentorderinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.131Z
keywords: [createFulfillmentOrders, fulfillmentOrderInput, Create, FulfillmentOrders, FulfillmentOrderLineItems, OrderDeliveryGroupSummary, which, defines, delivery, method, recipient, OrderSummary., specify, OrderItemSummaries, allocate, fulfilled, different, locations., Specifying, multiple]
---

# createFulfillmentOrders(fulfillmentOrderInput)

> Create one or more FulfillmentOrders and FulfillmentOrderLineItems
      for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an
      OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from
      different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for
      each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned
      to the corresponding FulfillmentOrder.

### createFulfillmentOrders(fulfillmentOrderInput)

Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FulfillmentOrderOutputRepresentation createFulfillmentOrders(ConnectApi.FulfillmentOrderInputRepresentation fulfillmentOrderInput)

#### Parameters

fulfillmentOrderInput

Type: [ConnectApi.FulfillmentOrderInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order.htm "An OrderDeliveryGroupSummary that defines a delivery method and recipient, and a list of fulfillment groups to assign to FulfillmentOrders. Each fulfillment group is a set of OrderItemSummaries that match the OrderDeliveryGroupSummary and share the same fulfillment location. The method creates a FulfillmentOrder for each fulfillment group and a FulfillmentOrderLineItem for each OrderItemSummary.")

OrderItemSummaries to allocate, with location and delivery information.

#### Return Value

Type: [ConnectApi.FulfillmentOrderOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_fulfillment_order_output.htm "A list of IDs of the created FulfillmentOrders.")

#### Example

```

```