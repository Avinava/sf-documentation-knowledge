---
title: "setInvocationParameter(parameterName,
      parameterValue)"
domain: apex-reference
topic: setinvocationparameterparametername-parametervalue
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.764Z
keywords: [setInvocationParameter, parameterName, parameterValue, Sets, value, invocable, action, parameter., Signature, Parameters, Return, Value]
---

# setInvocationParameter(parameterName,
      parameterValue)

> Sets a value for an invocable action parameter.

### setInvocationParameter(parameterName, parameterValue)

Sets a value for an invocable action parameter.

#### Signature

public Invocable.Action setInvocationParameter(String parameterName, Object parameterValue)

#### Parameters

parameterName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the invocable action parameter to set.

parameterValue

Type: Object

Value to set the invocable action parameter to.

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")