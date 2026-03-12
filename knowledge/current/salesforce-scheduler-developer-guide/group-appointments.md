---
title: "Group Appointments"
domain: salesforce-scheduler-developer-guide
topic: group-appointments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.417Z
estimatedTokens: 96
keywords: [Group, Appointments, Output, representation, retrieved]
---

# Group Appointments

> Output representation of the response that contains the retrieved group
    appointments.

# Group Appointments

Output representation of the response that contains the retrieved group appointments.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| result | Group Appointments List Result | List of result objects for the retrieved group appointments. | Small, 61.0 | 61.0 |

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

- Group Appointments  List Result (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_get_group_appointments_list_resul.htm)
