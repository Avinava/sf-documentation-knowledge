---
title: "Release Held FO Capacity Output"
domain: chatterapi
topic: release-held-fo-capacity-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.922Z
estimatedTokens: 167
keywords: [Release, Held, Capacity, Output, confirm, fulfillment, order, locations, correspond, action, call]
---

# Release Held FO Capacity Output

> Response to a request to confirm held fulfillment order capacity at
      one or more locations. Can correspond to one action call.

# Release Held FO Capacity Output

Response to a request to confirm held fulfillment order capacity at one or more locations. Can correspond to one action call.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response Output[] | Any errors that were returned. | Big, 55.0 | 55.0 |
| releaseHeldFO​CapacityResponses | Release Held FO Capacity Response Output[] | List of responses to the requests to confirm held fulfillment order capacity at one or more locations. | Big, 55.0 | 55.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 55.0 | 55.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Release Held FO Capacity Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_release_held_f_o_capacity_response_output.htm)
