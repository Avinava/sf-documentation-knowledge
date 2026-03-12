---
title: "Redeem Voucher Output"
domain: loyalty
topic: redeem-voucher-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.644Z
estimatedTokens: 244
keywords: [Redeem, Voucher, Output, POST]
---

# Redeem Voucher Output

> Represents the response for the redeem voucher POST
    method.

# Redeem Voucher Output

Represents the response for the redeem voucher POST method.

Sample Response: Reserve

```

```

Sample Response: Reinstate - Reserved to Issued

```

```

Sample Response: Reinstate - Reserved to Expired

```

```

Sample Response: Redeem

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| remainingAmount | Double | The voucher value after redemption.NoteIf the complete value of the voucher is redeemed, the remaining amount is zero. | Small, 53.0 | 53.0 |
| currencyIsoCode | String | The ISO code of the currency. | Small, 53.0 | 53.0 |
| status | VoucherStatus (Enum) | Specifies the status of the voucher. | Small, 62.0 | 62.0 |
| reservationKey | String | Specifies the key used to redeem or reinstate a reserved voucher. | Small, 62.0 | 62.0 |
| reservedValue | Currency | Specifies the amount reserved for partially redeemable vouchers. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "reservationKey": "key1",
  "reservedValue": 16.34,
  "status": "Reserved"
  "currencyIsoCode": "EUR"
}
```

```
{
  "remainingAmount": 98.32,
  "status": "Issued"
}
```

```
{
  "status": "Expired"
}
```

```
{
  "remainingAmount": 98.32,
  "status": "Redeemed",
  "currencyIsoCode": "EUR"
}
```
