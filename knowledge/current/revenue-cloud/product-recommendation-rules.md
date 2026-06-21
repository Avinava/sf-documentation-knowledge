---
title: "Product Recommendation Rules"
domain: revenue-cloud
topic: product-recommendation-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-21T00:39:52.970Z
estimatedTokens: 155
keywords: [Product, Recommendation]
---

> Output representation of the details of the product recommendation rules.

# Product Recommendation Rules

Output representation of the details of the product recommendation rules.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | Message to display with the product recommendation. | Small, 67.0 | 67.0 |
| productIds | String[] | List of recommended Product IDs. | Small, 67.0 | 67.0 |
| recordType | String | Record type associated with the recommendation. | Small, 67.0 | 67.0 |
| referenceId | String | Reference ID of the product recommendation rule. | Small, 67.0 | 67.0 |

## Code Examples

```
{
  "productRecommendationRules": [
    {
      "message": "32GB RDIMM recommends 16GB RDIMM",
      "productIds": [
        "01tVW000003l7uaYAA"
      ],
      "recordType": "Type",
      "referenceId": "0Q0VW000000z8yN0AQ"
    },
    {
      "message": "32GB RDIMM recommends 64GB RDIMM",
      "productIds": [
        "01tVW000003l7v6YAA"
      ],
      "recordType": "Type",
      "referenceId": "0Q0VW000000z8yN0AQ"
    }
  ]
}
```
