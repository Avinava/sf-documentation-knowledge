---
title: "Distribute
    To Orders Input"
domain: chatterapi
topic: distribute-to-orders-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.523Z
estimatedTokens: 106
keywords: [Distribute, Orders, Input, representation, element]
---

# Distribute
    To Orders Input

> Input representation of a single element within the Distribute To
      Orders list.

# Distribute To Orders Input

Input representation of a single element within the Distribute To Orders list.

Root XML tag

<distributeToOrders>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| externalOrderId | String | ID of the external order. | Required | 58.0 |
| itemQuantities | ItemQuantityInput | Order Item Quantity List | Required | 58.0 |

## Related Topics

- ItemQuantityInput (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_item_quantity_input.htm)
