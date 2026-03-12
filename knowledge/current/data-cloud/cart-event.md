---
title: "Cart Event"
domain: data-cloud
topic: cart-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.138Z
estimatedTokens: 191
keywords: [Cart, Event, cart, event, interaction, capture, customer, modifies, contents, their, online, shopping, cart., Add, Example, Remove, Replace]
---

# Cart Event

> Use a cart event interaction to capture when a customer modifies the contents of their
        online shopping cart.

# Cart Event

Use a cart event interaction to capture when a customer modifies the contents of their online shopping cart.

| Field Name | Field Type | Description |
| --- | --- | --- |
| lineItem | Line Item Attribute | Required. A single line item attribute value. |

## Add To Cart Example

**iOS**

```

```

**Android**

```

```

## Remove from Cart Example

| Field Name | Field Type | Description |
| --- | --- | --- |
| lineItem | Line Item Attribute | Required. A single Line Item Attribute value. |

**iOS**

```

```

**Android**

```

```

## Replace Cart Example

| Field Name | Field Type | Description |
| --- | --- | --- |
| lineItem | Line Item Attribute | Required. A single Line Item Attribute value. |

**iOS**

```

```

**Android**

```

```

## Code Examples

```
AddToCartEvent(
    lineItem: LineItem(
        catalogObjectType: "Product",
        catalogObjectId: "product-1",
        quantity: 1,
        price: 20.0,
        currency: "USD",
        attributes: [
            "gift_wrap": false
        ]
    )
)
```

```
CartEvent.add(
    lineItem = LineItem(
        catalogObjectId = "product-1",
        catalogObjectType = "Product",
        quantity = 1,
        price = 20.0,
        currency = "USD",
        attributes = mapOf(
            "gift_wrap" to false
        )
    )
)
```

```
RemoveFromCartEvent(
    lineItem: LineItem(
        catalogObjectType: "Product",
        catalogObjectId: "product-1",
        quantity: 1
    )
)
```

```
CartEvent.remove(
    lineItem = LineItem(
        catalogObjectId = "product-1",
        catalogObjectType = "Product",
        quantity = 1
    )
)
```

```
ReplaceCartEvent(
    lineItems: [
        LineItem(
            catalogObjectType: "Product", 
            catalogObjectId: "product-1",
            quantity: 1
        ),
        LineItem(
            catalogObjectType: "Product",
            catalogObjectId: "product-2",
            quantity: 1,
            price: 20.0,
            currency: "USD",
            attributes: [
                "gift_wrap": false
            ]
        )
    ]
)
```

## Related Topics

- Line Item Attribute (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_line_item_attribute.htm)
