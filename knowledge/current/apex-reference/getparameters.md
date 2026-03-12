---
title: "getParameters()"
domain: apex-reference
topic: getparameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.239Z
estimatedTokens: 241
keywords: [getParameters, map, query, PageReference, both, POST, GET, included., key, contains, name, while, parameter., Usage]
---

# getParameters()

> Returns a map of the query string parameters for the PageReference; both POST and GET
        parameters are included. The key string contains the name of the parameter, while the value
        string contains the value of the parameter.

# getParameters()

Returns a map of the query string parameters for the PageReference; both POST and GET parameters are included. The key string contains the name of the parameter, while the value string contains the value of the parameter.

## Signature

public Map<String, String\> getParameters()

## Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

## Usage

This map can be modified and remains in scope for the PageReference object. For instance, you could do:

```

```

Parameter keys are case-insensitive. For example:

```

```

## Code Examples

```
PageReference.getParameters().put('id', myID);
```

```apex
System.assert(
    ApexPages.currentPage().getParameters().get('myParamName') ==
    ApexPages.currentPage().getParameters().get('myparamname'));
```

## Related Topics

- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
