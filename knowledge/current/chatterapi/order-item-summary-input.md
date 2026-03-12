---
title: "Order Item Summary Input"
domain: chatterapi
topic: order-item-summary-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.298Z
estimatedTokens: 494
keywords: [Order, Item, Summary, Input, OrderItemSummary, quantity]
---

# Order Item Summary Input

> An OrderItemSummary and quantity.

# Order Item Summary Input

An OrderItemSummary and quantity.

Root XML tag

<orderItemSummary>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderItem​SummaryId | String | ID of the OrderItemSummary. | Required | 48.0 |
| quantity | Double | Quantity to include. Can't contain a fraction or a decimal. | Required | 48.0 |

#### See Also

-   [Fulfillment Orders](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders.htm "Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder.")

-   [Fulfillment Order Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_input.htm "An OrderDeliveryGroupSummary that defines a delivery method and recipient, and a list of fulfillment groups to assign to FulfillmentOrders. Each fulfillment group is a set of OrderItemSummaries that match the OrderDeliveryGroupSummary and share the same fulfillment location. The method creates a FulfillmentOrder for each fulfillment group and a FulfillmentOrderLineItem for each OrderItemSummary.")

-   [Fulfillment Group Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_group_input.htm "A list of OrderItemSummaries to be fulfilled together, and the fulfillment location to handle them. The fulfillment type is one of the values defined for the Type field on the FulfillmentOrder object, such as “Warehouse” or “Retail Store.” The specified type is assigned to the FulfillmentOrder for this fulfillment group.")

## Code Examples

```
{  
  "orderItemSummaryId":"10uxx00000000W0001",
  "quantity":3
}
```

## Related Topics

- Fulfillment Orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders.htm)
- Fulfillment Order Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_input.htm)
- Fulfillment Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_group_input.htm)
