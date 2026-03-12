---
title: "Hold FO Capacity Output"
domain: chatterapi
topic: hold-fo-capacity-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.164Z
estimatedTokens: 155
keywords: [Hold, Capacity, Output, fulfillment, order, locations, correspond, action, call]
---

# Hold FO Capacity Output

> Response to a request to hold fulfillment order capacity at one or
      more locations. Can correspond to one action call.

# Hold FO Capacity Output

Response to a request to hold fulfillment order capacity at one or more locations. Can correspond to one action call.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response Output[] | Any errors that were returned. | Big, 55.0 | 55.0 |
| holdFOCapacity​Responses | Hold FO Capacity Response Output[] | List of responses to the requests to hold fulfillment order capacity at one or more locations. | Big, 55.0 | 55.0 |
| success | Boolean | Indicates whether the request was successful. | 55.0 | 55.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Hold FO Capacity Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_hold_f_o_capacity_response_output.htm)
