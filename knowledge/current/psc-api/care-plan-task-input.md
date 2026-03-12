---
title: "Care Plan Task Input"
domain: psc-api
topic: care-plan-task-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.875Z
estimatedTokens: 304
keywords: [Care, Plan, Task, Input, representation, assigned]
---

# Care Plan Task Input

> Input representation for the task assigned to the care
    plan.

# Care Plan Task Input

Input representation for the task assigned to the care plan.

Root XML tag

<CarePlanTask>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assignedTo | String | ID of the user to whom the task is assigned. | Optional | 56.0 |
| comment | String | Comments made on the care plan task. | Optional | 56.0 |
| dueDate | String | Due date of the task assigned to the care plan. | Optional | 56.0 |
| id | String | ID of the task record assigned to the care plan. | Optional | 56.0 |
| isRequired | Boolean | Indicates whether the task field is required (true) or not (false). | Required | 57.0 |
| priority | String | Priority of the task assigned to the care plan. | Optional | 56.0 |
| status | String | Status of the task assigned to the care plan, such as In Progress or Completed.The status comes from the Status field of the Task object. | Optional | 56.0 |
| subject | String | Subject of the care plan task. | Optional | 56.0 |
| taskDefinitionId | String | ID of the task definition assigned to the care plan. | Optional | 57.0 |
| taskId | String | Task record ID associated with the care plan. | Optional | 57.0 |
