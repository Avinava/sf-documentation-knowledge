---
title: "Create a Concurrent Appointment"
domain: salesforce-scheduler-developer-guide
topic: create-a-concurrent-appointment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.239Z
estimatedTokens: 1179
keywords: [Concurrent, Appointment, case, explains, how, build, scheduling, application, Salesforce, Scheduler, APIs]
---

# Create a Concurrent Appointment

> This use case explains how to build a concurrent appointment scheduling
   application using Salesforce Scheduler APIs.

# Create a Concurrent Appointment

This use case explains how to build a concurrent appointment scheduling application using Salesforce Scheduler APIs.

Let’s think of a situation where you need to schedule multiple appointments within the same time slot. For example, a doctor’s office can let several patients book a Monday 1:00 PM to 3:00 PM appointment. So what can you do in this “case”?

Salesforce Scheduler can help you in this “case”. Let’s drill down on what all we need to accomplish this.

Salesforce Scheduler provides you with the concurrent scheduling feature that makes it easy to schedule multiple service appointments in the same time slot. An event is created for each service appointment.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

A concurrent time slot can have a minimum of 2 and a maximum of 1000 appointments.

These steps provide a high-level overview of how you can build a concurrent scheduling app, which is explained in detail in the following sections.![A representation of the create concurrent scheduling flow.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fflow_create_concurrent_scheduling.png&folder=salesforce_scheduler_developer_guide)

Before you can use the scheduler developer resources to build the concurrent scheduling app, set up Salesforce Scheduler for your organization. For more information, see [Set Up Salesforce Scheduler](https://help.salesforce.com/articleView?id=platform.ls_set_up.htm&type=5&language=en_US "HTML (New Window)").

-   **[Enable and Configure Concurrent Scheduling](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_considerations_for_concurrent_appointment.htm)**
    You must enable concurrent scheduling to let users schedule multiple service appointments in the same time slot. Also, there are some things to keep in mind when you implement concurrent scheduling.
-   **[Assign Concurrent Operating Hours to Service Territory Members](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_assign_operating_hours_to_stm.htm)**
    Concurrent time slots are applicable only to service territory members. Assign operating hours to a service territory member using the Operating Hours field on the respective record page.
-   **[Authenticate with a Connected App](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_scheduler_api_auth.htm)**
    The first step in an API-based integration is to connect to Salesforce and get an access token using OAuth. OAuth access token authentication is the most secure way to authenticate SOAP and REST API calls.
-   **[Get Work Type Groups](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_get_work_type_groups.htm)**
    After authentication, you need to show the work type groups for the user to select. A work type group represents a general appointment category or topic, such as a home loan or investment.
-   **[Get Service Territories](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_get_service_territories.htm)**
    Get a service territory based on the work type group that is selected in the previous step. A service territory represents a branch or office location where your service resources (appointment attendees) operate from or meet customers.
-   **[Get Work Types](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_get_work_types.htm)**
    Get the correct work type record that represents the work type group and service territory that are selected in the previous step.
-   **[Get Appointment Candidates](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_get_appointment_candidates.htm)**
    Get a list of service resources based on the work type group or work type, and service territory that are selected in the previous step. A service resource represents an employee from your organization, such as a loan officer, investment advisor, doctor, nurse practitioner, or retail store specialist, who attends appointments with clients.
-   **[Create Service Appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_create_single_resource_appointment.htm)**
    The last step in the concurrent scheduling application is to show the service appointment details for the user to review and create the appointment. A service appointment represents an appointment booked through Salesforce Scheduler.

## Related Topics

- Enable and Configure Concurrent Scheduling (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_considerations_for_concurrent_appointment.htm)
- Assign Concurrent Operating Hours to Service Territory Members (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_assign_operating_hours_to_stm.htm)
- Authenticate with a Connected App (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_scheduler_api_auth.htm)
- Get Work Type Groups (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_get_work_type_groups.htm)
- Get Service Territories (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_get_service_territories.htm)
- Get Work Types (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_get_work_types.htm)
- Get Appointment Candidates (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_get_appointment_candidates.htm)
- Create Service Appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc6_create_single_resource_appointment.htm)
