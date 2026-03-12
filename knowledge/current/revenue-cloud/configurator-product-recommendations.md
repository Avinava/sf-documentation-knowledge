---
title: "Configurator Product Recommendations"
domain: revenue-cloud
topic: configurator-product-recommendations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.540Z
estimatedTokens: 105
keywords: [Configurator, Product, Recommendations, Output, representation, details, product, recommendations.]
---

# Configurator Product Recommendations

> Output representation of the details of the product recommendations.

# Configurator Product Recommendations

Output representation of the details of the product recommendations.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| productIds | String[] | List of recommended product IDs. | Small, 65.0 | 65.0 |
| referenceId | String | Reference ID for the recommendation. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "productRecommendations": [
    {
      "referenceId": "CORE_BUNDLE_001",
      "productIds": [
        "01t000000001234",
        "01t000000005678"
      ]
    }
  ]
}
```
