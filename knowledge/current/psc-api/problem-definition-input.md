---
title: "Problem Definition Input"
domain: psc-api
topic: problem-definition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.206Z
estimatedTokens: 264
keywords: [Problem, Definition, Input, representation]
---

# Problem Definition Input

> Input representation for the problem definition.

# Problem Definition Input

Input representation for the problem definition.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| associatedGoal​Assignments | Goal Assignment Input[] | Associated goal assignments for the problem. | Required | 57.0 |
| category | String | Category of the problem. | Required | 57.0 |
| codeId | String | Code ID of the problem. | Required | 57.0 |
| description | String | Description of the problem. | Required | 57.0 |
| id | String | ID of the problem. | Required | 57.0 |
| priority | String | Priority of the problem. | Required | 57.0 |
| problemDefinitionId | String | Problem definition ID of the problem. | Required | 57.0 |
| problemTasks | Care Plan Tasks Input | Details of the care plan tasks for the problem. | Required | 57.0 |
| sequenceNumber | Integer | Sequence number of the problem. | Required | 57.0 |
| title | String | Title of the problem. | Required | 57.0 |
| usageType | String | Usage type of the problem. | Required | 57.0 |

## Related Topics

- Goal Assignment
                        Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_goal_assignment_input.htm)
- Care Plan Tasks
                        Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_care_plan_task_input.htm)
