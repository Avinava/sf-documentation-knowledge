---
title: "Callable Methods"
domain: apex-reference
topic: callable-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.686Z
keywords: [Callable, Methods, Provides, functionality, classes, packages, utilize, build, upon., call, action, args, Signature, Parameters, Return, Value]
---

# Callable Methods

> Provides functionality that other classes or packages can utilize and
      build upon.

## Callable Methods

The following are methods for Callable.

-   **[call(action, args)](atlas.en-us.apexref.meta/apexref/apex_interface_System_Callable.htm#apex_System_Callable_call)**  
    Provides functionality that other classes or packages can utilize and build upon.

### call(action, args)

Provides functionality that other classes or packages can utilize and build upon.

#### Signature

public Object call(String action, Map<String,Object\> args)

#### Parameters

action

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The behavior for the method to exhibit.

args

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>

Arguments to be used by the specified action.

#### Return Value

Type: Object

The result of the method invocation.