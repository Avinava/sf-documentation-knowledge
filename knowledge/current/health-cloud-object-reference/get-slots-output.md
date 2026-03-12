---
title: "Get Slots Output"
domain: health-cloud-object-reference
topic: get-slots-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.633Z
estimatedTokens: 198
keywords: [Slots, Output, representation, getting, appointment]
---

# Get Slots Output

> Output representation for getting appointment slots.

# Get Slots Output

Output representation for getting appointment slots.

JSON Example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available version |
| --- | --- | --- | --- | --- |
| availableSlots | Array | Array of available slots for the resource. | Small, 65.0 | 65.0 |
| resourceId | String | ID of the resource. | Small, 65.0 | 65.0 |
| resourceSlots | Array | Array of resources and their associated available slots. | Small, 65.0 | 65.0 |
| slotEndDate | String | End date and time of the slot. | Small, 65.0 | 65.0 |
| slotId | String | ID of the slot. | Small, 65.0 | 65.0 |
| slotStartDate | String | Start date and time of the slot. | Small, 65.0 | 65.0 |
| sourceSystem | String | Source system of the slot. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "resourceSlotDetails": [
    {
      "availableSlots": [
        {
          "slotEndDate": "2025-09-20T00:45:00Z",
          "slotId": "ce5b28b6-5b84-4aa8-bd29-2b25ed2dc85a",
          "slotStartDate": "2025-09-20T00:15:00Z",
          "sourceSystem": null
        },
        {
          "slotEndDate": "2025-09-20T01:00:00Z",
          "slotId": "bebb47c9-217d-4d6d-a4f4-2788cd711242",
          "slotStartDate": "2025-09-20T00:30:00Z",
          "sourceSystem": null
        }
      ],
      "resourceId": "0bSxx000000000xxAQ"
    }
  ]
}
```
