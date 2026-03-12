---
title: "ConnectApi.OCIUpdateReservationOutputRepresentation"
domain: apex-reference
topic: connectapiociupdatereservationoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.212Z
estimatedTokens: 166
keywords: [Result, Omnichannel, Inventory, reserved]
---

# ConnectApi.OCIUpdateReservationOutputRepresentation

> Result of an Omnichannel Inventory update request for reserved inventory.

# ConnectApi.OCIUpdateReservationOutputRepresentation

Result of an Omnichannel Inventory update request for reserved inventory.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| details | List ConnectApi.OCIUpdateReservationSingleOutputRepresentation [] | Details for each product in the reservation. | 61.0 |
| errors | List ConnectApi.OCIUpdateReservationErrorOutputRepresentation [] | Any errors returned by the reservation update request. | 61.0 |
| reservationTime | String | The time when the reservation was updated. | 61.0 |
| success | Boolean | Indicates whether the reservation was successfully updated. | 61.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.OCIUpdateReservationSingleOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_update_reservation_single_output.htm)
- ConnectApi.OCIUpdateReservationErrorOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_update_reservation_error_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
