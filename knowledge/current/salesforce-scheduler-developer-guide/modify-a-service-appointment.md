---
title: "Modify a Service Appointment"
domain: salesforce-scheduler-developer-guide
topic: modify-a-service-appointment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.232Z
estimatedTokens: 716
keywords: [Modify, Service, Appointment, Salesforce, Scheduler, APIs, case, explains, how, change, engagement, channel, resource, time, slot]
---

# Modify a Service Appointment

> Use Salesforce Scheduler APIs to modify a service appointment. This use case
   explains how you can change the engagement channel, service resource, time slot, or status of an
   existing appointment. However, you can also modify other details of the appointment in a similar
   fashion. For example, to change the service territory, use the service-territories Connect API.

# Modify a Service Appointment

Use Salesforce Scheduler APIs to modify a service appointment. This use case explains how you can change the engagement channel, service resource, time slot, or status of an existing appointment. However, you can also modify other details of the appointment in a similar fashion. For example, to change the service territory, use the service-territories Connect API.

This topic explains how you can modify an appointment using the custom application that you built for creating appointments.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

For the procedure to be successful, ensure that each unavailable resource marks themselves as absent in Salesforce Scheduler. Otherwise, the API request to retrieve the list of service resources continues to include the resources that are currently unavailable or absent.

These steps provide a high-level overview of how you can let users choose a different engagement channel type, service resource, or time slot for an existing service appointment.

![A representation of the modify service appointment flow.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fflow_modify_an_appointment.png&folder=salesforce_scheduler_developer_guide)

1.  [Authenticate with a Connected App](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_scheduler_api_auth.htm)
    The OAuth access token authentication is the most secure way to authenticate SOAP and REST API calls. Before you use Salesforce Scheduler for API-based integration, authenticate the API calls using OAuth.
2.  [Get Service Appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_get_service_appointments.htm)
    A service appointment represents an appointment booked through Salesforce Scheduler.
3.  [Get Service Appointment Details](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_get_service_appointment_details.htm)
    A service appointment represents an appointment booked through Salesforce Scheduler.
4.  [Change Appointment Details](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_change_appointment_details.htm)
    This section explains how you can show either the engagement channel types, service resources, or time slots page based on what the user chooses to change for the appointment.
5.  [Update Service Appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_update_service_appointment.htm)
    Show your users the details of a service appointment—an appointment modified through Salesforce Scheduler—so that users can review and update the appointment.

## Related Topics

- Authenticate with a Connected App (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_scheduler_api_auth.htm)
- Get Service Appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_get_service_appointments.htm)
- Get Service Appointment Details (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_get_service_appointment_details.htm)
- Change Appointment Details (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_change_appointment_details.htm)
- Update Service Appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_update_service_appointment.htm)
