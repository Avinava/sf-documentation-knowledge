---
title: "Plan Benefits Details"
domain: insurance-developer-guide
topic: plan-benefits-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.479Z
estimatedTokens: 227
keywords: [Plan, Benefits, Output, representation, insurance, policy]
---

# Plan Benefits Details

> Output representation details of the insurance policy benefits.

# Plan Benefits Details

Output representation details of the insurance policy benefits.

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributes | Benefit Attributes | List of attributes. | 63.0 |
| benefits | Benefits | Details of the plan benefit. | 63.0 |
| combinedValue | String | Combined value of the Insurance Policy Coverage Benefit Attribute for a benefit. | 63.0 |
| errors | List | List of errors. | 63.0 |
| isSuccess | Boolean | Boolean to determine whether it was success or failure. | 63.0 |
| network | String | The tier type of the network. | 63.0 |
| networks | Networks | Insurance Policy Coverage Networks for creating plan benefits. | 63.0 |
| productCompGgpId | String | ID of product component group | 63.0 |
| productId | String | ID of the product. | 63.0 |
| productName | String | Name of the product. | 63.0 |

## Code Examples

```
{
  "isSuccess": true,
  "errors": [],
  "networks": [
    {
      "id": "n1",
      "network": "FIRST_NETWORK_TIER",
      "name": "Preferred Network",
      "sequence": 1
    },
    {
      "id": "n2",
      "network": "SECOND_NETWORK_TIER",
      "name": "In Network",
      "sequence": 2
    }
  ],
  "benefits": [
    {
      "benefitId": "bft1",
      "benefitSequence": 1,
      "productId": "01tSG0000011yBFYAY",
      "productName": "Preventive Care",
      "productCompGrpId": "0y7SG0000000Q8zYAE",
      "productCompGgpName": "General plan information",
      "productCompGgpSequence": 1,
      "network": "First Network Tier",
      "attributes": [
        {
          "attributeDefinitionId": "0tjSG0000001embYAA",
          "name": "Copay",
          "value": 400,
          "sequence": 1,
          "keyHidden": false,
          "dataType": "Currency"
        },
        {
          "attributeDefinitionId": "0tjSG00000020yPYAQ",
          "name": "Deductible waiver",
          "value": "Deductible waived",
          "sequence": 2,
          "keyHidden": true,
          "dataType": "Text"
        },
        {
          "attributeDefinitionId": "0tjSG0000001YmMYAU",
          "name": "Notes",
          "value": "In network limitations apply.",
          "sequence": 2,
          "keyHidden": true,
          "dataType": "Text"
        }
      ],
      "combinedValue": "Copay $400 | Deductible waived | In network limitations apply."
    }
  ]
}
```

## Related Topics

- Benefit
                                                Attributes (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_plan_benefit_create_attributes.htm)
- Benefits (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_benefits_output.htm)
- Networks (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_network_input.htm)
