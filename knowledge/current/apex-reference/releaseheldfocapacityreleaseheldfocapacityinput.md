---
title: "releaseHeldFOCapacity(releaseHeldFOCapacityInput)"
domain: apex-reference
topic: releaseheldfocapacityreleaseheldfocapacityinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.745Z
keywords: [releaseHeldFOCapacity, releaseHeldFOCapacityInput, Release, held, fulfillment, order, capacity, locations., call, decreases, location’s, without, changing, its, assigned, count., cancel, assignment, location., API]
---

# releaseHeldFOCapacity(releaseHeldFOCapacityInput)

> Release held fulfillment order capacity at one or more locations. This
      call decreases a location’s held capacity without changing its assigned fulfillment order
      count. Release held capacity when you cancel the assignment of a fulfillment order to a
      location.

### releaseHeldFOCapacity(releaseHeldFOCapacityInput)

Release held fulfillment order capacity at one or more locations. This call decreases a location’s held capacity without changing its assigned fulfillment order count. Release held capacity when you cancel the assignment of a fulfillment order to a location.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ReleaseHeldFOCapacityOutputRepresentation releaseHeldFOCapacity(ConnectApi.ReleaseHeldFOCapacityInputRepresentation releaseHeldFOCapacityInput)

#### Parameters

releaseHeldFOCapacityInput

Type: [ConnectApi.ReleaseHeldFOCapacityInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_release_held_f_o_capacity.htm "Request to release held fulfillment order capacity at one or more locations. Can correspond to one action call.")

The input includes, for each fulfillment order, the location that holds the capacity to release.

#### Return Value

Type: [ConnectApi.ReleaseHeldFOCapacityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_release_held_f_o_capacity_output.htm "Response to a request to confirm held fulfillment order capacity at one or more locations. Can correspond to one action call.")