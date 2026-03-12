---
title: "OCI Location Group Check Availability Input"
domain: chatterapi
topic: oci-location-group-check-availability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.980Z
estimatedTokens: 142
keywords: [OCI, Location, Group, Check, Availability, Input, needed, inventory]
---

# OCI Location Group Check Availability Input

> Information needed to check inventory availability in a location group.

# OCI Location Group Check Availability Input

Information needed to check inventory availability in a location group.

Root XML tag

<LocationGroupCheckAvailabilityInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| includeInventoryLevel | Boolean | Include inventory levels. | Optional | 60.0 |
| locationGroupId | String | Location group ID. | Required | 60.0 |
| products | OCI Product Check Availability Input[] | List of products in inventory. | Required | 60.0 |

## Code Examples

```
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
```

## Related Topics

- OCI Product Check Availability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_product_check_availability_input.htm)
