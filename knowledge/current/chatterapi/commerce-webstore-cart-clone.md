---
title: "Commerce Webstore Cart, Clone"
domain: chatterapi
topic: commerce-webstore-cart-clone
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.192Z
estimatedTokens: 252
keywords: [Commerce, Webstore, Cart, Clone, Clones, secondary, read-only, support, Pay, Now, functionality, guest, status, PendingDelete, B2B]
---

# Commerce Webstore Cart, Clone

> Clones an existing cart to create a secondary, read-only cart to
      support Pay Now functionality. Sets the guest cart status to PendingDelete in a B2B store.

# Commerce Webstore Cart, Clone

Clones an existing cart to create a secondary, read-only cart to support Pay Now functionality. Sets the guest cart status to PendingDelete in a B2B store.

Resource

```

```

Values for cartStateOrId are:

-   cartId—ID of the cart.
-   active—Active cart. This value should only be used for authenticated users.
-   current—Cart that isn’t closed or pending deletion. Available in version 50.0 and later.

Available version

60.0

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| targetEffectiveAccountId | String | Effective Account ID associated with the cloned cart. | Required | 60.0 |
| targetType | String | Type of the cloned cart. Value is PayNowReadOnly. | Required | 60.0 |

Response body for POST

[Cart Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_summary.htm "Summary of information about a cart and its contents.")

## Code Examples

```
/commerce/webstores/webstoreId/carts/cartStateOrId/actions/clone
```

## Related Topics

- Cart Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_summary.htm)
