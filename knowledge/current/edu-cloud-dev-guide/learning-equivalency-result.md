---
title: "Learning Equivalency Result"
domain: edu-cloud-dev-guide
topic: learning-equivalency-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:29.623Z
estimatedTokens: 92
keywords: [Learning, Equivalency, Result]
---

> Output representation of the response for learning equivalency.

# Learning Equivalency Result

Output representation of the response for learning equivalency.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| equivalencies | Learning Equivalency Item[] | List of learning equivalencies matching the search criteria. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "equivalencies": [
    {
      "name": "English Transfer Equivalency",
      "customAttributes": [ ],
      "isActive": true,
      "learningEquivalencyId": "1VXSG000000015l4AA",
      "learningEquivalencyType": "General",
      "learningProgramIds": [ "0u2SG0000004bXFYAY"],
      "source": {
        "learningAchievementId": "0u9SG0000002aYrYAI",
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
        {
          "learningAchievementId": "0u9SG0000003nk9YAA",
          "learnings": [
            {
              "duration": 3,
              "durationUnit": "Credit Hours",
              "learningId": "0tySG0000007R8LYAU",
              "minimumLetterGrade": null,
              "minimumNumericGrade": 1,
              "name": "ENG 1001",
              "provider": "",
              "referencedLearningId": "0vYSG0000004oO12AI"
            }
          ],
          "relationship": "AND"
        }
      ]
    },
    {
      "customAttributes": [
        
      ],
      "isActive": true,
      "learningEquivalencyId": "1VXSG00000001lh4AA",
      "learningEquivalencyType": "General",
      "learningProgramIds": [
        
      ],
      "name": "English Equivalency",
      "source": {
        "learningAchievementId": "0u9SG0000002aYrYAI",
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
          "learningAchievementId": "0u9SG0000003WEfYAM",
          "learnings": [
            {
              "duration": 3,
              "durationUnit": "Credit Hours",
              "learningId": "0tySG0000007R8LYAU",
              "minimumLetterGrade": null,
              "minimumNumericGrade": null,
              "name": "ENG 1001",
              "provider": "UCLA",
              "referencedLearningId": "0vYSG0000004oO12AI"
            },
            {
              "duration": 2,
              "durationUnit": "Credit Hours",
              "learningId": "0tySG0000006HuDYAU",
              "minimumLetterGrade": null,
              "minimumNumericGrade": null,
              "name": "B.S in Computer Science",
              "provider": "UCLA",
              "referencedLearningId": "0u2SG0000004bXFYAY"
            }
          ],
          "relationship": "AND"
        }
      ]
    }
  ]
}
```

## Related Topics

- Learning Equivalency Item (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learning_equivalency_output_item.htm)
