---
title: "Line Item Attribute"
domain: data-cloud
topic: line-item-attribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.214Z
estimatedTokens: 194
keywords: [Line, Item, Attribute, items, intended, describe, purchasable, used, cart, order, interactions., Example]
---

# Line Item Attribute

> Line items are intended to describe purchasable items and are used in cart and order
  interactions.

# Line Item Attribute

Line items are intended to describe purchasable items and are used in cart and order interactions.

| Field Name | Field Type | Description |
| --- | --- | --- |
| attributes | object | A dictionary of user-supplied values. |
| catalogObjectType | string | Required. A type name representing the catalog object referenced in the line item. |
| catalogObjectId | string | Required. A unique ID representing the catalog object referenced in the line item. |
| currency | string | The currency for the price field. |
| price | number | The price of the catalog object referenced in the line item. |
| quantity | number | Required. The number of catalog objects in this line item. |

## Line Item Attribute Example

**iOS**

```

```

**Android**

```

```

## Code Examples

```
LineItem(
    catalogObjectType: "Product", 
    catalogObjectId: "product-11", 
    quantity: 1,
    price: 20.0,
    currency: "USD",
    attributes: [
      "gift_wrap: true
    ]
)
```

```
LineItem(
    catalogObjectId = "product-1",
    catalogObjectType = "Product",
    quantity = 1,
    price = 20.0,
    currency = "USD",
    attributes = mapOf(
      "gift_wrap" to true
    )
    )
```
