---
title: "Commerce Webstore Cart Item"
domain: chatterapi
topic: commerce-webstore-cart-item
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.238Z
estimatedTokens: 1264
keywords: [Commerce, Webstore, Cart, Item]
---

# Commerce Webstore Cart Item

> Update or delete an item in a cart.

# Commerce Webstore Cart Item

Update or delete an item in a cart.

Buyers with read access to carts can add, update, and delete items in carts.

Updating items in a cart respects buyer View Product entitlements and only users entitled to view product data can access it.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

Resource

```

```

Values for cartStateOrId are:

-   cartId—ID of the cart.
-   active—Active cart. This value should only be used for authenticated users.
-   current—Cart that isn’t closed or pending deletion. Available in version 50.0 and later.

Available version

49.0

HTTP methods

DELETE, PATCH

In API version 63.0 and later, if your store has [simplified cart cleanup](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-cart-cleanup.htm) enabled, a PATCH or DELETE request can update or delete an item in a cart without canceling checkout.

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 49.0 |

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

Request body for PATCH

Root XML tag

<cartItem>

JSON example for updating an item in a cart

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartDelivery​GroupId | String | ID of the cart delivery group. | Optional | 59.0 |
| custom​Fields | sObject Attributes Input[] | Array of sObjects and custom fields for the sObjects. Standard fields are ignored. The custom fields must already be defined for the sObject. Currently, only the CartItem sObject is supported. Field-level security rules from the shopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. The custom fields can be of type Checkbox, Currency, Date, Email, LongTextArea, Number, Percent, Phone, Text, TextArea, Url, Address, or Location. The customFields property isn't supported in stores built on an Aura template. | Optional | 61.0 |
| productId | String | ID of the product. | Required when adding an item to a cart (POST)Not supported when updating an item in a cart (PATCH) | 49.0 |
| productSelling​ModelId | String | The ID of the product selling model associated with Product2. | Optional | 59.0 |
| quantity | String | Quantity of the cart item. Use a value that can be converted to BigDecimal. | Required | 49.0 |
| subscriptionTerm | Integer | The total number of terms in the subscription period. | Optional | 59.0 |
| subType | String | Subtype of item in a cart.Possible values are:Bonus—A bonus product.Gift—A gift product. | Optional | 64.0 |
| type | String | Type of item in a cart. Value is Product. | Required when adding an item to a cart (POST)Not supported when updating an item in a cart (PATCH) | 49.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Currency ISO code of the cart. | Optional | 57.0 |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 49.0 |
| include​CartData | Boolean | Specifies whether to return a collection of cart items in the response (true) or not (false). If unspecified, the default value is false. This parameter is supported for D2C stores with Faster Add-to-Cart disabled. The cart must also have fewer than 25 items. If the cart is larger, make a GET request to Commerce Webstore Cart Items instead. | Optional | 64.0 |
| pageNumber | Integer | Specifies the page number for the response. | Optional | 64.0 |
| pageSize | Integer | Specifies the number of items per page for the response. | Optional | 64.0 |
| sort | String | Sort order for items in a cart. Values are:CreatedDateAsc—Sorts by oldest creation date.CreatedDateDesc—Sorts by most recent creation date.NameAsc—Sorts by name in ascending alphabetical order (A–Z).NameDesc—Sorts by name in descending alphabetical order (Z–A).SalesPriceAsc—Sorts from lowest to highest negotiated price.SalesPriceDesc—Sorts from highest to lowest negotiated price.If unspecified, the default is CreatedDateDesc. | Optional | 64.0 |

Response body for PATCH

[Cart Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item.htm "An item in a cart.")

## Code Examples

```
/commerce/webstores/webstoreId/carts/cartStateOrId/cart-items/cartItemId
```

```
{
   "quantity":"7"
}
```

## Related Topics

- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- sObject Attributes Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_sobject_attributes_input.htm)
- Commerce Webstore Cart Items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_cart_items.htm)
- Cart Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item.htm)
