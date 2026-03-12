---
title: "Course Offering Error"
domain: edu-cloud-dev-guide
topic: course-offering-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.976Z
estimatedTokens: 104
keywords: [Course, Offering, Error, Output, representation, schedule]
---

# Course Offering Error

> Output representation of the error of the course offering schedule.

# Course Offering Error

Output representation of the error of the course offering schedule.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| field | String | Field where an error occurred. | Big, 64.0 | 64.0 |
| message | String | Error message in the creation or updation of the course offering. | Big, 64.0 | 64.0 |

## Code Examples

```
{
  "errors": [
    {
      "message": "Type is invalid",
      "field": "courseSchedule.type"
    }
  ]
}
```
