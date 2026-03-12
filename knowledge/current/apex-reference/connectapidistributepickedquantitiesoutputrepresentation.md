---
title: "ConnectApi.DistributePickedQuantitiesOutputRepresentation"
domain: apex-reference
topic: connectapidistributepickedquantitiesoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.063Z
estimatedTokens: 212
keywords: [ConnectApi.DistributePickedQuantitiesOutputRepresentation, Output, representation, where, quantities, were, distributed, orders, any, remaining, quantity]
---

# ConnectApi.DistributePickedQuantitiesOutputRepresentation

> Output representation of where the quantities were distributed in orders and any
    remaining quantity

# ConnectApi.DistributePickedQuantitiesOutputRepresentation

Output representation of where the quantities were distributed in orders and any remaining quantity

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| fullyDistributed​OrdersList | List<ConnectApi.OrderQuantitiesOutputRepresentation> | Orders that have all quantities distributed. | 58.0 |
| notDistributed​OrdersList | List<ConnectApi.OrderQuantitiesOutputRepresentation> | Orders that have no quantities available after distribution. | 58.0 |
| partially​Distributed​OrdersList | List<ConnectApi.OrderQuantitiesOutputRepresentation> | Orders that have partially distributed quantities after distribution. | 58.0 |
| quantities​RemainingList | List<ConnectApi.ItemQuantityOutputRepresentation> | Quantities remaining after the distribution. | 58.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.OrderQuantitiesOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_quantities_output.htm)
- ConnectApi.ItemQuantityOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_item_quantity_output.htm)
