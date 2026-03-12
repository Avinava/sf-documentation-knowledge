---
title: "ConnectApi.DistributeToOrdersInputRepresentation"
domain: apex-reference
topic: connectapidistributetoordersinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.794Z
estimatedTokens: 109
keywords: [ConnectApi.DistributeToOrdersInputRepresentation, Input, representation, single, element, within, Distribute, Orders, list.]
---

# ConnectApi.DistributeToOrdersInputRepresentation

> Input representation of a single element within the Distribute To Orders
    list.

# ConnectApi.DistributeToOrdersInputRepresentation

Input representation of a single element within the Distribute To Orders list.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| externalOrderId | String | ID of the external order. | Required | 58.0 |
| itemQuantities | List<ConnectApi.ItemQuantityInputRepresentation> | List of order item quantities. | Required | 58.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.ItemQuantityInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_item_quantity.htm)
