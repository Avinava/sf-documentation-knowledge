---
title: "ServiceResourceSchedule Class"
domain: apex-reference
topic: serviceresourceschedule-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.689Z
estimatedTokens: 711
namespace: LxScheduler
keywords: [ServiceResourceSchedule, pass, results, implemented, Apex, ServiceResourceScheduleHandler, methods., serviceResourceId, unavailableTimeslots]
---

# ServiceResourceSchedule Class

> Use this class to pass results from your implemented Apex class to the
      ServiceResourceScheduleHandler interface methods.

**Namespace:** `LxScheduler`

# ServiceResourceSchedule Class

Use this class to pass results from your implemented Apex class to the ServiceResourceScheduleHandler interface methods.

## Namespace

[LxScheduler](atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm "The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars.")

-   **[ServiceResourceSchedule Constructors](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm#apex_lxscheduler_ServiceResourceSchedule_constructors)**

-   **[ServiceResourceSchedule Properties](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm#apex_lxscheduler_ServiceResourceSchedule_properties)**


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

## ServiceResourceSchedule Properties

The following are properties for ServiceResourceSchedule.

-   **[serviceResourceId](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm#apex_lxscheduler_ServiceResourceSchedule_serviceResourceId)**
    Record ID of the service resource.
-   **[unavailableTimeslots](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm#apex_lxscheduler_ServiceResourceSchedule_unavailableTimeslots)**
    An instance of lxscheduler.UnavailableTimeslot class.

### serviceResourceId

Record ID of the service resource.

#### Signature

public String serviceResourceId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### unavailableTimeslots

An instance of lxscheduler.UnavailableTimeslot class.

#### Signature

public Set<lxscheduler.UnavailableTimeslot> unavailableTimeslots {get; set;}

#### Property Value

Type: Set<lxscheduler.UnavailableTimeslot>

## Related Topics

- LxScheduler (atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm)
- ServiceResourceSchedule Constructors (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm)
- ServiceResourceSchedule Properties (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm)
- ServiceResourceSchedule(serviceResourceId, unavailableTimeslots) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- serviceResourceId (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm)
- unavailableTimeslots (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm)
