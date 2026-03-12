---
title: "Enrollee Product Input"
domain: health-cloud-object-reference
topic: enrollee-product-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.956Z
estimatedTokens: 115
keywords: [Enrollee, Product, Input, Data]
---

# Enrollee Product Input

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
