---
title: "Action Plan Template Item Task Input"
domain: psc-api
topic: action-plan-template-item-task-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.804Z
estimatedTokens: 234
keywords: [Action, Plan, Template, Item, Task, Input, representation, assigned]
---

# Action Plan Template Item Task Input

> Input representation for the task assigned to an action plan
      template item.

# Action Plan Template Item Task Input

Input representation for the task assigned to an action plan template item.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assignedTo | String | ID of the user to whom you want to assign the task. | Optional | 57.0 |
| comment | String | Comments on the task. | Optional | 57.0 |
| dueDate | String | Due date of the task. | Optional | 57.0 |
| id | String | ID of the task record. | Optional | 57.0 |
| isRequired | Boolean | Indicates whether the task is required (true) or not (false). | Optional | 57.0 |
| priority | String | Priority of the task. Possible values are:HighLowNormal | Required | 57.0 |
| status | String | Status of the task. Possible values are:CompletedDeferredIn ProgressNot StartedWaiting on someone else | Optional | 57.0 |
| subject | String | The subject line of the task. | Required | 57.0 |
