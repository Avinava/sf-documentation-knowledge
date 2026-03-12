---
title: "Manage Learnings"
domain: edu-cloud-dev-guide
topic: manage-learnings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.017Z
estimatedTokens: 152
keywords: [Manage, Learnings, Output, representation, results, new, learning, objects, courses, programs]
---

# Manage Learnings

> Output representation of the results of new learning objects, such as courses or
    programs.

# Manage Learnings

Output representation of the results of new learning objects, such as courses or programs.

Sample Output

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| details | Manage Learning[] | Details of the learning response. | Small, 62.0 | 62.0 |
| failureCount | Integer | Number of transactions that failed to be created. | Small, 62.0 | 62.0 |
| status | String | Status of a bulk transaction. | Small, 62.0 | 62.0 |
| successCount | Integer | Number of transactions that were created. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "successeCount": "integer",
  "failureCount": "integer",
  "status": "string",
  "details": [
    {
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
  ]
}
```

## Related Topics

- Manage Learning (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_create_learning_output.htm)
