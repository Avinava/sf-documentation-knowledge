---
title: "Update Appointment Action"
domain: health-cloud-object-reference
topic: update-appointment-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.229Z
estimatedTokens: 747
keywords: [Appointment, Action, REST, HTTP, Inputs, Outputs]
---

# Update Appointment Action

> Update an existing appointment.

# Update Appointment Action

Update an existing appointment.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/66.0/connect/health/appointment-management/appointment/{id}

Formats

JSON, XML

HTTP Methods

PUT

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| appointmentTypes | TypeArrayDescriptionType of appointment, such as Follow-up.Required, if none of the workTypeId, serviceTypes, or serviceCategories are provided. |
| channelId | TypeStringDescriptionEngagement channel associated with the appointment.Required, if an engagement channel is configured for a visit type. |
| comment | TypeStringDescriptionNotes associated with the appointment. The maximum length is 256 characters. |
| description | TypeStringDescriptionDescription of the appointment. |
| endDate | TypeStringDescriptionEnd time of the appointment. |
| id | TypeStringDescriptionRequiredThe unique identifier of the appointment to update. This is part of the request URL. |
| participants | TypeArrayRequiredDescriptionList of participants involved in the appointment.For single resource appointment, include either a Device (asset) or a Provider. For multi-resource appointment, include both. |
| serviceCategories | TypeArrayDescriptionList of service categories performed during the appointment.Required, if none of the workTypeId, serviceTypes, or appointmentType are provided. |
| serviceTypes | TypeArrayDescriptionA list of specific services to be performed during this appointment.Required, if none of the workTypeId, appointmentType, or serviceCategories are provided. |
| slots | TypeArrayRequiredRequired, if the appointment is being booked for an external resource.DescriptionA list of references to the slots that this appointment is filling. |
| sourceSystem | TypeStringDescriptionRequired, if workTypeId is not provided.External system defined in Salesforce, such as cerner. |
| specialties | TypeArrayDescriptionA list of the specialties of a practitioner that would be required to perform the service requested in this appointment. |
| startDate | TypeStringDescriptionStart time of the appointment. |
| timeZone | TypeStringDescriptionTimezone in which the appointment is booked. |
| workTypeId | TypeStringDescriptionVisit type associated with the appointment.Required, if none of the appointmentType, serviceTypes, or serviceCategories are provided. |

## Outputs

| Output | Details |
| --- | --- |
| id | TypeStringDescriptionID of the appointment. |
| isSuccess | TypeBooleanDescriptionIndicates whether the appointment was updated successfully (true) or not (false). |
| status | TypeStringDescriptionStatus of the appointment, such as Scheduled or Rejected. |
| errorMessages | TypeArrayDescriptionList of errors, if any. |

## Example

PUT

This sample request is for the Update Appointment action.

```

```

This sample response is for the Update Appointment action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "id": "08pxx000000Axq6xxC",
      "workTypeId": "08qxx000000Axq6xxC",
      "channelId": "0eFSG000000NNOV2A0",
      "description": "Discussion",
      "startDate": "2025-07-21T18:00:00.000Z",
      "endDate": "2025-07-21T18:30:00.000Z",
      "comment": "Payload for the internal salesforce system",
      "participants": [
        {
          "reference": "Patient/001xx000012udqQxxQ"
        },
        {
          "reference": "Practitioner/0bSxx0000005JoaxxE",
          "isReferenceRequired": true
        },
        {
          "reference": "Facility/001xx000012udqhxxA"
        }
      ]
    }
  ]
}
```

```
[
  {
    "id": "08pxx000000Axq6xxC",
    "isSuccess": true,
    "status": "Scheduled",
    "errorMessages": []
  }
]
```
