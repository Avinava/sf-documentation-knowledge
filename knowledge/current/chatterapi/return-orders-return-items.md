---
title: "Return Orders, Return Items"
domain: chatterapi
topic: return-orders-return-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.605Z
estimatedTokens: 489
keywords: [Orders, Items, Process, ReturnOrderLineItems, belonging, ReturnOrder, Processing, ReturnOrderLineItem, generates, change, Order, read-only, item, delivery, charge]
---

# Return Orders, Return Items

> Process ReturnOrderLineItems belonging to a ReturnOrder. Processing
      a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only.
      The change order for a returned item or delivery charge has a positive amount and should be
      used to create a credit memo. The change order for a return fee has a negative amount and
      should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining
      expected quantity, then the API creates a separate ReturnOrderLineItem representing that
      quantity.

# Return Orders, Return Items

Process ReturnOrderLineItems belonging to a ReturnOrder. Processing a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only. The change order for a returned item or delivery charge has a positive amount and should be used to create a credit memo. The change order for a return fee has a negative amount and should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining expected quantity, then the API creates a separate ReturnOrderLineItem representing that quantity.

Resource

```

```

Available version

52.0

HTTP methods

POST

Request body for POST

[Return Items Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_items_input.htm "Data about products and delivery charges to return, as well as associated return fees.")

Root XML tag

<returnItemsInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| returnOrderItem​DeliveryCharges | Return Order Item Delivery Charge Input[] | List of ReturnOrderLineItems to return that represent delivery charges. | Optional | 52.0 |
| returnOrderItem​Fees | Return Order Item Fee Input[] | List of ReturnOrderLineItems to process that represent return fees. | Optional | 56.0 |
| returnOrderItems | Return Order Item Input[] | List of ReturnOrderLineItems to process that represent products, along with data about how to process them. | Required | 52.0 |

Response body for POST

[Return Items Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_return_items_output.htm "Output of Return Items. Includes the ID of the generated change order for items and delivery charges being returned, as well as the ID of the generated change order for any charged return fees. Also includes information about any ReturnOrderLineItems that were created to represent remaining return quantities.")

## Code Examples

```
/commerce/returns/return-orders/returnOrderId/actions/return-items
```

```
{
  "returnOrderItems": [
    {
      "returnOrderLineItemId": "10uxx0000004GKbAAM",
      "quantityReturned": "1",
      "quantityToCancel": "0",
      "quantityReceived": "1",
      "quantityRejected": "0",
      "reasonForRejection": "N/A"
    }
  ],
  "returnOrderItemDeliveryCharges": [
    {
      "returnOrderLineItemId": "10uxx0000004GKbAAP"
    }
  ],
  "returnOrderItemFees": [
    {
      "returnOrderLineItemId": "10uxx0000004GKbA23",
      "quantityReturned": "1",
      "quantityToCancel": "0"
    }
  ]
}
```

## Related Topics

- Return Items Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_items_input.htm)
- Return Order Item Delivery Charge Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_item_delivery_charge_input.htm)
- Return Order Item Fee Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_item_fee_input.htm)
- Return Order Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_item_input.htm)
- Return Items Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_return_items_output.htm)
