---
title: "Redeem Voucher Input"
domain: referral-marketing
topic: redeem-voucher-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.752Z
estimatedTokens: 379
keywords: [Redeem, Voucher, Input, representation, advocate, their, referred, friend]
---

# Redeem Voucher Input

> Input representation of the request to redeem a voucher for an advocate or their referred
    friend.

# Redeem Voucher Input

Input representation of the request to redeem a voucher for an advocate or their referred friend.

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

## Code Examples

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
