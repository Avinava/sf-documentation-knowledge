---
title: "Get Learning"
domain: edu-cloud-dev-guide
topic: get-learning
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:25.028Z
estimatedTokens: 307
keywords: [Learning, Output, representation, including, core, prerequisites, corequisites, recommended, items, outcomes]
---

# Get Learning

> Output representation of the details of a learning object, including its core details,
    prerequisites, corequisites, recommended items, and learning outcomes.

# Get Learning

Output representation of the details of a learning object, including its core details, prerequisites, corequisites, recommended items, and learning outcomes.

Sample Output

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| corequisites | Learning Foundation Item[] | List of the corequisites that’s associated with the learning program or course. | Small, 62.0 | 62.0 |
| errors | API Error Details[] | Validation errors for the API parameters. | Small, 62.0 | 62.0 |
| learning | Learning | Details about the learning object. | Small, 62.0 | 62.0 |
| outcomes | Learning Outcome Item[] | List of the learning outcomes that’s associated with the learning program or course. | Small, 62.0 | 62.0 |
| prerequisites | Learning Foundation Item[] | List of the prerequisites that’s associated with the learning program or course. | Small, 62.0 | 62.0 |
| recommended | Learning Foundation Item[] | List of the recommended courses or skills that’s associated with the learning program or course. | Small, 62.0 | 62.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "learning": {
    "learningId": "0tyxx00000002t3",
    "learningCourseId": "0vYxx00000002GL",
    "type": "Learning Course",
    "name": "Basic Cloud Computing",
    "provider": "001xx000003GehfAAC",
    "activeFromDate": "2020-01-01T12:00:00.00Z",
    "activeToDate": "2024-01-02T12:00:00.00Z",
    "duration": 6,
    "durationUnit": "Credit Hours",
    "cipCode": "01.0000",
    "academicLevel": "Graduate",
    "active": true,
    "subjectAbbreviation": "CLOUD",
    "courseNumber": 101,
    "fieldOfStudy": "Computer Science",
    "courseLevelDescription": "Basic Cloud Computing course",
    "description": "Basic Cloud Computing Course",
    "learningCourseCustomFields": {
      "custom_attr1": "value1",
      "custom_attr2": "value2"
    }
  },
  "prerequisites": [
    {
      "learningFoundationItemId": "0wwxx000000004r",
      "learningAchievementId": "0u9xx000000020DAAQ",
      "learningAchievementType": "LearningCourse",
      "minimumNumericGrade": 2.5,
      "duration": 4,
      "durationUnit": "Credit Hours",
      "fullfilledBy": [
        {
          "learningOutcomeItem": {
            "duration": 3,
            "durationUnit": "",
            "learningOutcomeId": "0uELT00000004nm2AA"
          },
          "learning": {
            "type": "LearningCourse",
            "courseLevelDescription": "",
            "courseNumber": "",
            "duration": 3,
            "durationUnit": "",
            "fieldOfStudy": "",
            "learningCourseCustomFields": {},
            "learningCourseId": "0vYLT00000009Bo2AI",
            "learningId": "0tyLT00000009LeYAI",
            "name": "OOPS",
            "subjectAbbreviation": ""
          }
        }
      ]
    },
    {
      "learningFoundationItemId": "0wwxx000000004s",
      "learningAchievementId": "0u9xx000000020DEAQ",
      "learningAchievementType": "Badge",
      "minimumNumericGrade": null,
      "duration": null,
      "durationUnit": null,
      "fullfilledBy": [
        {
          "learningOutcomeItem": {
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
            "minimumNumericGrade": 3,
            "duration": 3,
            "durationUnit": ""
          }
        }
      ]
    },
    {
      "learningFoundationItemId": "0wwxx000000004t",
      "learningAchievementId": "0u9xx000000028HEAQ",
      "learningAchievementType": "GroupAchievment",
      "minimumNumericGrade": null,
      "duration": null,
      "durationUnit": null,
      "fullfilledBy": [
        {
          "learningOutcomeItem": {
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
            "minimumNumericGrade": 3,
            "duration": 3,
            "durationUnit": ""
          }
        },
        {
          "learningOutcomeItem": {
            "learningOutcomeId": "0uESB00000000WJ2AY",
            "duration": 4,
            "durationUnit": "Credit Hours"
          },
          "learning": {
            "type": "Learning Course",
            "learningCourseId": "0tyxx00000002pqAAA",
            "name": "Analytic Geometry & Calculus 1",
            "subjectAbbreviation": "AGC",
            "courseNumber": 501,
            "minimumNumericGrade": 2,
            "duration": 3,
            "durationUnit": ""
          }
        }
      ]
    }
  ],
  "corequisites": [],
  "recommended": [],
  "outcomes": [
    {
      "category": "",
      "duration": 4,
      "durationUnit": "Credit Hours",
      "isPrimary": true,
      "learningAchievementId": "0u9LT00000005anYAA",
      "learningId": "0tyLT0000000AQnYAM",
      "learningOutcomeId": "0uELT00000005ZB2AY",
      "name": "LOI-0000111"
    },
    {
      "category": "",
      "duration": 4,
      "durationUnit": "Credit Hours",
      "isPrimary": false,
      "learningAchievementId": "0u9LT00000004oWYAQ",
      "learningId": "0tyLT0000000AQnYAM",
      "learningOutcomeId": "0uELT00000005ZC2AY",
      "name": "LOI-0000112"
    }
  ]
}
```

## Related Topics

- Learning Foundation Item (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learning_foundation_item_outpu.htm)
- API Error Details (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_education_api_error_detail.htm)
- Learning (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learning_outpu.htm)
- Learning Outcome Item (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learning_outcome_item_outpu.htm)
