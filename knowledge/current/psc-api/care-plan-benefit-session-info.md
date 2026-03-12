---
title: "Care Plan Benefit Session Info"
domain: psc-api
topic: care-plan-benefit-session-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.731Z
estimatedTokens: 164
keywords: [Care, Plan, Benefit, Session, Info, Output, representation, enrolled, sessions]
---

# Care Plan Benefit Session Info

> Output representation of the details of a benefit and its enrolled
      benefit sessions in a care plan.

# Care Plan Benefit Session Info

Output representation of the details of a benefit and its enrolled benefit sessions in a care plan.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| assignmentCount | Integer | Number of participants enrolled to the benefit. | Small, 58.0 | 58.0 |
| benefitId | String | ID of the benefit record. | Small, 58.0 | 58.0 |
| benefitName | String | Name of the benefit. | Small, 58.0 | 58.0 |
| sessionEnrolleeInfo | Care Plan Session Enrollee Info List | List of participants enrolled to benefit sessions of the specified benefit. | Small, 58.0 | 58.0 |

## Related Topics

- Care Plan Session Enrollee Info List (atlas.en-us.psc_api.meta/psc_api/connect_responses_care_plan_session_enrollee_info_list.htm)
