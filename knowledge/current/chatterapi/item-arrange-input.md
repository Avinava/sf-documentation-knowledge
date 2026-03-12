---
title: "Item Arrange Input"
domain: chatterapi
topic: item-arrange-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.916Z
estimatedTokens: 213
keywords: [Item, Arrange, Input, Instructions, cart, delivery, group]
---

# Item Arrange Input

> Instructions to arrange a cart item into a delivery group.

# Item Arrange Input

Instructions to arrange a cart item into a delivery group.

Root XML tag

<cart>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartItemId | String | ID of the cart item. | Optional | 60.0 |
| deliveryAddress | Checkout Address Input | Address data used for the delivery address. | Optional | 60.0 |
| deliveryAddressId | String | ID of the contact pint address used to set the delivery address. | Optional | 60.0 |
| deliveryGroupId | String | ID of the delivery group. | Optional | 60.0 |
| deliveryGroupName | String | Name of the delivery group. | Optional | 60.0 |
| productId | String | ID of the product to create a new cart item for. | Optional | 60.0 |
| quantity | String | Quantity of the cart item. | Optional | 60.0 |

## Code Examples

```
{
   "arrangements":[
      {
         "deliveryGroupId":"0a7xx000000004rAAA",
         "cartItemId":"0a9xx000000004rAAA",
         "quantity":"5"
      }
   ]
},
```

## Related Topics

- Checkout Address
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_address_input.htm)
