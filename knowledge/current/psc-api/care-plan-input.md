---
title: "Care Plan Input"
domain: psc-api
topic: care-plan-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.870Z
estimatedTokens: 379
keywords: [Care, Plan, Input, representation]
---

# Care Plan Input

> Input representation of the care plan request.

# Care Plan Input

Input representation of the care plan request.

Root XML tag

<CarePlan>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| benefitAssignments | Benefit Assignment Input[] | Details of the benefit assignment information of the care plan. | Optional | 55.0 |
| carePlanTasks | Care Plan Tasks Input | Task details of a care plan. | Optional | 56.0 |
| carePlanTemplate​Id | String | ID of the service plan template associated with the care plan. | Optional | 55.0 |
| caseId | String | Case associated with the care plan. | Required | 55.0 |
| customFields | Custom Field Input[] | Custom fields details of a care plan. | Optional | 56.0 |
| description | String | Description of the care plan record. | Optional | 55.0 |
| endDate | String | Date until when the care plan is effective. | Optional | 55.0 |
| goalAssignments | Goal Assignment Input[] | Represents the goal assignment information of the care plan. | Optional | 55.0 |
| id | String | ID of the care plan record. | Optional | 55.0 |
| name | String | Name of the care plan record. | Required | 55.0 |
| participantId | String | ID of the account associated with the care plan. | Optional | 55.0 |
| problems | Problem Definition Input[] | Details of the problems associated with the care plan. | Required | 57.0 |
| startDate | String | Date from when the care plan is effective. | Optional | 55.0 |
| status | String | Status of the care plan. | Required | 55.0 |

## Related Topics

- Benefit Assignment Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_benefit_assignment_input.htm)
- Care Plan Tasks
                      Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_care_plan_tasks_input.htm)
- Custom Field Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_custom_field_input.htm)
- Goal Assignment Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_goal_assignment_input.htm)
- Problem Definition Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_problem_input.htm)
