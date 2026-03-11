---
title: "confirmHeldFOCapacity(confirmHeldFOCapacityInput)"
domain: apex-reference
topic: confirmheldfocapacityconfirmheldfocapacityinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.745Z
keywords: [confirmHeldFOCapacity, confirmHeldFOCapacityInput, Confirm, held, fulfillment, order, capacity, locations., call, decreases, location’s, increases, its, assigned, count., assign, location., API, Version, Requires]
---

# confirmHeldFOCapacity(confirmHeldFOCapacityInput)

> Confirm held fulfillment order capacity at one or more locations.
      This call decreases a location’s held capacity and increases its assigned fulfillment order
      count. Confirm held capacity when you assign a fulfillment order to a
    location.

### confirmHeldFOCapacity(confirmHeldFOCapacityInput)

Confirm held fulfillment order capacity at one or more locations. This call decreases a location’s held capacity and increases its assigned fulfillment order count. Confirm held capacity when you assign a fulfillment order to a location.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ConfirmHeldFOCapacityOutputRepresentation confirmHeldFOCapacity(ConnectApi.ConfirmHeldFOCapacityInputRepresentation confirmHeldFOCapacityInput)

#### Parameters

confirmHeldFOCapacityInput

Type: [ConnectApi.ConfirmHeldFOCapacityInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_confirm_held_f_o_capacity.htm "Request to confirm held fulfillment order capacity at one or more locations. Can correspond to one action call.")

The input includes, for each fulfillment order, the location where capacity is held for it.

#### Return Value

Type: [ConnectApi.ConfirmHeldFOCapacityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_confirm_held_f_o_capacity_output.htm "Response to a request to confirm held fulfillment order capacity at one or more locations. Can correspond to one action call.")