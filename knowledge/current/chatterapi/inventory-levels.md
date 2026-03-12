---
title: "Inventory Levels"
domain: chatterapi
topic: inventory-levels
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.611Z
estimatedTokens: 421
keywords: [Inventory, Levels, products, locations, location, groups, commerce, system]
---

# Inventory Levels

> Get information about inventory levels for products in
         locations and location groups in your commerce inventory system.

# Inventory Levels

Get information about inventory levels for products in locations and location groups in your commerce inventory system.

There are limits to how many product IDs, SKUs, and locations requests can be made at a time. Refer to the parameter descriptions for limits. Previously retrieved product inventory values are cached. Cached products aren't included in subsequent requests to external inventory systems, like Omnichannel Inventory. Consequently, the number of products counted towards request limits may be lower, depending on how many products have been cached when the request is made.

Resource

```

```

Available version

60.0

HTTP methods

GET

JSON example

```

```

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| locations | String[] | List of locations that contain inventory. A maximum of 100 product and location combinations are allowed per request. | Required if locationgroups isn't used. | 60.0 |
| locationgroups | String[] | List of location groups where the inventory is requested. | Required if locations isn't used. | 60.0 |
| products | String[] | List of products (ID or SKU).A maximum of 100 product ID and location combinations are allowed per request.A maximum of 20 SKU and location combinations are allowed per request. | Required | 60.0 |
| scope | String | Webstore ID.Example: /commerce/inventory/levels?​scope=webStoreId Eq '0ZExx000000123FGAQ' | Required | 60.0 |

Response body for GET

[OCI Inventory Levels Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_inventory_levels_output.htm "Inventory levels data.")

## Code Examples

```
{
  "errors": [],
  "locationGroups": [
    {
      "inventoryProducts": [
        {
          "availableToFulfill": 0,
          "availableToOrder": 0,
          "onHand": 0,
          "product2Id": "01tSB000001AUkDYAW"
        }
      ],
      "locationGroupId": "0ghSB0000000LvhYAE"
    }
  ],
  "locations": [],
  "success": true,
  "totalInventory": [
    {
      "availableToFulfill": 0,
      "availableToOrder": 0,
      "onHand": 0,
      "product2Id": "01tSB000001AUkDYAW"
    }
  ]
}
```

## Related Topics

- OCI Inventory Levels Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_inventory_levels_output.htm)
