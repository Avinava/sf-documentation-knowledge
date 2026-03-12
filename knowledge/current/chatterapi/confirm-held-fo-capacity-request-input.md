---
title: "Confirm Held FO Capacity Request Input"
domain: chatterapi
topic: confirm-held-fo-capacity-request-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.377Z
estimatedTokens: 183
keywords: [Confirm, Held, Capacity, Input, fulfillment, order, locations]
---

# Confirm Held FO Capacity Request Input

> Request to confirm held fulfillment order capacity at one or more
      locations.

# Confirm Held FO Capacity Request Input

Request to confirm held fulfillment order capacity at one or more locations.

Root XML tag

<confirmHeldFOCapacityRequestInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allOrNothing | Boolean | Controls whether a single failed request cancels all other requests in the list (true) or whether some requests can succeed if others fail (false). The default value is false. | Optional | 55.0 |
| capacityRequests | Capacity Request Input[] | List of requests to confirm held fulfillment order capacity. Each request is for one fulfillment order assigned to one location. | Required | 55.0 |

## Code Examples

```
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
}
```

## Related Topics

- Capacity Request
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_capacity_request_input.htm)
