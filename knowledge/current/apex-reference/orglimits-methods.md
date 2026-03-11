---
title: "OrgLimits Methods"
domain: apex-reference
topic: orglimits-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.495Z
keywords: [OrgLimits, Methods, Returns, list, OrgLimit, instances., getAll, Signature, Return, Value, getMap, Example]
---

# OrgLimits Methods

> Returns a list of OrgLimit instances.

## OrgLimits Methods

The following are methods for OrgLimits.

-   **[getAll()](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimits.htm#apex_System_OrgLimits_getAll)**  
    Returns a list of OrgLimit instances.
-   **[getMap()](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimits.htm#apex_System_OrgLimits_getMap)**  
    Returns a map of all OrgLimit instances with the limit name as key.

### getAll()

Returns a list of OrgLimit instances.

#### Signature

public static List<System.OrgLimit> getAll()

#### Return Value

Type: List<[System.OrgLimit](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_class_System_OrgLimit "Contains methods that provide the name, maximum value, and current value of an org limit.")\>

### getMap()

Returns a map of all OrgLimit instances with the limit name as key.

#### Signature

public static Map<String,System.OrgLimit> getMap()

#### Return Value

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[System.OrgLimit](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_class_System_OrgLimit "Contains methods that provide the name, maximum value, and current value of an org limit.")\>

#### Example

```

```