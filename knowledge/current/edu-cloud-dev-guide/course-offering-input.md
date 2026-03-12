---
title: "Course Offering Input"
domain: edu-cloud-dev-guide
topic: course-offering-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.744Z
estimatedTokens: 84
keywords: [Course, Offering, Input, representation]
---

# Course Offering Input

> Input representation of the course offering request.

# Course Offering Input

Input representation of the course offering request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| courseOfferingInput | Course Offering Input[] | List of course offering input to be processed. | Required | 64.0 |

## Code Examples

```
[
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
]
```

## Related Topics

- Course Offering
                        Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_course_offering_inpu.htm)
