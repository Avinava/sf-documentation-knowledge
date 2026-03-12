---
title: "Line Item Data"
domain: exp-cloud-lwr
topic: line-item-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.666Z
estimatedTokens: 218
keywords: [Line, Item, Data, items, intended, describe, purchasable, They’re, cart, catalog, wish-list, interactions]
---

# Line Item Data

> Line items are intended to describe purchasable items. They’re used in cart, catalog,
  and wish-list interactions.

# Line Item Data

Line items are intended to describe purchasable items. They’re used in cart, catalog, and wish-list interactions.

## Fields

| Field Name | Description |
| --- | --- |
| attributes | TypeobjectDescriptionA dictionary of values that you supply. |
| catalogObjectId | TypestringDescriptionRequired. A unique identifier representing the catalog object referenced in the line item. |
| catalogObjectType | TypestringDescriptionRequired. A name representing the catalog object referenced in the line item. |
| currency | TypestringDescriptionThe currency of the price field. |
| price | TypenumberDescriptionThe price of the catalog object referenced in the line item. |
| quantity | TypenumberDescriptionRequired. The number of catalog objects in this line item. |

## Example

Here’s a basic structure of a line item used within an interaction.

```

```

## Code Examples

```
{
   lineItems: {
      id: 'line-item-12345',
      catalogObject: {
         id: 'catalog-id-12345678',
         type: 'Product'
      },
      attributes: {
         quantity: 12,
         price: 2.5,
         imageUrl: 'https://commerce.salesforce.com/blueshirt.jpg',
         name: 'blue-shirt'
      },
}
```
