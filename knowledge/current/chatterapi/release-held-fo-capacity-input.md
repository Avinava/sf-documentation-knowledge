---
title: "Release Held FO Capacity Input"
domain: chatterapi
topic: release-held-fo-capacity-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.692Z
estimatedTokens: 129
keywords: [Release, Held, Capacity, Input, fulfillment, order, locations, correspond, action, call]
---

# Release Held FO Capacity Input

> Request to release held fulfillment order capacity at one or more
      locations. Can correspond to one action call.

# Release Held FO Capacity Input

Request to release held fulfillment order capacity at one or more locations. Can correspond to one action call.

Root XML tag

<releaseHeldFOCapacityInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| releaseHeldFO​CapacityRequests | Release Held FO Capacity Request Input[] | List of requests to release held fulfillment order capacity at one or more locations. | Required | 55.0 |

## Code Examples

```
{
  "releaseHeldFOCapacityRequests": [
    {
      "capacityRequests": [
        {
          "actionRequestId" : "FOCapacityInteractionId1",
          "locationId": "LOC-1"
        },
        {
          "actionRequestId" : "FOCapacityInteractionId4",
          "locationId": "LOC-1"
        }
      ],
      "allOrNothing": false
    },
    {
      "capacityRequests": [
        {
          "actionRequestId" : "FOCapacityInteractionId2",
          "locationId": "LOC-2"
        },
        {
          "actionRequestId" : "FOCapacityInteractionId3",
          "locationId": "LOC-2"
        }
      ],
      "allOrNothing":false
    }
  ]
}
```

## Related Topics

- Release Held FO Capacity Request Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_release_held_f_o_capacity_request_input.htm)
