---
title: "setRequiredResourceIds(requiredResourceIds)"
domain: apex-reference
topic: setrequiredresourceidsrequiredresourceids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.553Z
keywords: [setRequiredResourceIds, requiredResourceIds, Sets, resource, IDs., Signature, Parameters, Return, Value]
---

# setRequiredResourceIds(requiredResourceIds)

> Sets the resource IDs.

### setRequiredResourceIds(requiredResourceIds)

Sets the resource IDs.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setRequiredResourceIds(List<String\> requiredResourceIds)

#### Parameters

requiredResourceIds

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of resource IDs that must be available during the time slot. This is a required field.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")