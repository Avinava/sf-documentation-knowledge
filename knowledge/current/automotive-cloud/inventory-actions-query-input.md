---
title: "Inventory Actions Query Input"
domain: automotive-cloud
topic: inventory-actions-query-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.828Z
estimatedTokens: 88
keywords: [Inventory, Actions, Query, Input, representation, perform]
---

# Inventory Actions Query Input

> Input representation to perform the inventory actions
    query.

# Inventory Actions Query Input

Input representation to perform the inventory actions query.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| items | Inventory Actions Item Input[] | Details to perform the inventory product transfer. | Required | 59.0 |

## Code Examples

```
{
  "items": [
    {
      "serializedProductId": "0jRxx000000009hEAA",
      "sourceLocationId": "131xx0000004FoLAAU",
      "destinationLocationId": "131xx0000004FpxAAE"
    },
    {
      "serializedProductId": "0jRxx00000000BJEAY",
      "sourceLocationId": "131xx0000004FoLAAU",
      "destinationLocationId": "131xx0000004FpxAAE"
    },
    {
      "serializedProductId": "0jRxx00000000CvEAI",
      "sourceLocationId": "131xx0000004FoLAAU",
      "destinationLocationId": "131xx0000004FpxAAE"
    }
  ]
}
```

## Related Topics

- Inventory
                        Actions Item Input (atlas.en-us.automotive_cloud.meta/automotive_cloud/connect_requests_inventory_actions_input_item.htm)
