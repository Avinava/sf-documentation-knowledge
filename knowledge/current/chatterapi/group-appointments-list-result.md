---
title: "Group Appointments List Result"
domain: chatterapi
topic: group-appointments-list-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.081Z
estimatedTokens: 90
keywords: [Group, Appointments, Result, Output, representation]
---

# Group Appointments List Result

> Output representation of the list of group appointments.

# Group Appointments List Result

Output representation of the list of group appointments.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| group​Appointments | Group Appointment Result[] | List of group appointments in each territory. | Small, 61.0 | 61.0 |

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
      "resourceIds": [
        "0HnB0000000TO8gKAK"
      ],
      "startTime": "2024-01-21T16:15:00.000+0000",
      "territoryId": "0HhB0000000TO9WKAW",
      "engagementChannelTypeId": "0eFRM00000000Bv2AI",
      "workTypeId": "08qRM00000003fkYAA",
      "extendedFields": [
        {
          "name": "subject",
          "value": "MSc Internship - Resume workshop"
        },
        {
          "name": "description",
          "value": "Resume workshop for MSc Internship for Section 4"
        }
      ]
    },
    {
      "appointmentId": "08pxx0000003HpQAAU",
      "attendeeCount": 0,
      "attendeeLimit": 15,
      "parentRecordId": "001B000000qAUAWIA4",
      "endTime": "2019-01-21T19:30:00.000+0000",
      "resourceIds": [
        "0HnB0000000TO8gKAK"
      ],
      "startTime": "2019-01-21T16:30:00.000+0000",
      "territoryId": "0HhB0000000TO9WKAW",
      "engagementChannelTypeId": "0eFRM00000000Bv2AI",
      "workTypeId": "08qRM00000003fkYAA",
      "extendedFields": [
        {
          "name": "subject",
          "value": "MSc Internship - Resume workshop"
        },
        {
          "name": "description",
          "value": "Resume workshop for MSc Internship for Section 5"
        }
      ]
    },
    {
      "appointmentId": "08pxx0000009AsQAAU",
      "attendeeCount": 20,
      "attendeeLimit": 20,
      "parentRecordId": "001B000000qAUAWIA4",
      "endTime": "2019-01-21T19:45:00.000+0000",
      "resourceIds": [
        "0HnB0000000TO8gKAK"
      ],
      "startTime": "2019-01-21T16:45:00.000+0000",
      "territoryId": "0HhB0000000TO9WKAW",
      "engagementChannelTypeId": "0eFRM00000000Bv2AI",
      "workTypeId": "08qRM00000003fkYAA",
      "extendedFields": [
        {
          "name": "subject",
          "value": "MSc Internship - Resume workshop"
        },
        {
          "name": "description",
          "value": "Resume workshop for MSc Internship for Section 3"
        }
      ]
    }
  ]
}
```

## Related Topics

- Group Appointment Result[] (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_appointment_resul.htm)
