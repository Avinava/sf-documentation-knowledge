---
title: "ConnectApi.CouponCodeRedemptionInput"
domain: apex-reference
topic: connectapicouponcoderedemptioninput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.029Z
keywords: [ConnectApi.CouponCodeRedemptionInput]
---

# ConnectApi.CouponCodeRedemptionInput

# ConnectApi.CouponCodeRedemptionInput

Input representation for coupon code redemption.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| buyer | String | ID of the buyer account or email address for a guest user. | Required | 60.0 |
| couponCodes | List<String> | List of coupon codes. | Required | 58.0 |
| effectiveAccountId | String | ID of the account. | Required | 58.0–59.0 |
| transactionId | String | ID of the transaction, which must be a valid cart ID. | Required | 58.0 |