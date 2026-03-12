---
title: "Fulfillment Order Line Items To Cancel Input"
domain: chatterapi
topic: fulfillment-order-line-items-to-cancel-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.786Z
estimatedTokens: 199
keywords: [Fulfillment, Order, Line, Items, Cancel, Input, FulfillmentOrderLineItems, quantities]
---

# Fulfillment Order Line Items To Cancel Input

> A list of FulfillmentOrderLineItems and quantities to
    cancel.

# Fulfillment Order Line Items To Cancel Input

A list of FulfillmentOrderLineItems and quantities to cancel.

Root XML tag

<fulfillmentOrderLineItemsToCancelInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfillmentOrder​LineItems​ToCancel | Fulfillment Order Line Item Input[] | List of FulfillmentOrderLineItems and quantities. | Required | 48.0 |

#### See Also

-   [Fulfillment Orders, Cancel Item](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders_cancel_items.htm "Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities to a new FulfillmentOrder.")

## Code Examples

```
{
"fulfillmentOrderLineItemsToCancel" : [
  {   
    "fulfillmentOrderLineItemId" : "0a4xx00000000W0001",
    "quantity":1
  },
  {   
    "fulfillmentOrderLineItemId" : "0a4xx00000000W0002",
    "quantity":2
  }
]
}
```

## Related Topics

- Fulfillment Order Line Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_line_item_input.htm)
- Fulfillment Orders, Cancel Item (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders_cancel_items.htm)
