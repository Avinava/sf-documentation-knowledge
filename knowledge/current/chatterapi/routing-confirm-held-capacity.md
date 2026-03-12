---
title: "Routing, Confirm Held Capacity"
domain: chatterapi
topic: routing-confirm-held-capacity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.608Z
estimatedTokens: 313
keywords: [Routing, Confirm, Held, Capacity, fulfillment, order, locations, call, decreases, location’s, increases, assigned, count, assign, location]
---

# Routing, Confirm Held Capacity

> Confirm held fulfillment order capacity at one or more locations.
      This call decreases a location’s held capacity and increases its assigned fulfillment order
      count. Confirm held capacity when you assign a fulfillment order to a
    location.

# Routing, Confirm Held Capacity

Confirm held fulfillment order capacity at one or more locations. This call decreases a location’s held capacity and increases its assigned fulfillment order count. Confirm held capacity when you assign a fulfillment order to a location.

Resource

```

```

Available version

55.0

HTTP methods

POST

Request body for POST

[Confirm Held FO Capacity Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_confirm_held_f_o_capacity_input.htm "Request to confirm held fulfillment order capacity at one or more locations. Can correspond to one action call.")

Root XML tag

<confirmHeldFOCapacityInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| confirmHeldFO​CapacityRequests | Confirm Held FO Capacity Request Input[] | List of requests to confirm held fulfillment order capacity at one or more locations. | Required | 55.0 |

Response body for POST

[Confirm Held FO Capacity Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_confirm_held_f_o_capacity_output.htm "Response to a request to confirm held fulfillment order capacity at one or more locations. Can correspond to one action call.")

## Code Examples

```
/commerce/order-management/routing/fulfillment-order-capacity/actions/confirm-held-capacity
```

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

- Confirm Held FO Capacity Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_confirm_held_f_o_capacity_input.htm)
- Confirm Held FO Capacity Request Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_confirm_held_f_o_capacity_request_input.htm)
- Confirm Held FO Capacity Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_confirm_held_f_o_capacity_output.htm)
