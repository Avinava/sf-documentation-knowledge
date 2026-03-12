---
title: "Routing, Release Held Capacity"
domain: chatterapi
topic: routing-release-held-capacity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.633Z
estimatedTokens: 262
keywords: [Routing, Release, Held, Capacity, fulfillment, order, locations, call, decreases, location’s, changing, assigned, count, cancel, assignment]
---

# Routing, Release Held Capacity

> Release held fulfillment order capacity at one or more locations. This
      call decreases a location’s held capacity without changing its assigned fulfillment order
      count. Release held capacity when you cancel the assignment of a fulfillment order to a
      location.

# Routing, Release Held Capacity

Release held fulfillment order capacity at one or more locations. This call decreases a location’s held capacity without changing its assigned fulfillment order count. Release held capacity when you cancel the assignment of a fulfillment order to a location.

Resource

```

```

Available version

55.0

HTTP methods

POST

Request body for POST

[Release Held FO Capacity Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_release_held_f_o_capacity_input.htm "Request to release held fulfillment order capacity at one or more locations. Can correspond to one action call.")

Root XML tag

<releaseHeldFOCapacityInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| releaseHeldFO​CapacityRequests | Release Held FO Capacity Request Input[] | List of requests to release held fulfillment order capacity at one or more locations. | Required | 55.0 |

Response body for POST

Release Held FO Capacity Output

## Code Examples

```
/commerce/order-management/routing/fulfillment-order-capacity/actions/release-held-capacity
```

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

- Release Held FO
              Capacity Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_release_held_f_o_capacity_input.htm)
- Release Held FO Capacity Request Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_release_held_f_o_capacity_request_input.htm)
