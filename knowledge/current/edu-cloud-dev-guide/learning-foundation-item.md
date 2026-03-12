---
title: "Learning Foundation Item"
domain: edu-cloud-dev-guide
topic: learning-foundation-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.079Z
estimatedTokens: 447
keywords: [Learning, Foundation, Item, Output, representation, associated, prerequisite, corequisite, recommended]
---

# Learning Foundation Item

> Output representation of a foundation item associated with a learning object, such as a
    prerequisite, corequisite, or recommended item.

# Learning Foundation Item

Output representation of a foundation item associated with a learning object, such as a prerequisite, corequisite, or recommended item.

Sample Output

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| category | String | Category of the foundation item. | Small, 62.0 | 62.0 |
| duration | Double | Duration allocated for the completion of the learning. | Small, 62.0 | 62.0 |
| durationUnit | String | Unit of the duration. | Small, 62.0 | 62.0 |
| fulfilledBy | Learning Fulfiller[] | List of the learning fulfillers that provides more details about how the foundation item can be fulfilled. | Small, 62.0 | 62.0 |
| fulfilled​Duration | Double | Completed duration toward fulfilling the learning foundation item. | Small, 62.0 | 62.0 |
| isFulfilled | Boolean | Indicates whether the learning foundation item is fulfilled (true) or unfulfilled (false). | Small, 62.0 | 62.0 |
| learning​AchievementId | String | Achievement ID of the learning object. | Small, 62.0 | 62.0 |
| learning​AchievementType | String | Type of achievement of the learning object. | Small, 62.0 | 62.0 |
| learning​Foundation​ItemId | String | ID of the learning foundation item. | Small, 62.0 | 62.0 |
| learningId | String | Learning ID associated with the learning foundation item. | Small, 62.0 | 62.0 |
| minimumNumeric​Grade | Double | Minimum numeric grade required to fulfill the learning foundation item. | Small, 62.0 | 62.0 |
| name | String | Name of the learning foundation item. | Small, 62.0 | 62.0 |
| remaining​Duration | Double | Remaining duration required to fulfill the learning foundation item. | Small, 62.0 | 62.0 |
| type | String | Type of foundation. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "corequisites": {
    "learningFoundationItemId": "0wwxx000000004r",
    "name": "Basic Cloud Computing",
    "learningId": "0tyxx00000002p5",
    "learningAchievementId": "0u9xx000000020DAAQ",
    "learningAchievementType": "LearningCourse",
    "minimumNumericGrade": 2.5,
    "duration": 4,
    "durationUnit": "Credit Hours",
    "type": "Prerequisite",
    "category": "Core",
    "isFulfilled": false,
    "fulfilledDuration": 0,
    "remainingDuration": 4,
    "fulfilledBy": [
      {
        "learningOutcome": {
          "learningOutcomeId": "0uESB00000000WI2AY",
          "duration": 4,
          "durationUnit": "Credit Hours"
        },
        "learning": {
          "type": "Learning Course",
          "learningCourseId": "0tyxx00000002ppAAA",
          "name": "Basic Calculus 1",
          "subjectAbbreviation": "CALC",
          "courseNumber": 1011,
          "minimumGrade": 3
        }
      }
    ]
  }
}
```

## Related Topics

- Learning Fulfiller (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learning_fulfille.htm)
