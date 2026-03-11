---
title: "createStandardAction(type, version)"
domain: apex-reference
topic: createstandardactiontype-version
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.764Z
keywords: [createStandardAction, type, version, Creates, wrapper, standard, invocable, action., Signature, Parameters, Return, Value]
---

# createStandardAction(type, version)

> Creates a wrapper for a standard invocable action.

### createStandardAction(type, version)

Creates a wrapper for a standard invocable action.

#### Signature

public static Invocable.Action createStandardAction(String type)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of invocable action.

version

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Version of the invocable action.

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")