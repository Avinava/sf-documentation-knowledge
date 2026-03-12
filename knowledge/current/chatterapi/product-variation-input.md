---
title: "Product Variation Input"
domain: chatterapi
topic: product-variation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.541Z
estimatedTokens: 113
keywords: [Product, Variation, Input, representation]
---

# Product Variation Input

> Input representation of a variation product.

# Product Variation Input

Input representation of a variation product.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isGroupedBy | Boolean | Indicates if product variations are grouped by a specific attribute. | Optional | 64.0 |
| variationAttributes | Map<String, String> | Mapping of variation attributes (API name and value) associated with the product. | Required | 62.0 |
