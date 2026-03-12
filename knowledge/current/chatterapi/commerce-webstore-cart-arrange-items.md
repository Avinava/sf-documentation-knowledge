---
title: "Commerce Webstore Cart, Arrange Items"
domain: chatterapi
topic: commerce-webstore-cart-arrange-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.183Z
estimatedTokens: 459
keywords: [Commerce, Webstore, Cart, Arrange, Items, delivery, groups]
---

# Commerce Webstore Cart, Arrange Items

> Arrange cart items into delivery groups.

# Commerce Webstore Cart, Arrange Items

Arrange cart items into delivery groups.

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

In API version 63.0 and later, if your store has [simplified cart cleanup](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-cart-cleanup.htm) enabled, a POST request can arrange cart items into delivery groups without canceling checkout.

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| deleteEmpty​DeliveryGroups | Boolean | Specifies whether to delete delivery groups with no cart items (true) or not (false). If unspecified, the default value is true. | Required | 63.0 |

Request body for POST

Root XML tag

<cart>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| arrangements | Item Arrange Input[] | Set of instructions to arrange cart items into delivery groups. | Optional | 59.0 |

Response body for POST

[Delivery Group Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_delivery_group_collection.htm "Collection of delivery groups for a Commerce store checkout.")

Successful POST requests return a [202 status](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/commerce/webstores/webStoreId/carts/cartStateOrId/delivery-groups/actions/arrange-items
```

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
- Delivery Group Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_delivery_group_collection.htm)
- 202 status (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
