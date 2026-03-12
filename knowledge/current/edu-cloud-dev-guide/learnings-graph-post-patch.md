---
title: "Learnings Graph (POST, PATCH)"
domain: edu-cloud-dev-guide
topic: learnings-graph-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.935Z
estimatedTokens: 325
keywords: [Learnings, Graph, POST, PATCH, learning, include, achievements, their, associations, Additionally]
---

# Learnings Graph (POST, PATCH)

> Create a learning graph to include
      details of learnings, achievements, and their associations. Additionally, update the fields in
      the learning graph.

# Learnings Graph (POST, PATCH)

Create a learning graph to include details of learnings, achievements, and their associations. Additionally, update the fields in the learning graph.

Resource

```

```

Resource Example

```

```

Available version

62.0

HTTP methods

PATCH, POST

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| learnings | Update Learning Input[] | List of learning requests to be updated. | Required | 62.0 |

Response body for PATCH

[Manage Learnings](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_create_learnings_output.htm "Output representation of the results of new learning objects, such as courses or programs.")

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| learnings | Create Learning Input[] | List of learning requests to be created. | Required | 62.0 |

Response body for POST

[Manage Learnings](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_create_learnings_output.htm "Output representation of the results of new learning objects, such as courses or programs.")

## Code Examples

```
/connect/education/academic-operations/learnings
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/education/academic-operations/learnings
```

```
{
  "learnings": [
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
  ]
}
```

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

- Update Learning
                        Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_update_learning_input.htm)
- Manage Learnings (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_create_learnings_output.htm)
- Create Learning
                        Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_create_learning_input.htm)
- Manage
              Learnings (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_create_learnings_output.htm)
