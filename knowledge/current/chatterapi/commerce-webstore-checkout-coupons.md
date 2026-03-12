---
title: "Commerce Webstore Checkout Coupons"
domain: chatterapi
topic: commerce-webstore-checkout-coupons
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.360Z
estimatedTokens: 495
keywords: [Commerce, Webstore, Checkout, Coupons, Apply, coupon, code]
---

# Commerce Webstore Checkout Coupons

> Apply a coupon code to a checkout.

# Commerce Webstore Checkout Coupons

Apply a coupon code to a checkout.

To use the Commerce Webstore Checkout Coupon resources, your store must have the Cart Calculate API enabled. See [Enable and Disable the Cart Calculate API for a Webstore](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/cart-calculate-api.html#enable-and-disable-the-cart-calculate-api-for-a-webstore).

Resource

```

```

Available version

61.0 - 62.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 63.0 and later, use [Commerce Webstore Cart Coupons](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_carts_cart_coupons.htm) instead.

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| couponCodes | Checkout Coupon[] | A list of coupons associated with the checkout. Only a single coupon code is supported. | Required | 61.0 |
| effectiveAccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 61.0 |

Request body for POST

Root XML tag

checkoutCouponInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| couponCodes | String[] | A list of coupons associated with the checkout. Only a single coupon code is supported. | Required | 61.0 |

Response body for POST

[Checkout Coupon](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_coupon.htm "Coupon associated with a checkout.")

#### See Also

-   [Commerce Webstore Checkout Coupon, Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_coupon_delete.htm "Delete a coupon from a checkout.")

## Code Examples

```
/commerce/webstores/${webstoreId}/checkouts/${activeOrCheckoutId}/coupons
```

```
{
    "couponCodes": ["10OFFORDER"]
}
```

## Related Topics

- Checkout Coupon (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_coupon_input.htm)
- Checkout
              Coupon (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_coupon.htm)
- Commerce Webstore Checkout Coupon, Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_coupon_delete.htm)
