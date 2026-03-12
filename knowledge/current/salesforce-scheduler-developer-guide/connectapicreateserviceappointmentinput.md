---
title: "ConnectApi.CreateServiceAppointmentInput"
domain: salesforce-scheduler-developer-guide
topic: connectapicreateserviceappointmentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.231Z
estimatedTokens: 355
keywords: [service, appointment]
---

# ConnectApi.CreateServiceAppointmentInput

> Contains information to create a service appointment.

# ConnectApi.CreateServiceAppointmentInput

Contains information to create a service appointment.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assignedResources | List<ConnectApi.AssignedResourcesInput> | Represents the service resources to be assigned to a service appointment.NoteWhen creating an appointment, use extendedFields to add values to any of the fields, including custom fields, in assignedResources as long as you have edit access to those fields. | Optional | 53.0 |
| lead | ConnectApi.LeadInput | Represents a prospect or lead.NoteRequired to create a service appointment for unauthenticated guest users. | Required if serviceAppointment isn’t provided. | 53.0 |
| schedulingPolicyId | String | The ID of the AppointmentSchedulingPolicy object. If no scheduling policy is passed in the request body, the default configurations are used. The only scheduling policy configuration that is used in determining time slots is the enforcement of account visiting hours. | Optional | 53.0 |
| serviceAppointment | ConnectApi.ServiceAppointmentInput | Represents the service appointment details to book an appointment.NoteWhen creating an appointment, use extendedFields to add values to any of the fields, including custom fields, in assignedResources as long as you have edit access to those fields. | Required if lead isn’t provided. | 53.0 |

## Related Topics

- ConnectApi.LeadInput (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_connectapi_input_lead.htm)
- ConnectApi.ServiceAppointmentInput (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_connectapi_input_service_appointment.htm)
