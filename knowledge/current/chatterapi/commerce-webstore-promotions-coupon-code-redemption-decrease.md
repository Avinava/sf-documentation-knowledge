---
title: "Commerce Webstore Promotions, Coupon Code Redemption, Decrease"
domain: chatterapi
topic: commerce-webstore-promotions-coupon-code-redemption-decrease
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.808Z
estimatedTokens: 257
keywords: [Commerce, Webstore, Promotions, Coupon, Code, Redemption, Decrease, usage, revert, previously, redeemed]
---

# Commerce Webstore Promotions, Coupon Code Redemption, Decrease

> Get coupon code redemption usage to revert a previously redeemed
      coupon code.

# Commerce Webstore Promotions, Coupon Code Redemption, Decrease

Get coupon code redemption usage to revert a previously redeemed coupon code. For example, use when an item that used a coupon code is returned so that the coupon code can be reverted.

Resource

```

```

Available version

58.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Coupon Code Redemption Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_coupon_code_redemption_collection.htm "Collection of coupon code redemption results.")

## Code Examples

```
/commerce/promotions/actions/decrease-use/coupon-codes
```

```
{
 "couponCodes":["code1","code2","code3","code4"],
 "transactionId": "0a6D20000004CETIA2",
 "buyer": "001xx000003GZ6NAAW"
}
```

## Related Topics

- Coupon Code Redemption Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_coupon_code_redemption_collection.htm)
