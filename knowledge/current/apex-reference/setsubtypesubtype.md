---
title: "setSubType(subType)"
domain: apex-reference
topic: setsubtypesubtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.250Z
keywords: [setSubType, subType, Sets, SubType, field, ImpositionResponse, class., Signature, Parameters, Return, Value]
---

# setSubType(subType)

> Sets the SubType field of the ImpositionResponse class.

### setSubType(subType)

Sets the SubType field of the ImpositionResponse class.

#### Signature

global void setSubType(String subType)

#### Parameters

subType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Many tax calculation organizations use types and subtypes to categorize their tax imposition procedures. If the tax engine you use follows this process, set the subtype with this parameter.

#### Return Value

Type: void