---
title: "setAccountId(accountId)"
domain: apex-reference
topic: setaccountidaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.553Z
keywords: [setAccountId, accountId, Sets, associated, account, which, want, create, appointments., Signature, Parameters, Return, Value]
---

# setAccountId(accountId)

> Sets the ID of the associated account for which you want to create
      appointments.

### setAccountId(accountId)

Sets the ID of the associated account for which you want to create appointments.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setAccountId(String accountId)

#### Parameters

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the associated account.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")