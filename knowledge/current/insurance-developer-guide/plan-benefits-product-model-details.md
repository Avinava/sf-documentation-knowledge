---
title: "Plan Benefits Product Model Details"
domain: insurance-developer-guide
topic: plan-benefits-product-model-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.724Z
estimatedTokens: 203
keywords: [Plan, Benefits, Product, Model, Output, representation, associated, components]
---

# Plan Benefits Product Model Details

> Output representation of the product model details and associated product
        components.

# Plan Benefits Product Model Details

Output representation of the product model details and associated product components.

JSON example

This example shows a sample success response.

```

```

This request shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| benefits | Product[] | List of the product component groups and associated attributes. | Small, 63.0 | 63.0 |
| errors | Error Response[] | List of errors during the processing of the API request. | Small, 63.0 | 63.0 |
| isSuccess | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 63.0 | 63.0 |
| productId | String | ID of the product for which the benefits are fetched. | Small, 63.0 | 63.0 |

## Code Examples

```
{
    "isSuccess":true,
    "errors":[],
    "productId": "01tSG0000013itZYAQ",
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

```
{
    "isSuccess":false,
    "errors" : [
        {
            "code":INVALID_INPUT,
            "message": "Specify a valid coverageId."
        }
    ]
}
```

## Related Topics

- Product (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_product.htm)
