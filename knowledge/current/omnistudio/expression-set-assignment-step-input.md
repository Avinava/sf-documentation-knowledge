---
title: "Expression Set Assignment Step Input"
domain: omnistudio
topic: expression-set-assignment-step-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.374Z
estimatedTokens: 138
keywords: [Expression, Assignment, Step, Input, representation]
---

# Expression Set Assignment Step Input

> Input representation of an assignment step in an expression
    set.

# Expression Set Assignment Step Input

Input representation of an assignment step in an expression set.

Root XML tag

<ExpressionSetAssignmentStepInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assigned​Parameter | String | Expression set version variable that’s present on the right side of the calculation step. | Required | 58.0 |
| expression | String | Expression that’s present on the left side of the calculation step. | Required | 58.0 |

## Code Examples

```
"assignment" : {
            "assignedParameter" : "b",
            "expression" : "100"
          }
```
