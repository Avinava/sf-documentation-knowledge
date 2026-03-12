---
title: "Cart to Order (POST)"
domain: comms-developer-guide
topic: cart-to-order-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.044Z
estimatedTokens: 213
keywords: [Cart, Order, POST, creation, items, present, generated, entire, whole, rather, individual]
---

# Cart to Order (POST)

> Create single order creation for all items present in the cart. An
      order is generated for the entire cart as a whole, rather than for individual cart
    items.

# Cart to Order (POST)

Create single order creation for all items present in the cart. An order is generated for the entire cart as a whole, rather than for individual cart items.

Resource

```

```

Example URI

```

```

Available version

66.0

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartID | String | Id of the cart. | Required | 66.0 |
| contextID | String | Id of the context. | Required | 66.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=comms_developer_guide)

#### Note

: Both cartId and contextId are supported. At least one of these inputs must be provided. If both are supplied, cartId will take precedence.

Request body for POST

```

```

Response body for POST

```

```

## Code Examples

```
/connect/consumer/checkout
```

```
https://yourInstance.salesforce.com/services/data/66.0/connect/consumer/checkout
```

```
{
"inputs": [
{
"cartId": "0a6xx000000039BAAQ",
"contextId" : "0000000c18tc17g001317718435006600be2539f29f441b2942012a67b8be0c4"
}
]
}
```

```
[
    {
  "errors": [],
  "orderId": "801xx000003GlM3AAK"
}
```
