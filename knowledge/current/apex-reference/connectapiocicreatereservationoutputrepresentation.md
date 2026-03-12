---
title: "ConnectApi.OCICreateReservationOutputRepresentation"
domain: apex-reference
topic: connectapiocicreatereservationoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.104Z
estimatedTokens: 183
keywords: [ConnectApi.OCICreateReservationOutputRepresentation, Result, Omnichannel, Inventory, reservation, creation, request.]
---

# ConnectApi.OCICreateReservationOutputRepresentation

> Result of an Omnichannel Inventory reservation creation
      request.

# ConnectApi.OCICreateReservationOutputRepresentation

Result of an Omnichannel Inventory reservation creation request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| details | List<ConnectApi.​OCICreateReservation​SingleOutputRepresentation> | Details for each product in the reservation. | 51.0 |
| errors | List<ConnectApi.​OCICreateReservation​ErrorOutputRepresentation> | Any errors returned by the reservation request. | 51.0 |
| expirationTime | String | The time at which the reservation would expire. | 51.0 |
| reservationTime | String | The time when the reservation was recorded. | 51.0 |
| success | Boolean | Indicates whether the reservation was successfully created. | 51.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​OCICreateReservation​SingleOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_create_reservation_single_output.htm)
- ConnectApi.​OCICreateReservation​ErrorOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_create_reservation_error_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
