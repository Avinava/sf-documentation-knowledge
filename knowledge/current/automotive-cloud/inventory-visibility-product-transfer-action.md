---
title: "Inventory Visibility Product Transfer Action"
domain: automotive-cloud
topic: inventory-visibility-product-transfer-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.838Z
estimatedTokens: 287
keywords: [Inventory, Visibility, Product, Transfer, Action, results, vehicle, search, actions, configuration, defined, admin]
---

# Inventory Visibility Product Transfer Action

> Returns the results for vehicle inventory transfer action search
      based on the inventory visibility actions configuration defined by the admin.

# Inventory Visibility Product Transfer Action

Returns the results for vehicle inventory transfer action search based on the inventory visibility actions configuration defined by the admin.

Resource

```

```

Example

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionName | String | The name of the inventory action type. This list is based on the inventory visibility action configuration. Possible value is:ProductTransfer | Required | 59.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| items | Inventory Actions Item Input[] | Details to perform the inventory product transfer. | Required | 59.0 |

Response body for POST

[Inventory Actions Result](atlas.en-us.automotive_cloud.meta/automotive_cloud/connect_responses_inventory_actions_result.htm "Output representation of the results for the vehicle inventory transfer action search.")

## Code Examples

```
/connect/inventory-visibility/actions
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/inventory-visibility/actions
```

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
- Inventory Actions Result (atlas.en-us.automotive_cloud.meta/automotive_cloud/connect_responses_inventory_actions_result.htm)
