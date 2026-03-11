---
title: "updateReservation(updateReservationInputRepresentation)"
domain: apex-reference
topic: updatereservationupdatereservationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.455Z
keywords: [updateReservation, updateReservationInputRepresentation, Updates, existing, reservation, Omnichannel, Inventory., Add, remove, update, quantities, SKUs, reservation., API, Version, Requires, Chatter, Signature, Parameters, Return]
---

# updateReservation(updateReservationInputRepresentation)

> Updates an existing reservation in Omnichannel Inventory. Add, remove,
      and update quantities for existing SKUs in the reservation.

### updateReservation(updateReservationInputRepresentation)

Updates an existing reservation in Omnichannel Inventory. Add, remove, and update quantities for existing SKUs in the reservation.

#### API Version

61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCIUpdateReservationOutputRepresentation updateReservation(ConnectApi.OCIUpdateReservationInputRepresentation updateReservationInputRepresentation)

#### Parameters

updateReservationInputRepresentation

Type: [ConnectApi.OCIUpdateReservationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_update_reservation.htm "Data to update one or more Omnichannel Inventory item reservations.")

Data to update one or more Omnichannel Inventory item reservations.

#### Return Value

Type: [ConnectApi.OCIUpdateReservationOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_update_reservation_output.htm "Result of an Omnichannel Inventory update request for reserved inventory.")