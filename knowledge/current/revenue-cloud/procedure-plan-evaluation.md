---
title: "Procedure Plan Evaluation"
domain: revenue-cloud
topic: procedure-plan-evaluation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.131Z
estimatedTokens: 187
keywords: [Procedure, Plan, Evaluation, Output, representation, evaluation, details, procedure, plan, definition.]
---

# Procedure Plan Evaluation

> Output representation of the evaluation details of a procedure plan
    definition.

# Procedure Plan Evaluation

Output representation of the evaluation details of a procedure plan definition.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorMessage | String | Message indicating the error details, if any. | Small, 62.0 | 62.0 |
| id | String | ID of the object used for evaluation. | Small, 62.0 | 62.0 |
| isSuccess | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 62.0 | 62.0 |
| primaryObject | String | Name of the object used for evaluation. | Small, 62.0 | 62.0 |
| result | Procedure Plan Evaluation Result[] | Results from the procedure plan evaluation. | Small, 62.0 | 62.0 |

## Code Examples

```
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
```

## Related Topics

- Procedure Plan Evaluation Result (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_evaluation_result.htm)
