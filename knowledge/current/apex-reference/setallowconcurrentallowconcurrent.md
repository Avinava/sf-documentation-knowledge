---
title: "setAllowConcurrent(allowConcurrent)"
domain: apex-reference
topic: setallowconcurrentallowconcurrent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.533Z
keywords: [setAllowConcurrent, allowConcurrent, Allows, scheduling, concurrent, appointments., Signature, Parameters, Return, Value]
---

# setAllowConcurrent(allowConcurrent)

> Allows the scheduling of concurrent appointments.

### setAllowConcurrent(allowConcurrent)

Allows the scheduling of concurrent appointments.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setAllowConcurrent(Boolean allowConcurrent)

#### Parameters

allowConcurrent

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true, allows scheduling of concurrent appointments in a time slot. The default is false.

Available in API version 47.0 and later.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")