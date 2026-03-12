---
title: "ConnectApi.OCIReleaseReservationInputRepresentation"
domain: apex-reference
topic: connectapiocireleasereservationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.462Z
estimatedTokens: 135
keywords: [inventory, reservations, release]
---

# ConnectApi.OCIReleaseReservationInputRepresentation

> Details of one or more inventory reservations to
    release.

# ConnectApi.OCIReleaseReservationInputRepresentation

Details of one or more inventory reservations to release.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| releaseRecords | List<ConnectApi.​OCIReleaseReservation​SingleInput​Representation> | List of inventory reservations to release. The list can include up to 100 elements. | At least one element is required. | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |
|  |  |  |  |  |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​OCIReleaseReservation​SingleInput​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_release_reservation_single.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
