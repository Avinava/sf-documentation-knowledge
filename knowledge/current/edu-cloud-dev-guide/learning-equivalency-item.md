---
title: "Learning Equivalency Item"
domain: edu-cloud-dev-guide
topic: learning-equivalency-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:42.539Z
estimatedTokens: 275
keywords: [Learning, Equivalency, Item, Output, representation, source, target, mappings]
---

# Learning Equivalency Item

> Output representation of a single learning equivalency with its source and target
    mappings.

# Learning Equivalency Item

Output representation of a single learning equivalency with its source and target mappings.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| customAttributes | Custom Field[] | List of custom attributes associated with the learning equivalency. | Big, 66.0 | 66.0 |
| isActive | Boolean | Indicates if the equivalency is active. | Big, 66.0 | 66.0 |
| learningEquivalencyId | String | ID of the learning equivalency. | Big, 66.0 | 66.0 |
| learningEquivalencyType | String | Type of the learning equivalency. | Big, 66.0 | 66.0 |
| learningProgramIds | String[] | List of learning program IDs associated with this equivalency. | Big, 66.0 | 66.0 |
| name | String | The name of the learning equivalency. | Big, 66.0 | 66.0 |
| source | Learnings Mapping[] | Source learning mappings that can be substituted by the target learnings. | Big, 66.0 | 66.0 |
| target | Learnings Mapping[] | Target learning mappings that can substitute the source learnings. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "name": "English Transfer Equivalency Updated",
  "customAttributes": [],
  "isActive": false,
  "learningEquivalencyId": "1VXSG000000015l4AA",
  "learningEquivalencyType": "General",
  "learningProgramIds": ["0u2SG0000004bXFYAY"],
  "startDate": "2026-01-01",
  "endDate": "2029-12-25",
  "status": "Draft",
  "isPublished": false,
  "category": "International students cat",
  "source": {
    "learningAchievementId": "0u9SG0000002aYrYAI",
    "learningAchievementRecordType": "AchievementGroup",
    "learnings": [
      {
        "duration": 3,
        "durationUnit": "Credit Hours",
        "learningId": "0tySG0000007RRhYAM",
        "minimumLetterGrade": null,
        "minimumNumericGrade": 2,
        "name": "ENG 101",
        "description": "ENG 101 Course",
        "provider": "Allan Hancock Community College",
        "referencedLearningId": "1W3SG0000000N1R0AU"
      }
    ],
    "relationship": "AND"
  },
  "target": [
    {
      "learningAchievementId": "0u9SG0000002aaTYAQ",
      "learningAchievementRecordType": "AchievementGroupAll",
      "learnings": [
        {
          "duration": 3,
          "durationUnit": "Credit Hours",
          "learningId": "0tySG000000EWzJYAW",
          "minimumLetterGrade": null,
          "minimumNumericGrade": 8,
          "name": "ENG 1002",
          "description": "ENG 1002 Course",
          "provider": "Connected College",
          "referencedLearningId": "0vYSG0000006hrt2AA"
        }
      ],
      "relationship": "AND"
    }
  ]
}
```

## Related Topics

- Custom Field (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_custom_field.htm)
- Learnings Mapping (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learnings_mapping.htm)
