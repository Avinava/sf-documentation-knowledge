---
title: "Fulfillment Order Line Item Input"
domain: chatterapi
topic: fulfillment-order-line-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.782Z
estimatedTokens: 280
keywords: [Fulfillment, Order, Line, Item, Input, FulfillmentOrderLineItem, quantity, cancel, less, full, case, reallocate, canceled, different, FulfillmentOrder]
---

# Fulfillment Order Line Item Input

> A FulfillmentOrderLineItem and quantity to cancel. You can cancel
      less than the full quantity, in which case you reallocate the canceled quantity to a different
      FulfillmentOrder.

# Fulfillment Order Line Item Input

A FulfillmentOrderLineItem and quantity to cancel. You can cancel less than the full quantity, in which case you reallocate the canceled quantity to a different FulfillmentOrder.

Root XML tag

<fulfillmentOrderLineItem>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfillmentOrder​LineItemId | String | ID of the FulfillmentOrderLineItem. | Required | 48.0 |
| quantity | Double | Quantity to cancel. | Required | 48.0 |

#### See Also

-   [Fulfillment Orders, Cancel Item](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders_cancel_items.htm "Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities to a new FulfillmentOrder.")

-   [Fulfillment Order Line Items To Cancel Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_line_items_to_cancel_input.htm "A list of FulfillmentOrderLineItems and quantities to cancel.")

## Code Examples

```
{   
  "fulfillmentOrderLineItemId" : "0a4xx00000000W0001",
  "quantity":1
}
```

## Related Topics

- Fulfillment Orders, Cancel Item (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders_cancel_items.htm)
- Fulfillment Order Line Items To Cancel Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_line_items_to_cancel_input.htm)
