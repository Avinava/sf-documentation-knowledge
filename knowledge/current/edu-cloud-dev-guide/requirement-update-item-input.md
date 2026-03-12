---
title: "Requirement Update Item Input"
domain: edu-cloud-dev-guide
topic: requirement-update-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.848Z
estimatedTokens: 151
keywords: [Requirement, Item, Input, representation, learning, requirements, prerequisites, corequisites, recommendations]
---

# Requirement Update Item Input

> Input representation of the learning requirements, such as prerequisites, corequisites,
    and recommendations during the update.

# Requirement Update Item Input

Input representation of the learning requirements, such as prerequisites, corequisites, and recommendations during the update.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| createRecords | Group Achievement Mapping Input[] | List of new prerequisites, corequisites, and recommendations to be created. | Optional | 62.0 |
| deleteRecords | Learning Foundation Item Lookup Input[] | List of prerequisites, corequisites, and recommendations to be deleted. | Optional | 62.0 |

## Code Examples

```
{
  "prerequisites": {
    "createRecords": [
      {
        "type": "Single Achievement",
        "minimumGrade": 7,
        "duration": 1,
        "durationUnit": "Credit Hours",
        "learningAchievementId": "0u9LT00000004pBYAQ"
      },
      {
        "type": "Group Achievement",
        "achievementContributors": [
          {
            "id": "0tyLT00000009LcYAI",
            "minimumGrade": 6,
            "type": "Learning"
          },
          {
            "id": "0tyLT00000009LdYAI",
            "minimumGrade": 7,
            "type": "Learning"
          }
        ]
      }
    ],
    "deleteRecords": [
      {
        "foundationItemId": "0wwLT00000004gLYAQ"
      },
      {
        "foundationItemId": "0wwLT00000004elYAA"
      }
    ]
  }
}
```

## Related Topics

- Group
                        Achievement Mapping Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_abstract_achievement_mappin.htm)
- Learning
                        Foundation Item Lookup Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_learning_foundation_item_looku.htm)
