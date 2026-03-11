---
title: "createCustomAction(type, name)"
domain: apex-reference
topic: createcustomactiontype-name
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.764Z
keywords: [createCustomAction, type, name, Creates, wrapper, custom, invocable, action., Signature, Parameters, Return, Value]
---

# createCustomAction(type, name)

> Creates a wrapper for a custom invocable action.

### createCustomAction(type, name)

Creates a wrapper for a custom invocable action.

#### Signature

public static Invocable.Action createCustomAction(String type, String name)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of invocable action.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name for the custom invocable action.

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")