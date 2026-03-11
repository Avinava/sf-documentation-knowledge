---
title: "setInvocations(invocations)"
domain: apex-reference
topic: setinvocationsinvocations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.764Z
keywords: [setInvocations, invocations, Initializes, action, pre-existing, list, invocations., Signature, Parameters, Return, Value]
---

# setInvocations(invocations)

> Initializes the invocations for an action from a pre-existing list of
      invocations.

### setInvocations(invocations)

Initializes the invocations for an action from a pre-existing list of invocations.

#### Signature

public Invocable.Action setInvocations(List<Map<String,ANY>> invocations)

#### Parameters

invocations

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),ANY>>

List of invocations for the invocable action.

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")