---
title: "OCI Location Check Availability Input"
domain: chatterapi
topic: oci-location-check-availability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.976Z
estimatedTokens: 138
keywords: [OCI, Location, Check, Availability, Input, needed, inventory, individual]
---

# OCI Location Check Availability Input

> Information needed to check inventory availability at an individual
      location.

# OCI Location Check Availability Input

Information needed to check inventory availability at an individual location.

Root XML tag

<LocationCheckAvailabilityInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| includeInventoryLevel | Boolean | Include inventory levels. | Optional | 60.0 |
| locationId | String | Location ID. | Required | 60.0 |
| products | OCI Product Check Availability Input | List of products in inventory. | Required | 60.0 |

## Code Examples

```
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
    }
```

## Related Topics

- OCI Product Check Availability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_product_check_availability_input.htm)
