---
title: "Distribute Picked Quantities Input"
domain: chatterapi
topic: distribute-picked-quantities-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.518Z
estimatedTokens: 154
keywords: [Distribute, Picked, Quantities, Input, representation]
---

# Distribute Picked Quantities Input

> Input representation to Distribute Picked
        Quantities.

# Distribute Picked Quantities Input

Input representation to Distribute Picked Quantities.

Root XML tag

<distributePickedQuantitiesInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| distributeToOrders | DistributeToOrdersInput | List of orders that need quantities distributed. | Required | 58.0 |
| optimization​Criteria | String | Criteria used for distributing picked quantities to orders. | Required | 58.0 |
| quantities​PickedList | ItemQuantityInput | Quantities for each item picked. | Required | 58.0 |

## Code Examples

```
POST /services/data/vXX.0/commerce/fulfillment/pick-tickets/actions/distribute-quantities
Content-Type: application/json; charset=UTF-8
Accept: application/json

{
    "quantitiesPickedList": [{
       "externalItemId": "sku1",
       "quantity": 16
    }],
   "optimizationCriteria": "FulfillInSequencePartial",
   "distributeToOrders": [{
        "externalOrderId:": "FO-1",
        "itemQuantities": [{
            "externalItemId": "sku1",
            "quantity": 4
        }]
    }]
}
```

## Related Topics

- DistributeToOrdersInput (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_distribute_to_orders_input.htm)
- ItemQuantityInput (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_item_quantity_input.htm)
