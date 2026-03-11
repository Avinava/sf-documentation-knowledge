---
title: "getFOCapacityValues(getFOCapacityValuesInput)"
domain: apex-reference
topic: getfocapacityvaluesgetfocapacityvaluesinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.745Z
keywords: [getFOCapacityValues, getFOCapacityValuesInput, Get, information, current, fulfillment, order, capacity, locations., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getFOCapacityValues(getFOCapacityValuesInput)

> Get information about the current fulfillment order capacity of one
      or more locations.

### getFOCapacityValues(getFOCapacityValuesInput)

Get information about the current fulfillment order capacity of one or more locations.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.GetFOCapacityValuesOutputRepresentation getFOCapacityValues(ConnectApi.GetFOCapacityValuesRequestInputRepresentation getFOCapacityValuesInput)

#### Parameters

getFOCapacityValuesInput

Type: [ConnectApi.GetFOCapacityValuesRequestInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_get_f_o_capacity_values_request.htm "Locations to get fulfillment order capacity information for.")

Locations to get fulfillment order capacity information about.

#### Return Value

Type: [ConnectApi.GetFOCapacityValuesOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_get_f_o_capacity_values_output.htm "Response to a request for fulfillment order capacity values for one or more locations.")