---
title: "Commerce Webstore Cart Items"
domain: chatterapi
topic: commerce-webstore-cart-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.253Z
estimatedTokens: 1746
keywords: [Commerce, Webstore, Cart, Items, Add, item]
---

# Commerce Webstore Cart Items

> Get the items in a cart. Add an item to a cart.

# Commerce Webstore Cart Items

Get the items in a cart. Add an item to a cart.

Buyers with read access to carts can add, update, and delete items in carts.

Adding items to a cart respects buyer View Product entitlements and only users entitled to view product data can access it.

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

GET, POST

In API version 63.0 and later, if you use GET with /commerce/webstores/webstoreId/carts/current/cart-items and there isn’t a current cart, it returns an empty cart.

In API version 63.0 and later, if your store has [simplified cart cleanup](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-cart-cleanup.htm) enabled, a POST request can add an item to cart without canceling checkout.

Request parameters for GET

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Currency ISO code of the cart. | Optional | 57.0 |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 49.0 |
| includeCoupons | Boolean | Indicates whether to include coupons (True) or not (False). | Optional | 59.0 |
| includePromotions | Boolean | Indicates whether to include promotions (True) or not (False). | Optional | 59.0 |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response, such as currentPageToken or nextPageToken. If you don’t specify a value, the first page is returned. | Optional | 49.0 |
| pageNumber | Integer | Specifies the requested page number. | Optional | 60.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 49.0 |
| productFields | String[] | Comma-separated list of up to 15 product fields. Results include fields that you have access to. Some product fields (such as productName and sku) are returned even when not included in the productFields parameter. | Optional | 49.0 |
| sort | String | Sort order for items in a cart. Values are:CreatedDateAsc—Sorts by oldest creation date.CreatedDateDesc—Sorts by most recent creation date.NameAsc—Sorts by name in ascending alphabetical order (A–Z).NameDesc—Sorts by name in descending alphabetical order (Z–A).SalesPriceAsc—Sorts from lowest to highest negotiated price.SalesPriceDesc—Sorts from highest to lowest negotiated price.If unspecified, the default is CreatedDateDesc. | Optional | 49.0 |

Response body for GET

[Cart Item Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_collection.htm "A collection of items in a cart.")

During asynchronous cart processing, if enabled, GET response headers include Location and Retry-After. While the cart is processing, GET requests return a 202 status and may include stale, null, or 0 pricing data. When cart processing is complete, requests return a 200 status with up-to-date pricing data.

Request body for POST

Root XML tag

<cartItem>

JSON example for adding an item to a cart

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

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Currency ISO code of the cart. | Optional | 57.0 |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 49.0 |
| includeCartData | Boolean | Specifies whether to return a collection of cart items in the response (true) or not (false). If unspecified, the default value is false. This parameter is supported for D2C stores with Faster Add-to-Cart disabled. The cart must also have fewer than 25 items. If the cart is larger, make a GET request instead. | Optional | 64.0 |
| pageNumber | Integer | Specifies the page number for the response. | Optional | 64.0 |
| pageSize | Integer | Specifies the number of items per page for the response. | Optional | 64.0 |
| productFields | String[] | Comma-separated list of up to 15 product fields. Results include fields that you have access to. | Optional | 49.0 |
| sort | String | Sort order for items in a cart. Values are:CreatedDateAsc—Sorts by oldest creation date.CreatedDateDesc—Sorts by most recent creation date.NameAsc—Sorts by name in ascending alphabetical order (A–Z).NameDesc—Sorts by name in descending alphabetical order (Z–A).SalesPriceAsc—Sorts from lowest to highest negotiated price.SalesPriceDesc—Sorts from highest to lowest negotiated price.If unspecified, the default is CreatedDateDesc. | Optional | 64.0 |

Response body for POST

[Cart Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item.htm "An item in a cart.")

## Code Examples

```
/commerce/webstores/webstoreId/carts/cartStateOrId/cart-items
```

```
{
   "productId":"01t000000000000000",
   "quantity":"5",
   "type":"Product"
}
```

## Related Topics

- Cart Item Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_collection.htm)
- sObject Attributes Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_sobject_attributes_input.htm)
- Cart Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item.htm)
