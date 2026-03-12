---
title: "Plan Benefit Input"
domain: insurance-developer-guide
topic: plan-benefit-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.949Z
estimatedTokens: 178
keywords: [Plan, Benefit, Input, benefits, Insurance, Policy, Coverage]
---

# Plan Benefit Input

> Represents details of the plan benefits for an Insurance Policy Coverage.

# Plan Benefit Input

Represents details of the plan benefits for an Insurance Policy Coverage.

JSON example

```

```

Properties

| Name | Type | Descriptions | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Benefit Attributes | List of benefit attributes. | Optional | 63.0 |
| network | String | The tier type of the network. | Optional | 63.0 |
| networks | Networks | Insurance Policy Coverage Networks for creating plan benefits. | Required | 63.0 |
| productCompGgpId | String | ID of product component group. | Optional | 63.0 |
| productId | String | ID of the product. | Required | 63.0 |
| productName | String | Name of the product. | Optional | 63.0 |

## Code Examples

```
{
    "networks": [
        {
            "network": "First Network Tier",
            "name": "Preferred Network"
        },
        {
            "network": "Second Network Tier",
            "name": "In Network"
        }
    ],
    "benefits": [
        {
            "productId": "01tSG0000011yBFxxY",
            "productCompGgpId": "0y7SG0000000ZiXxxU",
            "productName": "Chiropractic Care",
            "network": "First Network Tier",
            "attributes": [
                {
                    "attributeDefinitionId": "0tjSG0000001embxxA",
                    "name": "Copay",
                    "value": 311
                },
                {
                    "attributeDefinitionId": "0tjSG0000001YmMxxU",
                    "name": "Deductible",
                    "value": "100"
                }
            ]
        }
    ]
}
```

## Related Topics

- Benefit
                                                  Attributes (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_plan_benefit_attribute_input.htm)
- Networks (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_update_plan_benefit_network.htm)
