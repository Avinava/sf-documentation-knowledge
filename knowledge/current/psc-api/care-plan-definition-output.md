---
title: "Care Plan Definition Output"
domain: psc-api
topic: care-plan-definition-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.740Z
estimatedTokens: 226
keywords: [Care, Plan, Definition, Output, representation, record, goal, benefits]
---

# Care Plan Definition Output

> Output representation of the care plan definition record and its
      related goal definition and benefits.

# Care Plan Definition Output

Output representation of the care plan definition record and its related goal definition and benefits.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| benefitDefinition | Benefit Output | Benefit assignment details of the care plan template benefit.NoteWhen goal definition ID is specified in the API request, this property is unspecified. | Small, 56.0 | 56.0 |
| goalDefinition | Goal Definition Output | Goal assignment details of the care plan template goal.NoteWhen benefit ID is specified in the API request, this property is unspecified. | Small, 56.0 | 56.0 |
| id | String | ID of the definition record specified in the request. | Small, 56.0 | 56.0 |
| problemDefinition | Problem Definition Output | Details of the problem definition records. | Small, 57.0 | 57.0 |

## Code Examples

```
{
  "benefitDefinition": {
    "associatedActionPlanTemplates": {
      "records": [
        {
          "actionPlanTemplateItems": {
            "records": [
              {
                "actionPlanTemplateVersion": "0PTRM0000004DIK4A2",
                "id": "0PJRM00000001fV4AQ",
                "isRequired": false,
                "itemEntityType": "Task",
                "name": "benefit task 3"
              },
              {
                "actionPlanTemplateVersion": "0PTRM0000004DIK4A2",
                "id": "0PJRM0000004DpS4AU",
                "isRequired": false,
                "itemEntityType": "Task",
                "name": "benefit task 2"
              },
              {
                "actionPlanTemplateVersion": "0PTRM0000004DIK4A2",
                "id": "0PJRM00000001fU4AQ",
                "isRequired": false,
                "itemEntityType": "Task",
                "name": "benefit task 1"
              }
            ]
          },
          "id": "0PTRM0000004DIK4A2",
          "name": "Benefit Tasks",
          "status": "Final"
        },
        {
          "actionPlanTemplateItems": {
            "records": [
              {
                "actionPlanTemplateVersion": "0PTRM0000004DIK4A2",
                "id": "0PJRM00000001fV4AQ",
                "isRequired": false,
                "itemEntityType": "Task",
                "name": "benefit task 3"
              },
              {
                "actionPlanTemplateVersion": "0PTRM0000004DIK4A2",
                "id": "0PJRM0000004DpS4AU",
                "isRequired": false,
                "itemEntityType": "Task",
                "name": "benefit task 2"
              },
              {
                "actionPlanTemplateVersion": "0PTRM0000004DIK4A2",
                "id": "0PJRM00000001fU4AQ",
                "isRequired": false,
                "itemEntityType": "Task",
                "name": "benefit task 1"
              }
            ]
          },
          "id": "0PTRM0000004DIK4A2",
          "name": "Benefit Tasks",
          "status": "Final"
        },
        {
          "actionPlanTemplateItems": {
            "records": [
              {
                "actionPlanTemplateVersion": "0PTRM0000004DIK4A2",
                "id": "0PJRM00000001fV4AQ",
                "isRequired": false,
                "itemEntityType": "Task",
                "name": "benefit task 3"
              },
              {
                "actionPlanTemplateVersion": "0PTRM0000004DIK4A2",
                "id": "0PJRM0000004DpS4AU",
                "isRequired": false,
                "itemEntityType": "Task",
                "name": "benefit task 2"
              },
              {
                "actionPlanTemplateVersion": "0PTRM0000004DIK4A2",
                "id": "0PJRM00000001fU4AQ",
                "isRequired": false,
                "itemEntityType": "Task",
                "name": "benefit task 1"
              }
            ]
          },
          "id": "0PTRM0000004DIK4A2",
          "name": "Benefit Tasks",
          "status": "Final"
        }
      ]
    },
    "id": "0jiRM00000000JwYAI",
    "isActive": true,
    "name": "benefit 1"
  },
  "id": "0jiRM00000000JwYAI"
}
```

## Related Topics

- Benefit Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_benefit_output.htm)
- Goal Definition Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_goal_definition_output.htm)
- Problem Definition Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_problem_definition_output.htm)
