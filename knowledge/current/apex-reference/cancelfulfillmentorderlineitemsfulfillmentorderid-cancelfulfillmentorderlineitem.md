---
title: "cancelFulfillmentOrderLineItems(fulfillmentOrderId,
      cancelFulfillmentOrderLineItemsInput)"
domain: apex-reference
topic: cancelfulfillmentorderlineitemsfulfillmentorderid-cancelfulfillmentorderlineitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.131Z
keywords: [cancelFulfillmentOrderLineItems, fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput, Cancel, FulfillmentOrderLineItems, FulfillmentOrder., action, doesn’t, cancel, associated, OrderItemSummaries, reallocate, canceled, quantities, new, API, Version, Requires, Chatter, Signature]
---

# cancelFulfillmentOrderLineItems(fulfillmentOrderId,
      cancelFulfillmentOrderLineItemsInput)

> Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This
      action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities
      to a new FulfillmentOrder.

### cancelFulfillmentOrderLineItems(fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput)

Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities to a new FulfillmentOrder.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FulfillmentOrderCancelLineItemsOutputRepresentation cancelFulfillmentOrderLineItems(String fulfillmentOrderId, ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation cancelFulfillmentOrderLineItemsInput)

#### Parameters

fulfillmentOrderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the FulfilllmentOrder.

cancelFulfillmentOrderLineItemsInput

Type: [ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order_line_items_to_cancel.htm "A list of FulfillmentOrderLineItems and quantities to cancel.")

List of FulfillmentOrderLineItems to cancel.

#### Return Value

Type: [ConnectApi.FulfillmentOrderCancelLineItemsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_fulfillment_order_cancel_line_items_output.htm "Wraps the base output.")

#### Example

```

```