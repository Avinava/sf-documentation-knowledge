---
title: "Promotion Coupon Availability"
domain: loyalty
topic: promotion-coupon-availability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.635Z
estimatedTokens: 186
keywords: [Promotion, Coupon, Availability, Output, representation]
---

# Promotion Coupon Availability

> Output representation of the promotion coupon availability.

# Promotion Coupon Availability

Output representation of the promotion coupon availability.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| coupon | Promotion Coupon | Details of the coupon that is eligible for the promotion. | Small, 60.0 | 60.0 |
| couponAvailablityMessage | String | Specifies reasons for coupon ineligibility for the promotion. Possible values are:MultipleActiveCoupons: Multiple active coupons that are eligible for the cart on the activity date.NoActiveCoupon: No coupons are active on the cart activity dateSingleActiveLimitReached: Only one coupon is active on the cart activity date but it has reached its usage limit. | Small, 60.0 | 60.0 |

## Related Topics

- Promotion Coupon (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotioncoupon.htm)
