---
title: "Fulfillment Orders, Distribute Quantities"
domain: chatterapi
topic: fulfillment-orders-distribute-quantities
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.468Z
estimatedTokens: 384
keywords: [Fulfillment, Orders, Distribute, Quantities, Distributes, batch-picked, require, items, picked]
---

# Fulfillment Orders, Distribute Quantities

> Distributes batch-picked quantities to orders that require the items
      picked.

# Fulfillment Orders, Distribute Quantities

Distributes batch-picked quantities to orders that require the items picked.

Resource

```

```

Available version

58.0

HTTP methods

POST

Request body for POST

[Distribute Picked Quantities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_distribute_picked_quantities_input.htm "Input representation to Distribute Picked Quantities.")

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

Response body for POST

DistributePickedQuantitiesOutputRepresentation

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| distributePickedQuantitiesInput | Distribute Picked Quantities Input[] | Input to Distribute Picked Quantities. | Required | 58.0 |

Response body for POST

[Distribute Picked Quantities Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_distribute_picked_quantities_output.htm "Output representation of where the quantities were distributed in orders and any remaining quantity")

## Code Examples

```
/commerce/fulfillment/pick-tickets/actions/distribute-quantities
```

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

- Distribute Picked Quantities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_distribute_picked_quantities_input.htm)
- DistributeToOrdersInput (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_distribute_to_orders_input.htm)
- ItemQuantityInput (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_item_quantity_input.htm)
- Distribute
                        Picked Quantities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_distribute_picked_quantities_input.htm)
- Distribute Picked
              Quantities Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_distribute_picked_quantities_output.htm)
