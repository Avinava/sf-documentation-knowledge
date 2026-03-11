---
title: "createCustomAction(type, namespace, name,
    version)"
domain: apex-reference
topic: createcustomactiontype-namespace-name-version
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.764Z
keywords: [createCustomAction, type, namespace, name, version, Creates, wrapper, specified, custom, invocable, action, package, namespace., Signature, Parameters, Return, Value]
---

# createCustomAction(type, namespace, name,
    version)

> Creates a wrapper for the specified version of a custom invocable
      action in a specified package namespace.

### createCustomAction(type, namespace, name, version)

Creates a wrapper for the specified version of a custom invocable action in a specified package namespace.

#### Signature

public static Invocable.Action createCustomAction(String type, String namespace, String name)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of invocable action.

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Namespace where the invocable action is located.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name for the custom invocable action.

version

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Version of the invocable action.

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")