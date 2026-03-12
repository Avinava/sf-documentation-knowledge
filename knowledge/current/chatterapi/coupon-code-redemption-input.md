---
title: "Coupon Code Redemption Input"
domain: chatterapi
topic: coupon-code-redemption-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.428Z
estimatedTokens: 141
keywords: [Coupon, Code, Redemption, Input, representation]
---

# Coupon Code Redemption Input

> Input representation for coupon code redemption.

# Coupon Code Redemption Input

Input representation for coupon code redemption.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| buyer | String | ID of the buyer account or email address for a guest user. | Required | 60.0 |
| couponCodes | String | List of coupon codes. | Required | 58.0 |
| effectiveAccountId | String | ID of the account. | Required | 58.0–59.0 |
| transactionId | String | ID of the transaction, which must be a valid cart ID. | Required | 58.0 |

## Code Examples

```
{
 "couponCodes":["code1","code2","code3","code4"],
 "transactionId": "0a6D20000004CETIA2",
 "buyer": "001xx000003GZ6NAAW"
}
```
