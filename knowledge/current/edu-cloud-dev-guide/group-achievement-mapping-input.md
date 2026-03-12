---
title: "Group Achievement Mapping Input"
domain: edu-cloud-dev-guide
topic: group-achievement-mapping-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.707Z
estimatedTokens: 143
keywords: [Group, Achievement, Mapping, Input, representation, shared, attributes, across]
---

# Group Achievement Mapping Input

> Input representation of a mapping to a given achievement that contains the shared
    attributes across the mapping types.

# Group Achievement Mapping Input

Input representation of a mapping to a given achievement that contains the shared attributes across the mapping types.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | String | The type of achievement mapping.Valid values are:Single AchievementGroup AchievementSkill Achievement | Required | 62.0 |
| achievementContributors | Achievement Contributor Input | Contributor to an achievement within a learning object. | Optional | 62.0 |

## Code Examples

```
{
  "createRecords": [
    {
      "type": "Single Achievement",
      "minimumGrade": 2.5,
      "duration": 4,
      "durationUnit": "Credit Hours",
      "learningId": "0tyxx00000003xyAAA"
    },
    {
      "type": "Single Achievement",
      "minimumGrade": 3,
      "duration": 5,
      "durationUnit": "Credit Hours",
      "learningId": "0tyxx00000003mqCAB"
    },
    {
      "type": "Group Achievement",
      "achievementContributors": [
        {
          "id": "0tyxx00000002mbAAA",
          "minimumGrade": 6,
          "type": "Learning"
        },
        {
          "id": "0tyxx00000002ppAAA",
          "minimumGrade": 5,
          "type": "Learning"
        }
      ]
    }
  ]
}
```

## Related Topics

- Achievement Contributor Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_achievement_contributo.htm)
