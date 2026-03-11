---
title: "setResourceLimitApptDistribution(resourceLimitApptDistribution)"
domain: apex-reference
topic: setresourcelimitapptdistributionresourcelimitapptdistribution
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.533Z
keywords: [setResourceLimitApptDistribution, resourceLimitApptDistribution, Sets, number, service, resources, show, during, appointment, scheduling., Signature, Parameters, Return, Value]
---

# setResourceLimitApptDistribution(resourceLimitApptDistribution)

> Sets the number of service resources to show during appointment
      scheduling.

### setResourceLimitApptDistribution(resourceLimitApptDistribution)

Sets the number of service resources to show during appointment scheduling.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setResourceLimitApptDistribution(Integer resourceLimitApptDistribution)

#### Parameters

resourceLimitApptDistribution

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specify the maximum number of service resources that you want to show during appointment scheduling when appointment distribution is enabled. Available in API version 53.0 and later.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")