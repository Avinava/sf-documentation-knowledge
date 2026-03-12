---
title: "Coupon Usage Decrease (POST)"
domain: loyalty
topic: coupon-usage-decrease-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.047Z
estimatedTokens: 306
keywords: [Coupon, Usage, Decrease, POST, count, coupons]
---

# Coupon Usage Decrease (POST)

> Decrease the usage count of a list of coupons.

# Coupon Usage Decrease (POST)

Decrease the usage count of a list of coupons.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| couponCodeList | List<String> | The codes of the list of coupons for which the usage must be increased or decreased. | Required | 62.0 |
| activityDateTime | DateTime | The date and time at which the customer redeemed the coupon. | Required | 62.0 |
| externalTransactionNumber | String | The externally generated unique identifier of cart for which the customer redeemed the coupon. This ID must be the same in both the decrease and increase usage APIs so that the API can correctly track coupon usage for the originating transaction. | Required | 62.0 |
| customerId | String | The ID of either the contact, the account, or the loyalty program member who redeemed the coupon. | Required | 62.0 |

Response body for POST

[Coupon Usage](atlas.en-us.loyalty.meta/loyalty/connect_responses_couponusage.htm "Represents the response for coupon usage increase and decrease POST method.")

## Code Examples

```apex
/global-promotions-management/coupons/usage-decrease
```

```apex
https://yourInstance.salesforce.com/services/data/v66.0/global-promotions-management/coupons/usage-decrease
```

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

## Related Topics

- Coupon Usage (atlas.en-us.loyalty.meta/loyalty/connect_responses_couponusage.htm)
