---
title: "ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation"
domain: apex-reference
topic: connectapifulfillmentorderlineitemstocancelinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.212Z
keywords: [ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation, See]
---

# ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation

# ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation

A list of FulfillmentOrderLineItems and quantities to cancel.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfillment​OrderLine​ItemsToCancel | List<ConnectApi.​FulfillmentOrder​LineItemInput​Representation> | List of FulfillmentOrderLineItems and quantities. | Required | 48.0 |

#### See Also

-   [cancelFulfillmentOrderLineItems(fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_cancelFulfillmentOrderLineItems_1 "Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities to a new FulfillmentOrder.")