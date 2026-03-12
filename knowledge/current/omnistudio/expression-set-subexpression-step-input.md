---
title: "Expression Set SubExpression Step Input"
domain: omnistudio
topic: expression-set-subexpression-step-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.405Z
estimatedTokens: 104
keywords: [Expression, SubExpression, Step, Input, representation]
---

# Expression Set SubExpression Step Input

> Input representation of a subexpression step in an expression
      set.

# Expression Set SubExpression Step Input

Input representation of a subexpression step in an expression set.

Root XML tag

<ExpressionSetSubExpressionStepInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expression​Set | String | Expression set name that’s used in the subexpression set step. | Required | 58.0 |

## Code Examples

```
"subExpression": {
                "expressionSet": "EPC_ExpressionSet_NoVersions"
              }
```
