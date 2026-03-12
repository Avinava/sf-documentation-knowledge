---
title: "Product Attribute Set Input"
domain: chatterapi
topic: product-attribute-set-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.511Z
estimatedTokens: 164
keywords: [Product, Attribute, Input, representation]
---

# Product Attribute Set Input

> Input representation of attribute set details.

# Product Attribute Set Input

Input representation of attribute set details.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | String[] | List of up to 5 attribute API names. Required if creating a new attribute set. | Optional | 62.0 |
| id | String | If updating an attribute set, the ID of the existing attribute set for the variation parent product. | Optional | 62.0 |
| isGroupedBy | Boolean | Indicates if variation products are grouped by a specific attribute. | Optional | 64.0 |
| name | String | Attribute set name for a new attribute set. | Optional | 62.0 |
