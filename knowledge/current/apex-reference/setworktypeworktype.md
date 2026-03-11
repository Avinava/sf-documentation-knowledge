---
title: "setWorkType(workType)"
domain: apex-reference
topic: setworktypeworktype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.553Z
keywords: [setWorkType, workType, Sets, type, work, performed., Signature, Parameters, Return, Value]
---

# setWorkType(workType)

> Sets the type of work to be performed.

### setWorkType(workType)

Sets the type of work to be performed.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setWorkType(lxscheduler.WorkType workType)

#### Parameters

workType

Type: [lxscheduler.WorkType](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkType.htm#apex_class_lxscheduler_WorkType "Contains information about the type of work to be performed.")

This method takes input as an instance of the lxscheduler.WorkType class. Build the instance of the input class using the lxscheduler.WorkTypeBuilder class.

Required if workTypeGroupId is not given.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")