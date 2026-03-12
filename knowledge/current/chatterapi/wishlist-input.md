---
title: "Wishlist Input"
domain: chatterapi
topic: wishlist-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:13.031Z
estimatedTokens: 92
keywords: [Wishlist, Input]
---

# Wishlist Input

> Wishlist to create.

# Wishlist Input

Wishlist to create.

Root XML tag

<wishlistInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | Name of the wishlist. | Required | 49.0 |
| products | Wishlist Item Input[] | List of products to add to the wishlist. | Optional | 49.0 |

## Code Examples

```
{
"name":"My List",
"products": [
   {
   "productId": "01tRM000000Osl0YAC"
   },
   {
   "productId": "01tRM000000Oi92YAC"
   },
   {
   "productId": "01tRM000000NJCeYAO"
   }]
}
```

## Related Topics

- Wishlist Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_wishlist_item_input.htm)
