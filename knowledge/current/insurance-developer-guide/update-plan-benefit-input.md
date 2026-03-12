---
title: "Update Plan Benefit Input"
domain: insurance-developer-guide
topic: update-plan-benefit-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.011Z
estimatedTokens: 119
keywords: [Plan, Benefit, Input, Insurance, Policy, Coverage, Networks, Benefits]
---

# Update Plan Benefit Input

> Update Insurance Policy Coverage Networks and Insurance Policy
            Coverage Benefits by using the ID of an Insurance Policy Coverage.

# Update Plan Benefit Input

Update Insurance Policy Coverage Networks and Insurance Policy Coverage Benefits by using the ID of an Insurance Policy Coverage.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| benefits | Benefits Input [] | The benefits of the Insurance Plan Coverage. | Optional | 63.0 |
| networks | Networks Input [] | The list of networks. | Optional | 63.0 |

## Code Examples

```
{
    "networks": [
        {
            "networkId": "1HXSG0000002xxxxAM",
            "name": "Preferred Network Updated"
        },
        {
            "networkId": "1HXSG0000002xxxxA2",
            "name": "In Network Updated"
        },
        {
            "network": "Third Network Tier",
            "name": "Out Network"
        }
    ],
    "benefits": [
        {
            "benefitId": "1HSSG0000005Ws7xxE",
            "productId": "01tSG0000011yBFxxY",
            "productCompGgpId": "0y7SG0000000ZiXxxU",
            "productName": "Chiropractic Care",
            "attributes": [
                {
                    "covBnftAttrId": "1HYSG00000002GPxxY",
                    "attributeDefinitionId": "0tjSG0000001embxxA",
                    "name": "Copay",
                    "value": 311
                },
                {
                    "covBnftAttrId": "1HYSG00000002GQxxY",
                    "attributeDefinitionId": "0tjSG0000001YmMxxU",
                    "name": "Notes",
                    "value": "Preferred network limitations apply."
                }
            ]
        }
    ]
}
```

## Related Topics

- Benefits Input [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_plan_benefit_update_input.htm)
- Networks Input [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_update_plan_benefit_network.htm)
