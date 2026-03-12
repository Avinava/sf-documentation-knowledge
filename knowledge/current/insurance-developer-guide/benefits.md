---
title: "Benefits"
domain: insurance-developer-guide
topic: benefits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.368Z
estimatedTokens: 217
keywords: [Benefits, Output, representation, plan, insurance, policy, coverage]
---

# Benefits

> Output representation details of the plan benefits for an insurance policy coverage
        plan.

# Benefits

Output representation details of the plan benefits for an insurance policy coverage plan.

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| benefitId | String | ID of the Insurance Policy Coverage Benefit. | 63.0 |
| benefitSequence | String | Field sequence of the Insurance Policy Coverage Benefit. | 63.0 |
| network | String | Type of tier of the network. | 63.0 |
| productId | String | ID of the product. | 63.0 |
| productCompGgpId | String | ID of product component group. | 63.0 |
| productCompGgpName | String | Name of product component group. | 63.0 |
| productCompGgpSequence | String | Field sequence of the product component group. | 63.0 |
| productName | String | Name of the product. | 63.0 |
| attributes | Attributes | List of attributes of the plan benefits. | 63.0 |

## Code Examples

```
{
"benefits": [
  {
    "benefitId": "bft1",
    "benefitSequence": 1,
    "productId": "01tSG0000011yBFxxY",
    "productName": "Preventive Care",
    "productCompGrpId": "0y7SG0000000Q8zxxE",
    "productCompGgpName": "General plan information",
    "productCompGgpSequence": 1,
    "network": "First Network Tier",
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
]
}
```

## Related Topics

- Attributes (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_benefits_attributes_output.htm)
