---
title: "ConnectApi.OCIFulfillReservationSingleInputRepresentation"
domain: apex-reference
topic: connectapiocifulfillreservationsingleinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.454Z
estimatedTokens: 218
keywords: [inventory, reservation, fulfill]
---

# ConnectApi.OCIFulfillReservationSingleInputRepresentation

> An inventory reservation to fulfill.

# ConnectApi.OCIFulfillReservationSingleInputRepresentation

An inventory reservation to fulfill.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | A UUID that identifies the request. Use the action request IDs in response data to identify which requests succeeded or failed. | Required | 51.0 |
| externalRefId | String | The external reference ID of the location that’s fulfilling the reservation. | Optional | 51.0 |
| locationIdentifier | String | The identifier of the location that’s fulfilling the reservation. | Required | 51.0 |
| quantity | Double | The quantity being fulfilled. | Required | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |
| stockKeepingUnit | String | The SKU of the product being fulfilled. | Required | 51.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
