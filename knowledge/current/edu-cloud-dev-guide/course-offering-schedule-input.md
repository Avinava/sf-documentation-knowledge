---
title: "Course Offering Schedule Input"
domain: edu-cloud-dev-guide
topic: course-offering-schedule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.751Z
estimatedTokens: 116
keywords: [Course, Offering, Schedule, Input, representation, schedules, created, updated]
---

# Course Offering Schedule Input

> Input representation of the list of course offering schedules to be created or updated
    for the course offering.

# Course Offering Schedule Input

Input representation of the list of course offering schedules to be created or updated for the course offering.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| courseOffering​ Schedule | Course Offering Schedule Details Input[] | List of course offering schedules to be added or modified to the course offering. | Required | 64.0 |

## Code Examples

```
{
  "courseOfferingSchedule": [
    {
      "courseOfferingScheduleExternalId": {
        "fieldName": "customField__c",
        "fieldValue": "custom field value CRW616"
      },
      "courseOfferingScheduleCustomAttribute": [
        {
          "fieldName": "customField1__c",
          "fieldValue": "custom field value CRW616"
        }
      ],
      "recurrencePattern": "RRULE:FREQ=DAILY;INTERVAL=2;UNTIL=20251130T000000Z;",
      "startTime": "19:00:00.000Z",
      "endTime": "20:30:00.000Z",
      "location": "131xx0000004FpxAAE",
      "courseOfferingScheduleTemplate": "0wZxx0000000001EAA",
      "startDate": "2024-12-09T20:00:00.000Z",
      "type": "Lab",
      "description": "Class session A updated 01"
    },
    {
      "courseOfferingScheduleExternalId": {
        "fieldName": "customField__c",
        "fieldValue": "custom field value CRW614"
      },
      "courseOfferingScheduleCustomAttribute": [
        {
          "fieldName": "customField1__c",
          "fieldValue": "custom field value CRW614"
        }
      ],
      "recurrencePattern": "RRULE:FREQ=DAILY;INTERVAL=2;UNTIL=20251130T000000Z;",
      "startTime": "21:00:00.000Z",
      "endTime": "20:30:00.000Z",
      "location": "111xx0000004FpxAAE",
      "courseOfferingScheduleTemplate": "0wZxx0000000001EAA",
      "startDate": "2024-12-09T20:00:00.000Z",
      "type": "Lab",
      "description": "Class session A updated 01"
    },
    {
      "courseOfferingScheduleExternalId": {
        "fieldName": "customField__c",
        "fieldValue": "custom field value CRW615"
      },
      "courseOfferingScheduleCustomAttribute": [
        {
          "fieldName": "customField1__c",
          "fieldValue": "custom field value CRW615"
        }
      ],
      "recurrencePattern": "RRULE:FREQ=DAILY;INTERVAL=2;UNTIL=20251130T000000Z;",
      "startTime": "22:00:00.000Z",
      "endTime": "20:30:00.000Z",
      "location": "131xx0000004FpxAAE",
      "courseOfferingScheduleTemplate": "0qZxx0000000001EAA",
      "startDate": "2024-12-09T20:00:00.000Z",
      "type": "Lab",
      "description": "Class session A updated 01"
    }
  ]
}
```

## Related Topics

- Course
                        Offering Schedule Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_course_offering_schedule_inpu.htm)
