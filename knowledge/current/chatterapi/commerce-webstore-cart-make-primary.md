---
title: "Commerce Webstore Cart, Make Primary"
domain: chatterapi
topic: commerce-webstore-cart-make-primary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.267Z
estimatedTokens: 222
keywords: [Commerce, Webstore, Cart, Primary, secondary]
---

# Commerce Webstore Cart, Make Primary

> Make a secondary cart a primary cart.

# Commerce Webstore Cart, Make Primary

Make a secondary cart a primary cart.

Resource

```

```

Values for cartStateOrId are:

-   cartId—ID of the cart.
-   active—Active cart. This value should only be used for authenticated users.
-   current—Cart that isn’t closed or pending deletion. Available in version 50.0 and later.

Available version

53.0

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 53.0 |

Response body for POST

[Commerce Action Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_action_result.htm "Result of executing a commerce action.")

## Code Examples

```
/commerce/webstores/webstoreID/carts/cartStateOrId/actions/make-primary
```

## Related Topics

- Commerce Action Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_action_result.htm)
