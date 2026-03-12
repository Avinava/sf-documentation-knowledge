---
title: "ConnectApi.FulfillmentGroupInputRepresentation"
domain: apex-reference
topic: connectapifulfillmentgroupinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.215Z
estimatedTokens: 567
keywords: [OrderItemSummaries, fulfilled, together, fulfillment, location, handle, defined, FulfillmentOrder, “Warehouse”, “Retail, Store.”, assigned, group]
---

# ConnectApi.FulfillmentGroupInputRepresentation

> A list of OrderItemSummaries to be fulfilled together, and the
      fulfillment location to handle them. The fulfillment type is one of the values defined for the
      Type field on the FulfillmentOrder object, such as “Warehouse” or “Retail Store.” The
      specified type is assigned to the FulfillmentOrder for this fulfillment
    group.

# ConnectApi.FulfillmentGroupInputRepresentation

A list of OrderItemSummaries to be fulfilled together, and the fulfillment location to handle them. The fulfillment type is one of the values defined for the Type field on the FulfillmentOrder object, such as “Warehouse” or “Retail Store.” The specified type is assigned to the FulfillmentOrder for this fulfillment group.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfilledFrom​LocationId | String | ID of the fulfillment location. | Required | 48.0 |
| fulfillmentType | String | Fulfillment type. One of the Type field values defined for FulfillmentOrders. | Required | 48.0 |
| orderItem​Summaries | List<ConnectApi.​OrderItem​SummaryInput​Representation> | List of OrderItemSummaries. | Required | 48.0 |
| referenceId | String | Reference to this input for use in troubleshooting failures. This value is only used by the APIs for creating fulfillment orders for multiple order delivery group summaries. | Optional | 50.0 |

#### See Also

-   [ConnectApi.FulfillmentOrderInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order.htm "An OrderDeliveryGroupSummary that defines a delivery method and recipient, and a list of fulfillment groups to assign to FulfillmentOrders. Each fulfillment group is a set of OrderItemSummaries that match the OrderDeliveryGroupSummary and share the same fulfillment location. The method creates a FulfillmentOrder for each fulfillment group and a FulfillmentOrderLineItem for each OrderItemSummary.")

-   [createFulfillmentOrders(fulfillmentOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_createFulfillmentOrders_1 "Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​OrderItem​SummaryInput​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_item_summary.htm)
- ConnectApi.FulfillmentOrderInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order.htm)
- createFulfillmentOrders(fulfillmentOrderInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm)
