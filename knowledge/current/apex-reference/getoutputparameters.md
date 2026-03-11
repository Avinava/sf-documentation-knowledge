---
title: "getOutputParameters()"
domain: apex-reference
topic: getoutputparameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.777Z
keywords: [getOutputParameters, Gets, list, parameter, values, returned, invocable, action., method, returns, contains, result, invocation, map, key, name, output, parameter., Signature, Return]
---

# getOutputParameters()

> Gets a list of the parameter values returned by an invocable action.
      This method returns a list that contains the result for each invocation of an action. Each map
      in the list contains a key for the name of each output parameter.

### getOutputParameters()

Gets a list of the parameter values returned by an invocable action. This method returns a list that contains the result for each invocation of an action. Each map in the list contains a key for the name of each output parameter.

#### Signature

public Map<String,Object\> getOutputParameters()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>