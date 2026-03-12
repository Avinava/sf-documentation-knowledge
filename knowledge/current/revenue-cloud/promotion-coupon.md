---
title: "Promotion Coupon"
domain: revenue-cloud
topic: promotion-coupon
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.316Z
estimatedTokens: 139
keywords: [Promotion, Coupon, Output, representation, that's, eligible, recommended]
---

# Promotion Coupon

> Output representation of the details of a coupon that's eligible for the recommended
    promotion.

# Promotion Coupon

Output representation of the details of a coupon that's eligible for the recommended promotion.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| couponCode | String | Unique code of the coupon. | Big, 66.0 | 66.0 |
| endDateTime | String | End date and time of the coupon. | Big, 66.0 | 66.0 |
| startDateTime | String | Start date and time of the coupon. | Big, 66.0 | 66.0 |
| status | String | Status of the coupon. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "coupon": {
    "couponCode": "COUPON_002",
    "endDateTime": null,
    "startDateTime": "2025-10-08T19:00:00.000Z",
    "status": "Active"
  }
}
```
