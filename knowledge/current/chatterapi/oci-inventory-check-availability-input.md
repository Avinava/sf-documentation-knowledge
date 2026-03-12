---
title: "OCI Inventory Check Availability Input"
domain: chatterapi
topic: oci-inventory-check-availability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.889Z
estimatedTokens: 285
keywords: [OCI, Inventory, Check, Availability, Input, either, individual, location, group, fulfill, order, hand, quantity]
---

# OCI Inventory Check Availability Input

> Check inventory availability in either an individual location or group location. Check
      for available to fulfill, available to order, and on hand quantity information.

# OCI Inventory Check Availability Input

Check inventory availability in either an individual location or group location. Check for available to fulfill, available to order, and on hand quantity information.

Root XML tag

<InventoryCheckAvailabilityInput>

JSON example - Locations

```

```

JSON example - Location Groups

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| inventoryDimension | String | Fulfillment option you want to check.On Hand: Inventory available, not counting Future Inventory or Quantity Reserved.Available to Fulfill (ATF): Inventory that can be fulfilled now.Available to Order (ATO): Inventory that can be ordered. Default option if no dimension is selected. | Optional | 60.0 |
| locationGroups | OCI Location Group Check Availability Input[] | A list of inventory availability data for location groups. | Required if locations isn’t requested. | 60.0 |
| locations | OCI Location Check Availability Input[] | A list of inventory availability data for individual locations. | Required if locationsGroups isn’t requested. | 60.0 |

## Code Examples

```
{
  "locations": [
    {
      "locationId": "131xx0000004FwPAAU",
      "includeInventoryLevel": false,
      "products": [
        {
          "product2Id": "01txx0000006i65AAA",
          "quantity": 10
        },
        {
          "product2Id": "01txx0000006i66AAA",
          "quantity": 11
        }
      ]
    },
    {
      "locationId": "131xx1234567FwSAAU",
      "includeInventoryLevel": false,
      "products": [
        {
          "product2Id": "01txx0000006i67AAA",
          "quantity": 100
        },
        {
          "product2Id": "01txx0000006i68AAA",
          "quantity": 400
        }
      ]
    }
  ],
  "inventoryDimension": "AvailableToOrder"
}
```

```
{
  "locationGroups": [
    {
      "locationGroupId": "0ghxx000000001eAAA",
      "includeInventoryLevel": false,
      "products": [
        {
          "product2Id": "01txx0000006i65AAA",
          "quantity": 10
        },
        {
          "product2Id": "01txx0000006i66AAA",
          "quantity": 11
        }
      ]
    },
    {
      "locationGroupId": "0ghxx000000001dAAA",
      "includeInventoryLevel": false,
      "products": [
        {
          "product2Id": "01txx0000006i67AAA",
          "quantity": 100
        },
        {
          "product2Id": "01txx0000006i68AAA",
          "quantity": 400
        }
      ]
    }
  ],
  "inventoryDimension": "AvailableToOrder"
}
```

## Related Topics

- OCI Location Group Check Availability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_location_group_check_availability_input.htm)
- OCI Location Check Availability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_location_check_availability_input.htm)
