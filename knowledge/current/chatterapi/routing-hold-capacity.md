---
title: "Routing, Hold Capacity"
domain: chatterapi
topic: routing-hold-capacity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.625Z
estimatedTokens: 269
keywords: [Routing, Hold, Capacity, fulfillment, order, location, Holding, reserves, space, you’ll, assign]
---

# Routing, Hold Capacity

> Hold fulfillment order capacity at a location. Holding capacity at a
      location reserves a space for a fulfillment order that you’ll assign to it.

# Routing, Hold Capacity

Hold fulfillment order capacity at a location. Holding capacity at a location reserves a space for a fulfillment order that you’ll assign to it.

Resource

```

```

Available version

55.0

HTTP methods

POST

Request body for POST

[Hold FO Capacity Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_hold_f_o_capacity_input.htm "Request to hold fulfillment order capacity at one or more locations. Can correspond to one action call.")

Root XML tag

<holdFOCapacityInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| holdFOCapacity​Requests | Hold FO Capacity Request Input[] | List of requests to hold fulfillment order capacity at one or more locations. | Required | 55.0 |

Response body for POST

[Hold FO Capacity Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_hold_f_o_capacity_output.htm "Response to a request to hold fulfillment order capacity at one or more locations. Can correspond to one action call.")

## Code Examples

```
/commerce/order-management/routing/fulfillment-order-capacity/actions/hold-capacity
```

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

- Hold FO Capacity Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_hold_f_o_capacity_input.htm)
- Hold FO
                        Capacity Request Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_hold_f_o_capacity_request_input.htm)
- Hold FO Capacity Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_hold_f_o_capacity_output.htm)
