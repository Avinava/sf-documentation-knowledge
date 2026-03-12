---
title: "Create Learnings Input"
domain: edu-cloud-dev-guide
topic: create-learnings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.785Z
estimatedTokens: 85
keywords: [Learnings, Input, representation]
---

# Create Learnings Input

> Input representation of the details of the request to create learnings.

# Create Learnings Input

Input representation of the details of the request to create learnings.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| learnings | Create Learning Input[] | List of learning requests to be created. | Required | 62.0 |

## Code Examples

```
{
  "learnings": [
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
  ]
}
```

## Related Topics

- Create Learning
                        Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_create_learning_input.htm)
