---
title: "setDurationInMinutes(durationInMinutes)"
domain: apex-reference
topic: setdurationinminutesdurationinminutes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.605Z
keywords: [setDurationInMinutes, durationInMinutes, Sets, event, length., Signature, Parameters, Return, Value]
---

# setDurationInMinutes(durationInMinutes)

> Sets the event length.

### setDurationInMinutes(durationInMinutes)

Sets the event length.

#### Signature

public lxscheduler.WorkTypeBuilder setDurationInMinutes(Integer durationInMinutes)

#### Parameters

durationInMinutes

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Contains the event length, in minutes. Required if id is not given.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")