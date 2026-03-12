---
title: "Confirm Held FO Capacity Input"
domain: chatterapi
topic: confirm-held-fo-capacity-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.374Z
estimatedTokens: 129
keywords: [Confirm, Held, Capacity, Input, fulfillment, order, locations, correspond, action, call]
---

# Confirm Held FO Capacity Input

> Request to confirm held fulfillment order capacity at one or more
      locations. Can correspond to one action call.

# Confirm Held FO Capacity Input

Request to confirm held fulfillment order capacity at one or more locations. Can correspond to one action call.

Root XML tag

<confirmHeldFOCapacityInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| confirmHeldFO​CapacityRequests | Confirm Held FO Capacity Request Input[] | List of requests to confirm held fulfillment order capacity at one or more locations. | Required | 55.0 |

## Code Examples

```
{
  "confirmHeldFOCapacityRequests": [
    {
      "capacityRequests": [
        {
          "actionRequestId" : "FOCapacityInteractionId1",
          "locationId": "LOC-1"
        }
      ],
      "allOrNothing": false
    },
    {
      "capacityRequests": [
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
    }
  ]
}
```

## Related Topics

- Confirm Held FO Capacity Request Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_confirm_held_f_o_capacity_request_input.htm)
