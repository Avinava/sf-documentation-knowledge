---
title: "Item Reference Input"
domain: chatterapi
topic: item-reference-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.926Z
estimatedTokens: 223
keywords: [Item, Input, representation, Products, categories, promotion]
---

# Item Reference Input

> Input representation of the item reference. Products and categories are supported for
    item reference by a promotion.

# Item Reference Input

Input representation of the item reference. Products and categories are supported for item reference by a promotion.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the product or category. | Required | 62.0 |
| itemReference​Type | String | Item reference type. Possible values are:CategoryPriceProductStandardShippingRate | Required | 62.0 |
| name | String | Name of the product or category. | Required | 62.0 |
| operatorType | String | Type of operator for the item reference. Possible values are:EqualToGreaterThanGreaterThanOrEqualToLessThanLessThanOrEqualToNotEqualTo | Required | 62.0 |
| value | String | Value of the item referenced. For example, for Price in the itemReferenceType property, this would be a price value. | Required | 62.0 |

## Code Examples

```
[
   {
      "id": "01tSB0000002p01YAA",
      "itemReferenceType": "Product",
      "name": "Alpine Energy Drink Chai Post 0.5L PET - 6 pack",
      "operatorType": "EQUALS_TO",
      "value": "EnergyDrink"
   }
]
```
