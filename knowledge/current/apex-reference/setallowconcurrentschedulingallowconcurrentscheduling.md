---
title: "setAllowConcurrentScheduling(allowConcurrentScheduling)"
domain: apex-reference
topic: setallowconcurrentschedulingallowconcurrentscheduling
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.553Z
keywords: [setAllowConcurrentScheduling, allowConcurrentScheduling, Allows, scheduling, concurrent, appointments., Signature, Parameters, Return, Value]
---

# setAllowConcurrentScheduling(allowConcurrentScheduling)

> Allows the scheduling of concurrent appointments.

### setAllowConcurrentScheduling(allowConcurrentScheduling)

Allows the scheduling of concurrent appointments.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setAllowConcurrentScheduling(Boolean allowConcurrentScheduling)

#### Parameters

allowConcurrentScheduling

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true, allows scheduling of concurrent appointments in a time slot. If false, concurrent appointments are not allowed. The default is false. Available in API version 47.0 and later.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")