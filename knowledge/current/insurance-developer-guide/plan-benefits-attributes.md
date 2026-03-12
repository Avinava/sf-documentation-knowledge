---
title: "Plan Benefits Attributes"
domain: insurance-developer-guide
topic: plan-benefits-attributes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.364Z
estimatedTokens: 189
keywords: [Plan, Benefits, Attributes, Output, representation, insurance, policy, coverage]
---

# Plan Benefits Attributes

> Output representation details of the benefits attributes for an insurance policy
        coverage plan.

# Plan Benefits Attributes

Output representation details of the benefits attributes for an insurance policy coverage plan.

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributeDefinitionId | String | Indicates whether the request is successful(true)or not(false). | 63.0 |
| dataType | String | Datatype of the Attribute Definition. | 63.0 |
| keyHidden | String | IsHidden field of the Product classification attribute or Product attribute definition. | 63.0 |
| name | String | Type of tier of the network. | 63.0 |
| sequence | String | Sequence field of the Product classification attribute or Product attribute definition. | 63.0 |
| value | String | ID of the product. | 63.0 |

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
    },
    {
      "attributeDefinitionId": "0tjSG0000001YmMxxU",
      "name": "Notes",
      "value": "In network limitations apply.",
      "sequence": 2,
      "keyHidden": true,
      "dataType": "Text"
    }
  ]
}
```
