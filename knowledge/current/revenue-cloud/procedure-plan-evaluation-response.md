---
title: "Procedure Plan Evaluation Response"
domain: revenue-cloud
topic: procedure-plan-evaluation-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.674Z
estimatedTokens: 176
keywords: [Procedure, Plan, Evaluation, Output, representation, definition]
---

# Procedure Plan Evaluation Response

> Output representation of the evaluation details of a procedure plan
    definition.

# Procedure Plan Evaluation Response

Output representation of the evaluation details of a procedure plan definition.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorMessage | String | Message indicating the error details, if any. | Small, 62.0 | 62.0 |
| isSuccess | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 62.0 | 62.0 |
| procedure​PlanDefinition​Name | String | Name of the procedure plan definition. | Small, 62.0 | 62.0 |
| procedure​Plan​Evaluations | Procedure Plan Evaluation[] | Evaluation details of the procedure plan. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "isSuccess":true,
  "procedurePlanEvaluations":[
  {
    "errorMessage":"",
    "id":"a01DU000000BylcYAC",
    "isSuccess":true,
    "primaryObject":"SignallingCustomEvaluation__c",
    "result":{
    "contextDefinition":"11ODU00000008Sw2AI",
    "procedurePlanSections":[]
  }
  }
  ]
  }
```

## Related Topics

- Procedure Plan Evaluation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_evaluation.htm)
