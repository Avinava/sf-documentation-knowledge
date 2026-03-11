---
title: "setBlockTimeBeforeAppointmentInMinutes(blockTimeBeforeAppointmentInMinutes)"
domain: apex-reference
topic: setblocktimebeforeappointmentinminutesblocktimebeforeappointmentinminutes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.604Z
keywords: [setBlockTimeBeforeAppointmentInMinutes, blockTimeBeforeAppointmentInMinutes, Sets, time, period, minutes., Signature, Parameters, Return, Value]
---

# setBlockTimeBeforeAppointmentInMinutes(blockTimeBeforeAppointmentInMinutes)

> Sets the time period, in minutes.

### setBlockTimeBeforeAppointmentInMinutes(blockTimeBeforeAppointmentInMinutes)

Sets the time period, in minutes.

#### Signature

public lxscheduler.WorkTypeBuilder setBlockTimeBeforeAppointmentInMinutes(Integer blockTimeBeforeAppointmentInMinutes)

#### Parameters

blockTimeBeforeAppointmentInMinutes

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The time period before the appointment is considered as unavailable.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")