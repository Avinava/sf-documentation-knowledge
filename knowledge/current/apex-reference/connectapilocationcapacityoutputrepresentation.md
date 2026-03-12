---
title: "ConnectApi.LocationCapacityOutputRepresentation"
domain: apex-reference
topic: connectapilocationcapacityoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.731Z
estimatedTokens: 167
keywords: [Fulfillment, order, capacity, location]
---

# ConnectApi.LocationCapacityOutputRepresentation

> Fulfillment order capacity values for a location.

# ConnectApi.LocationCapacityOutputRepresentation

Fulfillment order capacity values for a location.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| assigned | Integer | Value of the location’s Assigned Fulfillment Order Count. | 55.0 |
| capacity | Integer | Value of the location’s Fulfillment Order Capacity. This property represents the location’s maximum capacity. | 55.0 |
| error | ConnectApi.​ErrorResponse | Error returned by the request, if any. | 55.0 |
| heldCapacity | Integer | Number of fulfillment orders that the location is holding capacity for. | 55.0 |
| locationId | String | ID of the location. | 55.0 |

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
