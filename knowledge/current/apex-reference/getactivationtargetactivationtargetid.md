---
title: "getActivationTarget(activationTargetId)"
domain: apex-reference
topic: getactivationtargetactivationtargetid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.989Z
keywords: [getActivationTarget, activationTargetId, Get, activation, target, ID., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getActivationTarget(activationTargetId)

> Get an activation target by ID.

### getActivationTarget(activationTargetId)

Get an activation target by ID.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActivationTarget getActivationTarget(String activationTargetId)

#### Parameters

activationTargetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the activation target.

#### Return Value

Type: [ConnectApi.ActivationTarget](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_target.htm "Represents an activation target.")