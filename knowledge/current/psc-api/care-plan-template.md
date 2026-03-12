---
title: "Care Plan Template"
domain: psc-api
topic: care-plan-template
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.762Z
estimatedTokens: 235
keywords: [Care, Plan, Template, Input, representation, benefit, goal, records, associated]
---

# Care Plan Template

> Input representation of the care plan template benefit and care plan
  template goal records associated with the care plan template.

# Care Plan Template

Input representation of the care plan template benefit and care plan template goal records associated with the care plan template.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| associatedAction​PlanTemplates | Action Plan Template List | List of the associated action plan template records. | Small, 56.0 | 56.0 |
| carePlanTemplate​Benefits | Care Plan Template Benefit List | List the benefit details of a care plan template. | Small, 55.0 | 55.0 |
| carePlanTemplate​Goals | Care Plan Template Goal List | List the goal details of a care plan template. | Small, 55.0 | 55.0 |
| id | String | ID of the care plan template record. | Small, 55.0 | 55.0 |
| name | String | Name of the care plan template record. | Small, 55.0 | 55.0 |
| status | String | Status of the care plan template record. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "carePlanTemplateBenefits": {
    "records": [
      {
        "associatedBenefit": {
          "id": "0jiRN000000000pYAA",
          "isActive": true,
          "name": "Rehab benefit"
        },
        "id": "1tbRN000000000VYAQ",
        "priority": "Low"
      },
      {
        "associatedBenefit": {
          "id": "0jiRN000000000fYAA",
          "isActive": true,
          "maximumAmount": 5000,
          "name": "Meditation benefit"
        },
        "id": "1tbRN0000000019YAA",
        "priority": "Low"
      }
    ]
  },
  "carePlanTemplateGoals": {
    "records": [
      {
        "associatedGoalDefinition": {
          "id": "1gdRN0000000006YAA",
          "name": "Career goal",
          "status": "Active",
          "type": "Individual"
        },
        "id": "1tgRN000000001JYAQ",
        "priority": "Low"
      },
      {
        "associatedGoalDefinition": {
          "id": "1gdRN000000000GYAQ",
          "name": "Goal with benefit",
          "status": "Active",
          "type": "Strategic"
        },
        "id": "1tgRN0000000027YAA",
        "priority": "Low"
      }
    ]
  },
  "id": "1stRN0000000006YAA",
  "name": "CPT 2",
  "status": "Published"
}
```

## Related Topics

- Action Plan Template List (atlas.en-us.psc_api.meta/psc_api/connect_responses_action_plan_template_list.htm)
- Care Plan Template Benefit List (atlas.en-us.psc_api.meta/psc_api/connect_responses_care_plan_template_benefit_list.htm)
- Care Plan Template Goal List (atlas.en-us.psc_api.meta/psc_api/connect_responses_care_plan_template_goal_list.htm)
