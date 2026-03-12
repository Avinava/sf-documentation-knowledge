---
title: "Message Template Detail"
domain: psc-api
topic: message-template-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.122Z
estimatedTokens: 312
keywords: [Message, Template, Detail, Output, representation, explainability]
---

# Message Template Detail

> Output representation of explainability message template
    details.

# Message Template Detail

Output representation of explainability message template details.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| expression​SetStep​Type | String | The step type in an expression set version that uses the explainability message template.Possible values:CalculationBranchConditionDecision Matrix LookupDecision Table LookupAggregationSub ExpressionBusiness Element | Small, 56.0 | 56.0 |
| id | String | The record ID of the explainability message template. | Small, 56.0 | 56.0 |
| isDefault | Boolean | Indicates whether the decision explainer template for a specified step type is default (true) or not (false). | Small, 56.0 | 56.0 |
| message | String | The explanation message in the explainability message template for a specific expression set step type. | Small, 56.0 | 56.0 |
| name | String | The name that identifies the explainability message template. | Small, 56.0 | 56.0 |
| resultType | String | The type of result for which the message template can be used. The step type for which the result is evaluated can be a condition, conditional group, or branch.Possible Values:PassedFailed | Small, 56.0 | 56.0 |

## Code Examples

```
{
  "expressionSetStepType": "Branch",
  "id": "8U8x00000000027CAA",
  "isDefault": true,
  "message": "This is Branch Passing Message",
  "name": "BranchMessageTemplate",
  "resultType": "Passed"
}
```
