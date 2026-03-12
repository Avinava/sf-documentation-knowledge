---
title: "Hold FO Capacity Input"
domain: chatterapi
topic: hold-fo-capacity-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.849Z
estimatedTokens: 118
keywords: [Hold, Capacity, Input, fulfillment, order, locations, correspond, action, call]
---

# Hold FO Capacity Input

> Request to hold fulfillment order capacity at one or more locations.
      Can correspond to one action call.

# Hold FO Capacity Input

Request to hold fulfillment order capacity at one or more locations. Can correspond to one action call.

Root XML tag

<holdFOCapacityInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| holdFOCapacity​Requests | Hold FO Capacity Request Input[] | List of requests to hold fulfillment order capacity at one or more locations. | Required | 55.0 |

## Code Examples

```
{
  "holdFOCapacityRequests": [
    {
      "capacityRequests": [
        {
          "actionRequestId" : "FOCapacityInteractionId1",
          "locationId": "LOC-1"
        },
        {
          "actionRequestId" : "FOCapacityInteractionId2",
          "locationId": "LOC-1"
        },
        {
          "actionRequestId" : "FOCapacityInteractionId3",
          "locationId": "LOC-2"
        }
      ],
      "allOrNothing": false
    },
    {
      "capacityRequests": [
        {
          "actionRequestId" : "FOCapacityInteractionId4",
          "locationId": "LOC-1"
        },
        {
          "actionRequestId" : "FOCapacityInteractionId5",
          "locationId": "LOC-1"
        }
      ],
      "allOrNothing":true
    }
  ]
}
```

## Related Topics

- Hold FO
                        Capacity Request Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_hold_f_o_capacity_request_input.htm)
