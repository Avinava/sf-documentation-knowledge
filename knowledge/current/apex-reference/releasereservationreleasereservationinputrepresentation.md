---
title: "releaseReservation(releaseReservationInputRepresentation)"
domain: apex-reference
topic: releasereservationreleasereservationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.455Z
keywords: [releaseReservation, releaseReservationInputRepresentation, Release, existing, inventory, reservations, free, inventory., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# releaseReservation(releaseReservationInputRepresentation)

> Release one or more existing inventory reservations to free up that
      inventory.

### releaseReservation(releaseReservationInputRepresentation)

Release one or more existing inventory reservations to free up that inventory.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCIReleaseReservationOutputRepresentation releaseReservation(ConnectApi.OCIReleaseReservationInputRepresentation releaseReservationInputRepresentation)

#### Parameters

releaseReservationInputRepresentation

Type: [ConnectApi.OCIReleaseReservationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_release_reservation.htm "Details of one or more inventory reservations to release.")

Details of one or more inventory reservations to release.

#### Return Value

Type: [ConnectApi.OCIReleaseReservationOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_release_reservation_output.htm "Response to a request to release one or more inventory reservations.")