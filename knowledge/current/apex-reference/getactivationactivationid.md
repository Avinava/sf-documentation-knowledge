---
title: "getActivation(activationId)"
domain: apex-reference
topic: getactivationactivationid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.002Z
keywords: [getActivation, activationId, Get, activation, ID., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getActivation(activationId)

> Get an activation by ID.

### getActivation(activationId)

Get an activation by ID.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Activation getActivation(String activationId)

#### Parameters

activationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier (ID) or developer name of a specific activation target.

#### Return Value

Type: [ConnectApi.Activation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation.htm "Represents an activation output.")