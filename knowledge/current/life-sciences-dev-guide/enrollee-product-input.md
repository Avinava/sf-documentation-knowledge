---
title: "Enrollee Product Input"
domain: life-sciences-dev-guide
topic: enrollee-product-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:55.040Z
estimatedTokens: 115
keywords: [Enrollee, Product]
---

> Data for a single enrollee product.

# Enrollee Product Input

Data for a single enrollee product.

Root XML tag

<careProgramProductData>

JSON example

```

```

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| productId | String | ID of the Product2 object as configured in the Care System Field Mapping. | Yes | 46.0 |
| providerId | String | ID of the provider’s account as configured in the Care System Field Mapping. | No | 46.0 |

## Code Examples

```
{
          "providerId": "provider3",
          "productId": "product4"
        }
```
