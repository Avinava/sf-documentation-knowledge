---
title: "holdFOCapacity(holdFOCapacityInput)"
domain: apex-reference
topic: holdfocapacityholdfocapacityinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.745Z
keywords: [holdFOCapacity, holdFOCapacityInput, Hold, fulfillment, order, capacity, location., Holding, location, reserves, space, you’ll, assign, it., API, Version, Requires, Chatter, Signature, Parameters]
---

# holdFOCapacity(holdFOCapacityInput)

> Hold fulfillment order capacity at a location. Holding capacity at a
      location reserves a space for a fulfillment order that you’ll assign to it.

### holdFOCapacity(holdFOCapacityInput)

Hold fulfillment order capacity at a location. Holding capacity at a location reserves a space for a fulfillment order that you’ll assign to it.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.HoldFOCapacityOutputRepresentation holdFOCapacity(ConnectApi.HoldFOCapacityInputRepresentation holdFOCapacityInput)

#### Parameters

holdFOCapacityInput

Type: [ConnectApi.HoldFOCapacityInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_hold_f_o_capacity.htm "Request to hold fulfillment order capacity at one or more locations. Can correspond to one action call.")

The input includes, for each fulfillment order, the location to hold capacity for it.

#### Return Value

Type: [ConnectApi.HoldFOCapacityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_hold_f_o_capacity_output.htm "Response to a request to hold fulfillment order capacity at one or more locations. Can correspond to one action call.")