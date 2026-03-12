---
title: "Apex Classes for External Calendars"
domain: salesforce-scheduler-developer-guide
topic: apex-classes-for-external-calendars
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.541Z
estimatedTokens: 557
keywords: [Apex, Classes, External, Calendars, LxScheduler, integrating, Salesforce, Scheduler, determine, availability, service, resources]
---

# Apex Classes for External Calendars

> The LxScheduler namespace provides an interface and classes for
      integrating Salesforce Scheduler with external calendars and determine the availability of
      service resources.

# Apex Classes for External Calendars

The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars and determine the availability of service resources.

The following are the apex interface and classes available for external calendar within the Salesforce Scheduler platform.

-   **[ServiceResourceScheduleHandler Interface](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_interface_lxscheduler_ServiceResourceScheduleHandler.htm#apex_interface_lxscheduler_ServiceResourceScheduleHandler)**
    Allows an implementing class to check external calendar events to find already booked time slots for the requested service resources. This interface is part of Salesforce Scheduler.
-   **[ServiceAppointmentRequestInfo Class](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm#apex_class_lxscheduler_ServiceAppointmentRequestInfo)**
    Represents the list of parameters that are passed to the ServiceResourceScheduleHandler interface. This class is implemented internally by Apex.
-   **[ServiceResourceInfo Class](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_class_lxscheduler_ServiceResourceInfo)**
    Contains information about a service resource.
-   **[ServiceResourceSchedule Class](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceSchedule.htm#apex_class_lxscheduler_ServiceResourceSchedule)**
    Use this class to pass results from your implemented Apex class to the ServiceResourceScheduleHandler interface methods.
-   **[UnavailableTimeslot Class](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_UnavailableTimeslot.htm#apex_class_lxscheduler_UnavailableTimeslot)**
    Use this class to pass the unavailable time slots to the lxscheduler.ServiceResourceSchedule class. Timezones that differ across operating hours are handled and results are always returned in UTC.

## Related Topics

- ServiceResourceScheduleHandler Interface (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_interface_lxscheduler_ServiceResourceScheduleHandler.htm)
- ServiceAppointmentRequestInfo Class (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceAppointmentRequestInfo.htm)
- ServiceResourceInfo Class (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm)
- ServiceResourceSchedule Class (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceSchedule.htm)
- UnavailableTimeslot Class (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_UnavailableTimeslot.htm)
