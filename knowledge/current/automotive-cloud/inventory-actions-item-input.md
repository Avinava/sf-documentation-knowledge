---
title: "Inventory Actions Item Input"
domain: automotive-cloud
topic: inventory-actions-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.825Z
estimatedTokens: 160
keywords: [Inventory, Actions, Item, Input, representation, perform, product, transfer]
---

# Inventory Actions Item Input

> Input representation to perform the inventory product
    transfer.

# Inventory Actions Item Input

Input representation to perform the inventory product transfer.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| destinationLocationId | String | ID of the location to which a serialized product is transferred. | Required | 59.0 |
| serializedProductId | String | ID of the serialized product that is to be transferred from the source to destination. | Required | 59.0 |
| sourceLocationId | String | ID of the location from where a serialized product is to be transferred to its destination. | Required | 59.0 |

## Code Examples

```
{
  "serializedProductId": "0jRxx000000009hEAA",
  "sourceLocationId": "131xx0000004FoLAAU",
  "destinationLocationId": "131xx0000004FpxAAE"
}
```
