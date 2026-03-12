---
title: "Order Attribute"
domain: data-cloud
topic: order-attribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.171Z
estimatedTokens: 195
keywords: [Order, Attribute, contained, event, structure, mapped, accordance, schema]
---

# Order Attribute

> An order attribute is contained within the event structure of Order Event and mapped in
        accordance with the
        order
        schema.

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

## Code Examples

```
Order(
    id: "order-1",
    totalValue: 9.99,
    currency: "USD",
    attributes: [
        "PROMO_CODE": "HELLO"
    ]
    lineItems: [
        LineItem(
            catalogObjectType: "Product",
            catalogObjectId: "product-1",
            quantity: 1,
            price: 20,
            currency: "USD",
            attributes: [
                "gift_wrap": true,
                "gift card": "Dearly Beloved"
            ]
        ),
        LineItem(
            catalogObjectType: "Product",
            catalogObjectId: "product-2",
            quantity: 2,
            price: 5,
            currency: "USD",
            attributes: [
                "gift_wrap": false
            ]
        )
    ]
)
```

```
Order(
    id = "order-1",
    totalValue = 30.00,
    currency = "USD",
    attributes = mapOf(
        "PROMO_CODE" to "HELLO"
    ),
    lineItems = listOf(
        LineItem(
            catalogObjectId = "product-1",
            catalogObjectType = "Product",
            quantity = 1,
            price = 20.00,
            currency = "USD",
            attributes = mapOf(
                "gift_wrap" to true,
                "gift card" to "Dearly Beloved"
            )
        ),
        LineItem(
            catalogObjectId = "product-2",
            catalogObjectType = "Product",
            quantity = 2,
            price = 5.00,
            currency = "USD",
            attributes = mapOf(
                "gift_wrap" to false
            )
        )
    )
    )
```

## Related Topics

- Line Item Attribute (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_line_item_attribute.htm)
