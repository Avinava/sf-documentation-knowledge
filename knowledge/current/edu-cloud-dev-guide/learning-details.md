---
title: "Learning Details"
domain: edu-cloud-dev-guide
topic: learning-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:42.532Z
estimatedTokens: 238
keywords: [Learning, Output, representation, detailed, specific, item]
---

# Learning Details

> Output representation of the detailed information about a specific learning
    item.

# Learning Details

Output representation of the detailed information about a specific learning item.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| duration | Integer | The length of the course. | Big, 66.0 | 66.0 |
| durationUnit | String | The unit of measurement for the course duration | Big, 66.0 | 66.0 |
| learningId | String | The identifier of the parent learning record. | Big, 66.0 | 66.0 |
| minimumLetterGrade | String | The letter grade required for the learning. | Big, 66.0 | 66.0 |
| minimumNumericGrade | Integer | The numeric grade required for the learning. | Big, 66.0 | 66.0 |
| name | String | The name of learning. | Big, 66.0 | 66.0 |
| provider | String | The provider or institution offering the learning. | Big, 66.0 | 66.0 |
| referencedLearningId | String | The identifier of the child learning record. | Big, 66.0 | 66.0 |

## Code Examples

```
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
        ]
```
