---
title: "ConnectApi.OCITransferReservationErrorOutputRepresentation"
domain: apex-reference
topic: connectapiocitransferreservationerroroutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.154Z
estimatedTokens: 117
keywords: [ConnectApi.OCITransferReservationErrorOutputRepresentation, Response, request, fulfill, inventory, reservation.]
---

# ConnectApi.OCITransferReservationErrorOutputRepresentation

> Response to a request to fulfill one inventory
    reservation.

# ConnectApi.OCITransferReservationErrorOutputRepresentation

Response to a request to fulfill one inventory reservation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| details | ConnectApi.​OCITransferReservation​SingleOutputRepresentation | Details of the transferred reservation, if successful. | 51.0 |
| errorCode | String | Error code, if any. | 51.0 |
| message | String | Details of the error, if available. | 51.0 |

## Related Topics

- ConnectApi.​OCITransferReservation​SingleOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_transfer_reservation_single_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
