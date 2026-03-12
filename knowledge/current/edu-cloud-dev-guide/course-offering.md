---
title: "Course Offering"
domain: edu-cloud-dev-guide
topic: course-offering
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.970Z
estimatedTokens: 184
keywords: [Course, Offering, Output, representation]
---

# Course Offering

> Output representation of the course offering.

# Course Offering

Output representation of the course offering.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| details | Course Offering[] | List of details of each course offering and course offering schedule. | Big, 64.0 | 64.0 |
| failureCount | Integer | Number of course offerings that failed to be created. | Big, 64.0 | 64.0 |
| partialSuccess​Count | Integer | Number of course offerings that were partially successful. | Big, 64.0 | 64.0 |
| status | String | Status of the entire payload request. | Big, 64.0 | 64.0 |
| successCount | Integer | Number of course offerings that were successfully created. | Big, 64.0 | 64.0 |

## Code Examples

```
{
  "successCount": 1,
  "partialSuccessCount": 1,
  "failureCount": 1,
  "status": "PARTIAL_SUCCESS",
  "details": [
    {
      "status": "SUCCESS",
      "errors": [],
      "courseOfferingId": "0xAxx0000000001EAA",
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
    },
    {
      "success": "PARTIAL_SUCCESS",
      "courseOfferingId": "0xAxx0000000001EDD",
      "errors": [],
      "courseSchedule": [
        {
          "success": true,
          "courseOfferingScheduleId": "0eAxx0000000001EEE",
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
    },
    {
      "success": "FAILURE",
      "courseOfferingId": null,
      "errors": [
        {
          "message": "Academic Session is invalid",
          "field": "courseOffering.academicSessionId"
        }
      ],
      "courseSchedule": []
    }
  ]
}
```

## Related Topics

- Course Offering (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_course_offering_output_detail.htm)
