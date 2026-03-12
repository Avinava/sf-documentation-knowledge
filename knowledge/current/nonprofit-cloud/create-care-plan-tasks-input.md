---
title: "Create Care Plan Tasks Input"
domain: nonprofit-cloud
topic: create-care-plan-tasks-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.674Z
estimatedTokens: 257
keywords: [Care, Plan, Tasks, Input, representation, task]
---

# Create Care Plan Tasks Input

> Input representation of the request to create care plan task.

# Create Care Plan Tasks Input

Input representation of the request to create care plan task.

Root XML tag

<CarePlanTasksInputRepresentation>

JSON example

```

```

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| carePlanId | String | ID of the care plan or case for a given care team. | Required | 56.0 |
| subject | String | Subject of the task assigned to the care plan. | Optional | 56.0 |
| dueDate | String | Due date of the task assigned to the care plan. | Optional | 56.0 |
| status | String | Status of the task assigned to the care plan, such as In Progress or Completed. | Optional | 56.0 |
| priority | String | Priority of the task assigned to the care plan. | Optional | 56.0 |
| comment | String | Comments made on the care plan task. | Optional | 56.0 |
| assignedTo | String | ID of the user who is assigned the task. | Optional | 56.0 |
| id | String | ID of the task record assigned to the care plan. | Optional | 56.0 |

## Code Examples

```
{
  "tasks": {
    "records": [
      {
        "subject": "Update CP Edit GOAL ASSIGNEMENT Task 990",
        "dueDate": "2023-19-08T00:00:00.000Z",
        "status": "Not Started",
        "priority": "Low",
        "comment": "Update CP Edit GOAL ASSIGNEMENT Task 990",
        "assignedTo": "005xx000001YkA1AAK",
        "id": "00Txx000003rMTcEAM"
      }
    ]
  }
}
```
