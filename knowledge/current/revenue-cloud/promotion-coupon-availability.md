---
title: "Promotion Coupon Availability"
domain: revenue-cloud
topic: promotion-coupon-availability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.249Z
estimatedTokens: 165
keywords: [Promotion, Coupon, Availability, Output, representation, details, coupon, that's, eligible, promotion., Additionally, specifies, reason, any, ineligibility.]
---

# Promotion Coupon Availability

> Output representation of the details of the coupon that's eligible for the promotion.
    Additionally, this representation specifies the reason for any coupon ineligibility.

# Promotion Coupon Availability

Output representation of the details of the coupon that's eligible for the promotion. Additionally, this representation specifies the reason for any coupon ineligibility.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| coupon | Promotion Coupon[] | Coupon that's eligible for the customers' cart. | Big, 66.0 | 66.0 |
| couponAvailability​Message | String | Specifies the reason for coupon ineligibility for the promotion. Valid values are:MultipleActiveCouponsNoActiveCouponsSingleActiveCouponLimitReached | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "couponDetails": {
    "coupon": {
      "couponCode": "COUPON_002",
      "endDateTime": null,
      "startDateTime": "2025-10-08T19:00:00.000Z",
      "status": "Active"
    },
    "couponAvailabilityMessage": null
  }
}
```

## Related Topics

- Promotion
                  Coupon (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_coupon_details.htm)
