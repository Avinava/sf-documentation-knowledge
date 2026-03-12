---
title: "Learning Outcome Item"
domain: edu-cloud-dev-guide
topic: learning-outcome-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.088Z
estimatedTokens: 304
keywords: [Learning, Outcome, Item, Output, representation]
---

# Learning Outcome Item

> Output representation of the details of the learning outcome item.

# Learning Outcome Item

Output representation of the details of the learning outcome item.

Sample Output

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| category | String | Category associated with the learning outcome item. | Small, 62.0 | 62.0 |
| duration | Double | Allocated length of time for completion of the learning. | Small, 62.0 | 62.0 |
| durationUnit | String | Unit of measurement for the length of time for completion.Valid values are:Credit HoursClock HoursNo CreditContinuing Education UnitsOthers | Small, 62.0 | 62.0 |
| isPrimary | Boolean | Indicates whether the learning outcome item is primary (true) or not (false). | Small, 62.0 | 62.0 |
| learning​AchievementId | String | ID associated with the learning achievement. | Small, 62.0 | 62.0 |
| learningId | String | Unique ID of the learning program. | Small, 62.0 | 62.0 |
| learning​OutcomeId | String | Unique ID of the learning outcome. | Small, 62.0 | 62.0 |
| minimum​NumericGrade | Double | Minimum numeric grade required to achieve the learning outcome. | Small, 62.0 | 62.0 |
| name | String | Name of the learning outcome. | Small, 62.0 | 62.0 |

## Code Examples

```
[
  {
    "learningOutcome": {
      "learningOutcomeId": "0uESB00000000WI2AY",
      "duration": 4,
      "durationUnit": "Credit Hours"
    },
    "learning": {
      "type": "Learning Course",
      "learningCourseId": "0tyxx00000002ppAAA",
      "name": "Survey of Calculus 1",
      "subjectAbbreviation": "CALC",
      "courseNumber": 2233,
      "minimumGrade": 3
    }
  },
  {
    "learningOutcome": {
      "learningOutcomeId": "0uESB00000000WJ2AY"
    },
    "learning": {
      "type": "Learning Course",
      "learningCourseId": "0tyxx00000002pqAAA",
      "name": "Analytic Geometry & Calculus 1",
      "subjectAbbreviation": "AGC",
      "courseNumber": 501,
      "minimumGrade": 2
    }
  }
]
```
