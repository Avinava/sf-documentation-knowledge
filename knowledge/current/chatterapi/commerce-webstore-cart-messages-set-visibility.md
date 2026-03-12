---
title: "Commerce Webstore Cart Messages, Set Visibility"
domain: chatterapi
topic: commerce-webstore-cart-messages-set-visibility
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.271Z
estimatedTokens: 312
keywords: [Commerce, Webstore, Cart, Messages, Visibility]
---

# Commerce Webstore Cart Messages, Set Visibility

> Set the visibility for cart messages.

# Commerce Webstore Cart Messages, Set Visibility

Set the visibility for cart messages.

Resource

```

```

Values for cartStateOrId are:

-   cartId—ID of the cart.
-   active—Active cart. This value should only be used for authenticated users.
-   current—Cart that isn’t closed or pending deletion. Available in version 50.0 and later.

Available version

50.0

HTTP methods

POST

Request body for POST

Root XML tag

<messageVisibility>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| visibility | Boolean | Specifies whether to set cart messages as visible (true) or not (false). | Required | 50.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 50.0 |

Response body for POST

[Cart Messages Visibility Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_messages_visibility_result.htm "Result of setting the visibility for cart messages.")

## Code Examples

```
/commerce/webstores/webstoreId/carts/cartStateOrId/messages/actions/set-visibility
```

```
{
   "visibility": "true"
}
```

## Related Topics

- Cart Messages Visibility Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_messages_visibility_result.htm)
