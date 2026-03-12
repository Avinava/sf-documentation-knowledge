---
title: "Care Plan Task"
domain: psc-api
topic: care-plan-task
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.751Z
estimatedTokens: 327
keywords: [Care, Plan, Task, Output, representation]
---

# Care Plan Task

> Output representation for a care plan task.

# Care Plan Task

Output representation for a care plan task.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| assignedTo | String | ID of the user who is assigned the task. | Small, 56.0 | 56.0 |
| comment | String | Comments made on the care plan task. | Small, 56.0 | 56.0 |
| dependentTasks | Care Plan Task List | Details of the dependent tasks. | Small, 57.0 | 57.0 |
| displayOrder | Integer | The order in which the dependent tasks are displayed. | Small, 57.0 | 57.0 |
| dueDate | String | Due date of the task assigned to the care plan. | Small, 56.0 | 56.0 |
| id | String | ID of the task record assigned to the care plan. | Small, 56.0 | 56.0 |
| isRequired | Boolean | Indicates whether the task record is required (true) or not (false). | Small, 57.0 | 57.0 |
| priority | String | Priority of the task assigned to the care plan. | Small, 56.0 | 56.0 |
| relatedTo | String | Name of the user to whom the care plan is related. | Small, 56.0 | 56.0 |
| status | String | Status of the task assigned to the care plan, such as In Progress or Completed.The status comes from the Status field of the Task object. | Small, 56.0 | 56.0 |
| subject | String | Subject of the task assigned to the care plan. | Small, 56.0 | 56.0 |

## Related Topics

- Care
                  Plan Task List (atlas.en-us.psc_api.meta/psc_api/connect_responses_care_plan_task_list.htm)
