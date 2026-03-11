---
title: "setSchedulingPolicyId(schedulingPolicyId)"
domain: apex-reference
topic: setschedulingpolicyidschedulingpolicyid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.553Z
keywords: [setSchedulingPolicyId, schedulingPolicyId, Sets, AppointmentSchedulingPolicy, object., Signature, Parameters, Return, Value]
---

# setSchedulingPolicyId(schedulingPolicyId)

> Sets the ID of the AppointmentSchedulingPolicy object.

### setSchedulingPolicyId(schedulingPolicyId)

Sets the ID of the AppointmentSchedulingPolicy object.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setSchedulingPolicyId(String schedulingPolicyId)

#### Parameters

schedulingPolicyId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If no scheduling policy is passed in the request body, the default configurations are used.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")