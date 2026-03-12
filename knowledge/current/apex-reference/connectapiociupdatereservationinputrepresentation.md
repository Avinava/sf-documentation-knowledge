---
title: "ConnectApi.OCIUpdateReservationInputRepresentation"
domain: apex-reference
topic: connectapiociupdatereservationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.259Z
estimatedTokens: 324
keywords: [ConnectApi.OCIUpdateReservationInputRepresentation, Data, update, Omnichannel, Inventory, item, reservations.]
---

# ConnectApi.OCIUpdateReservationInputRepresentation

> Data to update one or more Omnichannel Inventory item reservations.

# ConnectApi.OCIUpdateReservationInputRepresentation

Data to update one or more Omnichannel Inventory item reservations.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | Unique and idempotent action request ID. Use in response data to identify which requests succeeded or failed. | Required | 61.0 |
| allowPartialReservations | Boolean | When true, if the system can’t update the entire reservation, then it attempts to update a partial reservation. | Optional | 61.0 |
| externalRefId | String | External reference ID. | Optional | 61.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 61.0 |
| reservationTime | String | The time the reservation was updated. Example: 2020-07-24T21:13:00Z. | Optional | 61.0 |
| updateAllOrNothingRecords | List | Controls whether a single failed request updates all other requests in the list (true) or whether some requests can succeed if others fail (false). The default value is false. | Optional | 61.0 |
| updateRecords | List ConnectApi.OCIUpdateReservationSingleInputRepresentation [] | A list of product quantities and locations or location groups. The list can have up to 100 elements. | At least one element is required | 61.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.OCIUpdateReservationSingleInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_update_reservation_single.htm)
