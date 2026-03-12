---
title: "Coupon Usage Result"
domain: loyalty
topic: coupon-usage-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.337Z
estimatedTokens: 285
keywords: [Coupon, Usage, Result, increase, decrease, POST]
---

# Coupon Usage Result

> Represents the response for coupon usage increase and decrease POST
        method.

# Coupon Usage Result

Represents the response for coupon usage increase and decrease POST method.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| couponCode | String | The code of the coupon for which usage has been increased or decreased. | Small, 62.0 | 62.0 |
| redemptionLimit | Integer | The total number of times customers can redeem the coupon. | Small, 62.0 | 62.0 |
| remainingRedemptionCount | Integer | The remaining number of times the coupon can be redeemed. | Small, 62.0 | 62.0 |
| redemptionLimitPerCustomer | Integer | The total number of times each customer can redeem the coupon. | Small, 62.0 | 62.0 |
| remainingRedemptionCountForCustomer | Integer | The remaining number of times the specified customer can redeem the coupon. | Small, 62.0 | 62.0 |
| isSuccess | Boolean | Indicates whether the usage of the coupon was successfully increased or decreased. | Small, 62.0 | 62.0 |
| errorMessage | String | The error message that contains the details of the why the coupon usage wasn’t updated. | Small, 62.0 | 62.0 |

## Code Examples

```
[
  {
    "couponCode": "QWERTY",
    "isSuccess": true,
    "redemptionLimit": 10,
    "redemptionLimitPerCustomer": 3,
    "remainingRedemptionCount": 6,
    "remainingRedemptionCountForCustomer": 1
  },
  {
    "couponCode": "ABCD",
    "errorMessage": "Coupon code doesn't exist.",
    "isSuccess": false
  }
]
```
