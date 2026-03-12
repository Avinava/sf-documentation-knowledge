---
title: "Slot Input"
domain: life-sciences-dev-guide
topic: slot-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.439Z
estimatedTokens: 525
keywords: [Slot, Input, representation, appointment]
---

# Slot Input

> Input representation of an appointment slot.

# Slot Input

Input representation of an appointment slot.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalInformation | String | Additional information about the appointment slot to be booked. | Optional | 60.0 |
| appointmentType | String | ID of the Service Appointment record’s appointment type. | Optional | 60.0 |
| city | String | Name of the city in which the appointment slot must be booked. | Optional | 60.0 |
| comments | String | Appointment slot comments. | Optional | 60.0 |
| contactId | String | ID of the contact for whom the appointment slot must be booked. | Optional | 60.0 |
| country | String | Name of the country in which the appointment slot must be booked. | Optional | 60.0 |
| description | String | Description for the appointment slot. | Optional | 60.0 |
| postalCode | String | Postal code of the city in which the appointment slot must be booked. | Optional | 60.0 |
| schedEndTime | String | Appointment end time. | Required | 60.0 |
| schedStartTime | String | Appointment start time. | Required | 60.0 |
| serviceAppointmentId | String | ID of the Service Appointment record associated with the appointment slot. | Optional | 60.0 |
| serviceResourceId | String | ID of the Service Resource record associated with the appointment slot. | Required | 60.0 |
| serviceTerritoryId | String | ID of the service territory in which the appointment slot must be booked. | Required | 60.0 |
| state | String | Name of the state in which the appointment slot must be booked. | Optional | 60.0 |
| status | String | Status of the appointment slot. Possible values are the enum values configured for the status field of the Service Appointment object on the Salesforce Scheduler. | Required | 60.0 |
| street | String | Name of the street in which the appointment slot must be booked. | Optional | 60.0 |
| subject | String | Subject for the appointment slot. | Optional | 60.0 |
| workTypeId | String | ID of the work type for which the appointment slot must be booked. | Required | 60.0 |
