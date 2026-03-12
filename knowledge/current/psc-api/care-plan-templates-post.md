---
title: "Care Plan Templates (POST)"
domain: psc-api
topic: care-plan-templates-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.349Z
estimatedTokens: 273
keywords: [Care, Plan, Templates, POST, template, records]
---

# Care Plan Templates (POST)

> Create care plan template records.

# Care Plan Templates (POST)

Create care plan template records. Associate the benefits and goals with the care plan template.

Resource

```

```

Resource example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

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

Response body for POST

[Generic Output](atlas.en-us.psc_api.meta/psc_api/connect_responses_generic_output.htm "Output representation of the created care plan record or care plan template record.")

## Code Examples

```
/connect/careplan/careplan-templates/${carePlanTemplateId}/actions/${actionType}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X
/connect/careplan/careplan-templates/${carePlanTemplateId}/actions/${actionType}
```

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
- Generic Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_generic_output.htm)
