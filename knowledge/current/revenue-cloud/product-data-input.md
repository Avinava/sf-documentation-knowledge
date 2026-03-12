---
title: "Product Data Input"
domain: revenue-cloud
topic: product-data-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.215Z
estimatedTokens: 103
keywords: [Product, Data, Input, representation, selling, model]
---

# Product Data Input

> Input representation of the product details such as the product ID and product selling
    model ID.

# Product Data Input

Input representation of the product details such as the product ID and product selling model ID.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| productId | String | ID of the product. | Required | 61.0 |
| product​Selling​ModelId | String | ID of the product selling model. | Optional | 61.0 |

## Code Examples

```
"productData": [
    {
      "productId": "01txx0000006ivJAAQ",
      "productSellingModelId": "0jPxx000000009hEAA"
    },
    {
      "productId": "01txx0000006ivLAAQ",
      "productSellingModelId": "0jPxx000000009iEAABB"
    }
  ]
```
