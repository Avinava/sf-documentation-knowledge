---
title: "Course Offering Schedule"
domain: edu-cloud-dev-guide
topic: course-offering-schedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.980Z
estimatedTokens: 158
keywords: [Course, Offering, Schedule, Output, representation, schedules]
---

# Course Offering Schedule

> Output representation of the course offering schedules to the course
    offering.

# Course Offering Schedule

Output representation of the course offering schedules to the course offering.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| courseSchedules | Course Offering Schedule Output Details[] | Course offering schedules of a course offering. | Big, 64.0 | 64.0 |
| failureCount | Integer | Number of schedules that failed. | Big, 64.0 | 64.0 |
| status | String | Status of the transaction. | Big, 64.0 | 64.0 |
| successCount | Integer | Number of schedules that were added successfully. | Big, 64.0 | 64.0 |

## Code Examples

```
{
  "successCount": 1,
  "failureCount": 1,
  "status": "PARTIAL_SUCCESS",
  "courseSchedule": [
    {
      "success": true,
      "courseOfferingScheduleId": "0xAxx0000000001EAA",
      "errors": []
    },
    {
      "success": false,
      "courseOfferingScheduleId": null,
      "errors": [
        {
          "message": "End time < Start time at Course Offering Schedule",
          "field": "courseSchedule.endTime"
        },
        {
          "message": "Type is invalid",
          "field": "courseSchedule.type"
        }
      ]
    }
  ]
}
```

## Related Topics

- Course Offering Schedule Output Details (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_course_offering_schedule_output_detail.htm)
