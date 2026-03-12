---
title: "Update Appointment (PUT)"
domain: health-cloud-object-reference
topic: update-appointment-put
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.233Z
estimatedTokens: 971
keywords: [Appointment, PUT]
---

# Update Appointment (PUT)

> Update an appointment.

# Update Appointment (PUT)

Update an appointment.

Resource

```

```

Resource Example

```

```

HTTP methods

PUT

Request body for PUT (LS)

{ "workTypeId": "08qxx0000004C97AAE", "id": "08pxx0000004KGG", -- id of the appointment to "channelId": "0eFxx0000000001EAA", "startDate": "2025-09-20T00:15:00Z", "endDate": "2025-09-20T00:45:00Z", "timeZone": "America/Indiana/Indianapolis", "comment": "Payload for the internal salesforce system to book a provider.", "participants": \[ { "reference": "Patient/001xx000003GYimAAG" }, { "reference": "Practitioner/0bSxx000000000AEAQ", "isReferenceRequired": true }, { "reference": "Facility/001xx000003GYj3AAG" } \] }

Request body for PUT (External EHR System)

{ "startDate": "2026-12-10T09:00:00Z", "endDate": "2026-12-10T11:00:00Z", "workTypeId": "08qxx0000004C97AAE", "channelId": "0eFxx0000000001EAA", "id": "08pxx0000004KGG", -- id of the appointment to "sourceSystem": "cerner", "comment": "Update the current appointment with new date", "appointmentTypes": \[ "FOLLOWUP" \], "serviceCategories": \[ "serviceCategoryCode1", "serviceCategoryCode2" \], "serviceTypes": \[ "serviceTypeCode1", "serviceTypeCode2" \], "specialties": \[ "specialityCode" \], "slots": \[ { "id": "24477854-21304876-62852027-2", "reference": "<healthcarePractitionerId>" - matches with the reference of practitioner within participants } \], "participants": \[ { "reference": "Patient/<patientId>" }, { "reference": "Facility/<facilityId>" }, { "reference": "Practitioner/<healthcarePractitionerId>", "isReferenceRequired": true } \] }

Request parameters for PUT

| Parameter Name | Type | Description | Required or Optional | Available version |
| --- | --- | --- | --- | --- |
| appointmentTypes | Array | Type of appointment, such as Follow up. | Required, if none of the following are provided:workTypeIdserviceTypesserviceCategories | 65.0 |
| channelId | String | Engagement channel associated with the appointment, such as In person or video. | Required if an engagement channel is configured for a visit type. | 65.0 |
| comment​ | String | Additional text to aid in facilitating the appointment. | Optional | 65.0 |
| endDate | String | End time of the appointment. | Required | 65.0 |
| id | String | ID of the appointment. | Required | 65.0 |
| participants | Array | List of participants involved in the appointment. Patient and Facility are required. For single resource appointment, include either a Device (asset) or Provider or both for multi-resource appointment. | Required | 65.0 |
| serviceCategories | Array | List of categories of service to include. | Required, if none of the following are provided:workTypeIdserviceTypesappointmentType | 65.0 |
| serviceTypes | Array | List of specific services to include. | Required, if none of the following are provided:workTypeIdserviceCategoriesappointmentType | 65.0 |
| slots | Array | List of references to the slots the appointment is filling. | Required, if the appointment is for an external resource. | 65.0 |
| sourceSystem | String | External system defined in Salesforce, such as cerner . | Required, if workTypeId is not provided but one of appointmentType, serviceTypes, or serviceCategories is. | 65.0 |
| specialties | Array | List of the specialties of a practitioner required for the service. | Optional | 65.0 |
| startDate | String | Start time of the appointment. | Required | 65.0 |
| timeZone | String | Timezone in which the appointment is updated. | Optional | 65.0 |
| workTypeId | String | Visit type associated with the appointment. | Required, if none of the following are provided:appointmentTypeserviceTypesserviceCategories | 65.0 |

Response body for PUT

[Update Appointment Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_appointment_management.htm "Output representation for appointment management.")

## Code Examples

```
/connect/health/appointment-management/appointment/{appointmentId}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/health/appointment-management/​appointment/​08pxx0000004KxxAAE
```

## Related Topics

- Update Appointment Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_appointment_management.htm)
