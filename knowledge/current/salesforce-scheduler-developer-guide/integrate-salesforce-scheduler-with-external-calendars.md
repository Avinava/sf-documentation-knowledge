---
title: "Integrate Salesforce Scheduler with External Calendars"
domain: salesforce-scheduler-developer-guide
topic: integrate-salesforce-scheduler-with-external-calendars
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.562Z
estimatedTokens: 583
keywords: [Integrate, Salesforce, Scheduler, External, Calendars, developer, resources, write, appointments, directly, events]
---

# Integrate Salesforce Scheduler with External Calendars

> Salesforce Scheduler provides developer resources that you can use to write
      appointments directly to, and read events from, external calendars.

# Integrate Salesforce Scheduler with External Calendars

Salesforce Scheduler provides developer resources that you can use to write appointments directly to, and read events from, external calendars.

For example, use the LxScheduler.ServiceResourceScheduleHandler Apex interface to write a custom Apex class to read external calendar events. Then, associate the Apex class with Salesforce Scheduler flows or API calls through the Read External System Events scheduling policy rule. To write appointments to external calendars, first enable the Publish Appointments as Platform Events setting, and subscribe to the new AppointmentSchedulingEvent platform event to receive event notifications when users create, modify, or delete appointments. Then, use an API to write the platform events to an external calendar.

The subsequent topics in this section list the provided developer resources for your reference. For detailed instructions about how to use these resources to integrate Salesforce Scheduler with external calendars, see these topics in Salesforce Scheduler help.

-   **[Apex Classes for External Calendars](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/salesforce_scheduler_apex_classes_for_ext_calendars.htm)**
    The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars and determine the availability of service resources.
-   **[Platform Events for External Calendars](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/salesforce_scheduler_platform_events.htm)**
    Use the AppointmentSchedulingEvent to notify subscribers when an appointment schedule is added, updated, or deleted.

#### See Also

-   [Salesforce Help: Check External Calendars to Determine Resource Availability](https://help.salesforce.com/apex/HTViewHelpDoc?id=ls_read_external_calendar.htm&language=en_US "Salesforce Help: Check External Calendars to Determine Resource Availability - HTML (New Window)")

-   [Salesforce Help: Write Salesforce Scheduler Appointments to External Calendars](https://help.salesforce.com/articleView?id=platform.ls_ext_cal_update.htm&type=5&language=en_US "Salesforce Help: Write Salesforce Scheduler Appointments to External Calendars - HTML (New Window)")

## Related Topics

- Apex Classes for External Calendars (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/salesforce_scheduler_apex_classes_for_ext_calendars.htm)
- Platform Events for External Calendars (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/salesforce_scheduler_platform_events.htm)
