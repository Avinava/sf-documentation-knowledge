---
title: "redeem(programName, membershipNumber,
        voucherCode, amount)"
domain: loyalty
topic: redeemprogramname-membershipnumber-vouchercode-amount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.474Z
estimatedTokens: 382
keywords: [redeem, programName, membershipNumber, voucherCode, amount, partial, voucher, program, member, status, updated, redeemed, date, current, API]
---

# redeem(programName, membershipNumber,
        voucherCode, amount)

> Redeem partial value of a voucher for a program member. The status of
      the voucher gets updated to redeemed and the use date gets updated to the current
    date.

# redeem(programName, membershipNumber, voucherCode, amount)

Redeem partial value of a voucher for a program member. The status of the voucher gets updated to redeemed and the use date gets updated to the current date.

## API Version

53.0

## Requires Chatter

Yes

## Signature

public static ConnectApi.RedeemVoucherOutput redeem(String programName, String membershipNumber, String voucherCode, ConnectApi.RedeemVoucherInput amount)

## Parameters

programName

Type: String

The loyalty program name.

membershipNumber

Type: String

The loyalty program membership number.

voucherCode

Type: String

The voucher code to redeem.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

The voucher definition associated with the voucher code must be active to redeem the voucher.

amount

Type: [ConnectApi.RedeemVoucherInput](atlas.en-us.loyalty.meta/loyalty/apex_connectapi_input_redeem_voucher.htm "Input representation to redeem amount from a voucher.")

The value of the voucher to be redeemed.

## Return Value

Type: [ConnectApi.RedeemVoucherOutput](atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_redeem_voucher_output.htm "Output representation of a voucher redemption.")

## Example

public class TestRedeemVoucher { ConnectApi.RedeemVoucherInput redeemInput = new ConnectApi.RedeemVoucherInput(); redeemInput.redeemAmount = 10.2; ConnectApi.RedeemVoucherOutput output = ConnectApi.LoyaltyVoucherConnect.redeem('DemoProgram', 'M1234', 'VC001', redeemInput); }

## Related Topics

- ConnectApi.RedeemVoucherInput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_input_redeem_voucher.htm)
- ConnectApi.RedeemVoucherOutput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_redeem_voucher_output.htm)
