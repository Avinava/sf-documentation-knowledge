---
title: "ServiceResourceScheduleHandler Methods"
domain: apex-reference
topic: serviceresourceschedulehandler-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.815Z
keywords: [ServiceResourceScheduleHandler, Methods, Passes, required, information, get, unavailable, time, slots, external, system., implementation, method, returns, lxscheduler.ServiceResourceSchedule, class., getUnavailableTimeslots, var1, Signature, Parameters]
---

# ServiceResourceScheduleHandler Methods

> Passes the required information to get unavailable time slots from an
      external system. The implementation of this method returns the lxscheduler.ServiceResourceSchedule class.

## ServiceResourceScheduleHandler Methods

The following are methods for ServiceResourceScheduleHandler.

-   **[getUnavailableTimeslots(var1)](atlas.en-us.apexref.meta/apexref/apex_interface_lxscheduler_ServiceResourceScheduleHandler.htm#apex_lxscheduler_ServiceResourceScheduleHandler_getUnavailableTimeslots)**  
    Passes the required information to get unavailable time slots from an external system. The implementation of this method returns the lxscheduler.ServiceResourceSchedule class.

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