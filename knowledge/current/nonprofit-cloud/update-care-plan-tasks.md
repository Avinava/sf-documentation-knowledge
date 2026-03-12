---
title: "Update Care Plan Tasks"
domain: nonprofit-cloud
topic: update-care-plan-tasks
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.908Z
estimatedTokens: 336
keywords: [Care, Plan, Tasks, Resource, updating, task]
---

# Update Care Plan Tasks

> Resource for updating care plan task.

# Update Care Plan Tasks

Resource for updating care plan task.

Resource

```

```

Resource example

```

```

Available version

56.0

HTTP methods

PATCH

Request parameters for PATCH

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

Response body for PATCH

[Update Care Plan Task Output](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_update_care_plan_task_output.htm "Output representation of the request to update a care plan task.")

## Code Examples

```
/connect/careplan/care-plans/carePlanId/tasks
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/careplan/care-plans/carePlanId/tasks
```

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

## Related Topics

- Update Care Plan Task Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_update_care_plan_task_output.htm)
