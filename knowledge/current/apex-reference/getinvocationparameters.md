---
title: "getInvocationParameters()"
domain: apex-reference
topic: getinvocationparameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.777Z
keywords: [getInvocationParameters, Gets, list, parameter, values, set, invocable, action., method, returns, contains, input, invocation, map, key, name, parameter., Signature, Return, Value]
---

# getInvocationParameters()

> Gets a list of the parameter values set for an invocable action. This
      method returns a list that contains the input parameter values for each invocation of an
      action. Each map in the list contains a key for the name of each input
    parameter.

### getInvocationParameters()

Gets a list of the parameter values set for an invocable action. This method returns a list that contains the input parameter values for each invocation of an action. Each map in the list contains a key for the name of each input parameter.

#### Signature

public Map<String,Object\> getInvocationParameters()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>