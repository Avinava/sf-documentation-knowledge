---
title: "Goal Assignment"
domain: psc-api
topic: goal-assignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.049Z
estimatedTokens: 511
keywords: [Goal, Assignment, Output, representation]
---

# Goal Assignment

> Output representation of the goal assignment details.

# Goal Assignment

Output representation of the goal assignment details.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| associatedBenefit​Assignments | Benefit Assignment List | Associated benefit assignments for the goal assignment. | Small, 57.0 | 57.0 |
| associatedSubGoal​Assignments | Goal Assignment List | Associated sub goals for the goal assignment. | Small, 57.0 | 57.0 |
| completionDate | String | Completion date of the assignment of a goal. | Small, 56.0 | 56.0 |
| completion​Percentage | Double | Indicates the progress made on the assigned goal in percentage. | Small, 55.0 | 55.0 |
| customFields | Custom Field Input[] | Custom field details of the goal assignment plan. | Small, 56.0 | 56.0 |
| description | String | Description of a goal assignment. | Small, 56.0 | 56.0 |
| goalAssigneeId | String | ID of the assignee associated with the goal assignment. | Small, 55.0 | 55.0 |
| goalAssignmentTasks | Care Plan Tasks Input | Task details for a goal assignment. | Small, 56.0 | 56.0 |
| goalDefinitionId | String | ID of the goal definition associated with the goal assignment record. | Small, 55.0 | 55.0 |
| goalDefinitionName | String | Name of the goal definition associated with the goal assignment record. | Small, 55.0 | 55.0 |
| goalType | String | Type of goal associated with the goal assignment record.Valid values are:GroupIndividual | Small, 55.0 | 55.0 |
| id | String | ID of the goal assignment record. | Small, 55.0 | 55.0 |
| priority | String | Priority of the assigned goal. | Small, 55.0 | 55.0 |
| startDate | String | Start date of the assigned goal. | Small, 55.0 | 55.0 |
| status | String | Status of the assigned goal. | Small, 55.0 | 55.0 |
| targetCompletion​Date | String | Date when the assigned goal is expected to be completed. | Small, 55.0 | 55.0 |
| taskJobStatus | String | Reserved for internal use. | Small, 56.0 | 56.0 |
| taskJobStatusReason | String | Reserved for internal use. | Small, 56.0 | 56.0 |

## Related Topics

- Benefit Assignment List (atlas.en-us.psc_api.meta/psc_api/connect_responses_benefit_assignment_list.htm)
- Goal Assignment List (atlas.en-us.psc_api.meta/psc_api/connect_responses_goal_assignment_list.htm)
- Custom Field Input (atlas.en-us.psc_api.meta/psc_api/connect_responses_custom_field_list.htm)
- Care Plan Tasks Input (atlas.en-us.psc_api.meta/psc_api/connect_responses_care_plan_tasks.htm)
