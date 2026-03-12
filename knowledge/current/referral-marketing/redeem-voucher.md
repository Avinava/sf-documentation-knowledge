---
title: "Redeem Voucher"
domain: referral-marketing
topic: redeem-voucher
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.815Z
estimatedTokens: 136
keywords: [Redeem, Voucher, Output, representation, redeemed]
---

# Redeem Voucher

> Output representation of the details of a redeemed voucher.

# Redeem Voucher

Output representation of the details of a redeemed voucher.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code of the monetary currency of the voucher's remaining amount. | Small, 59.0 | 59.0 |
| remainingAmount | Double | Amount remaining after partial redemption. If the complete value of the voucher is redeemed, the remaining amount is zero. | Small, 59.0 | 59.0 |

## Code Examples

```
{
   "currencyIsoCode":"Yen",
   "remainingAmount":"10.0"
}
```
