---
title: "Capacity Response Output"
domain: chatterapi
topic: capacity-response-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.474Z
estimatedTokens: 127
keywords: [Capacity, Output, location’s, fulfillment]
---

# Capacity Response Output

> Response to a request related to a location’s fulfillment
      capacity.

# Capacity Response Output

Response to a request related to a location’s fulfillment capacity.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | Unique string that identifies the original capacity request. | Big, 55.0 | 55.0 |
| error | Error Response Output | Error returned by the request, if any. | Big, 55.0 | 55.0 |
| success | Boolean | Indicates whether the request was successful. | Big, 55.0 | 55.0 |

## Related Topics

- Error
                  Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
