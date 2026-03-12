---
title: "Course Offering Details"
domain: edu-cloud-dev-guide
topic: course-offering-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.973Z
estimatedTokens: 164
keywords: [Course, Offering, Output, representation, submitted, bulk]
---

# Course Offering Details

> Output representation of each course offering submitted in a bulk request.

# Course Offering Details

Output representation of each course offering submitted in a bulk request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| courseOffering​Id | String | ID of the created course offering. | Big, 64.0 | 64.0 |
| courseSchedules | Course Offering Schedule[] | List of details of each course offering schedule. | Big, 64.0 | 64.0 |
| errors | Course Offering Error[] | List of errors encountered during the creation of the course offering. | Big, 64.0 | 64.0 |
| status | String | Status of entire payload request. | Big, 64.0 | 64.0 |

## Code Examples

```
{
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

- Course Offering Schedule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_course_offering_schedule_output_detail.htm)
- Course Offering Error (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_course_offering_schedule_error_output.htm)
