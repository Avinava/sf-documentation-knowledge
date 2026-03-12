---
title: "Get FO Capacity Values Output"
domain: chatterapi
topic: get-fo-capacity-values-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.078Z
estimatedTokens: 139
keywords: [Capacity, Output, fulfillment, order, locations]
---

# Get FO Capacity Values Output

> Response to a request for fulfillment order capacity values for one or
      more locations.

# Get FO Capacity Values Output

Response to a request for fulfillment order capacity values for one or more locations.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response Output[] | Any errors that were returned. | Big, 55.0 | 55.0 |
| locations | Location Capacity Output[] | List of fulfillment order capacity values for one or more locations. | Big, 55.0 | 55.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 55.0 | 55.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Location Capacity Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_location_capacity_output.htm)
