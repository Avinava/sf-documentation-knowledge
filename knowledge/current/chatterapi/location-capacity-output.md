---
title: "Location Capacity Output"
domain: chatterapi
topic: location-capacity-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.350Z
estimatedTokens: 183
keywords: [Location, Capacity, Output, Fulfillment, order]
---

# Location Capacity Output

> Fulfillment order capacity values for a location.

# Location Capacity Output

Fulfillment order capacity values for a location.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| assigned | Integer | Value of the location’s Assigned Fulfillment Order Count. | Big, 55.0 | 55.0 |
| capacity | Integer | Value of the location’s Fulfillment Order Capacity. This property represents the location’s maximum capacity. | Big, 55.0 | 55.0 |
| error | Error Response Output | Error returned by the request, if any. | Big, 55.0 | 55.0 |
| heldCapacity | Integer | Number of fulfillment orders that the location is holding capacity for. | Big, 55.0 | 55.0 |
| locationId | String | ID of the location. | Big, 55.0 | 55.0 |

## Related Topics

- Error
                  Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
