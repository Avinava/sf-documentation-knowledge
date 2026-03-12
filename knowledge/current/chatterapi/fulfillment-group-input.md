---
title: "Fulfillment Group Input"
domain: chatterapi
topic: fulfillment-group-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.772Z
estimatedTokens: 545
keywords: [Fulfillment, Group, Input, OrderItemSummaries, fulfilled, together, location, handle, defined, FulfillmentOrder, “Warehouse”, “Retail, Store.”, assigned]
---

# Fulfillment Group Input

> A list of OrderItemSummaries to be fulfilled together, and the
      fulfillment location to handle them. The fulfillment type is one of the values defined for the
      Type field on the FulfillmentOrder object, such as “Warehouse” or “Retail Store.” The
      specified type is assigned to the FulfillmentOrder for this fulfillment
    group.

# Fulfillment Group Input

A list of OrderItemSummaries to be fulfilled together, and the fulfillment location to handle them. The fulfillment type is one of the values defined for the Type field on the FulfillmentOrder object, such as “Warehouse” or “Retail Store.” The specified type is assigned to the FulfillmentOrder for this fulfillment group.

Root XML tag

<fulfillmentGroup>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfilledFrom​LocationId | String | ID of the fulfillment location. | Required | 48.0 |
| fulfillmentType | String | Fulfillment type. One of the Type field values defined for FulfillmentOrders. | Required | 48.0 |
| orderItem​Summaries | Order Item Summary Input[] | List of OrderItemSummaries. | Required | 48.0 |
| referenceId | String | Reference to this input for use in troubleshooting failures. This value is only used by the APIs for creating fulfillment orders for multiple order delivery group summaries. | Optional | 50.0 |

#### See Also

-   [Fulfillment Orders](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders.htm "Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder.")

-   [Fulfillment Order Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_input.htm "An OrderDeliveryGroupSummary that defines a delivery method and recipient, and a list of fulfillment groups to assign to FulfillmentOrders. Each fulfillment group is a set of OrderItemSummaries that match the OrderDeliveryGroupSummary and share the same fulfillment location. The method creates a FulfillmentOrder for each fulfillment group and a FulfillmentOrderLineItem for each OrderItemSummary.")

## Code Examples

```
{  
  "fulfilledFromLocationId":"131xx00000000W0001",
  "fulfillmentType":"warehouse",
  "orderItemSummaries":[  
    {  
      "orderItemSummaryId":"10uxx00000000W0001",
      "quantity":3
    },
    {  
      "orderItemSummaryId":"10uxx00000000W0002",
      "quantity":1
    }
  ]
}
```

## Related Topics

- Order Item Summary Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_item_summary_input.htm)
- Fulfillment Orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders.htm)
- Fulfillment Order Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_input.htm)
