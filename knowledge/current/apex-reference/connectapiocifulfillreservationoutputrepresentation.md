---
title: "ConnectApi.OCIFulfillReservationOutputRepresentation"
domain: apex-reference
topic: connectapiocifulfillreservationoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.146Z
estimatedTokens: 112
keywords: [fulfill, inventory, reservations]
---

# ConnectApi.OCIFulfillReservationOutputRepresentation

> Response to a request to fulfill one or more inventory
      reservations.

# ConnectApi.OCIFulfillReservationOutputRepresentation

Response to a request to fulfill one or more inventory reservations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.​OCIFulfillReservation​ErrorOutputRepresentation> | Responses for the individual reservations in the fulfillment request. | 51.0 |
| success | Boolean | Indicates whether the request was successful. | 51.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​OCIFulfillReservation​ErrorOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_fulfill_reservation_error_output.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
