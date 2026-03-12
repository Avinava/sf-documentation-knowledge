---
title: "Manage Learning"
domain: edu-cloud-dev-guide
topic: manage-learning
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.013Z
estimatedTokens: 319
keywords: [Manage, Learning, Output, representation, result, creating, includes, success, status, encountered, errors, IDs, objects, created, associated]
---

# Manage Learning

> Output representation of the result of creating a learning object. The result includes
    the success status, encountered errors, and IDs of the objects created or associated with the
    new learning record.

# Manage Learning

Output representation of the result of creating a learning object. The result includes the success status, encountered errors, and IDs of the objects created or associated with the new learning record.

Sample Output

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | API Error Details[] | Details of the processing errors. | Small, 62.0 | 62.0 |
| learning​AchievementIds | String[] | Learning achievement IDs created or updated with the learning. | Small, 62.0 | 62.0 |
| learning​CourseId | String | Learning course IDs created or updated with the learning. | Small, 62.0 | 62.0 |
| learning​FoundationItem​Ids | String[] | Learning foundation IDs created or updated with the learning. | Small, 62.0 | 62.0 |
| learningId | String | Learning IDs created or updated with the learning. | Small, 62.0 | 62.0 |
| learning​OutcomeItem​Ids | String[] | Learning outcome IDs created or updated with the learning. | Small, 62.0 | 62.0 |
| learning​ProgramId | String | Learning program IDs created or updated with the learning. | Small, 62.0 | 62.0 |
| success | Boolean | Indicates whether the learning creation is successful (true) or not (false). | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "details": {
    "success": "boolean",
    "learningId": "string",
    "learningCourseId": "string",
    "learningAchievementIds": [
      "string"
    ],
    "learningFoundationItemIds": [
      "string"
    ],
    "learningOutcomeItemIds": [
      "string"
    ],
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

## Related Topics

- API
                  Error Details (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_education_api_error_detail.htm)
