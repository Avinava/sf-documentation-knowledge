---
title: "updateActivation(activationId, input)"
domain: apex-reference
topic: updateactivationactivationid-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.002Z
keywords: [updateActivation, activationId, input, Update, activation, ID., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateActivation(activationId, input)

> Update an activation by ID.

### updateActivation(activationId, input)

Update an activation by ID.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Activation updateActivation(String activationId, ConnectApi.ActivationDefinitionInput input)

#### Parameters

activationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier (ID) or developer name of a specific activation target.

input

Type: [ConnectApi.ActivationDefinitionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_definition.htm "Represents the activation definition input.")

Input representation for an activation.

#### Return Value

Type: [ConnectApi.Activation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation.htm "Represents an activation output.")