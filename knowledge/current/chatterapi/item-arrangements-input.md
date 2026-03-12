---
title: "Item Arrangements Input"
domain: chatterapi
topic: item-arrangements-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.918Z
estimatedTokens: 103
keywords: [Item, Arrangements, Input, Arrangement, cart, items, delivery, groups, Includes, instructions]
---

# Item Arrangements Input

> Arrangement of cart items into delivery groups. Includes instructions for one or more
      cart items.

# Item Arrangements Input

Arrangement of cart items into delivery groups. Includes instructions for one or more cart items.

Root XML tag

<cart>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| arrangements | Item Arrange Input[] | Set of instructions to arrange cart items into delivery groups. | Optional | 59.0 |

## Code Examples

```
{
   "arrangements":[
      {
         "deliveryGroupId":"0a7xx000000004rAAA",
         "cartItemId":"0a9xx000000004rAAA",
         "quantity":"5"
      }
      {
         "deliveryGroupId":"0a7xx000000007dAAY",
         "cartItemId":"0a9xx000000005yAAY",
         "quantity":"0"
      }
   ]
}
```

## Related Topics

- Item Arrange
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_item_arrange_input.htm)
