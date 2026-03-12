---
title: "Preserve Cart Output"
domain: chatterapi
topic: preserve-cart-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.368Z
estimatedTokens: 279
keywords: [Preserve, Cart, Output, preserved]
---

# Preserve Cart Output

> Represents a preserved cart.

# Preserve Cart Output

Represents a preserved cart.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartId | String | ID of the authenticated cart. | Small, 60.0 | 60.0 |
| currencyIsoCode | String | Currency ISO code for the authenticated cart. | Small, 60.0 | 60.0 |
| failedCartItems | Cart Item Basic Result[] | List of products that weren’t successfully transferred from the guest cart to the authenticated cart. | Medium, 60.0 | 60.0 |
| numberOfProducts | Integer | Total number of products in the guest cart. | Small, 60.0 | 60.0 |
| numberOfProducts​WithError | Integer | Total number of products that weren’t successfully transferred from the guest cart to the authenticated cart. | Small, 60.0 | 60.0 |
| numberOfProducts​WithSuccess | Integer | Total number of products successfully transferred from the guest cart to the authenticated cart. | Small, 60.0 | 60.0 |
| succeededCart​Items | Cart Item Basic Result[] | List of products successfully transferred from the guest cart to the authenticated cart. | Medium, 60.0 | 60.0 |

## Related Topics

- Cart Item Basic
                Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_basic_result.htm)
- Cart Item Basic Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_basic_result.htm)
