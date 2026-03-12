---
title: "Achievement Contributor Input"
domain: edu-cloud-dev-guide
topic: achievement-contributor-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.713Z
estimatedTokens: 177
keywords: [Achievement, Contributor, Input, representation, group, mapping]
---

# Achievement Contributor Input

> Input representation of contributor for a group achievement mapping.

# Achievement Contributor Input

Input representation of contributor for a group achievement mapping.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| courseExternalId | Edu External ID Details Input | External ID of the course. | Optional | 62.0 |
| id | String | ID that contributes to this group achievement. | Optional | 62.0 |
| minimumGrade | Double | Minimum grade required for given achievement. | Optional | 62.0 |
| programExternalId | Edu External ID Details Input | External ID of the program. | Optional | 62.0 |
| type | String | Type of contributor for given group achievement. | Optional | 62.0 |

## Code Examples

```
{
  "achievementContributors": [
    {
      "id": "String",
      "minimumGrade": "Double",
      "type": "AchievementContributorTypeEnum",
      "courseExternalId": {
        "fieldName": "external_course_id",
        "fieldValue": "12345"
      },
      "programExternalId": {
        "fieldName": "program_course_id",
        "fieldValue": "12345"
      }
    }
  ]
}
```

## Related Topics

- Edu External ID
                        Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_edu_external_id_detail.htm)
