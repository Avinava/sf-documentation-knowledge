---
title: "ConnectApi.OCITransferReservationInputRepresentation"
domain: apex-reference
topic: connectapiocitransferreservationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.248Z
estimatedTokens: 253
keywords: [ConnectApi.OCITransferReservationInputRepresentation, list, inventory, reservation, transfers, specifies, whether, single, failure, cancels, entire, list.]
---

# ConnectApi.OCITransferReservationInputRepresentation

> A list of inventory reservation transfers and specifies whether a
      single failure cancels the entire list.

# ConnectApi.OCITransferReservationInputRepresentation

A list of inventory reservation transfers and specifies whether a single failure cancels the entire list.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allOrNothing​TransferId | String | Controls whether a single failed transfer cancels all other transfers in the transferRecords list.To allow some transfers in the transferRecords list to succeed when others fail, don’t include this property.To cancel all the transfers in the transferRecords list when any of them fail, set this property to a UUID. The ID must be unique, but isn’t otherwise used in this version. | Optional | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |
| transferRecords | List<ConnectApi.​OCITransferReservation​SingleInput​Representation> | A list of inventory reservation transfers. The list can include up to 100 elements. | At least one element is required. | 51.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​OCITransferReservation​SingleInput​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_transfer_reservation_single.htm)
