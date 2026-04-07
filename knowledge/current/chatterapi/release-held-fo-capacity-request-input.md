---
title: "Release Held FO Capacity Request Input"
domain: chatterapi
topic: release-held-fo-capacity-request-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:10.014Z
estimatedTokens: 185
keywords: [Release, Held, Capacity, fulfillment, order, locations]
---

> Request to release held fulfillment order capacity at one or more
      locations.

# Release Held FO Capacity Request Input

Request to release held fulfillment order capacity at one or more locations.

Root XML tag

<releaseHeldFOCapacityRequestInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allOrNothing | Boolean | Controls whether a single failed request cancels all other requests in the list (true) or whether some requests can succeed if others fail (false). The default value is false. | Optional | 55.0 |
| capacityRequests | Capacity Request Input[] | List of requests to release held fulfillment order capacity. Each request is for capacity for one fulfillment order held at one location. | Required | 55.0 |

## Code Examples

```
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
```

## Related Topics

- Capacity Request
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_capacity_request_input.htm)
