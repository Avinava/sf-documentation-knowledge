---
title: "Line Item Attribute"
domain: data-cloud
topic: line-item-attribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.255Z
keywords: [Line, Item, Attribute, Example]
---

# Line Item Attribute

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