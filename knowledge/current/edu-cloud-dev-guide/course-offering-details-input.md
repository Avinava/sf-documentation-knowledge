---
title: "Course Offering Details Input"
domain: edu-cloud-dev-guide
topic: course-offering-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.740Z
estimatedTokens: 422
keywords: [Course, Offering, Input, representation]
---

# Course Offering Details Input

> Input representation of the course offering request object.

# Course Offering Details Input

Input representation of the course offering request object.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| academicSessionId | String | Academic session for which course is offered. | Required | 64.0 |
| courseOffering​CustomAttribute | Custom Field Input[] | Custom fields associated with the course offering. | Optional | 64.0 |
| courseOffering​ExternalId | Object | External Id details of the course offering. | Optional | 64.0 |
| courseOffering​Id | String | ID of the course offering. | Optional | 64.0 |
| courseOffering​Name | String | Name of the course offering. | Required | 64.0 |
| courseOffering​Schedule | Course Offering Schedule Input[] | Course offering schedules of a course offering. | Optional | 64.0 |
| description | String | Description of the course offering. | Optional | 64.0 |
| endDate | String | End date of the course offering. | Optional | 64.0 |
| enrollment​Capacity | Integer | Enrollment capacity for the course offering. | Optional | 64.0 |
| isActive | Boolean | Indicates whether the course offering is active (true) or not (false). | Optional | 64.0 |
| learning​CourseId | String | Course ID for which the offering is being made. | Required | 64.0 |
| primaryFacultyId | String | Faculty contact ID who will be conducting the course. | Optional | 64.0 |
| sectionNumber | Integer | Section number of the course offering. | Optional | 64.0 |
| startDate | String | Start date of the course offering. | Required | 64.0 |
| waitlisted​Capacity | Integer | Waitlist capacity of the course offering. | Optional | 64.0 |

## Code Examples

```
{
  "courseOffering": {
    "courseOfferingExternalId": {
      "fieldName": "externalField__c",
      "fieldValue": "custom field value"
    },
    "courseOfferingCustomAttribute": [
      {
        "fieldName": "customField__c",
        "fieldValue": "custom field value"
      }
    ],
    "courseOfferingId": "",
    "courseOfferingName": "Operating System",
    "academicSessionId": "0vcxx00000000ODAAY",
    "learningCourseId": "0vYxx00000000ODEAY",
    "primaryFacultyId": "003xx000004Wj36AAC",
    "startDate": "2024-12-09T20:00:00.000Z",
    "endDate": "2025-12-15T20:00:00.000Z",
    "isActive": "true",
    "enrollmentCapacity": 12,
    "waitlistedCapacity": 2,
    "description": "Course Offering Summer 2025 Operating System",
    "sectionNumber": 1,
    "courseOfferingSchedule": [
      {
        "courseOfferingScheduleExternalId": {
          "fieldName": "customField__c",
          "fieldValue": "custom field value"
        },
        "courseOfferingScheduleCustomAttribute": [
          {
            "fieldName": "customField1__c",
            "fieldValue": "custom field value"
          }
        ],
        "recurrencePattern": "RRULE:FREQ=DAILY;INTERVAL=1;UNTIL=20251130T000000Z;",
        "startTime": "00:15:00.000",
        "endTime": "01:15:00.000",
        "location": "131xx0000004FoLAAU",
        "courseOfferingScheduleTemplate": null,
        "startDate": "2024-12-01",
        "type": "Class",
        "description": "LT for OS class",
        "courseOfferingScheduleId": ""
      },
      {
        "courseOfferingScheduleExternalId": {
          "fieldName": "customField__c",
          "fieldValue": "custom field value"
        },
        "courseOfferingScheduleCustomAttribute": [
          {
            "fieldName": "customField1__c",
            "fieldValue": "custom field value"
          }
        ],
        "recurrencePattern": "RRULE:FREQ=DAILY;INTERVAL=1;UNTIL=20251130T000000Z;",
        "startTime": "00:15:00.000",
        "endTime": "01:15:00.000",
        "location": "131xx0000004FoLAAU",
        "courseOfferingScheduleTemplate": null,
        "startDate": "2024-12-01",
        "type": "Class",
        "description": " class",
        "courseOfferingScheduleId": ""
      }
    ]
  }
}
```

## Related Topics

- Custom Field
                        Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_custom_field_input.htm)
- Course
                        Offering Schedule Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_course_offering_schedule_inpu.htm)
