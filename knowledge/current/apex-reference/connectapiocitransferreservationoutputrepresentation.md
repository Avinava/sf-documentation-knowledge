---
title: "ConnectApi.OCITransferReservationOutputRepresentation"
domain: apex-reference
topic: connectapiocitransferreservationoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.157Z
estimatedTokens: 112
keywords: [ConnectApi.OCITransferReservationOutputRepresentation, Response, request, transfer, inventory, reservations.]
---

# ConnectApi.OCITransferReservationOutputRepresentation

> Response to a request to transfer one or more inventory
      reservations.

# ConnectApi.OCITransferReservationOutputRepresentation

Response to a request to transfer one or more inventory reservations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.​OCITransferReservation​ErrorOutputRepresentation> | Responses for the individual reservations in the transfer request. | 51.0 |
| success | Boolean | Indicates whether the request was successful. | 51.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​OCITransferReservation​ErrorOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_transfer_reservation_error_output.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
