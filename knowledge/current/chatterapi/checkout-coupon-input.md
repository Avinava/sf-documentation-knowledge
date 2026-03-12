---
title: "Checkout Coupon Input"
domain: chatterapi
topic: checkout-coupon-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.255Z
estimatedTokens: 139
keywords: [Checkout, Coupon, Input, associated]
---

# Checkout Coupon Input

> A coupon associated with a checkout.

# Checkout Coupon Input

A coupon associated with a checkout.

Root XML tag

checkoutCouponInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| couponCodes | String[] | A list of coupons associated with the checkout. Only a single coupon code is supported. | Required | 61.0 |

#### See Also

-   [Commerce Webstore Checkout Coupons](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_coupons.htm "Apply a coupon code to a checkout.")

## Code Examples

```
{
    "couponCodes": ["10OFFORDER"]
}
```

## Related Topics

- Commerce Webstore Checkout Coupons (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_coupons.htm)
