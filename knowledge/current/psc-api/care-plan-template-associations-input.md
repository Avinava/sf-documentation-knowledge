---
title: "Care Plan Template Associations Input"
domain: psc-api
topic: care-plan-template-associations-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.882Z
estimatedTokens: 202
keywords: [Care, Plan, Template, Associations, Input, representation, association, benefit, goal, records]
---

# Care Plan Template Associations Input

> Input representation of the association of the care plan template
      benefit and care plan template goal records with the care plan template.

# Care Plan Template Associations Input

Input representation of the association of the care plan template benefit and care plan template goal records with the care plan template.

Root XML tag

<CarePlanTemplateAssociationsInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| carePlanTemplate​Benefits | Care Plan Template Benefit Input[] | Represents a junction between a care plan template and a benefit. This object stores the benefit details of a care plan template. | Optional | 55.0 |
| carePlanTemplate​Goals | Care Plan Template Goal Input[] | Represents a junction between a care plan template and a goal definition. This object stores the goal details of a care plan template. | Optional | 55.0 |

## Code Examples

```
{
  "carePlanTemplateGoals": {
    "records": [
      {
        "goalDefinitionId": "1gdRN0000000006YAA",
        "priority": "High"
      },
      {
        "goalDefinitionId": "1gdRN0000000001YAA",
        "priority": "Medium"
      },
      {
        "goalDefinitionId": "1gdRN000000000GYAQ",
        "priority": "Low"
      }
    ]
  },
  "carePlanTemplateBenefits": {
    "records": [
      {
        "benefitId": "0jiRN000000000kYAA",
        "priority": "High"
      },
      {
        "benefitId": "0jiRN000000000fYAA",
        "priority": "Low"
      }
    ]
  }
}
```

## Related Topics

- Care
                        Plan Template Benefit Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_care_plan_template_benefit_input.htm)
- Care Plan
                        Template Goal Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_care_plan_template_goal_input.htm)
