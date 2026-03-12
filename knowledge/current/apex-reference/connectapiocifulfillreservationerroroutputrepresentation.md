---
title: "ConnectApi.OCIFulfillReservationErrorOutputRepresentation"
domain: apex-reference
topic: connectapiocifulfillreservationerroroutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.142Z
estimatedTokens: 116
keywords: [fulfill, inventory, reservation]
---

# ConnectApi.OCIFulfillReservationErrorOutputRepresentation

> Response to a request to fulfill one inventory
    reservation.

# ConnectApi.OCIFulfillReservationErrorOutputRepresentation

Response to a request to fulfill one inventory reservation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| details | ConnectApi.​OCIFulfillReservation​SingleOutputRepresentation | Details of the fulfilled reservation, if successful. | 51.0 |
| errorCode | String | Error code, if any. | 51.0 |
| message | String | Details of the error, if available. | 51.0 |

## Related Topics

- ConnectApi.​OCIFulfillReservation​SingleOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_fulfill_reservation_single_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
