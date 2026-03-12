---
title: "Commerce Webstore Cart Delivery Groups"
domain: chatterapi
topic: commerce-webstore-cart-delivery-groups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.212Z
estimatedTokens: 880
keywords: [Commerce, Webstore, Cart, Delivery, Groups, collection]
---

# Commerce Webstore Cart Delivery Groups

> Get or create a collection of delivery groups in a
    cart.

# Commerce Webstore Cart Delivery Groups

Get or create a collection of delivery groups in a cart.

Resource

```

```

Values for cartStateOrId are:

-   cartId—ID of the cart.
-   active—Active cart. This value should only be used for authenticated users.
-   current—Cart that isn’t closed or pending deletion. Available in version 50.0 and later.

Available version

59.0

HTTP methods

GET, POST

In API version 63.0 and later, if your store has [simplified cart cleanup](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-cart-cleanup.htm) enabled, a POST request can create a collection of delivery groups in a cart without canceling checkout.

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartItemLimit | Integer | Limit of items in a cart. | Optional | 59.0 |
| effectiveAccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 59.0 |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response, such as currentPageToken or nextPageToken. If you don’t specify a value, the first page is returned. | Optional | 59.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 59.0 |
| sort | String | Sort order for items in a cart.CreatedDateAsc—Sorts by oldest creation date.CreatedDateDesc—Sorts by most recent creation date.NameAsc—Sorts by name in ascending alphabetical order (A–Z).NameDesc—Sorts by name in descending alphabetical order (Z–A).SalesPriceAsc—Sorts from lowest to highest negotiated price.SalesPriceDesc—Sorts from highest to lowest negotiated price. | Optional | 59.0 |

Response body for GET

[Delivery Group Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_delivery_group_collection.htm "Collection of delivery groups for a Commerce store checkout.")

Request body for POST

Root XML tag

<deliveryGroup>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| deliveryAddress | Checkout Address Input | Shipping address input. | Optional | 53.0 |
| deliveryMethodId | String | ID of the delivery method. | Optional | 53.0 |
| desiredDeliveryDate | String | Delivery date of the delivery group. | Optional | 53.0 |
| id | String | ID of the delivery group. | Optional | 53.0 |
| name | String | Name of the delivery group. | Optional | 60.0 |
| shippingInstructions | String | Shipping instructions for the delivery group. | Optional | 53.0 |

Response body for POST

[Delivery Group](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_delivery_group.htm "Delivery group for a Commerce store checkout.")

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| deliveryGroupInput | Object | Delivery group input. | Optional | 59.0 |
| effectiveAccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 59.0 |

Response body for POST

[Delivery Group Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_delivery_group_collection.htm "Collection of delivery groups for a Commerce store checkout.")

## Code Examples

```
/commerce/webstores/webStoreId/carts/cartStateOrId/delivery-groups
```

## Related Topics

- Delivery Group Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_delivery_group_collection.htm)
- Checkout Address Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_address_input.htm)
- Delivery Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_delivery_group.htm)
- Delivery Group
              Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_delivery_group_collection.htm)
