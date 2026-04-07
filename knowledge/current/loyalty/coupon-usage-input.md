---
title: "Coupon Usage Input"
domain: loyalty
topic: coupon-usage-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:07.205Z
estimatedTokens: 226
keywords: [Coupon]
---

> Input representation of coupon usage.

# Coupon Usage Input

Input representation of coupon usage.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| couponCodeList | List<String> | The codes of the list of coupons for which the usage must be increased or decreased. | Required | 62.0 |
| activity​DateTime | DateTime | The date and time at which the customer redeemed the coupon. | Required | 62.0 |
| external​Transaction​Number | String | The externally generated unique identifier of cart for which the customer redeemed the coupon. This ID must be the same in both the decrease and increase usage APIs so that the API can correctly track coupon usage for the originating transaction. | Required | 62.0 |
| customerId | String | The ID of either the contact, the account, or the loyalty program member who redeemed the coupon. | Required | 62.0 |

## Code Examples

```
{
  "couponCodeList": [
    "QWERTY",
    "ABCD"
  ],
  "activityDateTime": "2024-10-05T12:45:19Z",
  "externalTransactionNumber": "0lVxx000000006T",
  "customerId": "0lMxx0000000001"
}
```
