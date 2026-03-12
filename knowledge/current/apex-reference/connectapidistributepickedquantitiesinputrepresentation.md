---
title: "ConnectApi.DistributePickedQuantitiesInputRepresentation"
domain: apex-reference
topic: connectapidistributepickedquantitiesinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.788Z
estimatedTokens: 148
keywords: [ConnectApi.DistributePickedQuantitiesInputRepresentation, Input, representation, Distribute, Picked, Quantities]
---

# ConnectApi.DistributePickedQuantitiesInputRepresentation

> Input representation to Distribute Picked Quantities

# ConnectApi.DistributePickedQuantitiesInputRepresentation

Input representation to Distribute Picked Quantities

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| distributeToOrders | List<ConnectApi.DistributeToOrdersInputRepresentation> | List of orders that need quantities distributed. |  | 58.0 |
| optimization​Criteria | String | Criteria used for distributing picked quantities to orders. |  | 58.0 |
| quantities​PickedList | List<ConnectApi.ItemQuantityInputRepresentation> | Quantities for each item picked. |  | 58.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.DistributeToOrdersInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_distribute_to_orders.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ItemQuantityInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_item_quantity.htm)
