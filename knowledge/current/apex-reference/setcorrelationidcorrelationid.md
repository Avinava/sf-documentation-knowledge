---
title: "setCorrelationId(correlationId)"
domain: apex-reference
topic: setcorrelationidcorrelationid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.553Z
keywords: [setCorrelationId, correlationId, Sets, correlation, ID., Signature, Parameters, Return, Value]
---

# setCorrelationId(correlationId)

> Sets the correlation ID.

### setCorrelationId(correlationId)

Sets the correlation ID.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setCorrelationId(String correlationId)

#### Parameters

correlationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID to pass custom information to the ServiceResourceScheduleHandler Apex interface. For example, you can use the correlation ID to identify the app, website, or any other external system that calls this Apex interface implementation. If you don’t pass a custom value, a randomly generated identifier is passed. Available in API version 53.0 and later.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")