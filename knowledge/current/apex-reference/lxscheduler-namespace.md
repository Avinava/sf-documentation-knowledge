---
title: "LxScheduler Namespace"
domain: apex-reference
topic: lxscheduler-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.704Z
estimatedTokens: 1109
namespace: LxScheduler
keywords: [LxScheduler, provides, classes, integrating, Salesforce, Scheduler, external, calendars.]
---

# LxScheduler Namespace

> The LxScheduler namespace provides an interface
    and classes for integrating Salesforce Scheduler with external calendars.

**Namespace:** `LxScheduler`

# LxScheduler Namespace

The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars.

The following are the classes and the interface in the LxScheduler namespace.

-   **[GetAppointmentCandidatesInput Class](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentCandidatesInput.htm#apex_class_lxscheduler_GetAppointmentCandidatesInput)**
    Contains information about the available service resources (appointment candidates) based on work type group and service territories.
-   **[GetAppointmentCandidatesInputBuilder Class](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder.htm#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder)**
    Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.
-   **[GetAppointmentSlotsInput Class](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInput.htm#apex_class_lxscheduler_GetAppointmentSlotsInput)**
    Contains information about the available appointment time slots for a resource based on given work type group and territories.
-   **[GetAppointmentSlotsInputBuilder Class](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder)**
    Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.
-   **[SchedulerResources Class](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_SchedulerResources.htm#apex_class_lxscheduler_SchedulerResources)**
    Contains methods that holds the business logic to get resources availability.
-   **[SkillRequirement Class](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_SkillRequirement.htm#apex_class_lxscheduler_SkillRequirement)**
    Contains information about the set of skills that are required to complete a particular task for a work type.
-   **[SkillRequirementBuilder Class](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_SkillRequirementBuilder.htm#apex_class_lxscheduler_SkillRequirementBuilder)**
    Contains methods to build an instance of the lxscheduler.SkillRequirement class.
-   **[WorkType Class](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkType.htm#apex_class_lxscheduler_WorkType)**
    Contains information about the type of work to be performed.
-   **[WorkTypeBuilder Class](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm#apex_class_lxscheduler_WorkTypeBuilder)**
    Contains methods to build an instance of the lxscheduler.WorkType class.
-   **[ServiceResourceScheduleHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_lxscheduler_ServiceResourceScheduleHandler.htm#apex_interface_lxscheduler_ServiceResourceScheduleHandler)**
    Allows an implementing class to check external calendar events to find already booked time slots for the requested service resources. This interface is part of Salesforce Scheduler.
-   **[ServiceAppointmentRequestInfo Class](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_class_lxscheduler_ServiceAppointmentRequestInfo)**
    Represents the list of parameters that are passed to the ServiceResourceScheduleHandler interface. This class is implemented internally by Apex.
-   **[ServiceResourceInfo Class](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_class_lxscheduler_ServiceResourceInfo)**
    Contains information about a service resource.
-   **[ServiceResourceSchedule Class](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceSchedule.htm#apex_class_lxscheduler_ServiceResourceSchedule)**
    Use this class to pass results from your implemented Apex class to the ServiceResourceScheduleHandler interface methods.
-   **[UnavailableTimeslot Class](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_class_lxscheduler_UnavailableTimeslot)**
    Use this class to pass the unavailable time slots to the lxscheduler.ServiceResourceSchedule class. Timezones that differ across operating hours are handled and results are always returned in UTC.

#### See Also

-   [Apex Interface Implementation Limitations and Error Codes](https://help.salesforce.com/s/articleView?id=platform.ls_ext_cal_integration_troubleshooting.htm&type=5&language=en_US)

## Related Topics

- GetAppointmentCandidatesInput Class (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentCandidatesInput.htm)
- GetAppointmentCandidatesInputBuilder Class (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder.htm)
- GetAppointmentSlotsInput Class (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInput.htm)
- GetAppointmentSlotsInputBuilder Class (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm)
- SchedulerResources Class (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_SchedulerResources.htm)
- SkillRequirement Class (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_SkillRequirement.htm)
- SkillRequirementBuilder Class (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_SkillRequirementBuilder.htm)
- WorkType Class (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkType.htm)
- WorkTypeBuilder Class (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkTypeBuilder.htm)
- ServiceResourceScheduleHandler Interface (atlas.en-us.apexref.meta/apexref/apex_interface_lxscheduler_ServiceResourceScheduleHandler.htm)
