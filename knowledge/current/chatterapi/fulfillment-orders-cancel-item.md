---
title: "Fulfillment Orders, Cancel Item"
domain: chatterapi
topic: fulfillment-orders-cancel-item
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.494Z
estimatedTokens: 634
keywords: [Fulfillment, Orders, Cancel, Item, FulfillmentOrderLineItems, FulfillmentOrder, action, doesn’t, associated, OrderItemSummaries, reallocate, canceled, quantities, new]
---

# Fulfillment Orders, Cancel Item

> Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This
      action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities
      to a new FulfillmentOrder.

# Fulfillment Orders, Cancel Item

Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities to a new FulfillmentOrder.

Resource

```

```

Available version

48.0

HTTP methods

POST

Request body for POST

[Fulfillment Order Line Items To Cancel Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_line_items_to_cancel_input.htm "A list of FulfillmentOrderLineItems and quantities to cancel.")

Root XML tag

<fulfillmentOrderLineItemsToCancelInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfillmentOrder​LineItems​ToCancel | Fulfillment Order Line Item Input[] | List of FulfillmentOrderLineItems and quantities. | Required | 48.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is a [Fulfillment Order Cancel Line Items Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_fulfillment_order_cancel_line_items_output.htm "Wraps the base output."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is a [Fulfillment Order Cancel Line Items Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_fulfillment_order_cancel_line_items_output.htm "Wraps the base output."), and the value of the enhancedErrorType property can be ignored.

#### See Also

-   [Fulfillment Orders](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders.htm "Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder.")

## Code Examples

```
/commerce/fulfillment/fulfillment-orders/fulfillmentOrderId/actions/cancel-item
```

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

- Fulfillment Order Line Items To Cancel Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_line_items_to_cancel_input.htm)
- Fulfillment Order Line Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_line_item_input.htm)
- Fulfillment Order Cancel Line Items Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_fulfillment_order_cancel_line_items_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
- Fulfillment Orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders.htm)
