---
title: "Rating Result"
domain: insurance-developer-guide
topic: rating-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.768Z
estimatedTokens: 116
keywords: [Rating, Result, Output, representation, product, pricing, results]
---

# Rating Result

> Output representation for the details of the product rating pricing results.

# Rating Result

Output representation for the details of the product rating pricing results.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| childNodes | Rating Result[] | List of child nodes for which the rating results are calculated. | Small, 66.0 | 66.0 |
| details | Map<String, Object> | Details of the rating result of the parent node. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "ratingResult": {
    "childNodes": [
      {
        "childNodes": [
          {
            "childNodes": [],
            "details": {
              "NetUnitPrice": 590.4,
              "InstanceKey": "bipd1",
              "ProductCode": "bipd",
              "NetTotalPrice": 590.4,
              "ProratedQLITaxAmount": 0
            }
          }
        ],
        "details": {
          "NetUnitPrice": 1485.84,
          "InstanceKey": "AutoSilver",
          "ProductCode": "autoSilver",
          "NetTotalPrice": 1485.84,
          "ProratedQLITaxAmount": 0
        }
      }
    ]
  }
}
```
