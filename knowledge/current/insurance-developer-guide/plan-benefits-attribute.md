---
title: "Plan Benefits Attribute"
domain: insurance-developer-guide
topic: plan-benefits-attribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.942Z
estimatedTokens: 179
keywords: [Plan, Benefits, Attribute, attributes, Insurance, Policy, Coverage]
---

# Plan Benefits Attribute

> Represents details of the plan benefits attributes for an Insurance Policy
        Coverage.

# Plan Benefits Attribute

Represents details of the plan benefits attributes for an Insurance Policy Coverage.

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributeDefinitionId | String | ID of the Attribute Definition. | 63.0 |
| name | String | Name of the attribute. | 63.0 |
| value | String | Value of the attribute. | 63.0 |
| sequence | Integer | Sequence field of the product classification attribute or product attribute definition. | 63.0 |
| keyHidden | Boolean | IsHidden field of the Product classification attribute or Product attribute definition. | 63.0 |
| dataType | String | Data type of the Attribute Definition. | 63.0 |

## Code Examples

```
{
  "attributes": [
    {
          "attributeDefinitionId": "0tjSG0000001embxxA",
          "name": "Copay",
          "value": 400,
          "sequence": 1,
          "keyHidden": false,
          "dataType": "Currency"
        },
        {
          "attributeDefinitionId": "0tjSG00000020yPxxQ",
          "name": "Deductible waiver",
          "value": "Deductible waived",
          "sequence": 2,
          "keyHidden": true,
          "dataType": "Text"
        }
  ]
}
```
