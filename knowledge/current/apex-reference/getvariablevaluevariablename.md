---
title: "getVariableValue(variableName)"
domain: apex-reference
topic: getvariablevaluevariablename
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.462Z
keywords: [getVariableValue, variableName, Returns, value, specified, flow, variable., variable, embedded, Visualforce, page, separate, called, subflow, element., Signature, Parameters, Return, Value, Usage]
---

# getVariableValue(variableName)

> Returns the value of the specified flow variable. The flow
variable can be in the flow embedded in the Visualforce page, or in a separate flow that is called by a subflow element.

### getVariableValue(variableName)

Returns the value of the specified flow variable. The flow variable can be in the flow embedded in the Visualforce page, or in a separate flow that is called by a subflow element.

#### Signature

public Object getVariableValue(String variableName)

#### Parameters

variableName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the unique name of the flow variable.

#### Return Value

Type: Object

#### Usage

The returned variable value comes from whichever flow the interview is running. If the specified variable can't be found in that flow, the method returns null.

This method checks for the existence of the variable at run time only, not at compile time.