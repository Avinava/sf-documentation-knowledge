---
title: "ConnectApi.OrderItemSummaryInputRepresentation"
domain: apex-reference
topic: connectapiorderitemsummaryinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.389Z
keywords: [ConnectApi.OrderItemSummaryInputRepresentation, See]
---

# ConnectApi.OrderItemSummaryInputRepresentation

# ConnectApi.OrderItemSummaryInputRepresentation

An OrderItemSummary and quantity.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderItem​SummaryId | String | ID of the OrderItemSummary. | Required | 48.0 |
| quantity | Double | Quantity to include. Can't contain a fraction or a decimal. | Required | 48.0 |

#### See Also

-   [ConnectApi.FulfillmentGroupInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_group.htm "A list of OrderItemSummaries to be fulfilled together, and the fulfillment location to handle them. The fulfillment type is one of the values defined for the Type field on the FulfillmentOrder object, such as “Warehouse” or “Retail Store.” The specified type is assigned to the FulfillmentOrder for this fulfillment group.")
    
-   [ConnectApi.FulfillmentOrderInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order.htm "An OrderDeliveryGroupSummary that defines a delivery method and recipient, and a list of fulfillment groups to assign to FulfillmentOrders. Each fulfillment group is a set of OrderItemSummaries that match the OrderDeliveryGroupSummary and share the same fulfillment location. The method creates a FulfillmentOrder for each fulfillment group and a FulfillmentOrderLineItem for each OrderItemSummary.")
    
-   [createFulfillmentOrders(fulfillmentOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_createFulfillmentOrders_1 "Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder.")