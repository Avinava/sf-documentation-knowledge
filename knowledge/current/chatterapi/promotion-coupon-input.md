---
title: "Promotion Coupon Input"
domain: chatterapi
topic: promotion-coupon-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.586Z
estimatedTokens: 246
keywords: [Promotion, Coupon, Input, Composite]
---

# Promotion Coupon Input

> Composite promotion coupon.

# Promotion Coupon Input

Composite promotion coupon.

Root XML tag

<createPromotion>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| active | Boolean | Indicates whether the promotion coupon is active (true) or not (false). If unspecified, defaults to false. | Optional | 63.0 |
| couponCode | String | Coupon code. | Required | 63.0 |
| couponId | String | Reserved for future use. | Optional | 63.0 |
| description | String | Localized display name of the promotion coupon. | Optional | 63.0 |
| endDateTime | String | The date time the promotion coupon ends. | Optional | 63.0 |
| redemptionLimitAllBuyers | Integer | Promotion coupon redemption limit for all buyers. | Optional | 63.0 |
| redemptionLimitPerBuyer | Integer | Promotion coupon redemption limit per buyer. | Optional | 63.0 |
| startDateTime | String | The date time the promotion coupon starts. | Optional | 63.0 |

## Code Examples

```
{
  "active":true,
  "couponCode":"FALL2024",
  "description":"Fall 10 percent discount",
  "startDateTime":"2024-09-22T19:41:56.000Z",
  "endDateTime":"2019-11-30T19:41:56.000Z",
  "redemptionLimitAllBuyers":"4000",
  "redemptionLimitPerBuyer":"1"
}
```
