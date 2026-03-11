---
title: "updateActivationTarget(activationTargetId,
    input)"
domain: apex-reference
topic: updateactivationtargetactivationtargetid-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.989Z
keywords: [updateActivationTarget, activationTargetId, input, Update, activation, target., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateActivationTarget(activationTargetId,
    input)

> Update an activation target.

### updateActivationTarget(activationTargetId, input)

Update an activation target.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActivationTarget updateActivationTarget(String activationTargetId, ConnectApi.ActivationTargetInput input)

#### Parameters

activationTargetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the activation target.

input

Type: [ConnectApi.ActivationTargetInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_target.htm "Input details for the activation target.")

Input details for the activation target.

#### Return Value

Type: [ConnectApi.ActivationTarget](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_target.htm "Represents an activation target.")