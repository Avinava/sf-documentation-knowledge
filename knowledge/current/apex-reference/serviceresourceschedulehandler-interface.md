---
title: "ServiceResourceScheduleHandler Interface"
domain: apex-reference
topic: serviceresourceschedulehandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.815Z
keywords: [ServiceResourceScheduleHandler, Interface, Passes, required, information, get, unavailable, time, slots, external, system., implementation, method, returns, lxscheduler.ServiceResourceSchedule, class., getUnavailableTimeslots, var1, Signature, Parameters]
---

# ServiceResourceScheduleHandler Interface

> Passes the required information to get unavailable time slots from an
      external system. The implementation of this method returns the lxscheduler.ServiceResourceSchedule class.

### getUnavailableTimeslots(var1)

Passes the required information to get unavailable time slots from an external system. The implementation of this method returns the lxscheduler.ServiceResourceSchedule class.

#### Signature

public List<lxscheduler.ServiceResourceSchedule> getUnavailableTimeslots(lxscheduler.ServiceAppointmentRequestInfo var1)

#### Parameters

var1

Type: lxscheduler.ServiceAppointmentRequestInfo

Represents the list of parameters that are passed to the ServiceResourceScheduleHandler interface.

#### Return Value

Type: List<lxscheduler.ServiceResourceSchedule>