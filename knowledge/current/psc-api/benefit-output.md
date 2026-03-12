---
title: "Benefit Output"
domain: psc-api
topic: benefit-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.669Z
estimatedTokens: 287
keywords: [Benefit, Output, representation, assignment]
---

# Benefit Output

> Output representation of the benefit assignment
  details.

# Benefit Output

Output representation of the benefit assignment details.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| associatedAction​PlanTemplates | Action Plan Template List | Action plan templates associated with the benefit. | Small, 56.0 | 56.0 |
| benefitFrequency | String | Frequency at which the benefit is applied. | Small, 55.0 | 55.0 |
| description | String | Description of the benefit. | Small, 56.0 | 56.0 |
| enrollmentCount | Integer | Number of times the benefit is applicable to an individual. | Small, 55.0 | 55.0 |
| id | String | ID of the benefit record. | Small, 55.0 | 55.0 |
| isActive | Boolean | Indicates whether the benefit record is active (true) or not (false). | Small, 55.0 | 55.0 |
| maximumAmount | Double | Maximum amount that can be disbursed during an assignment period. | Small, 55.0 | 55.0 |
| name | String | Name of the benefit record. | Small, 55.0 | 55.0 |
| programId | String | ID of the program associated with the benefit. | Small, 57.0 | 57.0 |
| status | String | Status of the benefit record. | Small, 55.0 | 55.0 |

## Related Topics

- Action Plan
                  Template List (atlas.en-us.psc_api.meta/psc_api/connect_responses_action_plan_template_list.htm)
