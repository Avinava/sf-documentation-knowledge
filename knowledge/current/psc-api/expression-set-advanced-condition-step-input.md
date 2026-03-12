---
title: "Expression Set Advanced Condition Step Input"
domain: psc-api
topic: expression-set-advanced-condition-step-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.051Z
estimatedTokens: 189
keywords: [Expression, Advanced, Condition, Step, Input, representation]
---

# Expression Set Advanced Condition Step Input

> Input representation of an advanced condition step in an expression
      set.

# Expression Set Advanced Condition Step Input

Input representation of an advanced condition step in an expression set.

Root XML tag

<ExpressionSetAdvancedConditionStepInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| condition​Logic | String | Condition that’s defined for the advanced condition. For example, if all conditions are met or any of the conditions are met. | Required | 58.0 |
| criteria | Expression Set Condition Criteria Input[] | List of condition criteria in an expression set. | Required | 58.0 |
| result​Parameter | String | Expression set definition version variable associated with the result of the step. | Required | 58.0 |

## Code Examples

```
"advancedCondition" : {
            "conditionLogic" : "1",
              "criteria" : [ {
                "operator" : "Equals",
                "sequenceNumber" : 1,
                "sourceFieldName" : "a",
                "value" : "0",
                "valueType" : "Literal"
              } ],
            "resultParameter" : "condition_output__1"
          }
```

## Related Topics

- Expression Set Condition Criteria Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_expression_set_condition_criteria.htm)
