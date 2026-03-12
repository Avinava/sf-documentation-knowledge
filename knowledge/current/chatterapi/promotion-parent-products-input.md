---
title: "Promotion Parent Products Input"
domain: chatterapi
topic: promotion-parent-products-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.601Z
estimatedTokens: 103
keywords: [Promotion, Parent, Products, Input, IDs, product, variation]
---

# Promotion Parent Products Input

> IDs of a parent product and variation product.

# Promotion Parent Products Input

IDs of a parent product and variation product.

Root XML tag

<parentProductsPair>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| childProductId | String | ID of the variation product. | Required | 57.0 |
| parentProductId | String | ID of the parent product. | Required | 57.0 |

## Code Examples

```
{
  "childProductId" : "001xx000003GZ6NAAW",
  "parentProductId": "001xx000003GZ6NAAW"
}
```
