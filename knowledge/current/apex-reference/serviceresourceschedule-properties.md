---
title: "ServiceResourceSchedule Properties"
domain: apex-reference
topic: serviceresourceschedule-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.586Z
keywords: [ServiceResourceSchedule, Properties, Record, service, resource., serviceResourceId, Signature, Property, Value, unavailableTimeslots]
---

# ServiceResourceSchedule Properties

> Record ID of the service resource.

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