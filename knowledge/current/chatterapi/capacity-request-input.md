---
title: "Capacity Request Input"
domain: chatterapi
topic: capacity-request-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.164Z
estimatedTokens: 139
keywords: [Capacity, Input, location’s, fulfillment, order]
---

# Capacity Request Input

> Request related to a location’s fulfillment order
    capacity.

# Capacity Request Input

Request related to a location’s fulfillment order capacity.

Root XML tag

<capacityRequestInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | Unique string that identifies the request. Can be a UUID. Use the action request IDs in response data to identify which requests succeeded or failed. | Required | 55.0 |
| locationId | String | ID of the location associated with the request. | Required | 55.0 |

## Code Examples

```
{
  "actionRequestId" : "FOCapacityInteractionId1",
  "locationId": "LOC-1"
}
```
