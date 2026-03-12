---
title: "Return Items Input"
domain: chatterapi
topic: return-items-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:12.703Z
estimatedTokens: 195
keywords: [Items, Input, Data, products, delivery, charges, well, associated, fees]
---

# Return Items Input

> Data about products and delivery charges to return, as well as
      associated return fees.

# Return Items Input

Data about products and delivery charges to return, as well as associated return fees.

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

## Code Examples

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

- Return Order Item Delivery Charge Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_item_delivery_charge_input.htm)
- Return Order Item Fee Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_item_fee_input.htm)
- Return Order Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_item_input.htm)
