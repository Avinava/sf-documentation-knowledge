---
title: "Expression Set Condition Expression Step"
domain: omnistudio
topic: expression-set-condition-expression-step
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.376Z
estimatedTokens: 127
keywords: [Expression, Set, Condition, Step, Input, representation, expression, set, condition, step., Output, step, set.]
---

# Expression Set Condition Expression Step

> Input representation of an expression set condition
    step.

# Expression Set Condition Expression Step

Input representation of an expression set condition step.

Root XML tag

<ExpressionSetConditionExpressionStepInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expression | String | Expression that’s defined for the step. | Required | 58.0 |
| result​Parameter | String | Expression set version variable associated with the result of the step. | Required | 58.0 |

## Code Examples

```
"conditionExpression": {
                "expression": "productName == 'iPhone' && City == 'Los Angeles'",
                "resultParameter": "condition_output__1"
              }
```
