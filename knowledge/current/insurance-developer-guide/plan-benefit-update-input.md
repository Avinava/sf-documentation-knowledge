---
title: "Plan Benefit Update Input"
domain: insurance-developer-guide
topic: plan-benefit-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.954Z
estimatedTokens: 246
keywords: [Plan, Benefit, Input, benefits, Insurance, Policy, Coverage]
---

# Plan Benefit Update Input

> Represents details of the plan benefits for an Insurance Policy Coverage.

# Plan Benefit Update Input

Represents details of the plan benefits for an Insurance Policy Coverage.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| benefitId | String | ID of the Insurance Policy Coverage Benefit. | Required | 63.0 |
| productId | String | ID of the product. | Optional | 63.0 |
| productCompGgpId | String | ID of product component group | Optional | 63.0 |
| productName | String | Name of the product. | Optional | 63.0 |
| network | String | The tier type of the network. | Optional | 63.0 |
| attributes | String | List of attributes. | Optional | 63.0 |
| covBnftAttrId | String | ID of Insurance Policy Coverage Benefit Attribute. | Required | 63.0 |
| name | String | Name of the attribute. | Optional | 63.0 |
| value | String | Value of the attribute. | Optional | 63.0 |
| attributeDefinitionId | String | ID of the Attribute Definition. | Optional | 63.0 |

## Code Examples

```
{
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
