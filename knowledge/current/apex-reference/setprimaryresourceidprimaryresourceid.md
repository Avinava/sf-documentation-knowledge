---
title: "setPrimaryResourceId(primaryResourceId)"
domain: apex-reference
topic: setprimaryresourceidprimaryresourceid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.553Z
keywords: [setPrimaryResourceId, primaryResourceId, Sets, primary, resource., Signature, Parameters, Return, Value]
---

# setPrimaryResourceId(primaryResourceId)

> Sets the ID of the primary resource.

### setPrimaryResourceId(primaryResourceId)

Sets the ID of the primary resource.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setPrimaryResourceId(String primaryResourceId)

#### Parameters

primaryResourceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the primary resource in multi-resource scheduling. Required only when multi-resource scheduling is enabled. Available in API version 48.0 and later.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")