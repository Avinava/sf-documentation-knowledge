---
title: "Get Care Plan Tasks"
domain: nonprofit-cloud
topic: get-care-plan-tasks
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.858Z
estimatedTokens: 91
keywords: [Care, Plan, Tasks, Resource, getting, task, Output, representation]
---

# Get Care Plan Tasks

> Output representation of the request to get care plan task.

# Get Care Plan Tasks

Output representation of the request to get care plan task.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| subject | String | Subject of the task assigned to the care plan. | Small, 56.0 | 56.0 |
| dueDate | String | Due date of the task assigned to the care plan. | Small, 56.0 | 56.0 |
| status | String | Status of the task assigned to the care plan, such as In Progress or Completed. | Small, 56.0 | 56.0 |
| priority | String | Priority of the task assigned to the care plan. | Small, 56.0 | 56.0 |
| comment | String | Comments made on the care plan task. | Small, 56.0 | 56.0 |
| assignedTo | String | ID of the user who is assigned the task. | Small, 56.0 | 56.0 |

## Code Examples

```
/connect/careplan/care-plans/carePlanId/tasks
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/careplan/care-plans/carePlanId/tasks
```

```
{
  "carePlanTasks": {
    "adhocTasks": {
      "records": [
        {
          "subject": "Adhoc Task 19087899",
          "dueDate": "2022-08-09T00:00:00.000Z",
          "status": "In Progress",
          "priority": "High",
          "comment": "First Adhoc task 19082343254325",
          "assignedTo": "005xx000001YkA1AAK"
        },
        {
          "subject": "Adhoc Task 290889999",
          "dueDate": "2022-08-31T00:00:00.000Z",
          "status": "Not Started",
          "priority": "High",
          "comment": "Second Adhoc task 29083424324",
          "assignedTo": "005xx000001YkA1AAK"
        },
        {
          "subject": "Adhoc Task 390821324324",
          "dueDate": "2022-08-08T00:00:00.000Z",
          "status": "Not Started",
          "priority": "Low",
          "comment": "Third Adhoc task 39082343243245",
          "assignedTo": "005xx000001YkA1AAK"
        }
      ]
    }
  }
}
```

## Related Topics

- Get Care Plan Task Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_get_care_plan_task_output.htm)
