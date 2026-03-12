---
title: "Redeem Voucher"
domain: loyalty
topic: redeem-voucher
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.192Z
estimatedTokens: 1101
keywords: [Redeem, Voucher, loyalty, program, member, status, updated, redeemed, date, current]
---

# Redeem Voucher

> Redeem a voucher for a loyalty program member. The status of the
      voucher gets updated to redeemed and the use date gets updated to the current
    date.

# Redeem Voucher

Redeem a voucher for a loyalty program member. The status of the voucher gets updated to redeemed and the use date gets updated to the current date.

Resource

```

```

Examples

```

```

```

```

Available version

51.0

Requires Chatter

No

HTTP methods

POST

Parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| membershipNumber | String | The loyalty program membership number. | Required | 51.0 |
| programName | String | The loyalty program name. | Required | 51.0 |
| voucherCode | String | The voucher code to be redeemed.NoteThe voucher definition associated with the voucher code must be active to redeem the voucher. | Required | 51.0 |
| voucherNumber | String | The auto-generated voucher number.NoteUse this query parameter if multiple vouchers exist with the same voucher code. | Optional | 55.0 |

Request body for POST

The request body is available in version 53.0 and later.

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

Response body for POST

[Redeem Voucher Output](atlas.en-us.loyalty.meta/loyalty/connect_responses_redeem_voucher_output.htm "Represents the response for the redeem voucher POST method.") (available in version 53.0 and later)

This table lists HTTP response code descriptions that are unique to this resource.

| HTTP Response Code | Error Code | Description |
| --- | --- | --- |
| 400 | INVALID_API_INPUT | The voucher is expired. Specify a voucher that hasn’t expired. |
| 400 | INVALID_API_INPUT | The voucher is canceled. Specify a voucher that hasn’t canceled. |
| 400 | INVALID_API_INPUT | Specify a valid voucher code and try again. |
| 400 | INVALID_API_INPUT | Specify a valid loyalty program name and try again. |
| 400 | INVALID_API_INPUT | Specify a valid loyalty program membership number and try again. |
| 400 | INVALID_API_INPUT | The voucher definition is inactive. Specify a voucher that’s associated with an active voucher definition. |
| 409 | ALREADY_REDEEMED_VOUCHER | The voucher is redeemed. Specify a voucher that hasn’t redeemed. |
| 500 | MULTIPLE_VOUCHERS | Duplicate vouchers for this voucher code. Either specify a different voucher code or ask your Salesforce admin for help. |
| 500 | UNKOWN_EXCEPTION | The voucher redemption failed. Try again or ask your Salesforce admin for help. |

#### See Also

-   [*Connect REST API Developer Guide*: Status Codes and Error Responses](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_error_responses.htm "Connect REST API Developer Guide: Status Codes and Error
    Responses - HTML (New Window)")

## Code Examples

```
/services/data/vXX.X/loyalty/programs/${programName}/members/${membershipNumber}/vouchers/${voucherCode}/redeem
```

```
https://yourInstance.salesforce.com/services/data/vXX.X
/loyalty/programs/DemoProgram/members/M1234/vouchers/VC001/redeem
```

```
https://yourInstance.salesforce.com/services/data/vXX.X
/loyalty/programs/DemoProgram/members/M1234/vouchers/VC001/redeem?voucherNumber=00000006
```

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

## Related Topics

- Redeem Voucher
              Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_redeem_voucher_output.htm)
