---
title: "ConnectApi.ServiceAppointmentInput"
domain: salesforce-scheduler-developer-guide
topic: connectapiserviceappointmentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.244Z
estimatedTokens: 664
keywords: [ConnectApi.ServiceAppointmentInput, service, appointment]
---

# ConnectApi.ServiceAppointmentInput

> Contains information about the service appointment.

# ConnectApi.ServiceAppointmentInput

Contains information about the service appointment.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalInformation | String | Additional details about the service appointment. | Optional | 53.0 |
| appointmentMode | ConnectApi.SvcApptModeEnum | Mode of the service appointment.Group— Service appointment mode is Group.Regular— Default mode of service appointment. | Optional | 60.0 |
| appointmentType | String | Type of the appointment. | Optional | 53.0 |
| attendeeLimit | Integer | Maximum number of customers that’s allowed to attend the service appointment. | Required if the appointment mode is Group. | 60.0 |
| city | String | Name of the city. | Optional | 53.0 |
| comments | String | Comments about the appointment. | Optional | 53.0 |
| contactId | String | ID of the contact associated with the parent record. | Optional | 53.0 |
| country | String | Name of the country. | Optional | 53.0 |
| description | String | Description of the appointment. | Optional | 53.0 |
| engagementChannelTypeId | String | ID of the engagement channel type to associate with the appointment.You can use engagement channel type only if:Schedule Appointments Using Engagement Channels is enabled in Salesforce Scheduler Settings in your Salesforce org.Shifts are defined in the scheduling policy. For more information on setting up shifts in the scheduling policy, see Define Shift Rules in Scheduling Policy.NoteEngagement channel types are not supported with operating hours rules in the scheduling policy. | Optional | 56.0 |
| extendedFields | List<ConnectApi.ExtendedFieldInput> | Values to add to any of the fields, including custom fields. | Optional | 53.0 |
| parentRecordId | String | ID of the parent record associated with the account. | Required if lead isn’t provided. | 53.0 |
| postalCode | String | Postal code of the city. | Optional | 53.0 |
| schedEndTime | Datetime | Time at which the appointment is scheduled to end. | Optional | 53.0 |
| schedStartTime | Datetime | Time at which the appointment is scheduled to start. | Optional | 53.0 |
| serviceTerritoryId | String | ID of the service territory associated with the service appointment. | Optional | 53.0 |
| state | String | Name of the state. | Optional | 53.0 |
| street | String | Name of the street. | Optional | 53.0 |
| subject | String | Short phrase describing the appointment. | Optional | 53.0 |
| workTypeId | String | ID of the work type associated with the service appointment. If specified, it is added to the service appointment record. | Optional | 53.0 |

## Related Topics

- ConnectApi.ExtendedFieldInput (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_connectapi_input_extended_field.htm)
