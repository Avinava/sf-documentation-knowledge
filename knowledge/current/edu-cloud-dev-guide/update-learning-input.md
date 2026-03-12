---
title: "Update Learning Input"
domain: edu-cloud-dev-guide
topic: update-learning-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.874Z
estimatedTokens: 222
keywords: [Learning, Input, representation, along, outcomes, foundations]
---

# Update Learning Input

> Input representation of the details of the learning along with related outcomes, and
    foundations for the update.

# Update Learning Input

Input representation of the details of the learning along with related outcomes, and foundations for the update.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| corequisites | Requirement Update Item Input | Requirement update item that’s a part of the corequisite set. | Optional | 62.0 |
| learning | Learning Input | Learning record to be updated. | Required | 62.0 |
| outcomes | Single Achievement Mapping Input[] | List of achievement mappings that’s a part of the outcome set. | Optional | 62.0 |
| prerequisites | Requirement Update Item Input | Requirement update item that’s a part of the prerequisite set. | Optional | 62.0 |
| recommended | Requirement Update Item Input | Requirement update item that’s a part of the recommended set. | Optional | 62.0 |

## Code Examples

```
{
  "learning": {
    "learningId": "0tyLT0000000AQnYAM",
    "learningCourseId": "0vYLT0000000AH72AM",
    "type": "Learning Course",
    "name": "Advanced Data Structures and Algorithms",
    "provider": "001LT000009puL0YAI",
    "description": "This course covers advanced concepts in data structures and algorithms, with a focus on efficient problem-solving and coding techniques.",
    "courseLevelDescription": "Graduate-level course focusing on advanced data structures and algorithms.",
    "subjectAbbreviation": "CS",
    "fieldOfStudy": "Computer Science",
    "courseNumber": 6011,
    "active": true,
    "activeFromDate": "2024-09-01T00:00:00.00Z",
    "activeToDate": "2025-12-31T23:59:59.00Z",
    "duration": 4,
    "durationUnit": "Credit Hours",
    "cipCode": "11.0101",
    "academicLevel": "Graduate"
  },
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
  },
  "corequisites": {},
  "recommended": {},
  "outcomes": []
}
```

## Related Topics

- Requirement
                        Update Item Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_requirement_update_ite.htm)
- Learning Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_learnin.htm)
- Single
                        Achievement Mapping Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_concrete_achievement_mappin.htm)
