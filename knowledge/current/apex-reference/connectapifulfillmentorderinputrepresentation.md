---
title: "ConnectApi.FulfillmentOrderInputRepresentation"
domain: apex-reference
topic: connectapifulfillmentorderinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.206Z
keywords: [ConnectApi.FulfillmentOrderInputRepresentation, See]
---

# ConnectApi.FulfillmentOrderInputRepresentation

# ConnectApi.FulfillmentOrderInputRepresentation

An OrderDeliveryGroupSummary that defines a delivery method and recipient, and a list of fulfillment groups to assign to FulfillmentOrders. Each fulfillment group is a set of OrderItemSummaries that match the OrderDeliveryGroupSummary and share the same fulfillment location. The method creates a FulfillmentOrder for each fulfillment group and a FulfillmentOrderLineItem for each OrderItemSummary.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| defaultActivationStatus | String | Default activation status for a new fulfillment order. If you don't specify a value, the default value is Allocated, which belongs to the Activated status category. This default can be changed, but the replacement status must also have a status category of Activated. | Optional | 58.0 |
| fulfillmentGroups | List<ConnectApi.​FulfillmentGroup​Input​Representation> | List of fulfillment groups that specify the OrderItemSummaries and fulfillment locations. | Required | 48.0 |
| orderDelivery​GroupSummaryId | String | ID of the OrderDeliveryGroupSummary. | Required | 48.0 |
| orderSummaryId | String | ID of the OrderSummary. | Required | 48.0 |

#### See Also

-   [createFulfillmentOrders(fulfillmentOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_createFulfillmentOrders_1 "Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder.")