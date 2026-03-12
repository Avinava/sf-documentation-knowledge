---
title: "Group Appointment Result"
domain: chatterapi
topic: group-appointment-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.117Z
estimatedTokens: 417
keywords: [Group, Appointment, Result, Output, representation, specific]
---

# Group Appointment Result

> Output representation that contains the details of a specific group
    appointment.

# Group Appointment Result

Output representation that contains the details of a specific group appointment.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| appointment​Id | String | ID of the group appointment. | Small, 61.0 | 61.0 |
| attendee​Count | Integer | Number of attendees who are already associated with the appointment. | Small, 61.0 | 61.0 |
| attendee​Limit | Integer | Maximum attendee limit that's allowed for the appointment. | Small, 61.0 | 61.0 |
| appointment​Channel | Object | The appointment type, engagement channel type ID, and engagement Channel type name associated with the appointment, based on preferences. | Small, 61.0 | 61.0 |
| endTime | String | End time of the appointment. | Small, 61.0 | 61.0 |
| engagement​Channel​TypeId | String | ID of the engagement channel type record. | Small, 61.0 | 61.0 |
| extended​Fields | Scheduler Extended Fields[] | Details of the extended custom fields. | Small, 61.0 | 61.0 |
| parent​RecordId | String | ID of the associated parent record. | Small, 61.0 | 61.0 |
| resourceIds | String[] | Service resource IDs that are associated with the appointment. | Small, 61.0 | 61.0 |
| startTime | String | Start time of the appointment. | Small, 61.0 | 61.0 |
| territoryId | String | ID of the service territory that's associated with the appointment. | Small, 61.0 | 61.0 |
| workType​Group | Object | ID and name of the work type group associated with the work type of the appointment. | Small, 61.0 | 61.0 |
| workTypeId | String | ID of the work type for the appointment. | Small, 61.0 | 61.0 |

## Code Examples

```
{
    "groupAppointments": [
        {
            "appointmentId": "08pxx0000004HlQAAU",
            "attendeeCount": 10,
            "attendeeLimit": 25,
            "parentRecordId": "001B000000qAUAWIA4",
            "endTime": "2024-01-21T19:15:00.000+0000",
            "startTime": "2024-01-21T16:15:00.000+0000",
            "resource": {
                "id" : "0HnB0000000TO8gKAK",
                "name" : "Best Resource"
            },
            "territoryId": "0HhB0000000TO9WKAW",
            "engagementChannelTypeId": "0eFRM00000000Bv2AI",
            "workTypeId": "08qRM00000003fkYAA",
            "appointmentChannel": {
                "engagementChannelTypeId" : "0eFRM00000000Bv2AI" ,
                "engagementChannelTypeName" : "Video"
            },
            "workTypeGroup" : {
                "name" : "Wealth Management",
                "id" : "0eFRM00000000Bv2AI"
            },
            "extendedFields": [ 
                { "name": "subject", 
                "value": "MSc Interniship - Resume workshop" }, 
                { "name": "description", 
                "value": "Resume workshop for MSc Interniship for Section 4" } 
            ]
        },
        {
            "appointmentId": "08pxx0000003HpQAAU",
            "attendeeCount": 0,
            "attendeeLimit": 15,
            "parentRecordId": "001B000000qAUAWIA4",
            "endTime": "2019-01-21T19:30:00.000+0000",
            "startTime": "2024-01-21T16:15:00.000+0000",
            "resource": {
                "id" : "0HnB0000000TO8gKAK",
                "name" : "Best Resource"
            },
            "startTime": "2019-01-21T16:30:00.000+0000",
            "territoryId": "0HhB0000000TO9WKAW",
            "engagementChannelTypeId": "0eFRM00000000Bv2AI",
            "workTypeId": "08qRM00000003fkYAA",
            "appointmentChannel": {
                "engagementChannelTypeId" : "0eFRM00000000Bv2AI",
                "engagementChannelTypeName" : "Video"
            },
            "workTypeGroup" : {
                "name" : "Wealth Management",
                "id" : "0eFRM00000000Bv2AI"
            },
            "extendedFields": [ 
                { "name": "subject", 
                "value": "MSc Interniship - Resume workshop" }, 
                { "name": "description", 
                "value": "Resume workshop for MSc Interniship for Section 5" } 
            ]
        },
        {
            "appointmentId": "08pxx0000009AsQAAU",
            "attendeeCount": 20,
            "attendeeLimit": 20,
            "parentRecordId": "001B000000qAUAWIA4",
            "endTime": "2019-01-21T19:45:00.000+0000",
            "startTime": "2024-01-21T16:15:00.000+0000",
            "resource": {
                "id" : "0HnB0000000TO8gKAK",
                "name" : "Best Resource"
            },
            "startTime": "2019-01-21T16:45:00.000+0000",
            "territoryId": "0HhB0000000TO9WKAW",
            "engagementChannelTypeId": "0eFRM00000000Bv2AI",
            "workTypeId": "08qRM00000003fkYAA",
            "appointmentChannel": {
                "engagementChannelTypeId" : "0eFRM00000000Bv2AI",
                "engagementChannelTypeName" : "Video"
            },
            "workTypeGroup" : {
                "name" : "Wealth Management",
                "id" : "0eFRM00000000Bv2AI"
            },
            "extendedFields": [ 
                { "name": "subject", 
                "value": "MSc Interniship - Resume workshop" }, 
                { "name": "description", 
                "value": "Resume workshop for MSc Interniship for Section 3" } 
            ]
        }
    ]
}
```

## Related Topics

- Scheduler
                  Extended Fields[] (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scheduler_extended_fields_output.htm)
