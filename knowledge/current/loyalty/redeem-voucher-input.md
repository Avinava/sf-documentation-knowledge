---
title: "Redeem Voucher Input"
domain: loyalty
topic: redeem-voucher-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.995Z
estimatedTokens: 464
keywords: [Redeem, Voucher, Input, representation, redemption]
---

# Redeem Voucher Input

> Input representation for voucher redemption.

# Redeem Voucher Input

Input representation for voucher redemption.

JSON example

```

```

JSON example to redeem vouchers using contactId or accountID.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Provide contactId to redeem the voucher. If accountID is provided, then the associated contactId is fetched and the voucher is redeemed

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contactID | String | ID of the contact associated with the account. | Optional | 62.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code of the monetary currency in which the voucher is redeemed. | Optional | 55.0 |
| redeemAmount | Double | The value of the voucher to be redeemed. Specify a value when a member hasn't redeemed the full value of the voucher. This value is only applicable for vouchers issued using Fixed Value voucher definitions.A value isn't required when the member has redeemed the complete value of the voucher in a single transaction.NoteIf you don’t specify a value to be redeemed for the fixed-value voucher, the voucher status changes to Redeemed, and the remaining value becomes zero. | Optional | 53.0 |
| action | ReservationAction | The action to change the status of a voucher. Valid values are:ReserveReinstateRedeemIf you don't specify an action, the default behavior changes voucher status from Issued to Redeemed. | Required when changing the voucher status from Issued to Reserved, or from Reserved to Issued or Redeemed. Otherwise it is optional. | 62.0 |
| reservedValue | Currency | Specify the amount reserved for partially redeemable vouchers. | Optional | 62.0 |
| reservationKey | String | Specify the key used to redeem or reinstate a reserved voucher. | Optional | 62.0 |

## Code Examples

```
{ 
  "contactID": "003xx000004WjzAAAS",
  "action": "Reserve", 
  "reservationKey": "key1", 
  "reservedValue": 50.57, 
  "redeemAmount": 50.57, 
  "currencyIsoCode": "Yen" 
}
```

```
{
  "redemptionAmount": "12",
  "contactId": "003xx000004WkhEAAS",
  "accountId":"001xx000003H3NnAAK",
  "memberId": "0lMxx00000002HxEAI"
}
```
