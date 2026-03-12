---
title: "Order Event"
domain: data-cloud
topic: order-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.192Z
estimatedTokens: 395
keywords: [Order, Event, interaction, ecommerce, captures, actions, performed, customer, manage, new, progress, completed, orders, Purchase, Preorder]
---

# Order Event

> An order event interaction is an ecommerce event that captures actions performed by a
        customer to manage new, in progress, or completed orders.

# Order Event

An order event interaction is an ecommerce event that captures actions performed by a customer to manage new, in progress, or completed orders.

## Purchase Order Example

| Field Name | Field Type | Description |
| --- | --- | --- |
| order | Order Attribute | Required. A single order attribute value. |

**iOS**

```

```

**Android**

```

```

## Preorder Order Example

| Field Name | Field Type | Description |
| --- | --- | --- |
| order | Order Attribute | Required. A single order attribute value. |

**iOS**

```

```

**Android**

```

```

## Cancel Order Example

| Field Name | Field Type | Description |
| --- | --- | --- |
| order | Order Attribute | Required. A single order attribute value. |

**iOS**

```

```

**Android**

```

```

## Ship Order Example

| Field Name | Field Type | Description |
| --- | --- | --- |
| order | Order Attribute | Required. A single order attribute value. |

**iOS**

```

```

**Android**

```

```

## Deliver Order Example

| Field Name | Field Type | Description |
| --- | --- | --- |
| order | Order Attribute | Required. A single order attribute value. |

**iOS**

```

```

**Android**

```

```

## Return Order Example

| Field Name | Field Type | Description |
| --- | --- | --- |
| order | Order Attribute | Required. A single order attribute value. |

**iOS**

```

```

**Android**

```

```

## Exchange Order Example

| Field Name | Field Type | Description |
| --- | --- | --- |
| order | Order Attribute | Required. A single order attribute value. |

**iOS**

```

```

**Android**

```

```

## Code Examples

```
PurchaseOrderEvent(
    order: Order(
        id: "order-1",
        totalValue: 9.99,
        currency: "USD",
        attributes: [
            "PROMO_CODE": "HELLO"
        ],
        lineItems: [
            LineItem(
                catalogObjectType: "Product", 
                catalogObjectId: "product-11",
                quantity: 1,
                price: 20,
                currency: "USD",
                attributes: [
                    "gift_wrap": true
                ]
            )
        ]
    )
)
```

```
OrderEvent.purchase(
    order = Order(
        id = "order-1",
        totalValue = 9.99,
        currency = "USD",
        attributes = mapOf(
            "PROMO_CODE" to "HELLO"
        ),
        lineItems = listOf(
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
        )
    )
)
```

```
PreOrderEvent(
    order: Order(
        id: "order-1",
        totalValue: 9.99,
        currency: "USD",
        attributes: [
            "PROMO_CODE": "HELLO"
        ],
        lineItems: [
            LineItem(
                catalogObjectType: "Product", 
                catalogObjectId: "product-11",
                quantity: 1,
                price: 20,
                currency: "USD",
                attributes: [
                    "gift_wrap": true
                ]
            )
        ]
    )
)
```

```
OrderEvent.preorder(
    order = Order(
        id = "order-1",
        totalValue = 9.99,
        currency = "USD",
        attributes = mapOf(
            "PROMO_CODE" to "HELLO"
        ),
        lineItems = listOf(
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
        )
    )
)
```

```
CancelOrderEvent(
    order: Order(
        id: "order-1",
        totalValue: 9.99,
        currency: "USD",
        attributes: [
            "PROMO_CODE": "HELLO"
        ],
        lineItems: [
            LineItem(
                catalogObjectType: "Product", 
                catalogObjectId: "product-11",
                quantity: 1,
                price: 20,
                currency: "USD",
                attributes: [
                    "gift_wrap": true
                ]
            )
        ]
    )
)
```

## Related Topics

- Order Attribute (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_order_attribute.htm)
