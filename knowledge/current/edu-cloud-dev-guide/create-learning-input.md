---
title: "Create Learning Input"
domain: edu-cloud-dev-guide
topic: create-learning-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.781Z
estimatedTokens: 373
keywords: [Learning, Input, representation, objects, outcomes, foundations]
---

# Create Learning Input

> Input representation of the details to create learning objects, related outcomes, and
    foundations.

# Create Learning Input

Input representation of the details to create learning objects, related outcomes, and foundations.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| corequisites | Group Achievement Mapping Input[] | List of the achievement mappings that are a part of the corequisite set. This list contains co requisites that must be fulfilled concurrently with this learning. | Optional | 62.0 |
| learning | Learning Input | Learning record that contains the attributes of the course or program. | Required | 62.0 |
| outcomes | Single Achievement Mapping Input[] | List of the achievement mappings that are a part of the outcomes set. These are concrete achievements that learners are expected to accomplish upon completion. | Optional | 62.0 |
| prerequisites | Group Achievement Mapping Input[] | List of the achievement mappings that are a part of the prerequisite set. This list contains the prerequisites that must be met before enrolling in this learning. | Optional | 62.0 |
| recommended | Group Achievement Mapping Input[] | List of the achievement mappings that are a part of the recommended set. | Optional | 62.0 |
| skills | Skill Achievement Mapping Input[] | List of the skill achievement mappings that associate specific skills with this learning. This list defines the skills that a learner is expected to acquire or improve through this learning. | Optional | 62.0 |

## Code Examples

```
{
  "learning": {
    "type": "Learning Course",
    "name": "Advanced Data Structures and Algorithms",
    "provider": "001LT000009puL0YAI",
    "description": "This course covers advanced concepts in data structures and algorithms, with a focus on efficient problem-solving and coding techniques.",
    "courseLevelDescription": "Graduate-level course focusing on advanced data structures and algorithms.",
    "subjectAbbreviation": "CS",
    "fieldOfStudy": "Computer Science",
    "courseNumber": 601,
    "active": true,
    "activeFromDate": "2024-09-01T00:00:00.00Z",
    "activeToDate": "2025-12-31T23:59:59.00Z",
    "duration": 4,
    "durationUnit": "Credit Hours",
    "cipCode": "11.0101",
    "academicLevel": "Graduate"
  },
  "prerequisites": [
    {
      "type": "Group Achievement",
      "achievementContributors": [
        {
          "id": "0tyLT00000009LOYAY",
          "minimumGrade": 7,
          "type": "Learning"
        },
        {
          "id": "0tyLT00000009LPYAY",
          "minimumGrade": 6.5,
          "type": "Learning"
        }
      ]
    }
  ],
  "corequisites": [
    {
      "type": "Single Achievement",
      "minimumGrade": 3,
      "duration": 3,
      "durationUnit": "Credit Hours",
      "learningId": "0tyLT00000009LQYAY"
    }
  ],
  "recommended": [
    {
      "type": "Single Achievement",
      "minimumGrade": 3,
      "duration": 3,
      "durationUnit": "Credit Hours",
      "learningId": "0tyLT00000009LRYAY"
    }
  ],
  "outcomes": [
    {
      "type": "Single Achievement",
      "minimumGrade": 3,
      "duration": 4,
      "durationUnit": "Credit Hours",
      "learningAchievementId": "0u9LT00000004oWYAQ"
    }
  ]
}
```

## Related Topics

- Group
                        Achievement Mapping Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_abstract_achievement_mappin.htm)
- Learning Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_learnin.htm)
- Single
                        Achievement Mapping Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_concrete_achievement_mappin.htm)
- Skill
                        Achievement Mapping Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_skill_achievement_mappin.htm)
