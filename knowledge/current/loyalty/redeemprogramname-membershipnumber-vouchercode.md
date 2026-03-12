---
title: "redeem(programName, membershipNumber,
        voucherCode)"
domain: loyalty
topic: redeemprogramname-membershipnumber-vouchercode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.469Z
estimatedTokens: 203
keywords: [redeem, programName, membershipNumber, voucherCode, voucher, program, member, status, updated, redeemed, date, current, API, Version, Requires]
---

# redeem(programName, membershipNumber,
        voucherCode)

> Redeem a voucher for a program member. The status of the voucher
      gets updated to redeemed and the use date gets updated to the current date.

# redeem(programName, membershipNumber, voucherCode)

Redeem a voucher for a program member. The status of the voucher gets updated to redeemed and the use date gets updated to the current date.

## API Version

51.0

## Requires Chatter

Yes

## Signature

public static ConnectApi.RedeemVoucherOutput redeem(String programName, String membershipNumber, String voucherCode)

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

## Status Code

Returns HTTP 201 on success.
