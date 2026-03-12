---
title: "Vouchers List"
domain: loyalty
topic: vouchers-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.756Z
estimatedTokens: 107
keywords: [Vouchers, Output, representation, associated, loyalty, program, member]
---

# Vouchers List

> Output representation of the list of vouchers associated with the
      loyalty program member.

# Vouchers List

Output representation of the list of vouchers associated with the loyalty program member.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| voucherCount | Integer | The number of vouchers returned by the API request. | Small, 58.0 | 58.0 |
| vouchers | Voucher | The details of the vouchers. | Small, 58.0 | 58.0 |

## Code Examples

```
{
  "voucherCount": 6,
  "vouchers": [
    {
      "effectiveDate": "2020-11-01",
      "effectiveDateTime":"2020-11-01T07:47:44.000Z",
      "expirationDate": "2021-11-01",
      "expirationDateTime":"2021-11-01T07:33:00.000Z",
      "faceValue": 100,
      "isVoucherDefinitionActive": true,
      "isVoucherPartiallyRedeemable": false,
      "hasTimeBasedVoucherPeriod": true,
      "redeemedValue": 0,
      "remainingValue": 100,
      "status": "Expired",
      "type": "FixedValue",
      "voucherCode": "J4XN26MT",
      "voucherDefinition": "Ajio",
      "voucherId": "0kDT1000000TUwsMAG",
      "voucherNumber": "00005852"
    },
    {
      "effectiveDate": "2020-11-01",
      "expirationDate": "2021-11-01",
      "faceValue": 100,
      "isVoucherDefinitionActive": true,
      "isVoucherPartiallyRedeemable": false,
      "hasTimeBasedVoucherPeriod": false,
      "redeemedValue": 0,
      "remainingValue": 100,
      "status": "Expired",
      "type": "FixedValue",
      "voucherCode": "6PM01LT8",
      "voucherDefinition": "Ajio",
      "voucherId": "0kDT1000000TUjEMAW",
      "voucherNumber": "00005006"
    },
    {
      "effectiveDate": "2020-11-01",
      "expirationDate": "2021-11-01",
      "faceValue": 100,
      "isVoucherDefinitionActive": true,
      "isVoucherPartiallyRedeemable": false,
      "hasTimeBasedVoucherPeriod": false,
      "redeemedValue": 0,
      "remainingValue": 100,
      "status": "Expired",
      "type": "FixedValue",
      "voucherCode": "LEEFAQGE",
      "voucherDefinition": "Ajio",
      "voucherId": "0kDT1000000TUQcMAO",
      "voucherNumber": "00003852"
    },
    {
      "effectiveDate": "2020-11-01",
      "expirationDate": "2021-11-01",
      "faceValue": 100,
      "isVoucherDefinitionActive": true,
      "isVoucherPartiallyRedeemable": false,
      "hasTimeBasedVoucherPeriod": false,
      "redeemedValue": 0,
      "remainingValue": 100,
      "status": "Expired",
      "type": "FixedValue",
      "voucherCode": "9WOYZK2G",
      "voucherDefinition": "Ajio",
      "voucherId": "0kDT1000000TUCyMAO",
      "voucherNumber": "00003006"
    },
    {
      "effectiveDate": "2020-11-01",
      "expirationDate": "2021-11-01",
      "faceValue": 100,
      "isVoucherDefinitionActive": true,
      "isVoucherPartiallyRedeemable": false,
      "hasTimeBasedVoucherPeriod": false,
      "redeemedValue": 0,
      "remainingValue": 100,
      "status": "Expired",
      "type": "FixedValue",
      "voucherCode": "6PLO64G1",
      "voucherDefinition": "Ajio",
      "voucherId": "0kDT1000000TU6yMAG",
      "voucherNumber": "00002634"
    },
    {
      "effectiveDate": "2020-11-01",
      "expirationDate": "2021-11-01",
      "faceValue": 100,
      "isVoucherDefinitionActive": true,
      "isVoucherPartiallyRedeemable": false,
      "hasTimeBasedVoucherPeriod": false,
      "redeemedValue": 0,
      "remainingValue": 100,
      "status": "Expired",
      "type": "FixedValue",
      "voucherCode": "K54Y02BK",
      "voucherDefinition": "Ajio",
      "voucherId": "0kDT1000000TTuKMAW",
      "voucherNumber": "00001850"
    }
  ]
}
```

## Related Topics

- Voucher (atlas.en-us.loyalty.meta/loyalty/connect_responses_voucher.htm)
