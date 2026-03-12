---
title: "Schedule Anonymous Appointments with Appointment Distribution"
domain: salesforce-scheduler-developer-guide
topic: schedule-anonymous-appointments-with-appointment-distribution
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.245Z
estimatedTokens: 934
keywords: [Schedule, Anonymous, Appointments, Appointment, Distribution, Build, scheduling, app, Salesforce, Scheduler, APIs, book, service, via, phone]
---

# Schedule Anonymous Appointments with Appointment Distribution

> Build a scheduling app by using Salesforce Scheduler APIs to book anonymous service
   appointments via phone calls and video conferences within a large, virtual service territory. For
   territories with too many associated resources, use Appointment Distribution to show only the
   least consumed resources.

# Schedule Anonymous Appointments with Appointment Distribution

Build a scheduling app by using Salesforce Scheduler APIs to book anonymous service appointments via phone calls and video conferences within a large, virtual service territory. For territories with too many associated resources, use Appointment Distribution to show only the least consumed resources.

## Before you begin:

Before building the app, set up Salesforce Scheduler for your org. For more information, see [Set Up Salesforce Scheduler](https://help.salesforce.com/articleView?id=platform.ls_set_up.htm&type=5&language=en_US "HTML (New Window)").

Appointment distribution helps to maintain balance and avoid situations where one resource is overloaded with all the meetings while others' calendars remain free.

## About this task:

Here’s a high-level overview of how to create an app to schedule anonymous appointments.

![A representation of the create service appointment flow.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fflow_create_appdist_anonymous_booking.png&folder=salesforce_scheduler_developer_guide)

For more information on modifying Appointment Distribution, see *Modify an Anonymous Appointment*.

1.  [Create a Service Territory](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_create_new_territory.htm)
    Create a large, virtual service territory using Salesforce Scheduler and add service resources. Set the new territory as the secondary territory for service resources. You can assign a relatively large number of service resources to the territory. Use the territory exclusively for virtual appointments via phone calls and video conferences.
2.  [Assign Service Territory to Work Types](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_assign_worktype.htm)
    To use the new virtual service territory, assign the territory to work types in Salesforce Scheduler.
3.  [Assign Service Resources](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_assign_resources.htm)
    To choose appointment candidates from the new virtual service territory, assign service resources to the territory in Salesforce Scheduler. Set this new territory as the secondary territory for each service resource.
4.  [Enable Appointment Distribution](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_enable_appointment_distribution.htm)
    Make resource selection for territories with relatively large numbers of resources easier by setting Appointment Distribution to show only a short list of least-consumed resources from your resource pool.
5.  [Authenticate API Calls with Salesforce Scheduler APIs](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_scheduler_api_auth.htm)
    Use OAuth—the most secure SOAP and REST API call authentication method—to get an access token.
6.  [Get Appointment Time Slots](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_get_appointment_slot.htm)
    A time slot is a period in a day when an appointment can be scheduled. Use the available-territory-slots Connect API to fetch the consolidated availability of each service resource within the selected territory.
7.  [Create Service Appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_create_anonymous_appointment.htm)
    A service appointment represents an appointment booked through Salesforce Scheduler. To create an appointment, make a POST request on the service-appointments Connect API.

## Related Topics

- Create a Service Territory (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_create_new_territory.htm)
- Assign Service Territory to Work Types (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_assign_worktype.htm)
- Assign Service Resources (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_assign_resources.htm)
- Enable Appointment Distribution (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_enable_appointment_distribution.htm)
- Authenticate API Calls with Salesforce Scheduler APIs (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_scheduler_api_auth.htm)
- Get Appointment Time Slots (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_get_appointment_slot.htm)
- Create Service Appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_create_anonymous_appointment.htm)
