---
title: "setStartTime(startTime)"
domain: apex-reference
topic: setstarttimestarttime
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.553Z
keywords: [setStartTime, startTime, Sets, scheduling, start, time., Signature, Parameters, Usage, Return, Value]
---

# setStartTime(startTime)

> Sets the scheduling start time.

### setStartTime(startTime)

Sets the scheduling start time.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setStartTime(String startTime)

#### Parameters

startTime

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The earliest time that a time slot can begin (inclusive). Defaults to the current time of the request, if empty.

#### Usage

The specified string should use the standard date format “\['yyyy-MM-dd\\’T\\’HH:mm:ssZ'\]” in the local time zone. Defaults to the user’s time zone.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")