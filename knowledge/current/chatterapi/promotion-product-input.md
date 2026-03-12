---
title: "Promotion Product Input"
domain: chatterapi
topic: promotion-product-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.612Z
estimatedTokens: 169
keywords: [Promotion, Product, Input, Products, evaluation, Supports, domain, dependent, requests, productId, independent, sku]
---

# Promotion Product Input

> Products for promotion product evaluation.  Supports domain dependent
  requests based on productId and domain independent requests based on sku.

# Promotion Product Input

Products for promotion product evaluation. Supports domain dependent requests based on productId and domain independent requests based on sku.

JSON example (domain dependent evaluation)

```

```

JSON example (domain independent evaluation)

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| productId | String | ID of the product. | Required for domain dependent evaluation | 58.0 |
| salesPrice | String | Sales price of the product. | Required | 58.0 |
| sku | String | Stock keeping unit (SKU) of the product. | Required for domain independent evaluation | 58.0 |

## Code Examples

```
"products": [
            {
               "productId": "01txx000000001dAAA",
               "salesPrice": "60"
            },
            {
               "productId": "01txx000000001dABB",
               "salesPrice": "50"
            } 
        ]
```

```
"products": [
        {
           "sku": "sku_1",
           "salesPrice": "60"
        },
        {
           "sku": "sku_2",
           "salesPrice": "50"
        } 
     ]
```
