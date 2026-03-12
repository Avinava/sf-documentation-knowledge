---
title: "ConnectApi.OCIReleaseReservationOutputRepresentation"
domain: apex-reference
topic: connectapiocireleasereservationoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.147Z
estimatedTokens: 111
keywords: [ConnectApi.OCIReleaseReservationOutputRepresentation, Response, request, release, inventory, reservations.]
---

# ConnectApi.OCIReleaseReservationOutputRepresentation

> Response to a request to release one or more inventory
      reservations.

# ConnectApi.OCIReleaseReservationOutputRepresentation

Response to a request to release one or more inventory reservations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.​OCIReleaseReservation​ErrorOutputRepresentation> | Responses for the individual reservations in the release request. | 51.0 |
| success | Boolean | Indicates whether the request was successful. | 51.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​OCIReleaseReservation​ErrorOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_release_reservation_error_output.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
