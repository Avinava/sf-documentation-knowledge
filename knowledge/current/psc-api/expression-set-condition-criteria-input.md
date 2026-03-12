---
title: "Expression Set Condition Criteria Input"
domain: psc-api
topic: expression-set-condition-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.062Z
estimatedTokens: 247
keywords: [Expression, Condition, Criteria, Input, representation]
---

# Expression Set Condition Criteria Input

> Input representation of a condition criteria in an expression
      set.

# Expression Set Condition Criteria Input

Input representation of a condition criteria in an expression set.

Root XML tag

<ExpressionSetConditionCriteriaInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| operator | String | Condition operator of the expression set.Valid values are:ContainsDoesNot​ContainEqualsGreaterThan​OrEqualsGreater​ThanIsNot​NullIsNullLessThanLessThan​OrEqualsNotEqual​To | Required | 58.0 |
| sequence​Number | Integer | The sequence number of the condition in the advanced condition. | Required | 58.0 |
| sourceField​Name | String | The expression set version variable associated with the condition criteria. | Required | 58.0 |
| value | String | The right-hand side of the condition is specified in this field. | Required | 58.0 |
| valueType | String | Criteria value type of the expression set.Valid values are:FormulaLiteralParameter | Required | 58.0 |

## Code Examples

```
"criteria" : [ {
                "operator" : "Equals",
                "sequenceNumber" : 1,
                "sourceFieldName" : "a",
                "value" : "0",
                "valueType" : "Literal"
              } ]
```
