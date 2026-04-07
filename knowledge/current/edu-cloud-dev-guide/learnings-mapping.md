---
title: "Learnings Mapping"
domain: edu-cloud-dev-guide
topic: learnings-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:29.670Z
estimatedTokens: 125
keywords: [Learnings, Mapping, mappings, group]
---

> The mappings between learnings within the group.

# Learnings Mapping

The mappings between learnings within the group.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| learningAchievementId | String | The ID of the learning achievement. | Big, 66.0 | 66.0 |
| learnings | Learning Details[] | List of learning items within this mapping group. | Big, 66.0 | 66.0 |
| relationship | String | AND or OR relationship between learnings. | Big, 66.0 | 66.0 |

## Code Examples

```
"source": {
        "learningAchievementId": "0u9SG0000002aYrYAI",
        "learningAchievementRecordType": "LearningAchievement",
        "learnings": [
          {
            "duration": 3,
            "durationUnit": "Credit Hours",
            "learningId": "0tySG0000007RRhYAM",
            "minimumLetterGrade": null,
            "minimumNumericGrade": 2,
            "name": "ENG 101",
            "provider": "Allan Hancock Community College",
            "referencedLearningId": "1W3SG0000000N1R0AU"
          }
        ],
        "relationship": "AND"
      },
      "target": [
        {
          "learningAchievementId": "0u9SG0000002aaTYAQ",
          "learningAchievementRecordType": "LearningAchievement",
          "learnings": [
            {
              "duration": 3,
              "durationUnit": "Credit Hours",
              "learningId": "0tySG000000EWzJYAW",
              "minimumLetterGrade": null,
              "minimumNumericGrade": 8,
              "name": "ENG 1002",
              "provider": "Connected College",
              "referencedLearningId": "0vYSG0000006hrt2AA"
            }
          ],
          "relationship": "AND"
        },
  ]
}
```

## Related Topics

- Learning Details (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learning_details.htm)
