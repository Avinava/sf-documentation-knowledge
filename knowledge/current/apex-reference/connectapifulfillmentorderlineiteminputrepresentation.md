---
title: "ConnectApi.FulfillmentOrderLineItemInputRepresentation"
domain: apex-reference
topic: connectapifulfillmentorderlineiteminputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.981Z
estimatedTokens: 298
keywords: [ConnectApi.FulfillmentOrderLineItemInputRepresentation, FulfillmentOrderLineItem, quantity, cancel., cancel, less, full, which, case, reallocate, canceled, different, FulfillmentOrder.]
---

# ConnectApi.FulfillmentOrderLineItemInputRepresentation

> A FulfillmentOrderLineItem and quantity to cancel. You can cancel
      less than the full quantity, in which case you reallocate the canceled quantity to a different
      FulfillmentOrder.

# ConnectApi.FulfillmentOrderLineItemInputRepresentation

A FulfillmentOrderLineItem and quantity to cancel. You can cancel less than the full quantity, in which case you reallocate the canceled quantity to a different FulfillmentOrder.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfillmentOrder​LineItemId | String | ID of the FulfillmentOrderLineItem. | Required | 48.0 |
| quantity | Double | Quantity to cancel. | Required | 48.0 |

#### See Also

-   [ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order_line_items_to_cancel.htm "A list of FulfillmentOrderLineItems and quantities to cancel.")

-   [cancelFulfillmentOrderLineItems(fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_cancelFulfillmentOrderLineItems_1 "Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities to a new FulfillmentOrder.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order_line_items_to_cancel.htm)
- cancelFulfillmentOrderLineItems(fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm)
