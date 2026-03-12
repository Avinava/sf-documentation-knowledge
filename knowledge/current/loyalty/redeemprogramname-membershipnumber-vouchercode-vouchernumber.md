---
title: "redeem(programName, membershipNumber, voucherCode, voucherNumber)"
domain: loyalty
topic: redeemprogramname-membershipnumber-vouchercode-vouchernumber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.480Z
estimatedTokens: 244
keywords: [redeem, programName, membershipNumber, voucherCode, voucherNumber, single-use, voucher, loyalty, program, member, status, updated, redeemed, date, current]
---

# redeem(programName, membershipNumber, voucherCode, voucherNumber)

> Redeem the single-use voucher for a loyalty program member. The status
      of the voucher gets updated to redeemed and the use date gets updated to the current
      date.

# redeem(programName, membershipNumber, voucherCode, voucherNumber)

Redeem the single-use voucher for a loyalty program member. The status of the voucher gets updated to redeemed and the use date gets updated to the current date.

## API Version

55.0

## Requires Chatter

No

## Signature

public static ConnectApi.RedeemVoucherOutput redeem(String programName, String membershipNumber, String voucherCode, String voucherNumber)

## Parameters

programName

Type: String

Description

membershipNumber

Type: String

Description

voucherCode

Type: String

Description

voucherNumber

Type: String

Description

## Return Value

Type: [ConnectApi.RedeemVoucherOutput](atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_redeem_voucher_output.htm "Output representation of a voucher redemption.")

## Example

public class TestRedeemVoucher { ConnectApi.RedeemVoucherOutput output = ConnectApi.LoyaltyVoucherConnect.redeem('DemoProgram', 'M1234', 'VC001', '00000006'); }

## Related Topics

- ConnectApi.RedeemVoucherOutput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_redeem_voucher_output.htm)
