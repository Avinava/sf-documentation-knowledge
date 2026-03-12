---
title: "ConnectApi.OCIFulfillReservationInputRepresentation"
domain: apex-reference
topic: connectapiocifulfillreservationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.451Z
estimatedTokens: 127
keywords: [inventory, reservations, fulfill]
---

# ConnectApi.OCIFulfillReservationInputRepresentation

> A list of inventory reservations to fulfill.

# ConnectApi.OCIFulfillReservationInputRepresentation

A list of inventory reservations to fulfill.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfillmentRecords | List<ConnectApi.​OCIFulfillReservation​SingleInput​Representation> | A list of inventory reservations. The list can include up to 100 elements. | At least one element is required. | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​OCIFulfillReservation​SingleInput​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_fulfill_reservation_single.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
