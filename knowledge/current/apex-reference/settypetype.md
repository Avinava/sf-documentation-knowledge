---
title: "setType(type)"
domain: apex-reference
topic: settypetype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.250Z
keywords: [setType, type, Sets, Type, field, ImpositionResponse, class., Signature, Parameters, Return, Value]
---

# setType(type)

> Sets the Type field of the ImpositionResponse class.

### setType(type)

Sets the Type field of the ImpositionResponse class.

#### Signature

public void setType(String type)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Many tax calculation organizations use types and subtypes to categorize their tax imposition procedures. If the tax engine you use follows this process, set the type with this parameter.

#### Return Value

Type: void