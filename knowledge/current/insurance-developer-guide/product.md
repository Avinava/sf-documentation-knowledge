---
title: "Product"
domain: insurance-developer-guide
topic: product
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.738Z
estimatedTokens: 193
keywords: [Product, Output, representation]
---

# Product

> Output representation of product details.

# Product

Output representation of product details.

JSON example

This example shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Attribute Detail[] | List of attributes. | Small, 63.0 | 63.0 |
| componentGroupId | String | ID of the component group. | Small, 63.0 | 63.0 |
| componentGroupName | String | Name of the component group. | Small, 63.0 | 63.0 |
| componentGroupSequence | Integer | Sequence of the component group. | Small, 63.0 | 63.0 |
| id | String | ID of the product. | Small, 63.0 | 63.0 |
| name | String | Name of the product. | Small, 63.0 | 63.0 |
| sequence | Integer | Sequence of the product. | Small, 63.0 | 63.0 |

## Code Examples

```
"benefits": [
        {
            "id": "01tSG0000011y9dYAA",
            "name": "Annual deductible/Individual",
            "componentGroupId": "0y7SG0000000Q8zYAE",
            "componentGroupName": "General plan information",
            "componentGroupSequence": 1, #optional
            "sequence": 1, #optional
            "attributes": [
                {
                    "id": "0tjSG0000001embYAA",
                    "sequence": 1, #optional
                    "name": "Copay",
                    "label": "Copay Currency", #optional
                    "dataType": "CURRENCY",
                    "keyHidden":false,
                    "isActive": true
                },
                {
                    "id": "0tjSG0000001eoDYAQ",
                    "sequence": 1,
                    "name": "Coinsurance",
                    "label": "Coinsurance Percentage",
                    "dataType": "PERCENTAGE",
                    "keyHidden":false,
                    "isActive": true
                }
            ]
        }
    ]
}
```

## Related Topics

- Attribute Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_attribute_detail.htm)
