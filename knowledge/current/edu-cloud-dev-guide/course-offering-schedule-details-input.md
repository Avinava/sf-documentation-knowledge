---
title: "Course Offering Schedule Details Input"
domain: edu-cloud-dev-guide
topic: course-offering-schedule-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.748Z
estimatedTokens: 376
keywords: [Course, Offering, Schedule, Input, representation, modify]
---

# Course Offering Schedule Details Input

> Input representation of a single course offering schedule to create and modify within the
    list of course offering request.

# Course Offering Schedule Details Input

Input representation of a single course offering schedule to create and modify within the list of course offering request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| courseOffering​ScheduleCustom​Attribute | Custom Field Input[] | List of custom attributes associated with the course schedule. | Optional | 64.0 |
| courseOffering​ScheduleExternalId | Object | External ID of the course schedule. | Optional | 64.0 |
| courseOffering​ScheduleId | String | Unique ID of the course schedule. | Required when editing an existing schedule | 64.0 |
| courseOffering​ScheduleTemplate | String | Template ID of the course offering schedule. | Optional | 64.0 |
| description | String | Description of the course offering schedule. | Optional | 64.0 |
| endTime | String | End time of the course offering schedule. | Optional | 64.0 |
| location | String | Location of the course offering schedule | Optional | 64.0 |
| recurrence​Pattern | String | Recurrence patternof the course schedule. It uses an RRULE (Recurrence Rule) string, which is based on a subset of the iCalendar (RFC 5545) standard. | Optional | 64.0 |
| startDate | String | Start date of the course offering schedule. | Required | 64.0 |
| startTime | String | Start time of the course offering schedule. | Required | 64.0 |
| type | String | Type of the course offering schedule. | Optional | 64.0 |

## Code Examples

```
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
```

## Related Topics

- Custom Field Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_custom_field_input.htm)
