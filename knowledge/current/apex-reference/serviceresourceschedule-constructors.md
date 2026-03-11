---
title: "ServiceResourceSchedule Constructors"
domain: apex-reference
topic: serviceresourceschedule-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.586Z
keywords: [ServiceResourceSchedule, Constructors, Creates, new, instance, lxscheduler.ServiceResourceSchedule, class., serviceResourceId, unavailableTimeslots, Signature, Parameters]
---

# ServiceResourceSchedule Constructors

> Creates a new instance of lxscheduler.ServiceResourceSchedule
      class.

## ServiceResourceSchedule Constructors

The following are constructors for ServiceResourceSchedule.

-   **[ServiceResourceSchedule(serviceResourceId, unavailableTimeslots)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm#apex_lxscheduler_ServiceResourceSchedule_ctor)**  
    Creates a new instance of lxscheduler.ServiceResourceSchedule class.

### ServiceResourceSchedule(serviceResourceId, unavailableTimeslots)

Creates a new instance of lxscheduler.ServiceResourceSchedule class.

#### Signature

public ServiceResourceSchedule(String serviceResourceId, Set<lxscheduler.UnavailableTimeslot> unavailableTimeslots)

#### Parameters

serviceResourceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Record ID of the service resource.

unavailableTimeslots

Type: Set<lxscheduler.UnavailableTimeslot>

An instance of lxscheduler.UnavailableTimeslot class.