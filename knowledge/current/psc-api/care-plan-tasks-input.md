---
title: "Care Plan Tasks Input"
domain: psc-api
topic: care-plan-tasks-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.878Z
estimatedTokens: 132
keywords: [Care, Plan, Tasks, Input, representation]
---

# Care Plan Tasks Input

> Input representation of the care plan tasks.

# Care Plan Tasks Input

Input representation of the care plan tasks.

Root XML tag

<CarePlanTasks>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adhocTasks | Care Plan Task Input[] | List of adhoc tasks for a care plan. | Optional | 56.0 |
| excludedTasks | Excluded Care Plan Task Input | List of tasks to be excluded for a care plan. | Optional | 56.0 |
| tasks | Care Plan Task Input[] | List of tasks assigned to a care plan. | Optional | 56.0 |

## Related Topics

- Care Plan Task Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_care_plan_task_input.htm)
- Excluded Care Plan Task Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_excluded_care_plan_task_input.htm)
