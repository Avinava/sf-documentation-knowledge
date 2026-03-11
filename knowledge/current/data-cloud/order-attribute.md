---
title: "Order Attribute"
domain: data-cloud
topic: order-attribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.270Z
keywords: [Order, Attribute, Example]
---

# Order Attribute

# Order Attribute

An order attribute is contained within the event structure of Order Event and mapped in accordance with the order schema.

| Field Name | Description |
| --- | --- |
| name | Field TypestringDescriptionRequired.An event name described from the order event. |
| order.attributes | Field TypeobjectDescriptionA dictionary of user-supplied values. |
| order.currency | Field TypestringDescriptionThe currency of the order’s total value. |
| order.id | Field TypestringDescriptionRequired.A unique order ID. |
| order.lineItems | Field TypeLine Item AttributeDescriptionAn array of line item attribute values. |
| order.totalValue | Field TypenumberDescriptionRequired.The order’s total value. |

## Order Attribute Example

**iOS**

```

```

**Android**

```

```