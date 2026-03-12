---
title: "Commerce Webstore Cart Coupons"
domain: chatterapi
topic: commerce-webstore-cart-coupons
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.302Z
estimatedTokens: 554
keywords: [Commerce, Webstore, Cart, Coupons, associated, apply, coupon, code]
---

# Commerce Webstore Cart Coupons

> Get coupons associated with a cart, and apply a coupon code to a cart.

# Commerce Webstore Cart Coupons

Get coupons associated with a cart, and apply a coupon code to a cart.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

Resource

```

```

Values for cartStateOrId are:

-   cartId—ID of the cart.
-   active—Active cart. This value should only be used for authenticated users.
-   current—Cart that isn’t closed or pending deletion. Available in version 50.0 and later.

Available version

54.0

HTTP methods

GET, POST

In API version 63.0 and later, if your store has [simplified cart cleanup](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-cart-cleanup.htm) enabled, a POST request can apply a coupon to a cart without canceling checkout.

Request parameters for GET and POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Currency ISO code of the cart. | Optional | 57.0 |
| effectiveAccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 54.0 |

Request body for POST

Root XML tag

<cartCouponInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| couponCode | String | Coupon code. | Required | 54.0 |
| customFields | sObject Attributes Input[] | An array of sObjects and their associated custom fields. Standard fields are ignored. The custom fields must already be defined for the sObject. Currently, only the WebCart and WebCartAdjustmentBasis sObjects is supported. Field-level security rules configured by the web store admin in the shopper profileshopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. | Optional | 63.0 |

Response body for GET and POST

[Cart Coupon Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_coupon_collection.htm "Collection of coupons associated with the cart.")

## Code Examples

```
/commerce/webstores/webstoreId/carts/cartStateOrId/cart-coupons
```

```
{
  "couponCode": "COUP10",
  "customFields": [
    {
      "attributes": {
        "type": "WebCartAdjustmentBasis"
      },
      "Test__C": "test@salesforce.com"
    }
  ]
}
```

## Related Topics

- sObject
                        Attributes Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_sobject_attributes_input.htm)
- Cart Coupon Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_coupon_collection.htm)
