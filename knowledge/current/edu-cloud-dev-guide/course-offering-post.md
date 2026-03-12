---
title: "Course Offering (POST)"
domain: edu-cloud-dev-guide
topic: course-offering-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.903Z
estimatedTokens: 300
keywords: [Course, Offering, POST, offerings, their, associated, schedules, bulk, API, specify, courses, offered, helping, students, plan]
---

# Course Offering (POST)

> Create course offerings and their associated course offering schedules in bulk. Use
    this API to create course schedules that specify when courses are offered, helping students plan
    their registrations without conflicts.

# Course Offering (POST)

Create course offerings and their associated course offering schedules in bulk. Use this API to create course schedules that specify when courses are offered, helping students plan their registrations without conflicts.

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
| courseOfferingInput | Course Offering Input[] | List of course offering input to be processed. | Required | 64.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| courseOffering​InputRepresentation | Object | Create course offerings in bulk fashion. | Required | 64.0 |
| overwrite | Boolean | Indicates whether the external ID in the request already exists (true) or not (false). | Optional | 64.0 |

Response body for POST

[Course Offering](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_course_offering_output.htm "Output representation of the course offering.")

## Code Examples

```
/connect/education/academic-operations/course-offering
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/education/academic-operations/course-offering?overwrite=false
```

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
- Course Offering (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_course_offering_output.htm)
