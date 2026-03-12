---
title: "Book Appointment (POST)"
domain: health-cloud-object-reference
topic: book-appointment-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.222Z
estimatedTokens: 924
keywords: [Book, Appointment, POST, health]
---

# Book Appointment (POST)

> Create or book a health appointment.

# Book Appointment (POST)

Create or book a health appointment.

Resource

```

```

Resource Example

```

```

HTTP methods

POST

Request body for POST LS

{ "startDate": "2013-12-10T09:00:00Z", "endDate": "2013-12-10T11:00:00Z", "workTypeId": "<workTypeId>", "channelId": "<channelId>", "comment": "Further expand on the results of the MRI and determine the next actions that may be appropriate.", "participants": \[ { "reference": "Patient/<patientId>" }, { "reference": "Facility/<facilityId>" }, { "reference": "Practitioner/<healthcarePractitionerId>", "isReferenceRequired": true } \] }

Request body for POST (EHR - External system, like Cerner, Epic and others)

{ "startDate": "2013-12-10T09:00:00Z", "endDate": "2013-12-10T11:00:00Z", "workTypeId": "<workTypeId>", "channelId": "<channelId>", "sourceSystem": "cerner", "comment": "Further expand on the results of the MRI and determine the next actions that may be appropriate.", "appointmentTypes": \[ "FOLLOWUP" \], "serviceCategories": \[ "serviceCategoryCode1", "serviceCategoryCode2" \], "serviceTypes": \[ "serviceTypeCode1", "serviceTypeCode2" \], "specialties": \[ "specialityCode" \], "slots": \[ { "id": "24477854-21304876-62852027-2", "reference": "<healthcarePractitionerId>" - matches with the reference of practitioner within participants } \], "participants": \[ { "reference": "Patient/<patientId>" }, { "reference": "Facility/<facilityId>" }, { "reference": "Practitioner/<healthcarePractitionerId>", "isReferenceRequired": true } \] }

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| appointment​Types | Array | Type of the appointment. | Required, if none of the following are provided:workTypeIdserviceTypesserviceCategories | 65.0 |
| channel​Id | String | Engagement channel associated with the work type. | Required | 65.0 |
| comment​ | String | Additional text to aid in facilitating the appointment. | Optional | 65.0 |
| endDate | String | End date and time for the slots range. | Required | 65.0 |
| participants | Array | List of participants involved in the appointment. Patient and Facility are required. For single resource appointment, include either a Device (asset) or Provider or both for multi-resource appointment. | Required | 65.0 |
| service​Categories | Array | List of broad categorizations of the service. An array of strings. | Required, if none of the following are provided:workTypeIdserviceTypesappointmentType | 65.0 |
| service​Types | Array | List of specific services to be performed. An array of strings. | Required, if none of the following are provided:workTypeIdappointmentTypeserviceCategories | 65.0 |
| slots | Array | List of references to the slots the appointment is filling. | Required, if the appointment is for an external resource. | 65.0 |
| source​System | String | Source system associated with the appointment type, service type or service category. | Required, if workTypeId is not provided but either appointmentType, serviceTypes, or serviceCategories is. | 65.0 |
| specialties | Array | List of the specialties of a practitioner required for the service. | Optional | 65.0 |
| start​Date | String | Start date and time for the slots range. | Required | 65.0 |
| timeZone | String | Timezone in which the appointment is updated. | Optional | 65.0 |
| workType​Id | String | Work type associated with the resource. | Required | 65.0 |

Response body for POST

[Book Appointment Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_appointment_management.htm "Output representation for appointment management.")

## Code Examples

```
/connect/health/appointment-management/appointment
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/health/appointment-management/appointment
```

## Related Topics

- Book
                            Appointment Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_appointment_management.htm)
