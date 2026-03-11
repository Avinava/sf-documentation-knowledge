---
title: "transferReservation(transferReservationInputRepresentation)"
domain: apex-reference
topic: transferreservationtransferreservationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.455Z
keywords: [transferReservation, transferReservationInputRepresentation, Transfer, inventory, reservations, between, locations, location, groups., API, doesn’t, change, physical, quantities, reduces, reserved, quantity, source, increases, destination.]
---

# transferReservation(transferReservationInputRepresentation)

> Transfer one or more inventory reservations between locations or
      location groups. This API doesn’t change physical quantities, but reduces the reserved
      quantity at the source and increases it at the destination.

### transferReservation(transferReservationInputRepresentation)

Transfer one or more inventory reservations between locations or location groups. This API doesn’t change physical quantities, but reduces the reserved quantity at the source and increases it at the destination.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCITransferReservationOutputRepresentation transferReservation(ConnectApi.OCITransferReservationInputRepresentation transferReservationInputRepresentation)

#### Parameters

transferReservationInputRepresentation

Type: [ConnectApi.OCITransferReservationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_transfer_reservation.htm "A list of inventory reservation transfers and specifies whether a single failure cancels the entire list.")

Wraps a list of inventory reservation transfers and specifies whether a single failure cancels the entire list.

#### Return Value

Type: [ConnectApi.OCITransferReservationOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_transfer_reservation_output.htm "Response to a request to transfer one or more inventory reservations.")