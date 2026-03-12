---
title: "Item Reference"
domain: chatterapi
topic: item-reference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.240Z
estimatedTokens: 220
keywords: [Item, Output, representation, Products, categories, promotion]
---

# Item Reference

> Output representation of the item reference. Products and categories are supported for
    item reference by a promotion.

# Item Reference

Output representation of the item reference. Products and categories are supported for item reference by a promotion.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the product or category. | Small, 62.0 | 62.0 |
| itemReferenceType | String | Item reference type. Possible values are:CategoryPriceProductStandardShippingRate | Small, 62.0 | 62.0 |
| name | String | Name of the product or category. | Small, 62.0 | 62.0 |
| operatorType | String | Type of operator for the item reference. Possible values are:EqualToGreaterThanGreaterThanOrEqualToLessThanLessThanOrEqualToNotEqualTo | Small, 62.0 | 62.0 |
| value | String | Value of the item referenced. For example, for Price in the itemReferenceType property, this would be a price value. | Small, 62.0 | 62.0 |
