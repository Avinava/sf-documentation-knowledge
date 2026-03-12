---
title: "Procedure Plan Evaluation Result"
domain: revenue-cloud
topic: procedure-plan-evaluation-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.140Z
estimatedTokens: 132
keywords: [Procedure, Plan, Evaluation, Result, Output, representation, evaluation, result, procedure, plan, definition.]
---

# Procedure Plan Evaluation Result

> Output representation of the evaluation result of a procedure plan
    definition.

# Procedure Plan Evaluation Result

Output representation of the evaluation result of a procedure plan definition.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| context​Definition | String | Context definition that’s associated with the procedure plan evaluation. | Small, 62.0 | 62.0 |
| procedure​PlanSections | Procedure Plan Section Evaluation Runtime[] | Results from the procedure plan evaluation. | Small, 62.0 | 62.0 |

## Code Examples

```
"result":{
    "contextDefinition":"11ODU00000008Sw2AI",
    "procedurePlanSections":[]
  }
```

## Related Topics

- Procedure Plan Section Evaluation Runtime (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_section_evaluation_runtime.htm)
