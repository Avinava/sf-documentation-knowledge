---
title: "ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation"
domain: apex-reference
topic: connectapifulfillmentorderlineitemstocancelinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.985Z
estimatedTokens: 217
keywords: [ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation, list, FulfillmentOrderLineItems, quantities, cancel.]
---

# ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation

> A list of FulfillmentOrderLineItems and quantities to
    cancel.

# ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation

A list of FulfillmentOrderLineItems and quantities to cancel.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfillment​OrderLine​ItemsToCancel | List<ConnectApi.​FulfillmentOrder​LineItemInput​Representation> | List of FulfillmentOrderLineItems and quantities. | Required | 48.0 |

#### See Also

-   [cancelFulfillmentOrderLineItems(fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_cancelFulfillmentOrderLineItems_1 "Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities to a new FulfillmentOrder.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​FulfillmentOrder​LineItemInput​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order_line_item.htm)
- cancelFulfillmentOrderLineItems(fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm)
