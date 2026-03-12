---
title: "Plan Benefit Attribute Input"
domain: insurance-developer-guide
topic: plan-benefit-attribute-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.936Z
estimatedTokens: 122
keywords: [Plan, Benefit, Attribute, Input, benefits, attributes, Insurance, Policy, Coverage]
---

# Plan Benefit Attribute Input

> Represents details of the plan benefits attributes for an Insurance Policy
        Coverage.

# Plan Benefit Attribute Input

Represents details of the plan benefits attributes for an Insurance Policy Coverage.

JSON example

```

```

Properties

| Name | Type | Description |  | Required or Optional | Available Version |
| --- | --- | --- | --- | --- | --- |
| attributeDefinitionId | String | ID of the Attribute Definition. |  | Required | 63.0 |
| name | String | Name of the attribute. |  | Optional | 63.0 |
| value | String | Value of the attribute. |  | Required | 63.0 |

## Code Examples

```
{
  "attributes": [
    {
      "attributeDefinitionId": "0tjSG0000001embxxA",
      "name": "Copay",
      "value": 400
    },
    {
      "attributeDefinitionId": "0tjSG00000020yPxxQ",
      "name": "Deductible waiver",
      "value": "Deductible waived"
    }
  ]
}
```
