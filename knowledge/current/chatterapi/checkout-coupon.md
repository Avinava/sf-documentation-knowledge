---
title: "Checkout Coupon"
domain: chatterapi
topic: checkout-coupon
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.666Z
estimatedTokens: 149
keywords: [Checkout, Coupon, associated]
---

# Checkout Coupon

> Coupon associated with a checkout.

# Checkout Coupon

Coupon associated with a checkout.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartCouponIds | String[] | List of IDs of checkout coupon codes. Only a single coupon code is supported. | Small, 61.0 | 61.0 |
| errors | Checkout Error[] | List of errors during a Commerce store checkout, if any. | Small, 61.0 | 61.0 |

#### See Also

-   [Commerce Webstore Checkout Coupons](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_coupons.htm "Apply a coupon code to a checkout.")

## Related Topics

- Checkout Error (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_error.htm)
- Commerce Webstore Checkout Coupons (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_coupons.htm)
