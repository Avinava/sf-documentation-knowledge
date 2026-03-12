---
title: "Course Offering Schedule Details"
domain: edu-cloud-dev-guide
topic: course-offering-schedule-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.983Z
estimatedTokens: 189
keywords: [Course, Offering, Schedule, Output, representation, includes, unique, success, status, any, errors, encountered]
---

# Course Offering Schedule Details

> Output representation that contains details about each course offering schedule. It
    includes the unique ID of the schedule, its success status, and any errors
    encountered.

# Course Offering Schedule Details

Output representation that contains details about each course offering schedule. It includes the unique ID of the schedule, its success status, and any errors encountered.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| courseOffering​ScheduleId | String | ID of the created or updated course offering schedule. | Big, 64.0 | 64.0 |
| errors | Course Offering Error[] | List of errors encountered during the creation or updation of the course offering schedule. | Big, 64.0 | 64.0 |
| success | Boolean | Indicates whether the course offering schedule was successfully created (true) or not (false). | Big, 64.0 | 64.0 |

## Code Examples

```
{
  "courseSchedule": [
    {
      "success": true,
      "courseOfferingScheduleId": "0eAxx0000000001EBB",
      "errors": []
    },
    {
      "success": true,
      "courseOfferingScheduleId": "0eAxx0000000001ECC",
      "errors": []
    }
  ]
}
```

## Related Topics

- Course Offering Error (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_course_offering_schedule_error_output.htm)
