---
title: "fulfillReservation(fulfillReservationInputRepresentation)"
domain: apex-reference
topic: fulfillreservationfulfillreservationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.455Z
keywords: [fulfillReservation, fulfillReservationInputRepresentation, Fulfill, inventory, reservations., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# fulfillReservation(fulfillReservationInputRepresentation)

> Fulfill one or more inventory reservations.

### fulfillReservation(fulfillReservationInputRepresentation)

Fulfill one or more inventory reservations.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCIFulfillReservationOutputRepresentation fulfillReservation(ConnectApi.OCIFulfillReservationInputRepresentation fulfillReservationInputRepresentation)

#### Parameters

fulfillReservationInputRepresentation

Type: [ConnectApi.OCIFulfillReservationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_fulfill_reservation.htm "A list of inventory reservations to fulfill.")

Wraps a list of inventory reservations to fulfill.

#### Return Value

Type: [ConnectApi.OCIFulfillReservationOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_fulfill_reservation_output.htm "Response to a request to fulfill one or more inventory reservations.")