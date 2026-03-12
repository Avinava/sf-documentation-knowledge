---
title: "Product Classification Details Input"
domain: revenue-cloud
topic: product-classification-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.212Z
estimatedTokens: 165
keywords: [Product, Classification, Input, representation, fetch, records, including, their, attributes, attribute, categories]
---

# Product Classification Details Input

> Input representation of the request to fetch details of product classification records,
    including their attributes and attribute categories.

# Product Classification Details Input

Input representation of the request to fetch details of product classification records, including their attributes and attribute categories.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| catalogSystems | String[] | Name of the catalog system. Valid value is:epc—Enterprise Product Catalog | Optional | 66.0 |
| product​ClassificationIds | String[] | List of product classification IDs for which you want to retrieve product details. In the epc catalog system, these values are the Product2 record IDs. | Required | 66.0 |

## Code Examples

```
{
  "productClassificationIds": [
    "01txx0000006iFMAAY",
    "01txx0000006iGxAAY"
  ],
  "catalogSystems": [
    "epc"
  ]
}
```
