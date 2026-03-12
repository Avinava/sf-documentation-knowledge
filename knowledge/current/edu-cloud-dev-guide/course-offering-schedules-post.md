---
title: "Course Offering Schedules (POST)"
domain: edu-cloud-dev-guide
topic: course-offering-schedules-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.908Z
estimatedTokens: 229
keywords: [Course, Offering, Schedules, POST, Add, modify, resource, adding, new, updating]
---

# Course Offering Schedules (POST)

> Add or modify course offering schedules to the course offering. This resource is used
    to modify the schedules of an existing course offering by adding new schedules or updating the
    existing schedules.

# Course Offering Schedules (POST)

Add or modify course offering schedules to the course offering. This resource is used to modify the schedules of an existing course offering by adding new schedules or updating the existing schedules.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| courseOffering​ Schedule | Course Offering Schedule Details Input[] | List of course offering schedules to be added or modified to the course offering. | Required | 64.0 |

Response body for POST

[Course Offering Schedule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_course_offering_schedule_output.htm "Output representation of the course offering schedules to the course offering.")

## Code Examples

```
/connect/education/academic-operations/course-offering/${courseOfferingId}/course-schedule
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/education/academic-operations/course-offering/${courseOfferingId}/course-schedule
```

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
- Course Offering Schedule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_course_offering_schedule_output.htm)
