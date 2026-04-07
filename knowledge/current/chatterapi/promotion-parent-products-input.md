---
title: "Promotion Parent Products Input"
domain: chatterapi
topic: promotion-parent-products-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:09.864Z
estimatedTokens: 103
keywords: [Promotion, Parent, Products, IDs, product, variation]
---

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
