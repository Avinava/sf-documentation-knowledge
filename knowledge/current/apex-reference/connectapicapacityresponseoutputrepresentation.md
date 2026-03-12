---
title: "ConnectApi.CapacityResponseOutputRepresentation"
domain: apex-reference
topic: connectapicapacityresponseoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.439Z
estimatedTokens: 117
keywords: [location’s, fulfillment, capacity]
---

# ConnectApi.CapacityResponseOutputRepresentation

> Response to a request related to a location’s fulfillment
      capacity.

# ConnectApi.CapacityResponseOutputRepresentation

Response to a request related to a location’s fulfillment capacity.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actionRequestId | String | Unique string that identifies the original capacity request. | 55.0 |
| error | ConnectApi.​ErrorResponse | Error returned by the request, if any. | 55.0 |
| success | Boolean | Indicates whether the request was successful. | 55.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
