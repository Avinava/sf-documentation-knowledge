---
title: "Cart Coupon"
domain: chatterapi
topic: cart-coupon
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.497Z
estimatedTokens: 215
keywords: [Cart, Coupon]
---

# Cart Coupon

> Cart coupon.

# Cart Coupon

Cart coupon.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartCouponId | String | ID of the cart coupon code. | Small, 54.0 | 54.0 |
| couponCode | String | The coupon code a buyer can use to manually apply a promotion to the cart. | Small, 54.0 | 54.0 |
| customFields | sObject[] | An array of sObjects and their associated custom fields. Standard fields are ignored. The custom fields must already be defined for the sObject. Currently, only the WebCart and WebCartAdjustmentBasis sObjects is supported. Field-level security rules configured by the web store admin in the shopper profileshopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "cartCouponId": "4r0xx00000001XBEAY",
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
