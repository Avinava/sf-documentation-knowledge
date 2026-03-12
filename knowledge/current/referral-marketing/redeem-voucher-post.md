---
title: "Redeem Voucher (POST)"
domain: referral-marketing
topic: redeem-voucher-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.796Z
estimatedTokens: 461
keywords: [Redeem, Voucher, POST, advocate, their, referred, friend]
---

# Redeem Voucher (POST)

> Redeem a voucher for an advocate or their referred friend.

# Redeem Voucher (POST)

Redeem a voucher for an advocate or their referred friend.

Resource

```

```

Resource example

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON examples

JSON request to redeem a voucher for an advocate

```

```

JSON request to redeem a voucher for a referred friend

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contactId | String | Contact ID of the referred friend for whom the voucher is redeemed. | Required only for a referral. | 59.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code of the monetary currency in which the voucher must be redeemed. | OptionalThis field is required if your Salesforce org supports multiple currencies. | 59.0 |
| memberId | String | Loyalty Program Member ID of the advocate for whom the voucher is redeemed. | Required only for an advocate.This field is optional if you provide the membership number of the advocate. | 59.0 |
| membershipNumber | String | Unique number of the advocate for whom the voucher is redeemed. | Required only for an advocate.This field is optional if you provide the member ID of the advocate. | 59.0 |
| programName | String | Name of the referral program to which the voucher belongs. | OptionalThis field is required when you provide the membership number of the advocate. | 59.0 |
| redemptionAmount | Double | Amount to be redeemed.A value isn't required when you want to redeem the complete value of the voucher in a single transaction. | Optional | 59.0 |

Response body for POST

[Industries Redeem Voucher](atlas.en-us.referral_marketing.meta/referral_marketing/connect_responses_industries_redeem_voucher_output.htm "Output representation of the details of a redeemed voucher.")

## Code Examples

```
/vouchers/${voucherCode}/redemption
```

```
https://yourInstance.salesforce.com/services/data/v66.0/vouchers/VC001/redemption
```

```
{
  "currencyIsoCode": "Yen",
  "programName": "ReferAFriend",
  "redemptionAmount": "12",
  "memberId": "0lMxx00000001grEAA"
}
```

```
{
  "currencyIsoCode": "Yen",
  "programName": "ReferAFriend",
  "redemptionAmount": "10",
  "contactId": "003xx000004WkhEAAS"
}
```

## Related Topics

- Industries Redeem Voucher (atlas.en-us.referral_marketing.meta/referral_marketing/connect_responses_industries_redeem_voucher_output.htm)
