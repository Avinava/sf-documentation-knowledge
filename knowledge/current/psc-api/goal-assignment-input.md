---
title: "Goal Assignment Input"
domain: psc-api
topic: goal-assignment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.127Z
estimatedTokens: 395
keywords: [Goal, Assignment, Input, representation]
---

# Goal Assignment Input

> Input representation of the assignment of a goal.

# Goal Assignment Input

Input representation of the assignment of a goal.

Root XML tag

<GoalAssignment>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| associatedBenefit​Assignments | Benefit Assignment Input[] | Associated sub benefit assignments. | Required | 57.0 |
| associatedSubGoal​Assignments | Goal Assignment Input[] | Associated sub goal assignments. | Required | 57.0 |
| completionDate | String | Completion date of the assignment of a goal. | Optional | 56.0 |
| completion​Percentage | Double | Indicates the progress made on the assigned goal in percentage. | Optional | 55.0 |
| customFields | Custom Field Input[] | Custom field details of the goal assignment plan. | Optional | 56.0 |
| description | String | Description of a goal assignment. | Optional | 56.0 |
| goalAssigneeId | String | ID of the assignee associated with the goal assignment. | Optional | 55.0 |
| goalAssignmentTasks | Care Plan Tasks Input | Task details for a goal assignment. | Optional | 56.0 |
| goalDefinitionId | String | ID of the goal definition associated with the goal assignment. | Required | 55.0 |
| id | String | ID of the goal assignment record. | Required | 55.0 |
| priority | String | Priority of the assigned goal. | Optional | 55.0 |
| startDate | String | Start date of the assigned goal. | Optional | 55.0 |
| status | String | Status of the assigned goal. | Optional | 55.0 |
| targetCompletion​Date | String | Date when the assigned goal is expected to be completed. | Optional | 55.0 |

## Related Topics

- Benefit Assignment Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_benefit_assignment_input.htm)
- Custom Field
                      Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_custom_field_input.htm)
- Care Plan
                        Tasks Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_care_plan_tasks_input.htm)
