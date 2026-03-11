---
title: "setId(id)"
domain: apex-reference
topic: setidid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.605Z
keywords: [setId, Sets, work, type, specified, ID., Signature, Parameters, Return, Value]
---

# setId(id)

> Sets the ID of the work type to the specified ID.

### setId(id)

Sets the ID of the work type to the specified ID.

#### Signature

public lxscheduler.WorkTypeBuilder setId(String id)

#### Parameters

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the work type. Required if you're using shifts or if durationInMinutes is not given.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")