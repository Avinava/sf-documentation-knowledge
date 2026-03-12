---
title: "ConnectApi.OCIFulfillReservationSingleOutputRepresentation"
domain: apex-reference
topic: connectapiocifulfillreservationsingleoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.149Z
estimatedTokens: 160
keywords: [fulfilled, reservation]
---

# ConnectApi.OCIFulfillReservationSingleOutputRepresentation

> Details of a single fulfilled reservation.

# ConnectApi.OCIFulfillReservationSingleOutputRepresentation

Details of a single fulfilled reservation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actionRequestId | String | The UUID that identifies the original fulfill reservation request. | 51.0 |
| externalRefId | String | The external reference ID of the location that fulfilled the reservation. | 51.0 |
| locationIdentifier | String | The identifier of the location that fulfilled the reservation. | 51.0 |
| quantity | Double | The fulfilled quantity. | 51.0 |
| stockKeepingUnit | String | The SKU of the fulfilled product. | 51.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
