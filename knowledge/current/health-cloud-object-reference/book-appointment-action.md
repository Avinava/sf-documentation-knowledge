---
title: "Book Appointment Action"
domain: health-cloud-object-reference
topic: book-appointment-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.055Z
estimatedTokens: 757
keywords: [Book, Appointment, Action, new, REST, HTTP, Inputs, Outputs]
---

# Book Appointment Action

> Create or book a new appointment.

# Book Appointment Action

Create or book a new appointment.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v65.0/connect/health/appointment-management/appointment

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: OAuth2 Bearer Token

## Inputs

| Input | Details |
| --- | --- |
| appointmentTypes | TypeArrayDescriptionRequired, if none of workTypeId, serviceTypes, or serviceCategories is provided.Type of appointment, for example, Follow-up. |
| channelId | TypeStringDescriptionRequired, if an engagement channel is configured for a visit type.The engagement channel associated with the appointment. |
| comment | TypeStringDescriptionOptionalThe notes associated with the appointment. Maximum length is 256 characters. |
| description | TypeStringDescriptionOptionalThe description of the appointment. |
| endDate | TypeStringDescriptionOptionalThe end time of the appointment. |
| participants | TypeArrayDescriptionRequired. Patient and Facility (Location) are mandatory. Additionally, either a Device (asset) or a Provider is required for a single resource appointment, and both are required for a multi-resource appointment.List of participants involved in the appointment. |
| serviceCategories | TypeArrayDescriptionRequired, if none of workTypeId, serviceTypes, or appointmentTypes is provided.List of broad categorizations of the service to be performed during this appointment. |
| serviceTypes | TypeArrayDescriptionRequired, if none of workTypeId, appointmentTypes, or serviceCategories is provided.List of specific services that are to be performed during this appointment. |
| slots | TypeArrayDescriptionRequired, if the appointment is being booked for an external resource.List of references to the slots that this appointment is filling. |
| sourceSystem | TypeStringDescriptionRequired, if workTypeId is not provided but one of appointmentTypes, serviceTypes, or serviceCategories is provided.Describes the external system defined in Salesforce, such as "cerner". |
| specialties | TypeArrayDescriptionOptionalList of the specialty of a practitioner that would be required to perform the service requested in this appointment. |
| startDate | TypeStringDescriptionRequiredThe start time of the appointment. |
| timeZone | TypeStringDescriptionOptionalCreates the appointment in the specified time zone. |
| workTypeId | TypeStringDescriptionRequired, if none of appointmentTypes, serviceTypes, or serviceCategories is provided.The visit type associated with the appointment. |

## Outputs

| Output | Details |
| --- | --- |
| id | TypeStringDescriptionThe ID of the Appointment. |
| isSuccess | TypeBooleanDescriptionIndicates whether the appointment was created successfully. |
| status | TypeStringDescriptionThe status of the Appointment, such as Scheduled or Rejected. |
| errorMessages | TypeArrayDescriptionA list of errors that occurred, if any. |

## Example

Sample Request

```

```

Sample Response

```

```

## Code Examples

```
{
    "workTypeId": "08qxxG000000Axq6xxC",
    "channelId": "0eFxx000000NNOVxx0",
    "description": "Discussion",
    "startDate": "2025-07-21T18:00:00.000Z",
    "endDate": "2025-07-21T18:30:00.000Z",
    "comment": "Payload for the testing",
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
```

```
[
    {
        "id": "08pxx000000Axq6xxC",
        "isSuccess": true,
        "status": "scheduled",
        "error": []
    }
]
```
