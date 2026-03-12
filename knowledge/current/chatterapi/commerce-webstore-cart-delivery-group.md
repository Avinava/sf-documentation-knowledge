---
title: "Commerce Webstore Cart Delivery Group"
domain: chatterapi
topic: commerce-webstore-cart-delivery-group
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.202Z
estimatedTokens: 1160
keywords: [Commerce, Webstore, Cart, Delivery, Group]
---

# Commerce Webstore Cart Delivery Group

> Get, delete, or update a delivery group in the
    cart.

# Commerce Webstore Cart Delivery Group

Get, delete, or update a delivery group in the cart.

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

DELETE, GET, PATCH

In API version 63.0 and later, if your store has [simplified cart cleanup](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-cart-cleanup.htm) enabled, a PATCH or DELETE request can update or delete a delivery group in a cart without canceling checkout.

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| deleteCartItems | Boolean | Indicates whether to delete cart items associated with the delivery group (True) or not (False). | Optional | 59.0 |
| effectiveAccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 59.0 |

Response body for DELETE

In API version 63.0 and later, if your store has [simplified cart cleanup](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-cart-cleanup.htm) enabled, a successful DELETE request returns [202](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred."). Without simplified cart cleanup, successful DELETE requests return [204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 59.0 |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response, such as currentPageToken or nextPageToken. If you don’t specify a value, the first page is returned. | Optional | 59.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 59.0 |
| sort | String | Sort order for items in a cart.CreatedDateAsc—Sorts by oldest creation date.CreatedDateDesc—Sorts by most recent creation date.NameAsc—Sorts by name in ascending alphabetical order (A–Z).NameDesc—Sorts by name in descending alphabetical order (Z–A).SalesPriceAsc—Sorts from lowest to highest negotiated price.SalesPriceDesc—Sorts from highest to lowest negotiated price. | Optional | 59.0 |

Response body for GET

Delivery Group

Request body for PATCH

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

Response body for PATCH

[Delivery Group](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_delivery_group.htm "Delivery group for a Commerce store checkout.")

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartDeliveryGroup | Object | Delivery group in a cart. | Required | 59.0 |
| effectiveAccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 59.0 |

Response body for PATCH

[Delivery Group](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_delivery_group.htm "Delivery group for a Commerce store checkout.")

## Code Examples

```
/commerce/webstores/webStoreId/carts/cartStateOrId/delivery-groups/deliveryGroupId
```

## Related Topics

- 202 (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- 204: Successful
              Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Checkout Address Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_address_input.htm)
- Delivery Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_delivery_group.htm)
