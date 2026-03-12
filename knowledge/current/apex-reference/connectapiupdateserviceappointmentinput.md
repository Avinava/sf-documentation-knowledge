---
title: "ConnectApi.UpdateServiceAppointmentInput"
domain: apex-reference
topic: connectapiupdateserviceappointmentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.660Z
estimatedTokens: 564
keywords: [ConnectApi.UpdateServiceAppointmentInput, Contains, information, update, service, appointment.]
---

# ConnectApi.UpdateServiceAppointmentInput

> Contains information to update a service appointment.

# ConnectApi.UpdateServiceAppointmentInput

Contains information to update a service appointment.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| serviceAppointmentId | String | The ID of the service appointment to be modified. | Required | 53.0 |
| assignedResources | List<ConnectApi.AssignedResourcesInput> | Represents the service resources who are assigned to a service appointment.When updating an appointment, pass the complete list of required resources. If you don’t pass a resource who is already assigned to the appointment, the API deletes that assigned resource. For example, suppose that an existing service appointment has assigned resources: A and B and you pass B and C in assigned resources in the PATCH request. The API checks the resource availability of B and C for existing work type and service territory, and if both are available, the service appointment gets updated with:Resource A—DeletedResourceB—UpdatedResourceC—CreatedHowever, if you don’t pass any of the assigned resources, the API assumes there’s no change.NoteWhen creating an appointment, use extendedFields to add values to any of the fields, including custom fields, in assignedResources as long as you have edit access to those fields. | Optional | 53.0 |
| lead | ConnectApi.LeadInput | Represents a prospect or lead.NoteRequired to create a service appointment for unauthenticated guest users. | Required if serviceAppointment isn’t provided. | 53.0 |
| schedulingPolicyId | String | The ID of the AppointmentSchedulingPolicy object. If no scheduling policy is passed in the request body, the default configurations are used. The only scheduling policy configuration that is used in determining time slots is the enforcement of account visiting hours. | Optional | 53.0 |
| serviceAppointment | ConnectApi.ServiceAppointmentInput | Represents the service appointment details to book an appointment. When updating an appointment, pass only the fields that must be updated.NoteWhen creating an appointment, use extendedFields to add values to any of the fields, including custom fields, in assignedResources as long as you have edit access to those fields. | Required if lead isn’t provided. | 53.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.LeadInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_lead.htm)
- ConnectApi.ServiceAppointmentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_service_appointment.htm)
