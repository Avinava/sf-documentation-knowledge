---
title: "Checkout Order"
domain: chatterapi
topic: checkout-order
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.672Z
estimatedTokens: 101
keywords: [Checkout, Order, Commerce, store]
---

# Checkout Order

> Order for a Commerce store checkout.

# Checkout Order

Order for a Commerce store checkout.

JSON example

```

```

JSON example (with errors)

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Checkout Error[] | List of errors, if any. | Small, 55.0 | 55.0 |
| order​Reference​Number | String | Reference number for the order. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "orderReferenceNumber": "ER37G-VYS2M-6GPHH-HG4DE"
}
```

```
{
  "errors": [
    {
      "type": "/commerce/errors/shipping-failure",
      "title": "We are unable to place the order. Please correct the error and try again.",
      "detail": "There are no configured Order Delivery Methods."
    }      
  ],
  "order​Reference​Number": "ER37G-VYS2M-6GPHH-HG4DE"  
}
```

## Related Topics

- Checkout
                  Error (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_error.htm)
